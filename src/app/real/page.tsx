import dynamic from "next/dynamic";
const Real = dynamic(() => import("@/components/Real"));
const Page = () => {
  return <Real />;
};

export default Page;
