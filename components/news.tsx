import Image from "next/image";

export function NewsPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Luxury Sports Car"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-8 md:p-12 lg:p-16">
          <div className="space-y-4 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{`The Future of Automotive Innovation`}</h1>
            <p className="text-lg md:text-xl">
              {"Explore the latest advancements in electric vehicles, autonomous driving, and cutting-edge car design."}
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://images.pexels.com/photos/12964219/pexels-photo-12964219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Electric Vehicle"
                className="w-full h-64 object-cover rounded-lg"
                width={640}
                height={360}
              />
              <h2 className="text-2xl font-bold mt-4">{`Revolutionizing Electric Vehicles`}</h2>
              <p className="text-muted-foreground mt-2">
                {`Advancements in battery technology and charging infrastructure are driving the rapid adoption of
                electric vehicles.`}
              </p>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 text-muted-foreground italic">
                {`"The future of transportation is electric, and we're just\n scratching the surface of what's possible."`}
                <cite className="block mt-2 not-italic text-primary-foreground">
                  {`- Jane Doe, Automotive Industry Analyst`}
                </cite>
              </blockquote>
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Autonomous Driving"
                className="w-full h-64 object-cover rounded-lg"
                width={640}
                height={360}
              />
              <h2 className="text-2xl font-bold mt-4">{`Autonomous Driving Technologies`}</h2>
              <p className="text-muted-foreground mt-2">
                {`Self-driving cars are becoming a reality, with advancements in sensors, AI, and connectivity.`}
              </p>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 text-muted-foreground italic">
                {`"Autonomous driving will revolutionize the way we think about\n transportation, making our roads safer
                and more efficient."`}
                <cite className="block mt-2 not-italic text-primary-foreground">
                  {`- John Smith, Autonomous Driving Expert`}
                </cite>
              </blockquote>
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Car Design"
                className="w-full h-64 object-cover rounded-lg"
                width={640}
                height={360}
              />
              <h2 className="text-2xl font-bold mt-4">{`Innovative Car Design`}</h2>
              <p className="text-muted-foreground mt-2">
                {`Designers are pushing the boundaries of car design, creating sleek, aerodynamic, and sustainable
                vehicles.`}
              </p>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 text-muted-foreground italic">
                {`"The future of car design is all about creating vehicles that\n are not only beautiful, but also
                environmentally friendly and\n efficient."`}
                <cite className="block mt-2 not-italic text-primary-foreground">
                  {`- Sarah Lee, Automotive Design Specialist`}
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-64 md:h-auto">
              <Image
                src="https://images.pexels.com/photos/18346521/pexels-photo-18346521/free-photo-of-black-car-parked-in-the-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Future Car Design"
                className="w-full h-full object-cover rounded-lg"
                width={640}
                height={360}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{`The Future of Car Design`}</h2>
              <p className="text-muted-foreground">
                {`As the automotive industry continues to evolve, car designers are exploring new materials, shapes, and
                technologies to create vehicles that are not only visually stunning, but also environmentally
                sustainable and highly efficient.`}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-bold">{`Aerodynamic Design`}</h3>
                  <p className="text-muted-foreground mt-2">
                    {`Streamlined shapes and advanced aerodynamics are improving fuel efficiency and performance.`}
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-bold">{`Sustainable Materials`}</h3>
                  <p className="text-muted-foreground mt-2">
                    {`Eco-friendly materials like recycled plastics and plant-based composites are being used in car manufacturing.`}
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-bold">{`Integrated Technology`}</h3>
                  <p className="text-muted-foreground mt-2">
                    {`Seamless integration of advanced sensors, displays, and connectivity features are transforming the driving experience.`}
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-bold">{`Personalization`}</h3>
                  <p className="text-muted-foreground mt-2">
                    {`Customizable features and personalized design options are allowing drivers to create their dream vehicles.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
