import Image from "next/image";
import { updateTodoStatus, updateTodoName, deleteTodo } from "@/lib/api";
import { Todo } from '@/lib/api';
import { useState } from "react";

const TodoItem = ({ todo, onAction } : { todo : Todo; onAction : () => void }) => {

  const [saving, setSaving] = useState<boolean>(false);
  

  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaving(true);
    const newStatus = e.target.checked;
    await updateTodoStatus(todo.id, newStatus);
    await onAction();
    setSaving(false);
  };

  const handleNameSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSaving(true);
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("todoName") as HTMLInputElement;
    if (input) {
      await updateTodoName(todo.id, input.value);
      onAction();
      setSaving(false);
    }
  };

  const handleDeleteButton = async () => {
    setSaving(true);
    await deleteTodo(todo.id);
    onAction();
    setSaving(false);
  };

  return (
    <div key={todo.id} className="item">

      <div className={`${saving? 'fixed' : 'hidden'} top-0 left-0 h-screen w-screen bg-[#0008] flex items-center justify-center`}>
        <p className="py-1 px-3 bg-[#ffff] text-center text-gray-800 rounded-md">
          saving..
        </p>
      </div>

      <div className="px-2 flex-1 flex items-center">

        <input
          id={todo.id}
          type="checkbox"
          checked={todo.status}
          onChange={handleCheckboxChange}
        />

      <form className="flex gap-2 w-full" onSubmit={handleNameSubmit}>
        <input
          name="todoName"
          className={`flex-1 ${todo.status ? "text-gray-500 line-through" : ""} flex-1 overflow-x-auto`}
          type="text"
          defaultValue={todo.name.replace(/"/g, "").trim()}
        />
        <button type="submit" className="btn">
          <div style={{ width: '14px', height: '14px' }}>
          <Image
              aria-hidden
              src="/save.svg"
              alt="Delete icon"
              width={14}
              height={14}
            />
          </div>
        </button>
      </form>


      </div>
      <div className="flex items-center">
        <button className="btn flex items-center" onClick={handleDeleteButton}>
        <div style={{ width: '14px', height: '14px' }}>
            <Image
              aria-hidden
              src="/cancel.svg"
              alt="Delete icon"
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
