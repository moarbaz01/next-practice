"use server";
const { createServer } = require("http");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const setupSocketServer = (httpServer: any) => {
  const io = new Server(httpServer);

  io.on("connection", (socket: any) => {
    console.log("Socket connected:", socket.id);

    socket.emit("data", { name: "Arbaz" });
    socket.on("getData", (data: string) => console.log(data));

    socket.on("disconnect", () => {
      console.log("Hello");
      console.log("Disconnected:", socket.id);
    });
  });
};

app.prepare().then(() => {
  const httpServer = createServer(handler);

  setupSocketServer(httpServer);

  httpServer
    .once("error", (err: any) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
