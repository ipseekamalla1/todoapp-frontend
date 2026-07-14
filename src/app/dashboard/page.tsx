import Link from "next/link";

import Card from "@/components/Card";
import Button from "@/components/Button";
import TaskCard from "@/components/TaskCard";

import { Status, Priority } from "@/types/enums";
import { Task } from "@/types/Task";



const demoTasks: Task[] = [

  {
    id: 1,
    title: "Learn Spring Boot",
    description: "Complete JWT authentication setup",
    dueDate: "2026-07-20",
    status: Status.IN_PROGRESS,
    priority: Priority.HIGH,
    createdAt: "2026-07-13",
    userId: 1,
  },


  {
    id: 2,
    title: "Build Next.js UI",
    description: "Create dashboard components",
    dueDate: "2026-07-25",
    status: Status.COMPLETED,
    priority: Priority.MEDIUM,
    createdAt: "2026-07-13",
    userId: 1,
  },


];



export default function DashboardPage() {


  return (

    <main
      className="
      min-h-screen
      bg-background
      px-6
      py-10
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        "
      >


        {/* Header */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-start
          md:items-center
          gap-4
          "
        >


          <div>

            <h1
              className="
              text-4xl
              font-bold
              text-foreground
              "
            >
              Welcome back 👋
            </h1>


            <p
              className="
              mt-2
              text-slate-500
              "
            >
              Manage your tasks and stay productive.
            </p>

          </div>





          <Link href="/tasks/create">

            <Button>
              + Create Task
            </Button>

          </Link>



        </div>







        {/* Statistics */}


        <section
          className="
          mt-10
          grid
          md:grid-cols-3
          gap-6
          "
        >



          <Card>

            <p className="text-slate-500">
              Total Tasks
            </p>


            <h2
              className="
              mt-3
              text-4xl
              font-bold
              text-foreground
              "
            >
              12
            </h2>

          </Card>





          <Card
            className="bg-secondary"
          >

            <p className="text-slate-600">
              Completed
            </p>


            <h2
              className="
              mt-3
              text-4xl
              font-bold
              "
            >
              5
            </h2>


          </Card>






          <Card
            className="bg-accent"
          >

            <p className="text-slate-600">
              In Progress
            </p>


            <h2
              className="
              mt-3
              text-4xl
              font-bold
              "
            >
              7
            </h2>


          </Card>




        </section>







        {/* Recent Tasks */}


        <section className="mt-12">


          <div
            className="
            flex
            justify-between
            items-center
            mb-6
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              text-foreground
              "
            >
              Recent Tasks
            </h2>


            <Link
              href="/tasks"
              className="
              text-slate-600
              hover:underline
              "
            >
              View all
            </Link>


          </div>





          <div
            className="
            grid
            gap-5
            "
          >


            {
              demoTasks.map((task)=>(
                
                <TaskCard
                  key={task.id}
                  task={task}
                />

              ))
            }


          </div>



        </section>




      </div>


    </main>

  );

}