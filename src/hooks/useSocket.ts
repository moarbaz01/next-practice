"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const [socket] = useState(() => io("http://localhost:3000"));
  const [socketId, setSocketId] = useState("");
  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    const handleConnect = () => {
      setSocketId(socket.id as string);
      console.log("Connected with socket ID:", socket.id);
    };

    const handleData = (data: { name: string }) => {
      setData(data);
      console.log("Data received:", data);
    };

    socket.emit("getData", "Hello Bhai")

    socket.on("connect", handleConnect);
    socket.on("data", handleData);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("data", handleData);
    };
  }, [socket]);

  return { socket, socketId, data };
};

export default useSocket;
