import Image from "next/image";

export default function Home() {
console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <main>
      <h1 className="text-white">
        Task Management System
      </h1>
    </main>
  );

}
