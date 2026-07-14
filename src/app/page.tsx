import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";


export default function Home() {

  return (
    <main className="min-h-screen bg-background px-6 py-16">


      {/* Hero Section */}
      <section className="mx-auto max-w-5xl text-center">


        <h1
          className="
          text-5xl
          md:text-6xl
          font-bold
          text-foreground
          leading-tight
          "
        >
          Manage your tasks.
          <br />
          Stay productive.
        </h1>



        <p
          className="
          mt-6
          text-lg
          text-slate-500
          max-w-2xl
          mx-auto
          "
        >
          A simple and beautiful task management system
          to organize your daily work, track progress,
          and achieve your goals.
        </p>



        <div className="mt-8 flex justify-center gap-4">


          <Link href="/register">

            <Button>
              Get Started
            </Button>

          </Link>



          <Link href="/login">

            <button
              className="
              px-6
              py-3
              rounded-xl
              border
              border-slate-200
              bg-white
              text-foreground
              hover:bg-slate-50
              transition
              "
            >
              Login
            </button>

          </Link>


        </div>


      </section>





      {/* Feature Cards */}
      <section
        className="
        mx-auto
        max-w-5xl
        mt-20
        grid
        md:grid-cols-3
        gap-6
        "
      >


        <Card>

          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-primary
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            ✓
          </div>


          <h2
            className="
            mt-5
            text-xl
            font-semibold
            text-foreground
            "
          >
            Manage Tasks
          </h2>


          <p
            className="
            mt-3
            text-slate-500
            "
          >
            Create, update and organize all your
            tasks in one place.
          </p>

        </Card>





        <Card>

          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-accent
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            ⚡
          </div>


          <h2
            className="
            mt-5
            text-xl
            font-semibold
            text-foreground
            "
          >
            Track Progress
          </h2>


          <p
            className="
            mt-3
            text-slate-500
            "
          >
            Monitor your task status and stay
            focused on what matters.
          </p>


        </Card>





        <Card>


          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-secondary
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            🚀
          </div>



          <h2
            className="
            mt-5
            text-xl
            font-semibold
            text-foreground
            "
          >
            Improve Productivity
          </h2>


          <p
            className="
            mt-3
            text-slate-500
            "
          >
            Build better habits and complete your
            goals faster.
          </p>


        </Card>


      </section>





      {/* Bottom CTA */}

      <section
        className="
        mx-auto
        max-w-5xl
        mt-20
        "
      >

        <Card
          className="
          text-center
          bg-primary
          "
        >

          <h2
            className="
            text-3xl
            font-bold
            text-foreground
            "
          >
            Ready to organize your work?
          </h2>


          <p
            className="
            mt-3
            text-slate-600
            "
          >
            Start managing your tasks today.
          </p>



          <div className="mt-6">


            <Link href="/register">

              <button
                className="
                bg-white
                px-6
                py-3
                rounded-xl
                font-medium
                text-foreground
                hover:bg-slate-50
                transition
                "
              >
                Create Account
              </button>

            </Link>


          </div>


        </Card>


      </section>



    </main>
  );
}