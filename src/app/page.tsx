import Link from "next/link";
import { metadata } from "./layout";

export default function Home() {
  const title = String(metadata.title);

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-14 text-5xl font-bold">{title}</h1>

      <Link href="/discover-writings">
        <p className="bg-primary rounded-2xl px-4 py-2 text-white transition-all hover:scale-105">
          استكشف المؤلّفات
        </p>
      </Link>
    </div>
  );
}
