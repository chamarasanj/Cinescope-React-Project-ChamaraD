//RSC - React Server Component
// SSR - Server Side Rendering  Enabled by default in Next.js 13 app directory
export default function HomePage() {
  return (
    <div className="flex flex-col text-center min-h-screen">
      <header className="flex-1 bg-blue-500 text-white h-20">
        This is my header
      </header>

      <main className="flex-12 bg-purple-700 h-800>">test page - chamara</main>

      <footer className="flex-4 bg-gray-800 h-50">
        This is my footer
      </footer>
    </div>
  );
}
