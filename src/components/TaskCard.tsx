"use client";

import { Task } from "@/types/Task";

interface Props {
  task: Task;
  onDelete?: (id:number)=>void;
  onEdit?: (task:Task)=>void;
}

export default function TaskCard({task,onDelete,onEdit}:Props){

return (

<div className="bg-white rounded-2xl p-5 shadow border border-slate-200 flex justify-between items-center">


<div>

<h2 className="text-xl font-bold text-slate-800">
{task.title}
</h2>


<p className="text-slate-500 mt-2">
{task.description}
</p>


<div className="flex gap-2 mt-3">

<span className="px-3 py-1 rounded-full bg-blue-100 text-sm">
{task.status}
</span>


<span className="px-3 py-1 rounded-full bg-green-100 text-sm">
{task.priority}
</span>


</div>


</div>




<div className="flex gap-2">


{
onEdit && (

<button
onClick={()=>onEdit(task)}
className="px-4 py-2 rounded-xl bg-primary"
>
Edit
</button>

)
}





{
onDelete && (

<button
onClick={()=>onDelete(task.id)}
className="px-4 py-2 rounded-xl bg-red-500 text-white"
>
Delete
</button>

)
}



</div>



</div>

);

}