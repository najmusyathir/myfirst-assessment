"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchBlog, Blog } from "@/lib/api";
import Image from "next/image";

export default function BlogDetailsPage() {
  
  // setup
  const { slug } = useParams();
  const router = useRouter();
  
  //ue
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchBlog(slug as string)
      .then((data) => {
        setBlog(data);
        setLoading(false);
      }
      )
      .catch(console.error);

    }
  }, [slug]);
  

  if (loading){
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>
          Loading...
        </p>
      </div>
    )
  }

  if (!blog) {
    return (
      <div>
        <h1>Blog not found</h1>
        <p>We couldn’t find a blog post for the given ID: {slug}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center w-full" style={{maxWidth:'800px'}}>
        <button onClick={() => router.back()}>
                <Image
                  className="dark:invert p-3"
                  src="/back.svg"
                  alt="Vercel logomark"
                  width={60}
                  height={60}
                />
        </button>
        <h1 className="text-3xl text-center w-full font-bold">
          Blog Details
        </h1>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex flex-wrap justify-between w-full gap-5">
            <div className="flex flex-col w-full">
              <h1 className="text-2xl text-center w-full font-semibold py-3">{blog.title}</h1>
              <div className="flex flex-col justify-between">
                <p>
                  <strong>Author:</strong> {blog.author}
                </p>
                <p className="italic text-gray-500">
                {blog.date?.toDate().toLocaleDateString()}
                </p>
              </div>
            </div>

            <div></div>
        </div>
        <p className="text-justify" style={{ maxWidth: "65ch" }}>
          {blog.description}
        </p>
      </div>
    </div>
  );
}
