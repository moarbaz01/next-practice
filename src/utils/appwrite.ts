import { Client, Account, Storage } from "appwrite";

export const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67175bf10020e3837eac"); // Replace with your project ID

export const storage = new Storage(client);
export const account = new Account(client);
export { ID } from "appwrite";
