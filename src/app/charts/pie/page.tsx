import dynamic from "next/dynamic";
const PieChart = dynamic(() => import("@/components/Charts/Pie"));
const Page = () => {
  return <PieChart />;
};

export default Page;
