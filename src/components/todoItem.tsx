import Image from "next/image";
import { updateTodoStatus, deleteTodo } from "@/lib/api";
import { Todo } from '@/lib/api';

const TodoItem = ({ todo } : {todo : Todo}) => {
  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked;
    await updateTodoStatus(todo.id, newStatus);
  };

  // Handle delete button click
  const handleDeleteClick = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <div key={todo.id} className="item">
      <div className="px-2 flex-1 flex items-center">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.status}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor={todo.id}
          className={`${todo.status ? "text-gray-500 line-through" : ""} flex-1 overflow-x-auto`}
        >
          {todo.name.replace(/"/g, "").trim()}
        </label>
      </div>
      <div className="flex items-center">
        <div className="dlt" onClick={handleDeleteClick}>
          <Image
            aria-hidden
            src="/cancel.svg"
            alt="Delete icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
