// src/app/blogs/[slug]/page.tsx

import { Blog, fetchBlogs } from "@/lib/api";

export default function BlogDetailsPage({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center w-full" style={{ maxWidth: "800px" }}>
        <h1 className="text-3xl text-center w-full font-bold">Blog Details</h1>
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
                {new Date(blog.date?.toDate()).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <p className="text-justify" style={{ maxWidth: "65ch" }}>
          {blog.description}
        </p>
      </div>
    </div>
  );
}

// Static path generation
export async function getStaticPaths() {
  const blogs = await fetchBlogs();
  return {
    paths: blogs.map((blog) => ({
      params: { slug: blog.id },
    })),
    fallback: false,
  };
}

// Fetch blog details with static props
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blogs = await fetchBlogs();
  const blog = blogs.find((b) => b.id === params.slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
}
