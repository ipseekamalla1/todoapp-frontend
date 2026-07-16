"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import EmptyState from "@/components/EmptyState";

import { Task } from "@/types/Task";
import { getTasksByUser, deleteTask, updateTask } from "@/services/taskService";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await getTasksByUser(1);

        setTasks(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);

      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (task: Task) => {
    setSelectedTask(task);
    setEditOpen(true);
  };

  const handleUpdate = async () => {
    if (!selectedTask) return;

    try {
      const updated = await updateTask(selectedTask.id, selectedTask);

      setTasks((prev) =>
        prev.map((task) => (task.id === updated.id ? updated : task)),
      );

      setEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">My Tasks</h1>

            <p className="text-slate-500 mt-2">
              Manage and track all your tasks.
            </p>
          </div>

          <Link href="/tasks/create">
            <Button>+ Create Task</Button>
          </Link>
        </div>

        <div className="mt-8 flex gap-3">
          {["All", "Todo", "In Progress", "Done"].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200"
            >
              {item}
            </button>
          ))}
        </div>

        <section className="mt-10 grid gap-5">
          {loading ? (
            <p>Loading...</p>
          ) : tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          ) : (
            <EmptyState message="No tasks found. Create your first task!" />
          )}
        </section>

        {/* EDIT MODAL */}

        {editOpen && selectedTask && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-5">Edit Task</h2>

              <input
                className="w-full border p-3 rounded-xl mb-3"
                value={selectedTask.title}
                onChange={(e) =>
                  setSelectedTask({
                    ...selectedTask,
                    title: e.target.value,
                  })
                }
              />

              <textarea
                className="w-full border p-3 rounded-xl mb-3"
                value={selectedTask.description}
                onChange={(e) =>
                  setSelectedTask({
                    ...selectedTask,
                    description: e.target.value,
                  })
                }
              />

              <select
                className="w-full border p-3 rounded-xl mb-3"
                value={selectedTask.status}
                onChange={(e) =>
                  setSelectedTask({
                    ...selectedTask,
                    status: e.target.value as Task["status"],
                  })
                }
              >
                <option value="TODO">TODO</option>

                <option value="PENDING">PENDING</option>

                <option value="DONE">DONE</option>
              </select>

              <select
                className="w-full border p-3 rounded-xl mb-3"
                value={selectedTask.priority}
                onChange={(e) =>
                  setSelectedTask({
                    ...selectedTask,
                    priority: e.target.value as Task["priority"],
                  })
                }
              >
                <option value="LOW">LOW</option>

                <option value="MEDIUM">MEDIUM</option>

                <option value="HIGH">HIGH</option>
              </select>

              <div className="flex gap-3">
                <button
                  onClick={handleUpdate}
                  className="px-5 py-2 rounded-xl bg-primary"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
