"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


import Card from "@/components/Card";
import Button from "@/components/Button";
import TaskCard from "@/components/TaskCard";


import { Task } from "@/types/Task";
import { User } from "@/types/User";


import { getTasksByUser } from "@/services/taskService";



export default function DashboardPage() {


  const [tasks, setTasks] = useState<Task[]>([]);

  const [loading, setLoading] = useState(true);



  const user: User | null =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;



  useEffect(() => {


    async function loadTasks() {


      if (!user) {

        console.log("No user found");

        setLoading(false);

        return;

      }



      try {


        const data = await getTasksByUser(user.id);


        console.log("TASKS FROM API:", data);


        setTasks(data);



      } catch (error) {


        console.error(
          "Error loading tasks:",
          error
        );


      } finally {


        setLoading(false);


      }


    }



    loadTasks();


  }, []);




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

              Welcome {user?.firstName || "back"} 👋

            </h1>



            <p className="mt-2 text-slate-500">

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


            <h2 className="mt-3 text-4xl font-bold">

              {tasks.length}

            </h2>


          </Card>





          <Card className="bg-secondary">


            <p className="text-slate-600">
              DONE
            </p>


            <h2 className="mt-3 text-4xl font-bold">


              {
                tasks.filter(
                  task => task.status === "DONE"
                ).length
              }


            </h2>


          </Card>





          <Card className="bg-accent">


            <p className="text-slate-600">
              PENDING
            </p>


            <h2 className="mt-3 text-4xl font-bold">


              {
                tasks.filter(
                  task => task.status === "PENDING"
                ).length
              }


            </h2>


          </Card>



        </section>





        {/* Tasks */}


        <section className="mt-12">


          <div
            className="
            flex
            justify-between
            items-center
            mb-6
            "
          >


            <h2 className="text-2xl font-bold">

              Recent Tasks

            </h2>



            <Link
              href="/tasks"
              className="text-slate-600 hover:underline"
            >

              View all

            </Link>


          </div>





          <div className="grid gap-5">



            {
              loading ? (

                <p>
                  Loading tasks...
                </p>


              ) : tasks.length === 0 ? (


                <p className="text-slate-500">

                  No tasks found.

                </p>



              ) : (


                tasks.map(task => (

                  <TaskCard
                    key={task.id}
                    task={task}
                  />


                ))


              )
            }




          </div>



        </section>



      </div>


    </main>


  );

}