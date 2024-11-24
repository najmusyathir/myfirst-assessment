"use client"

import { useParams } from 'next/navigation';
import blogs from "@/lib/blogs.json";


export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.slug && typeof params.slug === "string" ? parseInt(params.slug) : NaN;

  const blog = blogs.find((blogTarget) => blogTarget.id === slug);

  if (!blog) {
    return (
      <div>
        <h1>Blog not found</h1>
        <p>We couldn’t find a blog post for the given ID: {slug}</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center w-full gap-5'>
      <div className='flex flex-col'>
        <h1 className='text-3xl text center font-bold'>{blog.title}</h1>
        <p>
          <strong>Author:</strong> {blog.author}
        </p>
      </div>
      <p className='text-justify' style={{ maxWidth: "65ch" }}>{blog.description}</p>

    </div>
  );
}

