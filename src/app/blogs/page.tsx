import blogs from "@/lib/blogs.json";
import Link from "next/link";
import Card from "@/components/card";

export default function Blogs() {
  return (
    <div className="items-center justify-items-center h-full w-auto p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-3xl font-bold pb-3">Blogs</h2>
      <div className="overflow-y-auto h-full p-5">
        <main className="max-w-full flex justify-center flex-wrap gap-5 row-start-2 items-center sm:items-start">
          {blogs.map((blog) => (
         <Link href={`/blogs/${blog.id}`} key={blog.id}>
                <Card
                  key={blog.id}
                  title={blog.title}
                  date={new Date(blog.date)}
                  description={blog.description}
                  author={blog.author}
                />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
