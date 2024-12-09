"use client";

import { useState } from "react";

interface TaskItemProps {
  title: string;
  _id: string;
  due: Date;
  isCompleted?: boolean;
  image?: string;
  desc?: string;
}
const TaskItem: React.FC<TaskItemProps> = ({
  title,
  due,
  desc,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div
      onClick={() => setIsCompleted((prev) => !prev)}
      className={`relative shadow-sm rounded-md py-2 px-4 ${
        isCompleted ? "bg-gray-200" : "bg-gray-100 "
      }`}
    >
      <div className="flex items-center gap-4">
        <input type="radio" />
        <div className="flex-col flex gap-1 ">
          <p className="text-lg font-bold">{title}</p>
          {desc && <p className="truncate text-sm text-gray-500">{desc}</p>}
          <p className="text-xs">{due.toString()}</p>
        </div>
      </div>
      {isCompleted && (
        <div className="absolute w-full top-0 left-0 px-2 bottom-0 right-0 flex items-center justify-center">
          <div className="bg-gray-500 h-[1px] w-full"></div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
