import User from "@/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email("Email is invalid"),
  password: z.string().min(6, "Min 6 characters are required"),
});
export async function POST(req: Request) {
  try {
    const result = UserSchema.safeParse(await req.json());
    if (result.error) {
      return NextResponse.json({
        error: result.error.name,
        message: result.error.message,
      });
    }
    const { name, email, password } = result.data;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return NextResponse.json({
        message: "User is already registered",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    return NextResponse.json(
      {
        user,
        message: "User successfully registered",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal error", error },
      { status: 500 }
    );
  }
}
