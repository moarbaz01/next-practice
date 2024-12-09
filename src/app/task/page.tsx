import { TaskItem } from "@/components/Tasks";

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Your Tasks</h1>
      <div className="mt-4 flex flex-col gap-2">
        <TaskItem
          _id="1"
        //   isCompleted={true}
          title="Go to gym"
          due={new Date()}
        />
        <TaskItem
          _id="1"
        //   isCompleted={true}
          title="Go to gym"
          due={new Date()}
        />
        <TaskItem
          _id="1"
        //   isCompleted={tru+e}
          title="Go to gym"
          due={new Date()}
        />
      </div>
    </div>
  );
};

export default Page;
