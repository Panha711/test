"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="gap-5">
      <button
        onClick={() => router.push("/todo")}
        className="bg-black w-30 h-10 rounded-lg ml-10 mt-10 text-lg text-amber-50 cursor-pointer"
      >
        To do
      </button>
      <button
        onClick={() => router.push("/comment")}
        className="bg-black w-30 h-10 rounded-lg ml-10 mt-10 text-lg text-amber-50 cursor-pointer"
      >
        Comment
      </button>
    </div>
  );
}
