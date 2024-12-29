import Meteors from "@/components/ui/meteors";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section
            id={"#home"}
            className="pt-20 pb-36 min-h-[900px] overflow-x-hidden relative"
        >
            <Meteors number={30} />
            <div className="row py-28 text-center space-y-8">
                <div className="space-y-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-text-400/90 to-background-100/50 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
                    <h2 className="text-4xl font-bold md:leading-12 tracking-tighter xl:text-6xl/none mb-3">
                        Capturing Moments Creating Stories.
                    </h2>
                    <p className="lg:w-1/2 mx-auto text-sm md:text-base lg:text-xl font-medium mt-4">
                        Every moment tells a story, and I'm here to capture
                        yours. As a professional photographer and
                        cinematographer, I specialize in crafting stunning
                        visuals that bring your memories to life. From fashion
                        and weddings to cinematic films, let's create something
                        unforgettable together.
                    </p>

                    <p className="lg:w-1/2 mx-auto text-sm md:text-base lg:text-xl font-medium mt-4">
                        Professional Photographer & Cinematographer for Every
                        Occasion.
                    </p>

                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] overflow-hidden inset-x-0 inset-y-[-30%] h-full opacity-35"
                        )}
                    />
                </div>
                <div className="space-x-4">
                    <Button variant={"outline"}>Get my CV</Button>
                    <Button>Hire Me!</Button>
                </div>
            </div>
        </section>
    );
}
