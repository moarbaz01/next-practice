import dynamic from "next/dynamic";
const BarChart = dynamic(() => import("@/components/Charts/Bar"));
const Page = () => {
  return <BarChart />;
};

export default Page;
