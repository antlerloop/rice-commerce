import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-3 md:gap-4">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Welcome to Groceries App
      </h1>
      <Link
        href={"/products"}
        className="text-blue-700 hover:underline font-bold"
      >
        {"Shop now! ->"}
      </Link>
    </div>
  );
}
