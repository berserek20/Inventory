import { Schema } from "mongoose";
export const AuthSchema = new Schema({
    EmpId: {
        type: String,
        required: true,
        unique: true,
        minLength: [6, "Entered Employee Id is wrong"],
    },
    Email: {
        type: String,
        unique: true,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date, //Date of Birth
        required: true,
    },
    Phone: {
        type: Number,
        required: true,
        unique: true,
        maxLength: 10,
    },
});
