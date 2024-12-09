import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const id: string | null = new URL(req.url).searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        {
          message: "ID not found",
        },
        { status: 404 }
      );
    }
    const user = await User.findById(id);
    return NextResponse.json(
      {
        user,
        message: "User successfully fetched",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "User successfully fetched",
      },
      { status: 200 }
    );
  }
}
