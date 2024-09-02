import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { AuthDBconnect } from "../databse/database.js";
dotenv.config();
const SecretMessg = process.env.SecretMessg || "";
const saltRound = 10;
const AuthDb = await AuthDBconnect();
const maxAge = 3 * 24 * 60 * 60;
const CreateToken = (id) => {
    return jwt.sign({ id }, SecretMessg, { expiresIn: maxAge });
};
export const AuthInventory = async (req, res) => {
    const response = await AuthDb?.find();
    console.log("Auth", response);
    res.send(response);
};
export const SignUp = async (req, res) => {
    const empId = req.query.empId;
    const password = req.query.password;
    const email = req.query.email;
    const DOB = req.query.DOB;
    const phone = req.query.phone;
    const role = req.query.role;
    const salt = await bcrypt.genSalt(saltRound);
    console.log(password?.length);
    //   if (password?.length != undefined && password?.length > 6) {
    //     password = await bcrypt.hash(password, salt);
    //     const user = await AuthDb?.insertMany({
    //       EmpId: empId,
    //       Email: email,
    //       Password: password,
    //       DOB: DOB,
    //       Phone: phone,
    //     });
    //     console.log(user);
    //   }
};
export const Login = async (req, res) => {
    const empId = req.query.empId?.toString() || "";
    const email = req.query.email;
    const password = req.query.password;
    const user = await AuthDb?.findOne({ EmpId: empId });
    if (user) {
        const token = CreateToken(empId);
        console.log(token, " \n user", user);
    }
};
