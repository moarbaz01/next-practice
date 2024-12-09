"use client";

import { useAddUserMutation, useGetUsersQuery } from "@/slices/usersApi";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { createUserEvent } from "@/lib/googleEvents";

const User = dynamic(() => import("@/components/User"));
interface UserType {
  name: string;
  id: string;
}

const Users = () => {
  const { data, isLoading, isSuccess } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [newData, setNewData] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  // Sort Data
  const sortData = useMemo<UserType[]>(() => {
    if (data && Array.isArray(data)) {
      return [...data].sort((a, b) => a.id - b.id);
    }
    return [];
  }, [data]);
  const handleAddUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await addUser({ ...newData });
    createUserEvent(newData.name);
    setIsOpen(false);
    setNewData({ id: "", name: "" });
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className="mt-4 grid lg:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-1">
        {
          <div className="flex cursor-pointer items-center justify-center border gap-2 ">
            <div
              onClick={() => setIsOpen(true)}
              className="flex items-center cursor-pointer hover:opacity-80 transition justify-center bg-blue-500 text-white p-2 h-12 w-12 text-lg rounded-full"
            >
              +
            </div>
            <span className="text-xl">Create</span>
          </div>
        }
        {isSuccess &&
          sortData?.map((item: UserType, index: number) => (
            <User key={index} {...item} />
          ))}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 flex items-center justify-center">
          <form className="flex items-center justify-center flex-col gap-2 bg-white h-1/2 w-1/2 p-4 rounded-md">
            <input
              type="text"
              placeholder="Enter new name"
              className="h-12 border rounded-sm p-2"
              value={newData.name}
              onChange={(e) =>
                setNewData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Enter Id"
              className="h-12 border rounded-sm p-2"
              value={newData.id}
              onChange={(e) =>
                setNewData((prev) => ({ ...prev, id: e.target.value }))
              }
            />
            <button
              onClick={handleAddUser}
              className="bg-blue-500 text-white py-2 px-6 rounded-md"
            >
              Edit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Users;
