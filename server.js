const express = require("express");
const http = require("http");
const { totalmem } = require("os");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
totalCount = 0;

app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

    socket.on("count", (count) => {
        totalCount++;
        console.log("Server count: " + totalCount);
        io.emit("total", totalCount);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));