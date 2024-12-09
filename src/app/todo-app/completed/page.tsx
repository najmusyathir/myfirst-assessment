"use client";
import { useState, useEffect } from "react";
import { fetchTodos } from "@/lib/api";
import TodoItem from "@/components/todoItem";
import { Todo } from '@/lib/api';

export default function Blogs() {

  //ue
  const [todos, setTodos] = useState<Todo[]>([]);
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
    <div className="items-center justify-items-center h-full w-auto pt-8">
      <h2 className="text-3xl font-bold pt-3 pb-8 w-full text-center">Completed tasks</h2>
      <div className="h-full w-full overflow-auto" style={{maxHeight: "60vh"}}>
        <main className="overflow-y-auto flex justify-center flex-wrap gap-5">
          <div className="flex-1 flex flex-col items-center w-full h-full gap-3 pb-5">
            {todos.length === 0 ? (
              <div>No Task</div>
            ) : (
              todos.filter((todo) => todo.status === true).map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
