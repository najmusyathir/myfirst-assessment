import { db } from "@/lib/firebaseConfig";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";

export interface Blog {
  id: string;
  title: string;
  date: Timestamp;
  description: string;
  author: string;
}

export interface Todo {
  id: string;
  name: string;
  status: boolean;
}


// ====================== [ Blog Related API ] ===================================//
const blog_db = "blog";


export async function fetchBlogs(): Promise<Blog[]> {
  const snapshot = await getDocs(collection(db, blog_db));
 
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Blog[];

}

export async function fetchBlog(id :string): Promise<Blog> {
  const snapshot = await getDocs(collection(db, blog_db));
 
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })).find(doc => doc.id === id) as Blog;
}

// ====================== [ To-Do App Related API ] ===================================//
const todo_db = "todo"

export async function fetchTodos(): Promise<Todo[]> {
  const snapshot = await getDocs(collection(db, todo_db));
 
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Todo[];

}

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
    console.log("Todo status updated!");
  } catch (error) {
    console.error("Error updating todo status: ", error);
  }
};

export const updateTodoName = async (id: string, name: string) => {
  const todoDoc = doc(db, "todo", id);
  try {
    await updateDoc(todoDoc, {
      name: name,
    });
    console.log("Todo string updated!");
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
