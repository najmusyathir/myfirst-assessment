
import { ReactNode } from 'react';
import Link from 'next/link';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className='h-full flex flex-col items-center justify-between'>
      <main className='flex-1 w-full overflow-x-hidden overflow-y-hidden'>
        {children}
      </main>

      <div className="flex justify-center mt-5 gap-0 flex-row bg w-min bg-gray-200 rounded-full overflow-hidden">
        <Link className="text-gray-800 dark:hover:text-gray-300 min-w-20 text-nowrap border border-solid flex-1 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="/todo-app/all" rel="noopener noreferrer"> All </Link>
              
        <div className='hfull bg-slate-50' style={{width:`2px`, height:`100%`}}></div>

        <Link className="text-gray-800 dark:hover:text-gray-300 min-w-20 text-nowrap border border-solid flex-1s dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="/todo-app/completed" rel="noopener noreferrer" > Done </Link>

        </div>
    </div>
  );
}
