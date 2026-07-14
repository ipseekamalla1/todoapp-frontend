import Link from "next/link";

import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";


export default function RegisterPage() {

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
            Create Account
          </h1>



          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Start managing your tasks today
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
            label="First Name"
            placeholder="Enter your first name"
            name="firstName"
          />



          <Input
            label="Last Name"
            placeholder="Enter your last name"
            name="lastName"
          />



          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />



          <Input
            label="Password"
            type="password"
            placeholder="Create password"
            name="password"
          />





          <div className="flex flex-col gap-2">


            <label
              className="
              text-sm
              font-medium
              text-foreground
              "
            >
              Gender
            </label>



            <select
              name="gender"
              className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-foreground
              outline-none
              focus:ring-2
              focus:ring-primary
              "
            >

              <option value="">
                Select gender
              </option>


              <option value="MALE">
                Male
              </option>


              <option value="FEMALE">
                Female
              </option>


              <option value="OTHER">
                Other
              </option>


            </select>


          </div>





          <Button
            type="submit"
          >
            Register
          </Button>



        </form>






        <div
          className="
          mt-6
          text-center
          text-sm
          text-slate-500
          "
        >

          Already have an account?


          <Link
            href="/login"
            className="
            ml-2
            text-slate-700
            font-medium
            hover:underline
            "
          >
            Login
          </Link>


        </div>



      </Card>



    </main>

  );
}