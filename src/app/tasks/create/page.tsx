"use client";

import Link from "next/link";
import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { createTask } from "@/services/taskService";
import { Status, Priority } from "@/types/enums";
import { useRouter } from "next/navigation";

export default function CreateTaskPage(){

const router=useRouter();

const [form,setForm]=useState({
title:"",
description:"",
dueDate:"",
priority:"MEDIUM" as Priority,
status:"PENDING" as Status
});

const [loading,setLoading]=useState(false);

const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=async(e:React.FormEvent)=>{
e.preventDefault();

const user=JSON.parse(localStorage.getItem("user")||"null");

if(!user)return;

try{

setLoading(true);

await createTask(user.id,form);

router.push("/dashboard");

}catch(error){

console.error("Create task failed",error);

}finally{

setLoading(false);

}

};


return(
<main className="min-h-screen bg-background px-6 py-12">

<div className="max-w-3xl mx-auto">

<Card>

<h1 className="text-3xl font-bold text-center">
Create New Task
</h1>

<form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">


<Input
label="Task Title"
name="title"
value={form.title}
onChange={handleChange}
placeholder="Enter task title"
/>


<textarea
name="description"
value={form.description}
onChange={handleChange}
placeholder="Describe your task..."
rows={5}
className="rounded-xl border px-4 py-3"
/>


<Input
 label="Due Date"
 type="datetime-local"
 name="dueDate"
 value={form.dueDate}
 onChange={handleChange}
/>

<select
name="priority"
value={form.priority}
onChange={handleChange}
className="rounded-xl border px-4 py-3"
>

<option value="LOW">LOW</option>
<option value="MEDIUM">MEDIUM</option>
<option value="HIGH">HIGH</option>

</select>


<select
name="status"
value={form.status}
onChange={handleChange}
className="rounded-xl border px-4 py-3"
>

<option value="PENDING">PENDING</option>
<option value="DONE">DONE</option>

</select>


<Button type="submit">
{loading?"Creating...":"Create Task"}
</Button>


</form>


<Link href="/dashboard" className="block mt-5 text-center text-slate-500">
Back to Dashboard
</Link>


</Card>

</div>

</main>
)

}