import Link from "next/link"
import ImageEffect from "./image-effect"
import placeholderImage from "/public/water.jpg"; 

export function Blog() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="w-full bg-primary text-primary-foreground  py-12 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:gap-10 items-center md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Discover the Latest Insights
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                Explore our collection of thought-provoking articles and stay ahead of the curve.
              </p>
            </div>
            <ImageEffect src={placeholderImage} width={800} height={600} alt="Hero Image" className="rounded-lg object-cover" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <ImageEffect
                  src={placeholderImage} 
                  width={400}
                  height={300}
                  alt="Blog Post Image"
                  className="w-full h-60 object-cover transition-all group-hover:scale-105"
                />
               
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary">
                  Unlocking the Power of Artificial Intelligence
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the latest advancements in AI and how they are transforming industries across the globe.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <ImageEffect
                  src={placeholderImage} 
                  width={400}
                  height={300}
                  alt="Blog Post Image"
                  className="w-full h-60 object-cover transition-all group-hover:scale-105"
                />
               
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary">The Future of Remote Work</h3>
                <p className="text-muted-foreground line-clamp-2">
                  Discover how the pandemic has forever changed the way we work and what the future holds for remote
                  work.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <ImageEffect
                  src={placeholderImage} 
                  width={400}
                  height={300}
                  alt="Blog Post Image"
                  className="w-full h-60 object-cover transition-all group-hover:scale-105"
                />
               
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary">The Rise of Sustainable Fashion</h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the latest trends and innovations in the world of sustainable fashion.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <ImageEffect
                  src={placeholderImage} 
                  width={400}
                  height={300}
                  alt="Blog Post Image"
                  className="w-full h-60 object-cover transition-all group-hover:scale-105"
                />
               
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary">The Future of Renewable Energy</h3>
                <p className="text-muted-foreground line-clamp-2">
                  Discover the latest advancements in renewable energy and how they are shaping the future of our
                  planet.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <ImageEffect
                  src={placeholderImage} 
                  width={400}
                  height={300}
                  alt="Blog Post Image"
                  className="w-full h-60 object-cover transition-all group-hover:scale-105"
                />
               
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary">The Rise of Cryptocurrency</h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the world of cryptocurrency and how it is revolutionizing the financial landscape.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <ImageEffect
                  src={placeholderImage} 
                  width={400}
                  height={300}
                  alt="Blog Post Image"
                  className="w-full h-60 object-cover transition-all group-hover:scale-105"
                />
               
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary">The Future of Healthcare</h3>
                <p className="text-muted-foreground line-clamp-2">
                  Discover how technology is transforming the healthcare industry and improving patient outcomes.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-8 md:py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Blog</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <p className="text-sm">&copy; 2024 Acme Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
