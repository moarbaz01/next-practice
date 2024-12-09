import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});
const Chart = dynamic(() => import("@/components/Home/Chart"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="p-4">
      <div className="flex text-3xl font-bold items-center gap-4">
        <BsArrowRight />
        <span>Dashboard</span>
      </div>
      <div className="flex items-center mt-12 gap-4">
        <div className="p-4 flex border border-black rounded-md items-center h-[100px] w-[100px] flex-col gap-2 aspect-square">
          <h1 className="text-5xl font-bold">12</h1>
          <p className="text-sm text-gray-600">Users</p>
        </div>
        <div className="p-4 flex border border-black rounded-md items-center h-[100px] w-[100px] flex-col gap-2 aspect-square">
          <h1 className="text-5xl font-bold">0</h1>
          <div className="text-sm flex items-center gap-2 text-gray-600">
            <span>Live</span>{" "}
            <div className="bg-green-500 animate-ping h-2 w-2 rounded-full"></div>
          </div>
        </div>
      </div>
      <Chart />
      <MapComponent />
    </div>
  );
}
