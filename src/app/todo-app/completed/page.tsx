"use client";

import { useState, useEffect } from "react";
import { fetchTodos } from "@/lib/api";
import TodoItem from "@/components/todoItem";
import { Todo } from '@/lib/api';

export default function CompletedTasksPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data.filter(todo => todo.status === true));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="items-center justify-items-center h-full w-auto pt-8 gap-16">
      <h2 className="text-3xl font-bold pt-3 pb-8 w-full text-center">Completed Tasks</h2>
      <div className="h-full w-full overflow-auto" style={{ maxHeight: "60vh" }}>
        <main className="overflow-y-auto flex justify-center flex-wrap gap-5">
          <div className="flex-1 flex flex-col items-center w-full h-full gap-3 pb-5">
            {todos.length === 0 ? (
              <div>No Completed Task</div>
            ) : (
              todos.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
