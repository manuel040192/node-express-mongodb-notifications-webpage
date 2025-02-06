import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  text: String,
  postName: String,
  groupName: String,
  message: String,
  image: String,
  time: String,
  read: Boolean,
});

const Notification = mongoose.model("Notification", NotificationSchema);
export default Notification;
