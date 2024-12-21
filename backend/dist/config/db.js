"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../../.env.local" });
console.log("MONGO_URL:", process.env.MONGO_URL);
let isConnected = false; // Track connection status
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        if (isConnected) {
            console.log("MongoDB is already connected");
            return;
        }
        try {
            const db = yield mongoose_1.default.connect("mongodb+srv://zainal2004abidin:zainop23@rit-pulse.q3hlp.mongodb.net/pulserit");
            isConnected = db.connections[0].readyState === 1; // 1 = connected
            const connection = mongoose_1.default.connection;
            connection.on("connected", () => {
                console.log("MongoDB connected successfully");
            });
            connection.on("error", (err) => {
                console.log("MongoDB connection error. Please make sure MongoDB is running: " + err);
                process.exit(1);
            });
        }
        catch (error) {
            console.error("Error connecting to MongoDB:", error);
            process.exit(1);
        }
    });
}