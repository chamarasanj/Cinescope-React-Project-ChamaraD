//RSC - React Server Component
// SSR - Server Side Rendering  Enabled by default in Next.js 13 app directory


import Link from "next/link";
import { MainNav } from "@/components/main-nav";
export default function MoviesPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <MainNav/>
      <main className="flex flex-col flex-12 justify-center items-center gap-4 bg-purple-700  text-4xl py-16>">
        This is Movies page
        <Link href="/" className="text-white text-sm bg-black p-4 rounded-full">
          Go to Home Page
        </Link>
      </main>
    </div>
  );
}
