import dynamic from "next/dynamic";
const Products = dynamic(() => import("@/components/Products"));
export default function Page() {
  return (
      <Products />
  );
}
