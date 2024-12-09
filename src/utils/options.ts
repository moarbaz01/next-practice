import {  AuthOptions, RequestInternal } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface UserType {
  name: string;
  age: number;
  password: string;
  id: string;
}

export const authOptions : AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { type: "text", label: "Username" },
        password: { type: "password", label: "Password" },
      },
      async authorize(
        credentials: { username: string; password: string } | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<UserType | null> {
        const user: UserType = {
          name: "Arbaz",
          age: 12,
          password: "123456",
          id: "1",
        };
        if (credentials?.password !== "123456") {
          return null;
        }
        return user;
      },
    }),
  ],
 
};
