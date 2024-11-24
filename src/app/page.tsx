import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-wrap justify-center flex-col items-center gap-5 sm:flex-row">
        <a href="https://myfirst.tech/" target="_blank">
          <Image
              className="dark:invert"
              src="/mf_logo.png"
              alt="Next.js logo"
              width={120}
              height={100}
              priority
            />
        </a>
        <h3 className="text-2xl font-semibold flex flex-wrap gap-1 sm:flex-col">
          <span>
            Interview
          </span>
          <span>
          Assessment
          </span>
        </h3>
        </div>
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Task 1: Blog Application </li>
          <li>Task 2: To-Do List Application </li>
        </ul>

        <div className="flex gap-4 items-center flex-col ">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/blogs"
              rel="noopener noreferrer">
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
             Check Blogs
            </Link>
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/todo-app/all"
              rel="noopener noreferrer">
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />To-Do List
            </Link>
          </div>
          
          <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              rel="noopener noreferrer"
              href="reference.pdf" download
              >Question Reference
          </a>
        </div>

      
      </main>
    </div>
  );
}
