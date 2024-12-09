"use client";
import Image from "next/image";
import Link from "next/link";
import profile from "../../../public/profile.jpg";
import { CiLogout, CiUser } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { signOut } from "next-auth/react";
const navlinks = [
  {
    label: "Dashboard",
    path: "/",
    icon: IoAnalytics,
  },
  {
    label: "Tasks",
    path: "/task",
    icon: FaTasks,
  },
  {
    label: "Users",
    path: "/user",
    icon: CiUser,
  },
];
export default function Sidebar() {
  return (
    <div className=" w-[220px] fixed left-0 top-0 px-4 py-2 bottom-0 bg-gray-100">
      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col gap-2">
          <div className=" h-12 w-12 aspect-square ring-2 ring-teal-500 rounded-full">
            <Image
              src={profile}
              alt="Profile Image"
              height={100}
              width={100}
              className=" h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Raju Rastogi</h1>
            <p>Type : User</p>
          </div>

          <ul className="flex flex-col pt-24 gap-2">
            {navlinks.map((l, index) => (
              <li
                className="text-lg font-[500] cursor-pointer hover:opacity-60 transition flex items-center gap-2"
                key={index}
              >
                <l.icon className="text-lg stroke-[1px]" />
                <Link href={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => signOut()}
          className="flex text-lg cursor-pointer hover:opacity-80 transition font-[500] items-center gap-2"
        >
          <CiLogout className="stroke-[1px]" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
