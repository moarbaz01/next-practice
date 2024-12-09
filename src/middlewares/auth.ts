import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import User from "@/models/user";
export default async function isVerifiedUser() {
  try {
    const session = await getServerSession();
    if (session && session.user?.email) {
      const user = await User.findOne({ email: session.user?.email });
      if (!user) {
        return NextResponse.json(
          {
            message: "User is not found",
          },
          { status: 404 }
        );
      }
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
