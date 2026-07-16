"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { removeToken } from "@/lib/auth";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();

    localStorage.clear();

    router.push("/");
  };

  return (
    <nav className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-slate-700">
        Task Manager
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/tasks" className="px-5 py-2 rounded-xl hover:bg-slate-100">
          Tasks
        </Link>

        <Link
          href="/login"
          className="px-5 py-2 rounded-xl text-slate-700 hover:bg-slate-100"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-5 py-2 rounded-xl bg-blue-300 hover:bg-blue-400"
        >
          Register
        </Link>

        <button
          onClick={handleLogout}
          className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
