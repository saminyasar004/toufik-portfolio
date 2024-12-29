import SectionHeading from "@/components/SectionHeading";
import ToufikImg from "../../../assets/images/toufik.jpg";
import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function About() {
    return (
        <section id={"#about"} className="pt-10 pb-36">
            <div className="row space-y-10 lg:space-y-28">
                <SectionHeading title="Behind The Lens" />

                <div className="w-full grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:py-10">
                    <div className="space-y-8 text-justify">
                        <h3 className="text-3xl lg:text-5xl font-semibold text-center lg:text-left leading-12">
                            Meet Abdullah Al{" "}
                            <span className="font-effect">Toufik</span>
                        </h3>
                        <p className="text-sm md:text-base font-normal">
                            Abdullah Al Toufik is a passionate and highly
                            skilled photographer and cinematographer with a keen
                            eye for detail and a creative soul. Over the years,
                            Toufik has established himself as a versatile
                            artist, capturing the essence of moments through his
                            lens. Specializing in fashion, wedding, and product
                            photography, he combines technical expertise with
                            artistic intuition to create visuals that tell
                            compelling stories. His ability to adapt to diverse
                            environments and themes ensures that every project
                            reflects authenticity and precision. With an innate
                            ability to connect with his subjects, Toufik brings
                            a unique perspective to every frame, transforming
                            ordinary moments into extraordinary memories.
                        </p>

                        <p className="text-sm md:text-base font-normal">
                            Beyond photography, Toufik is an exceptional
                            cinematographer, weaving narratives that resonate
                            emotionally and visually. His wedding and film
                            cinematography work stands as a testament to his
                            ability to encapsulate the beauty of fleeting
                            moments into timeless stories. Driven by his love
                            for storytelling and innovation, he consistently
                            pushes creative boundaries to deliver unmatched
                            quality. Toufik's dedication to his craft, combined
                            with his warm personality, has earned him trust and
                            admiration from clients and collaborators alike.
                            Whether it's a grand event or an intimate portrait
                            session, Toufik's work reflects his passion for
                            capturing life's most precious moments with finesse
                            and grace.
                        </p>

                        <div className="w-full flex items-center lg:items-start justify-center lg:justify-start gap-4">
                            <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full bg-primary-500 text-text-950 border-2rem border-primary-500 transition-all duration-300 hover:bg-transparent hover:text-primary-500 cursor-pointer">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <Facebook
                                        size={20}
                                        className="pointer-events-none"
                                        aria-label="Linkedin"
                                    />
                                </a>
                            </div>

                            <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full bg-primary-500 text-text-950 border-2rem border-primary-500 transition-all duration-300 hover:bg-transparent hover:text-primary-500 cursor-pointer">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <Instagram
                                        size={20}
                                        className="pointer-events-none"
                                        aria-label="Linkedin"
                                    />
                                </a>
                            </div>

                            <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full bg-primary-500 text-text-950 border-2rem border-primary-500 transition-all duration-300 hover:bg-transparent hover:text-primary-500 cursor-pointer">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <Linkedin
                                        size={20}
                                        className="pointer-events-none"
                                        aria-label="Linkedin"
                                    />
                                </a>
                            </div>

                            <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full bg-primary-500 text-text-950 border-2rem border-primary-500 transition-all duration-300 hover:bg-transparent hover:text-primary-500 cursor-pointer">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <Twitter
                                        size={20}
                                        className="pointer-events-none"
                                        aria-label="Linkedin"
                                    />
                                </a>
                            </div>

                            <div className="w-10 h-10 p-1 flex items-center justify-center rounded-full bg-primary-500 text-text-950 border-2rem border-primary-500 transition-all duration-300 hover:bg-transparent hover:text-primary-500 cursor-pointer">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <Dribbble
                                        size={20}
                                        className="pointer-events-none"
                                        aria-label="Linkedin"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="relative border-4 border-slate-100 shadow-md rounded-lg w-[300px] lg:w-[350px] h-[25rem]">
                            <img
                                src={ToufikImg}
                                alt={"Abdullah Al Toufik"}
                                className="w-full h-full object-cover z-[2]"
                            />
                            <div className="absolute top-0 left-1 md:left-2 border-4 border-slate-100 shadow-md rounded-lg bg-primary-500/40 w-[300px] lg:w-[350px] h-full -z-[2] origin-bottom rotate-3 lg:rotate-6"></div>
                        </div>
                        <DotPattern
                            className={cn(
                                "-z-20 w-full [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
