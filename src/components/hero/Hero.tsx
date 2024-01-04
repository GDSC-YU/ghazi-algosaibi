import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="p-14 text-5xl font-bold">غازي القصيبي</h1>
        <Link href="/discover-writings">
          <p className="rounded-2xl bg-primary px-4 py-2 text-white transition-all hover:scale-105">
            استكشف المؤلّفات
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
