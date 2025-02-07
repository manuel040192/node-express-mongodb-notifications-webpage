import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import notificationRoutes from "./routes/notifications.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://next-typescript-notifications-webpage.vercel.app/',
  methods: ["GET"],
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization'
})); 
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/notifications", notificationRoutes);

app.get('/', (req, res) => {
  res.send('The server is running correctly.');
});

export default app;
