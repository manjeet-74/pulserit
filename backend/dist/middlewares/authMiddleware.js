"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminOrCoordinator = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token)
        return res.status(401).json({ msg: "unauthorized" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(401).json({ msg: "invalid or expired token" });
    }
};
exports.authenticate = authenticate;
const isAdminOrCoordinator = (req, res, next) => {
    const { role } = req.user || {};
    if (role === "admin" || role === "coordinator") {
        next();
    }
    else {
        return res.status(403).json({ message: "Permission denied" });
    }
};
exports.isAdminOrCoordinator = isAdminOrCoordinator;
