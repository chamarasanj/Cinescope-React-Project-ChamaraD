//RSC - React Server Component
// SSR - Server Side Rendering  Enabled by default in Next.js 13 app directory

import Link from "next/link";
export default function HomePage() {
  return (
    <div className="flex flex-col text-center min-h-screen">
      <main className="flex-12 flex-col justify-center bg-purple-700 items-center gap-4>">
        This is Home Page
        <Link   href="/movies" className="text-white text-sm bg-black p-4 rounded-full">
          Go to Movies Page
        </Link>
      </main>

      <footer className="flex-4 bg-gray-800 h-50">This is my footer</footer>
    </div>
  );
}
