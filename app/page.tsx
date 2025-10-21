//RSC - React Server Component
// SSR - Server Side Rendering  Enabled by default in Next.js 13 app directory

import Link from "next/link";
import Image from "next/image"; 

export default function HomePage() {
  return (
    <main className="flex flex-col flex-12 justify-center items-center gap-4 bg-purple-700  text-4xl py-16>">
      This is Home Page
      <Link
        href="/movies"
        className="text-white text-sm bg-black p-4 rounded-full"
      >
        Go to Movies Page
      </Link>

      <div>
        <Image src="/assets/Movie Banner.png" alt="Movie List" width={600} height={500}/>
      </div>
    </main>
  );
}
