import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-primary text-primary-foreground">
        <div className="container space-y-6 px-4 md:px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          mediakart.org
          </h1>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl pb-6">
          Test for Full Stack Developer

          </p>
        </div>
      </section>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 px-4 md:px-6">
        <Link
          href="news"
          className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          prefetch={false}
        >
          <div className="p-4 bg-background">
            <h3 className="text-lg font-semibold">News</h3>
            <p className="text-muted-foreground">/news</p>
          </div>
        </Link>
        <Link
          href="tick-tac-toe"
          className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          prefetch={false}
        >
          <div className="p-4 bg-background">
            <h3 className="text-lg font-semibold">Tick Tac Toe</h3>
            <p className="text-muted-foreground">/tick-tac-toe</p>
          </div>
        </Link>
        <Link
          href="magnifying-circle"
          className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          prefetch={false}
        >
          <div className="p-4 bg-background">
            <h3 className="text-lg font-semibold">Magnifying Circle</h3>
            <p className="text-muted-foreground">/magnifying-circle</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
