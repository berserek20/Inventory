import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { AuthDBconnect } from "../databse/database.js";
dotenv.config();

const SecretMessg = process.env.SecretMessg || "";
const saltRound = 10;

const AuthDb = await AuthDBconnect();
const maxAge = 3 * 24 * 60 * 60;
const CreateToken = (id: string) => {
  return jwt.sign({ id }, SecretMessg, { expiresIn: maxAge });
};
export const AuthInventory = async (req: Request, res: Response) => {
  const response = await AuthDb?.find();
  console.log("Auth", response);
  res.send(response);
};
export const SignUp = async (req: Request, res: Response) => {
  const empId = req.params.empId || "EMPH10294";
  const password = req.params.password || "helloKitty@1";
  const email = req.params.email || "sagar.pant@emoha.com";
  const phone = parseInt(req.params.phone) || 1234567890;

  const salt = await bcrypt.genSalt(saltRound);
  if (password?.length > 6) {
    const HashedPassword = await bcrypt.hash(password, salt);
    const user = await AuthDb?.insertMany({
      EmpId: empId,
      Email: email,
      Password: HashedPassword,
      Phone: phone,
    });
    console.log(user); //Remove it

    const token = CreateToken(empId);
    res.cookie(token, maxAge);

    console.log(token, " \n user", user); //Remove it
  }
};
export const Login = async (req: Request, res: Response) => {
  const empId = req.params.empId?.toString() || "";
  const email = req.params.email;
  const password = req.params.password;

  const user = await AuthDb?.findOne({ EmpId: empId });

  if (user) {
    const token = CreateToken(empId);

    console.log(token, " \n user", user);
  }
};
