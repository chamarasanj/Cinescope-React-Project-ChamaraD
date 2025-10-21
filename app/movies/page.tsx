//RSC - React Server Component
// SSR - Server Side Rendering  Enabled by default in Next.js 13 app directory

import Link from "next/link";
export default function MoviesPage() {
  return (
   

      <main className="flex flex-col flex-12 justify-center items-center gap-4 bg-purple-700  text-4xl py-16>">This is Movies page


        <Link   href="/" className="text-white text-sm bg-black p-4 rounded-full">
          Go to Home Page
        </Link>

      </main>

    
  
  );
}
