import { db } from "@/lib/firebaseConfig";
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

export interface Todo{
  id: string;
  name: string;
  status: boolean;
}

export const fetchTodos = (setTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  const todoCollection = collection(db, "todo");

  const unsubscribe = onSnapshot(
    todoCollection,
    (snapshot) => {
      const todosData: Todo[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: typeof data.name === "string" ? data.name : "Untitled", // Default name
          status: typeof data.status === "boolean" ? data.status : false, // Default status
        };
      });

      setTodos(todosData);
    },
    (error) => {
      console.error("Error fetching Firestore data:", error);
    }
  );

  return unsubscribe;
};

export const addTodo = async (taskName: string) => {
  try {
    const todoCollection = collection(db, "todo");
    await addDoc(todoCollection, {
      name: taskName,
      status: false,
    });
  } catch (error) {
    console.error("Error adding new todo:", error);
  }
};

export const updateTodoStatus = async (id: string, status: boolean) => {
  const todoDoc = doc(db, "todo", id);
  try {
    await updateDoc(todoDoc, {
      status: status,
    });
    console.log("Todo status updated successfully!");
  } catch (error) {
    console.error("Error updating todo status: ", error);
  }
};

export const deleteTodo = async (id: string) => {
  const todoDoc = doc(db, "todo", id);
  try {
    await deleteDoc(todoDoc);
    console.log("Todo deleted successfully!");
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};
