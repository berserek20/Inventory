import { ITDBconnect } from "../databse/database.js";
const ITDb = await ITDBconnect();
export async function ReadCompInventory(req, res) {
    const response = await ITDb?.find();
    console.log(response);
    res.send(response);
}
