import express from "express";
import Notification from "../models/notification.js";

const router = express.Router();

// Obtener todas las notificaciones
router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las notificaciones" });
  }
});

// Agregar nuevas notificaciones
router.post("/", async (req, res) => {
  try {
    const newNotification = new Notification(req.body);
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la notificación" });
  }
});

export default router;
