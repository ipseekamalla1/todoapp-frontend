"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { register } from "@/services/authService";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      await register(form);

      router.push("/login");
    } catch (error: any) {
      console.log(error);

      setError(error.response?.data || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <Card className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>

          <p className="mt-2 text-slate-500">Start managing your tasks today</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
          />

          <Input
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Gender</label>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3"
            >
              <option value="">Select gender</option>

              <option value="MALE">Male</option>

              <option value="FEMALE">Female</option>

              <option value="OTHER">Other</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit">{loading ? "Creating..." : "Register"}</Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Already have an account?
          <Link
            href="/login"
            className="ml-2 font-medium text-slate-700 hover:underline"
          >
            Login
          </Link>
        </div>
      </Card>
    </main>
  );
}
