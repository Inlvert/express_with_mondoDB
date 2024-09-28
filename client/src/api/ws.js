import { io } from "socket.io-client";
import CONSTANT from "../constants";
import { addMessage } from "../redux/slices/messageSlice";
import store from "../redux";

const socket = io(CONSTANT.WS_SERVER_URL);

// відправка данних нового повідомлення на бек
export const sendMessage = (newMessageData) => {
  socket.emit("newMessage", newMessageData);
}

// записать нове повідомлення
socket.on("newMessage", (newMessage) => {
  store.dispatch(addMessage(newMessage));
});


