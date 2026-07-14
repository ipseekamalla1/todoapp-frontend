import Link from "next/link";

import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function LoginPage() {
  return (
    <main
      className="
      min-h-screen
      bg-background
      flex
      items-center
      justify-center
      px-6
      py-12
      "
    >
      <Card
        className="
        w-full
        max-w-md
        "
      >
        <div className="text-center">
          <h1
            className="
            text-3xl
            font-bold
            text-foreground
            "
          >
            Welcome Back
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Login to manage your tasks
          </p>
        </div>

        <form
          className="
          mt-8
          flex
          flex-col
          gap-5
          "
        >
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
          />

          <Button type="submit">Login</Button>
        </form>

        <div
          className="
          mt-6
          text-center
          text-sm
          text-slate-500
          "
        >
          Dont have an account?
          <Link
            href="/register"
            className="
            ml-2
            text-slate-700
            font-medium
            hover:underline
            "
          >
            Register
          </Link>
        </div>
      </Card>
    </main>
  );
}
