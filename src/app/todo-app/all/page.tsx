"use client";

import { useState, useEffect } from "react";
import TodoItem from "@/components/todoItem";
import { Todo, fetchTodos, addTodo } from '@/lib/api';

export default function Blogs() {

  //ue
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const tryFetch = async () => {
      try{
        setTodos(await fetchTodos());
        setLoading(false);
      }
       catch (error) {
        console.log(error);
       }
    }
    tryFetch();
  });


  const AddTodo = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (newTask.trim() === "") return;

    await addTodo(newTask);
    const addInput = document.getElementById('input-add') as HTMLInputElement;
    if (addInput){
      addInput.value = "";
    }
    
  };

  if (loading){
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>
          Loading...
        </p>
      </div>
    )
  }

  return (
    <div className="items-center justify-items-center h-full w-auto pt-8 gap-16">
      <h2 className="text-3xl font-bold py-3 w-full text-center">All tasks</h2>
      <div className="item">
        <form className="flex flex-row w-full gap-3" onSubmit={AddTodo}>
          <input type="text" id="input-add" className="text-input flex-1" style={{background: "none"}} placeholder="Add a task" onChange={(e) => setNewTask(e.target.value)}/>
          <input type="submit" className="w-min btn" value="Add"/>
        </form>
      </div>
      <div className="th my-5"></div>
      <div className="h-full w-full overflow-auto" style={{maxHeight: "60vh"}}>
        <main className="overflow-y-auto flex justify-center flex-wrap gap-5">
          <div className="flex-1 flex flex-col items-center w-full h-full gap-3 pb-5">
          {Array.isArray(todos) && todos.length === 0 ? (
              <div>No Task</div>
            ) : (
              (todos).map((todo: Todo) => (
                  <TodoItem key={todo.id} todo={todo} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
