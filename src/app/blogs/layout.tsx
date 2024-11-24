
import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className='h-full flex flex-col items-center justify-between'>
      <main className='flex-1 w-full overflow-x-hidden overflow-y-hidden'>
        {children}
      </main>
    </div>
  );
}
