import Image from "next/image";

interface CardProps {
    title: string;
    author: string;
    date: Date;
    description: string;
  }

export default function Card({ title, date, author, description }: CardProps) {
    return (
        <div className="card">
                <div className="flex gap-3 items-center">
                  <div className="img">
                    <Image
                        className="dark:invert"
                        src="/vercel.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                      />
                  </div>
                  <div className="w-full">
                    <h5 className="font-bold">{title}</h5>
                    <div className="flex flex-1 gap-5 justify-between">
                      <h6 className="text-nowrap">Author: <span>{author}</span></h6>
                      <h6 className="text-right w-full italic">
                          {date.toLocaleDateString()}
                        </h6>
                    </div>
                  </div>
                </div>
                    <p className="border rounded-md">
                    {description}
                    </p>
              </div>
    );
}