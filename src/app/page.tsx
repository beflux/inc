export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col justify-center items-center flex-1 w-full gap-8">
        <h1 className="text-[clamp(2rem,8vw,4.5rem)] font-light tracking-[0.02em] text-gray-dark animate-fade-in opacity-0">
          Beflux, Inc.
        </h1>
        <a
          href="mailto:contact@beflux.jp"
          className="text-[clamp(0.875rem,2vw,1rem)] font-light tracking-[0.05em] text-gray-light no-underline animate-fade-in-delay opacity-0 transition-colors duration-200 hover:text-gray-dark"
        >
          contact@beflux.jp
        </a>
      </main>
      <footer className="py-6 text-center">
        <small className="text-[clamp(0.625rem,1.5vw,0.75rem)] font-light tracking-[0.05em] text-gray-light">
          © {new Date().getFullYear()} Beflux, Inc.
        </small>
      </footer>
    </div>
  )
}
