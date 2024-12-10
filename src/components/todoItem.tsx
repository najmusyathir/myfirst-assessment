"use client";
import { useState } from "react";
import { updateTodoStatus, updateTodoName, deleteTodo } from "@/lib/api";
import { Todo } from "@/lib/api";
import Image from "next/image";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [saving, setSaving] = useState<boolean>(false);

  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked;
    setSaving(true);
    await updateTodoStatus(todo.id, newStatus);
    setSaving(false);
  };

  const handleNameSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSaving(true);
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("todoName") as HTMLInputElement;
    if (input) {
      await updateTodoName(todo.id, input.value);
      setSaving(false);
    }
  };

  const handleDeleteButton = async () => {
    setSaving(true);
    await deleteTodo(todo.id);
    setSaving(false);
  };

  return (
    <div key={todo.id} className="item">
      {saving && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-[#0008] flex items-center justify-center z-50">
          <p className="py-1 px-3 bg-[#fff] text-center text-gray-800 rounded-md">Saving...</p>
        </div>
      )}

      <div className="px-2 flex-1 flex items-center gap-2">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.status}
          onChange={handleCheckboxChange}
        />
        <form className="flex gap-2 w-full" onSubmit={handleNameSubmit}>
          <input
            name="todoName"
            className={`flex-1 ${todo.status ? "text-gray-500 line-through" : ""}`}
            type="text"
            defaultValue={todo.name.replace(/"/g, "").trim()}
          />
          <button type="submit" className="btn">
            <div style={{ width: "14px", height: "14px" }}>
              <Image
                aria-hidden
                src="/save.svg"
                alt="Save"
                width={14}
                height={14}
              />
            </div>
          </button>
        </form>
        <button className="btn" onClick={handleDeleteButton}>
          <div style={{ width: "14px", height: "14px" }}>
            <Image
              aria-hidden
              src="/cancel.svg"
              alt="Cancel"
              width={14}
              height={14}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
