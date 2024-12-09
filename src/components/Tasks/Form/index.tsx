"use client";
import { useState } from "react";

interface FormDataInterface {
  title: string;
  desc: string;
  tags: string[];
  due: Date;
}

const Form = () => {
  const [data, setData] = useState<FormDataInterface>({
    title: "",
    desc: "",
    tags: [],
    due: new Date(),
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.title) {
      alert("Title is required!");
      return;
    }

    if (!data.due) {
      alert("Due Date is required!");
      return;
    }

    console.log("Data : ", data);
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-1/2 flex-col gap-4">
      <label htmlFor="title">Title</label>
      <input
        className="h-12 px-4 border-2 border-gray-300 rounded-md"
        name="title"
        placeholder="title"
        onChange={changeHandler}
      />
      <label htmlFor="desc">Description</label>
      <input
        className="h-12 px-4 border-2 border-gray-300 rounded-md"
        name="desc"
        placeholder="desc"
        onChange={changeHandler}
      />
      <label htmlFor="tags">Tags</label>
      <input
        className="h-12 px-4 border-2 border-gray-300 rounded-md"
        name="tags"
        placeholder="tags"
        onChange={changeHandler}
      />
      <label htmlFor="due">Due Date</label>
      <input
        className="h-12 px-4 border-2 border-gray-300 rounded-md"
        type="date"
        name="due"
        placeholder="due date"
        onChange={changeHandler}
      />
      <button
        type="submit"
        className="py-2 px-4 bg-black border-2 border-black text-white font-bold w-fit "
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
