"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { login } from "@/services/authService";


export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    try {

      setError("");

      await login({ email, password });

      router.push("/dashboard");

    } catch (error) {

      console.error(error);

      setError("Invalid email or password");

    }

  }


  return (

    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-12">

      <Card className="w-full max-w-md">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="mt-2 text-slate-500">Login to manage your tasks</p>
        </div>


        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

          <Input label="Email" type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <Input label="Password" type="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit">Login</Button>

        </form>


        <div className="mt-6 text-center text-sm text-slate-500">
          Dont have an account?
          <Link href="/register" className="ml-2 text-slate-700 font-medium hover:underline">
            Register
          </Link>
        </div>


      </Card>

    </main>

  );

}