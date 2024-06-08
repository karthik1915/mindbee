import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingIcons } from "@/app/components/icons/orbitingIcons";

export function OrbitingSection() {
  return (
    <div
      id="about"
      className="relative mx-auto my-7 grid w-full max-w-6xl grid-rows-2 items-start justify-center text-center lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:justify-start lg:text-left"
    >
      <div className="relative mx-auto flex h-[400px] w-full max-w-6xl items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Mindbee
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={60}
        >
          <OrbitingIcons.github />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={60}
        >
          <OrbitingIcons.heroku />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          reverse
          radius={150}
          duration={20}
        >
          <OrbitingIcons.salesforce />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          reverse
          radius={150}
          duration={20}
          delay={20}
        >
          <OrbitingIcons.postman />
        </OrbitingCircles>
      </div>
      <div>
        <p className="mb-6 text-3xl font-bold lg:text-5xl">
          Constantly Evolving Landscape
        </p>
        <div className="grid grid-cols-2 grid-rows-2 justify-center px-5 text-center md:text-left lg:px-0">
          <p className="font-oxygen text-xl font-semibold"># Best Courses</p>
          <div className="mb-3">
            Best courses for salesforce online
            <p className="cursor-pointer font-semibold underline">Learn More</p>
          </div>
          <p className="font-oxygen text-xl font-semibold"># Best Practices</p>
          <div className="">
            Best courses for salesforce online
            <p className="cursor-pointer font-semibold underline">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
