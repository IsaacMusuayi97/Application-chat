const app = require("./app");
const http = require("http");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let users = [];

io.on("connection", (socket) => {
  socket.on("addUser", (getUserId) => {
    let socketId = socket.id;
    if (users.length < 1) {
      users.push({ socketId, getUserId });
    } else {
      if (!users.some((user) => user.getUserId === getUserId)) {
        users.push({ socketId, getUserId });
      } else {
        users.map(user => {
            if(user.getUserId === getUserId) {
                user.socketId = socket.id
            }
        })
      }
    }
  });

  socket.on("sendMessages", (data) => {
    const user = users.find(user => user.getUserId === data.userReceiver)
    if(user) {
        io.to(user.socketId).emit("msg-received", data)
    }
  })
  
});
server.listen(port, console.log("connection successfully"));
