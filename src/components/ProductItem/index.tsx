import Image from "next/image";
import Link from "next/link";

export default function ProductItem({
  title,
  thumbnail,
  id,
}: {
  title: string;
  thumbnail: string;
  id: number;
}) {
  return (
    <Link href={`http://localhost:3000/products/${id}`}>
      <div className="h-[300px] p-4 shadow-lg">
        <h1>{title}</h1>
        <Image
          height={200}
          width={200}
          alt={`product${id}`}
          loading="eager"
          src={thumbnail}
        />
      </div>
    </Link>
  );
}
