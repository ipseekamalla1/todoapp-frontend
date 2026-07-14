import Link from "next/link";

import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function CreateTaskPage() {
  return (
    <main
      className="
      min-h-screen
      bg-background
      px-6
      py-12
      "
    >
      <div
        className="
        max-w-3xl
        mx-auto
        "
      >
        <Card>
          <div className="text-center">
            <h1
              className="
              text-3xl
              font-bold
              text-foreground
              "
            >
              Create New Task
            </h1>

            <p
              className="
              mt-2
              text-slate-500
              "
            >
              Add a new task and organize your work.
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
              label="Task Title"
              placeholder="Enter task title"
              name="title"
            />

            <div className="flex flex-col gap-2">
              <label
                className="
                text-sm
                font-medium
                text-foreground
                "
              >
                Description
              </label>

              <textarea
                name="description"
                placeholder="Describe your task..."
                rows={5}
                className="
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
              />
            </div>

            <Input label="Due Date" type="date" name="dueDate" />

            <div
              className="
              grid
              md:grid-cols-2
              gap-5
              "
            >
              <div className="flex flex-col gap-2">
                <label
                  className="
                  text-sm
                  font-medium
                  text-foreground
                  "
                >
                  Priority
                </label>

                <select
                  name="priority"
                  className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-primary
                  "
                >
                  <option value="">Select Priority</option>

                  <option value="LOW">Low</option>

                  <option value="MEDIUM">Medium</option>

                  <option value="HIGH">High</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="
                  text-sm
                  font-medium
                  text-foreground
                  "
                >
                  Status
                </label>

                <select
                  name="status"
                  className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-primary
                  "
                >
                  <option value="">Select Status</option>

                  <option value="TODO">Todo</option>

                  <option value="IN_PROGRESS">In Progress</option>

                  <option value="COMPLETED">Completed</option>
                </select>
              </div>
            </div>

            <Button type="submit">Create Task</Button>
          </form>

          <div
            className="
            mt-6
            text-center
            "
          >
            <Link
              href="/tasks"
              className="
              text-slate-500
              hover:underline
              "
            >
              Back to Tasks
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
