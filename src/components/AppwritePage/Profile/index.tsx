"use client";
import { account } from "@/utils/appwrite";
import { useContext, useState } from "react";
import Form from "../Form";
import toast from "react-hot-toast";
import { UserContext } from "@/context/UserContextApi";

interface UserType {
  name: string;
  email: string;
}
const Profile = () => {
  const [actionType, setActionType] = useState("login");
  const { user, isUser, logoutUser } = useContext<any | null>(UserContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (type: string) => {
    setOpenModal(true);
    setActionType(type);
  };

  const logout = async () => {
    await account.deleteSession("current");
    toast("Successfully logged out");
    logoutUser();
  };
  return (
    <>
      {user ? (
        <>
          {" "}
          <h1 className="text-white inline-block mr-4 font-bold">
            {user.name}
          </h1>
          <button
            onClick={logout}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-400 transition rounded-md text-white font-bold"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => handleOpenModal("signup")}
            className="px-6 py-2 mr-4 bg-pink-500 hover:bg-pink-400 transition rounded-md text-white font-bold"
          >
            Signup
          </button>
          <button
            onClick={() => handleOpenModal("login")}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-400 transition rounded-md text-white font-bold"
          >
            Login
          </button>
        </>
      )}

      <Form
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        type={actionType}
      />
    </>
  );
};

export default Profile;
