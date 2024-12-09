import Image from "next/image";
import { updateTodoStatus, updateTodoName, deleteTodo } from "@/lib/api";
import { Todo } from '@/lib/api';

const TodoItem = ({ todo } : {todo : Todo}) => {
  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked;
    await updateTodoStatus(todo.id, newStatus);
  };

  const handleNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    await updateTodoName(todo.id, newName);
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



        <form>
          <input className={` ${todo.status ? "text-gray-500 line-through" : ""} flex-1 overflow-x-auto`}
          type="text" value={todo.name.replace(/"/g, "").trim()}
          onChange={handleNameChange}
          />

          <input type="submit" value={`Here`}
                />
        </form>


      </div>
      <div className="flex items-center">
        <div className="dlt flex items-center" onClick={handleDeleteClick}>
          <Image
            aria-hidden
            src="/cancel.svg"
            alt="Delete icon"
            width={14}
            height={14}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
