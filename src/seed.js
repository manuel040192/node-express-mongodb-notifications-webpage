import mongoose from "mongoose";
import dotenv from "dotenv";
import Notification from "./models/notification.js";

dotenv.config();

const data = [
  {
    avatar: "/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    text: "reacted to your recent post",
    postName: "My first tournament today!",
    message: "",
    image: "",
    time: "1m ago",
    read: false,
  },
  {
    avatar: "/images/avatar-angela-gray.webp",
    name: "Angela Gray",
    text: "followed you",
    postName: "",
    groupName: "",
    message: "",
    image: "",
    time: "5m ago",
    read: false,
  },
  {
    avatar: "/images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    text: "has joined your group",
    groupName: "Chess Club",
    message: "",
    image: "",
    time: "1 day ago",
    read: false,
  },
  {
    avatar: "/images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    text: "sent you a private message",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    image: "",
    time: "5 days ago",
    read: true,
  },
  {
    avatar: "/images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    text: "commented on your picture",
    image: "/images/image-chess.webp",
    time: "1 week ago",
    read: true,
  },
  {
    avatar: "/images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    text: "reacted to your recent post",
    postName: "5 end-game strategies to increase your win rate",
    message: "",
    image: "",
    time: "2 weeks ago",
    read: true,
  },
  {
    avatar: "/images/avatar-anna-kim.webp",
    name: "Anna Kim",
    text: "left the group",
    groupName: "Chess Club",
    message: "",
    image: "",
    time: "2 weeks ago",
    read: true,
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Notification.deleteMany(); // Borra datos previos
    await Notification.insertMany(data);
    console.log("Datos insertados");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
