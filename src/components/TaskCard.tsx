import { Task } from "@/types/Task";
import StatusBadge from "./StatusBadge";


interface TaskCardProps {
  task: Task;
}


export default function TaskCard({
  task,
}: TaskCardProps) {

  return (
    <div
      className="
        bg-card
        rounded-2xl
        border
        border-slate-100
        shadow-sm
        p-5
      "
    >

      <div className="flex justify-between items-start">

        <h3 className="text-xl font-semibold text-foreground">
          {task.title}
        </h3>


        <StatusBadge status={task.status}/>

      </div>


      <p className="mt-3 text-slate-500">
        {task.description}
      </p>


      <div className="mt-4 flex justify-between text-sm">

        <span>
          Priority: {task.priority}
        </span>


        {task.dueDate && (
          <span>
            Due: {task.dueDate}
          </span>
        )}

      </div>

    </div>
  );
}