export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full gap-8">
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
  )
}
