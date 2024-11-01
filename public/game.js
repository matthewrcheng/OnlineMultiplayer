const socket = io();

socket.on("connect", () => {
    console.log("Connected to server");
});

socket.on("disconnect", () => {
    console.log("Disconnected from server");
});

document.addEventListener("keydown", (event) => {
    socket.emit("count", 1);
});

socket.on("total", (count) => {
    console.log(count);
    document.getElementById("count").innerHTML = count;
});