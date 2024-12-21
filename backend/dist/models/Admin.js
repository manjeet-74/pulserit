"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserBase_1 = __importDefault(require("./UserBase"));
const AdminSchema = new mongoose_1.Schema({
    usn: { type: String, required: true }
});
const Admin = UserBase_1.default.discriminator("Admin", AdminSchema);
exports.default = Admin;
