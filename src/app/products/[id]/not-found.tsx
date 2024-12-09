"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Product is not found",
};
const Custom404 = () => {
  const params = usePathname();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-extrabold">404</h1>
      <h1 className="text-3xl font-bold">
        {params.split("/")[2]} Product Not Found
      </h1>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <p className="mt-2 text-blue-500">Go back to Home</p>
      </Link>
    </div>
  );
};

export default Custom404;
