import dynamic from "next/dynamic";

const Users = dynamic(() => import("@/components/Users"));

const Page = () => {
  return (
    <div className="py-4 px-4">
      <h1 className="text-center text-4xl font-bold mb-4">Users Data</h1>
      <Users />
    </div>
  );
};

export default Page;
