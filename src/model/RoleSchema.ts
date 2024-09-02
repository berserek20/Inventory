import { Schema } from "mongoose";

export const AuthSchema = new Schema({
  EmpId: {
    type: String,
    required: true,
    unique: true,
    minLength: [7, "Entered Employee Id is wrong"],
    maxLength: [7, "Entered Employee Id is wrong"],
  },
  Role: {
    type: String,
    enum: ["HR", "admin", "IT admin", "employee", "Finance"],
    required: true,
  },
});
