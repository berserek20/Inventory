import { Schema } from "mongoose";
export const EmpSchema = new Schema({
    EmpId: {
        type: String,
        required: true,
        unique: true,
        minLength: [7, "Entered Employee Id is wrong"],
        maxLength: [7, "Entered Employee Id is wrong"],
    }, //Employee ID
    Fname: { type: String, required: true }, // First names
    Lname: { type: String }, // Last name
    Designation: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        enum: ["Gurgaon", "Mumbai", "Delhi", "Punjab"],
        required: true,
    },
    LSN: {
        type: [String], //Laptop Serial Number
    },
    DOJ: {
        type: Date, // Date of Joining
        default: Date.now(),
    },
    LWD: {
        type: Date, //Last working Date
    },
    Headphones_Count: {
        type: Number,
    },
    Mouse_Count: {
        type: Number,
    },
    OA: {
        type: String, //other Accessories
    },
});
