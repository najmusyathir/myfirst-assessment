"use client";
import { useState, useEffect } from "react";
import { fetchTodos, addTodo } from "@/lib/api";
import TodoItem from "@/components/todoItem";
import { Todo } from '@/lib/api';

export default function Blogs() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const unsubscribe = fetchTodos(setTodos);
    return () => unsubscribe();
  }, []);

  const AddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    await addTodo(newTask);
    setNewTask("");
    
  };

  return (
    <div className="items-center justify-items-center h-full w-auto pt-8 gap-16">
      <h2 className="text-3xl font-bold py-3 w-full text-center">All tasks</h2>
      <div className="item">
        <form className="flex w-full" onSubmit={AddTodo}>
          <input type="text" className="text-input p-3 w-full outline-0" style={{background: "none"}} placeholder="Add a task" onChange={(e) => setNewTask(e.target.value)}/>
          <input type="submit" className="w-min dlt" value="Add"/>
        </form>
      </div>
      <div className="th my-5"></div>
      <div className="h-full w-full overflow-auto" style={{maxHeight: "60vh"}}>
        <main className="overflow-y-auto flex justify-center flex-wrap gap-5">
          <div className="flex-1 flex flex-col items-center w-full h-full gap-3 pb-5">
            {todos.length === 0 ? (
              <div>No Task</div>
            ) : (
              todos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
