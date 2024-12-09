import { storage } from "@/utils/appwrite";
import { ID } from "appwrite";

export const uploadFile = async (file: File) => {
  try {
    const result = await storage.createFile(
      "671884dd002c09858b70",
      ID.unique(),
      file
    );
    return { result };
  } catch (error) {
    return { error };
  }
};

export const getFiles = async () => {
  try {
    const result = await storage.listFiles("671884dd002c09858b70");
    return { result };
  } catch (error) {
    return { error };
  }
};
