import mongoose from "mongoose";
import { EmpSchema } from "../model/EmpITSchema.js";
import dotenv from "dotenv";
import { AuthSchema } from "../model/AuthSchema.js";
dotenv.config();
const user = process.env.user;
const password = process.env.mongodbPassword;
const InventoryDB = "Inventory";
const InventoryAuthDB = "Inventoryauth";
const URI = `mongodb+srv://${user}:${password}@cluster0.xyxflmu.mongodb.net/`;
const client = await mongoose.connect(URI);
export const ITDBconnect = async function () {
    try {
        //ITDb represents employess details and the details related to IT stock alloted to them
        const ITDb = client.model(InventoryDB, EmpSchema);
        console.log(`${InventoryDB} is connected`);
        return ITDb;
    }
    catch (err) {
        console.log(err);
    }
};
export const AuthDBconnect = async function () {
    try {
        //AuthDb represents employess login details
        const AuthDB = client.model(InventoryAuthDB, AuthSchema);
        console.log(`${InventoryAuthDB} is connected`);
        return AuthDB;
    }
    catch (err) {
        console.log(err);
    }
};
