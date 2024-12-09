import {
  useDeleteUserByIdMutation,
  useEditUserByIdMutation,
} from "@/slices/usersApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const User = ({ id, name }: { id: string | number; name: string }) => {
  const [deleteUser, { isLoading, isSuccess }] = useDeleteUserByIdMutation();
  const [editUser] = useEditUserByIdMutation();
  const [editName, setEditName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDeleteUser = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    await deleteUser({ id });
  };
  const handleEditUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await editUser({ name: editName, id: id });
    setIsOpen(false);
  };
  const handleOpenModal = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={() => router.push(`/users/${id}`)}
        className=" border p-4 cursor-pointer flex flex-col gap-1"
      >
        <p>id : {id}</p>
        <p>name : {name}</p>
        <div className="flex items-center gap-2">
          <div onClick={handleOpenModal}>
            <MdEdit className=" text-blue-500 text-xl" />
          </div>
          <div onClick={handleDeleteUser}>
            <MdDelete className=" text-red-500 text-xl" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 flex items-center justify-center">
          <form className="flex items-center justify-center flex-col gap-2 bg-white h-1/2 w-1/2 p-4 rounded-md">
            <input
              type="text"
              placeholder="Enter new name"
              className="h-12 border rounded-sm p-2"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <button
              onClick={handleEditUser}
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

export default User;
