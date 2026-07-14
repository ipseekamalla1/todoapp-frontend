"use client"
import Link from "next/link";


export default function Navbar() {

  return (
    <nav className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">


      <Link
        href="/"
        className="text-2xl font-bold text-slate-700"
      >
        Task Manager
      </Link>



      <div className="flex items-center gap-4">


        <Link
          href="/login"
          className="
          px-5 py-2
          rounded-xl
          text-slate-700
          hover:bg-slate-100
          transition
          "
        >
          Login
        </Link>



        <Link
          href="/register"
          className="
          px-5 py-2
          rounded-xl
          bg-blue-300
          text-slate-700
          hover:bg-blue-400
          transition
          "
        >
          Register
        </Link>


      </div>


    </nav>
  );
}