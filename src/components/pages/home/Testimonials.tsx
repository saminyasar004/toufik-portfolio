import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import MaleAvatar from "../../../assets/images/male-avatar.png";
import FemaleAvatar from "../../../assets/images/female-avatar.png";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: MaleAvatar,
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: FemaleAvatar,
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: MaleAvatar,
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: FemaleAvatar,
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eligendi, excepturi doloremque consectetur placeat eaque dignissimos, non beatae repellendus molestiae laborum! Non eum eius ducimus sunt deleniti nostrum ipsa soluta.",
        img: MaleAvatar,
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: FemaleAvatar,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username?: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 bg-secondary-800/20"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-base font-medium text-slate-100">
                        {name}
                    </figcaption>
                    {username && (
                        <p className="text-xs font-medium dark:text-white/40">
                            {username}
                        </p>
                    )}
                </div>
            </div>
            <blockquote className="mt-2 text-sm lg:font-medium text-slate-50">
                {body}
            </blockquote>
        </figure>
    );
};

export default function Testimonials() {
    return (
        <section id={"#testimonials"} className="pt-10 pb-36">
            <div className="row space-y-4">
                <SectionHeading
                    title="Through Their Eyes"
                    description="My clients consistently praise his unmatched creativity, professionalism, and ability to capture emotions through his lens. From stunning wedding moments to captivating product shots, his work leaves a lasting impression, turning memories into timeless art. Their words reflect the trust and admiration he has earned through his dedication and talent."
                />

                <div className="w-full">
                    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                        <Marquee pauseOnHover className="[--duration:30s]">
                            {firstRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <Marquee
                            reverse
                            pauseOnHover
                            className="[--duration:30s]"
                        >
                            {secondRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-[20%] lg:w-[40%] bg-gradient-to-r from-background-950"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-[20%] lg:w-[40%] bg-gradient-to-l from-background-950"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
