"use client";
import { account } from "@/utils/appwrite";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserContextType {
  user: any | null;
  isUser: boolean;
  logoutUser: () => void;
  getUser: () => void;
}
const UserContext = createContext<UserContextType | null>(null);

// Create the context with a default value

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isUser, setIsUser] = useState<boolean>(false);

  const getUser = async () => {
    try {
      setUser(await account.get());
      setIsUser(true);
      toast("Sync User");
    } catch (error) {
      toast("Error in fetching user");
    }
  };

  const logoutUser = () => {
    setUser(null);
  };
  useEffect(() => {
    getUser();
  }, []);

  const value: UserContextType = { user, isUser, logoutUser, getUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
