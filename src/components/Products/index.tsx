import dynamic from "next/dynamic";
import { Suspense } from "react";
const ProductItem = dynamic(() => import("@/components/ProductItem"));
const fetchData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};
fetchData();
export default async function Products() {
  const data = await fetchData();
  return (
    <div className="px-4 py-4">
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(
          (
            item: { title: string; thumbnail: string; id: number },
            index: number
          ) => (
            <Suspense key={index} fallback={<span>Loading...</span>}>
              <ProductItem
                id={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
              />
            </Suspense>
          )
        )}
      </div>
    </div>
  );
}
