import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import notificationRoutes from "./routes/notifications.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: 'https://node-express-mongodb-notifications-webpage.vercel.app/',
  methods: ["GET"],
  credentials: true
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
