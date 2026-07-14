import Link from "next/link";

import Button from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import EmptyState from "@/components/EmptyState";

import { Status, Priority } from "@/types/enums";
import { Task } from "@/types/Task";



const demoTasks: Task[] = [

  {
    id: 1,
    title: "Complete Spring Boot Backend",
    description:
      "Finish REST APIs and JWT authentication",
    dueDate: "2026-07-20",
    status: Status.COMPLETED,
    priority: Priority.HIGH,
    createdAt: "2026-07-13",
    userId: 1,
  },


  {
    id: 2,
    title: "Create Next.js Frontend",
    description:
      "Build UI pages using Tailwind CSS",
    dueDate: "2026-07-25",
    status: Status.IN_PROGRESS,
    priority: Priority.MEDIUM,
    createdAt: "2026-07-13",
    userId: 1,
  },


  {
    id: 3,
    title: "Deploy Application",
    description:
      "Deploy frontend and backend",
    dueDate: "2026-08-01",
    status: Status.TODO,
    priority: Priority.LOW,
    createdAt: "2026-07-13",
    userId: 1,
  },


];



export default function TasksPage() {


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
              My Tasks
            </h1>


            <p
              className="
              mt-2
              text-slate-500
              "
            >
              Manage and track all your tasks.
            </p>


          </div>




          <Link href="/tasks/create">

            <Button>
              + Create Task
            </Button>

          </Link>


        </div>







        {/* Filters */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          gap-3
          "
        >


          <button
            className="
            px-4
            py-2
            rounded-xl
            bg-primary
            text-foreground
            "
          >
            All
          </button>



          <button
            className="
            px-4
            py-2
            rounded-xl
            bg-white
            border
            border-slate-200
            "
          >
            Todo
          </button>



          <button
            className="
            px-4
            py-2
            rounded-xl
            bg-white
            border
            border-slate-200
            "
          >
            In Progress
          </button>




          <button
            className="
            px-4
            py-2
            rounded-xl
            bg-white
            border
            border-slate-200
            "
          >
            Completed
          </button>



        </div>







        {/* Task List */}

        <section
          className="
          mt-10
          grid
          gap-5
          "
        >


          {
            demoTasks.length > 0 ? (

              demoTasks.map((task)=>(

                <TaskCard
                  key={task.id}
                  task={task}
                />

              ))

            ) : (

              <EmptyState
                message="No tasks found. Create your first task!"
              />

            )
          }



        </section>




      </div>


    </main>

  );

}