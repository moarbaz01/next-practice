"use client";

import { useGetUserByIdQuery } from "@/slices/usersApi";
import { MdDelete } from "react-icons/md";

const page = ({ params }: { params: { id: string } }) => {
  const { data: user, isLoading, isSuccess } = useGetUserByIdQuery(params.id);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="p-4">
      {isSuccess && user && (
        <div className=" border p-4">
          <p>id : {user.id}</p>
          <p>name : {user.name}</p>
          <div>
            <MdDelete className=" text-red-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
