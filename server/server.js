const http = require("http");
const app = require("./app.js");
const CONSTANTS = require("./constants.js");
const { Server } = require("socket.io");
const messageController = require("./controllers/messege.controller.js");

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket connencted");
  console.log(socket);

  // логика створення повідомлення в реалтайме

  socket.on("newMessage", async (newMessageData) => {
    console.log("new message received");
    console.log(newMessageData);

    const newMessage = await messageController.createMessage(newMessageData);

    io.emit("newMessage", newMessage);
  });

  // подія відключення користувача
  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

// const PORT = process.env.PORT || 5000

server.listen(CONSTANTS.PORT, () => {
  console.log(`Server started on port ${CONSTANTS.PORT}`);
});
