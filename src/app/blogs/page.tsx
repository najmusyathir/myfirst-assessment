import Link from "next/link";
import Card from "@/components/card";
import { fetchBlogs } from "@/lib/api";

export default async function Blogs()  {
  const blogs = fetchBlogs();
  
  return (
    <div className="items-center justify-items-center h-full w-auto pt-8 px-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-3xl font-bold pb-3">Blog Homepage</h2>
      <div className="overflow-y-auto h-full py-5">
        <main className="max-w-full flex justify-center flex-wrap gap-5 row-start-2 items-center sm:items-start">
          {(await blogs).map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
                <Card
                  key={blog.id}
                  title={blog.title}
                  date={blog.date}
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
