//RSC - React Server Component
// SSR - Server Side Rendering  Enabled by default in Next.js 13 app directory

import Link from "next/link";
export default function MoviesPage() {
  return (
    <div className="flex flex-col text-center min-h-screen">
    

      <main className="flex-12 bg-purple-700 h-800 text-4xl py-16>">This is Movies page


        <Link   href="/" className="text-white text-sm bg-black p-4 rounded-full">
          Go to Home Page
        </Link>

      </main>

      <footer className="flex-4 bg-gray-800 h-50">
        This is my footer
      </footer>
    </div>
  );
}
