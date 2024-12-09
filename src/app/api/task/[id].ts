import { dbConnect } from "@/utils/database";
import { NextResponse } from "next/server";
import z from "zod";
import Task from "@/models/task";

const taskSchema = z.object({
  title: z.string(),
  tags: z.string().array(),
  desc: z.string(),
  due: z.date(),
  id: z.string().uuid().optional(),
  isCompleted: z.boolean().optional(),
});
// POST
export async function POST(req: Request) {
  try {
    dbConnect();
    const result = taskSchema.safeParse(await req.json());
    if (result.error) {
      return NextResponse.json(
        {
          error: result.error.name,
          message: result.error.message,
        },
        { status: 500 }
      );
    }

    const data = result.data;
    if (data) {
      console.log(data);
    }

    // Save data
    const task = await Task.create({
      ...data,
    });
    return NextResponse.json(
      {
        task,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
// PUT
export async function PUT(req: Request) {
  try {
    dbConnect();
    const id: string | null = new URL(req.url).searchParams.get("id");
    const result = taskSchema.safeParse(await req.json());
    if (result.error) {
      return NextResponse.json(
        {
          error: result.error.name,
          message: result.error.message,
        },
        { status: 500 }
      );
    }

    const data = result.data;

    // Save data
    const task = await Task.findByIdAndUpdate(
      id,
      {
        ...data,
      },
      { new: true }
    );
    return NextResponse.json(
      {
        task,
        message: "Task successfully update",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
// GET
export async function GET(req: Request) {
  try {
    dbConnect();
    const { searchParams } = new URL(req.url);
    const id: string | null = searchParams.get("id");

    // Save data
    const task = await Task.findById(id);
    return NextResponse.json(
      {
        task,
        message: "Task successfully fetched",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
// DELETE
export async function DELETE(req: Request) {
  try {
    dbConnect();
    const { searchParams } = new URL(req.url);
    const id: string | null = searchParams.get("id");

    // Save data
    await Task.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Task successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
