"use client";
import { UserContext } from "@/context/UserContextApi";
import { account, ID } from "@/utils/appwrite";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Form = ({
  isOpen,
  onClose,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}) => {
  const { getUser } = useContext<any | null>(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Login
  const handleLogin = async () => {
    try {
      setLoading(true);
      await account.createEmailPasswordSession(email, password);
      toast(`${email} successfully logged in`);
      getUser();
      onClose();
    } catch (error) {
      console.log("Error found : ", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Sign Up
  const handleSignup = async () => {
    try {
      setLoading(true);
      await account.create(ID.unique(), email, password, name);
      toast(`${email} successfully signup`);
      await handleLogin();
      onClose();
    } catch (error: any) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOutSideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle Submit
  const handleSubmit = async (
    e: SyntheticEvent<HTMLFormElement | HTMLButtonElement>,
    type: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={handleOutSideClick}
      className="fixed top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-black/20 backdrop-blur-sm"
    >
      <form className="bg-slate-900 border border-white flex gap-4 flex-col justify-center rounded-md p-4 h-2/3 w-1/3">
        <h1 className="text-4xl text-white font-bold text-center">
          {type === "login" ? "Login Form" : "Sign Up Form"}
        </h1>
        {type === "signup" && (
          <>
            {" "}
            <label className="text-lg font-bold text-white" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" p-2 outline-none border text-white rounded-md border-pink-500 bg-transparent "
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}
        <label className="text-lg font-bold text-white" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className=" p-2 outline-none border text-white rounded-md border-pink-500 bg-transparent "
          disabled={loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-lg font-bold text-white" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className=" p-2 outline-none border text-white rounded-md border-pink-500 bg-transparent "
          disabled={loading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center gap-4">
          {type === "login" ? (
            <button
              disabled={loading}
              onClick={(e) => handleSubmit(e, "login")}
              className="px-6 py-2 bg-pink-500 hover:bg-pink-400 transition rounded-md text-white font-bold"
            >
              {loading ? "loading..." : "Log In"}
            </button>
          ) : (
            <button
              disabled={loading}
              onClick={(e) => handleSubmit(e, "signup")}
              className="px-6 py-2 bg-pink-500 hover:bg-pink-400 transition rounded-md text-white font-bold"
            >
              {loading ? "loading..." : "Sign Up"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
