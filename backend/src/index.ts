import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/db";
import authRoutes from "./routes/authRoutes";



dotenv.config();
const app = express();
app.use(cors())
const PORT = 3000;

app.use(express.json());
connectDB();
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Hello, TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;