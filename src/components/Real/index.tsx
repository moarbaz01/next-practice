"use client";
import useSocket from "@/hooks/useSocket";

const Real = () => {
  console.log("GA ID", process.env.NEXT_PUBLIC_GA_ID);
  const { socket, data } = useSocket();
  return <div>Data : {JSON.stringify(data)}</div>;
};

export default Real;
