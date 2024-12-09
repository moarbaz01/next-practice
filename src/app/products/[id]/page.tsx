import ProductItem from "@/components/ProductItem";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate Static Params
export async function generateStaticParams() {
  const posts = await (await fetch("https://dummyjson.com/products")).json();
  return posts.products.map(({ id }: { id: number }) => ({
    id: id.toString(),
  }));
}

//
async function getPost(id: string) {
  const post = await (
    await fetch(`https://dummyjson.com/products/${id}`)
  ).json();
  return post;
}

// Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}

// Page Function
export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post || !post.id) {
    return notFound();
  }
  return (
    <div className=" flex items-center justify-center py-2 px-4">
      <ProductItem id={post.id} thumbnail={post.thumbnail} title={post.title} />
    </div>
  );
}
