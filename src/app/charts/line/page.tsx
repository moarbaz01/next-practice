import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("@/components/Charts/Line"));
const Page = () => {
  return <LineChart />;
};
export default Page;
