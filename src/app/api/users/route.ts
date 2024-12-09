import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await User.find();
    return NextResponse.json(
      {
        users,
        message: "Users successfully fetched",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "errror found",
      },
      { status: 200 }
    );
  }
}
