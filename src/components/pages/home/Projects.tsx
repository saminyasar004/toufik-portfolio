import ProjectImg1 from "../../../assets/images/project-image-1.jpg";
import ProjectImg2 from "../../../assets/images/project-image-2.jpg";
import ProjectImg3 from "../../../assets/images/project-image-3.jpg";
import ProjectImg4 from "../../../assets/images/project-image-4.jpg";
import ProjectImg5 from "../../../assets/images/project-image-5.jpg";
import ProjectImg6 from "../../../assets/images/project-image-6.jpg";
import ProjectImg7 from "../../../assets/images/wedding-1.jpg";
import ProjectImg8 from "../../../assets/images/wedding-2.jpg";
import ProjectImg9 from "../../../assets/images/wedding-3.jpg";
import Video1 from "../../../assets/images/video-1.mp4";

import SectionHeading from "@/components/SectionHeading";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { VideoPlayer } from "@/components/ui/video-player";
import Marquee from "@/components/ui/marquee";

const ProjectDetailsDialog = ({
    id,
    imgs,
    title,
    description,
}: {
    id: number;
    imgs: string[];
    title: string;
    description: string;
}) => {
    const videos = [
        Video1,
        "https://static.videezy.com/system/resources/previews/000/000/168/original/Record.mp4",
        "https://static.videezy.com/system/resources/previews/000/004/381/original/Sunset_06.mp4",
        "https://static.videezy.com/system/resources/previews/000/044/479/original/Mountain_26.mp4",
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const videoCarouselRef = useRef<any>(null);

    // const handleSlideChange = (index: number) => {
    //     setActiveIndex(index);
    // };

    const handleSelect = () => {
        if (videoCarouselRef.current) {
            const selectedIndex = videoCarouselRef.current.selectedScrollSnap();
            console.log(selectedIndex);
            setActiveIndex(selectedIndex);
        }
    };

    useEffect(() => {
        if (videoCarouselRef.current) {
            videoCarouselRef.current.on("select", handleSelect);
        }
        return () => {
            if (videoCarouselRef.current) {
                videoCarouselRef.current.off("select", handleSelect);
            }
        };
    }, []);

    return (
        <>
            <Dialog key={id}>
                <DialogTrigger asChild>
                    <Button variant={"link"} size={"sm"}>
                        Show Details
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1200px] overflow-y-auto max-h-[90vh]">
                    <DialogHeader>
                        <div className="py-8">
                            <Carousel
                                opts={{
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 1500,
                                        stopOnInteraction: false,
                                    }),
                                ]}
                            >
                                <CarouselContent>
                                    {imgs.map((img, i) => (
                                        <CarouselItem key={i}>
                                            <div className="w-[100%] lg:w-[100%] h-[20rem] lg:h-[50rem]">
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </DialogHeader>
                    <DialogDescription>
                        <div className="h-auto space-y-5">
                            <h4 className="text-3xl font-semibold">{title}</h4>
                            <p className="text-base font-normal text-justify">
                                {description}
                            </p>

                            <p className="text-base font-normal text-justify">
                                hello Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt molestias error
                                veritatis asperiores. Tempora earum, non error
                                odio, aperiam cupiditate incidunt rerum
                                temporibus dicta illum iure perferendis
                                doloribus officia quidem.
                            </p>

                            <p className="text-base font-normal text-justify">
                                Those an equal point no years do. Depend warmth
                                fat but her but played. Shy and subjects
                                wondered trifling pleasant. Prudent cordial
                                comfort do no on colonel as assured chicken.
                                Smart mrs day which begin. Snug do sold mr it if
                                such. Terminated uncommonly at at estimating.
                                Man behaviour met moonlight extremity acuteness
                                direction. Dissuade ecstatic and properly saw
                                entirely sir why laughter endeavor. In on my
                                jointure horrible margaret suitable he followed
                                speedily. Indeed vanity excuse or mr lovers of
                                on. By offer scale an stuff. Blush be sorry no
                                sight. Sang lose of hour then he left find.
                                Exquisite cordially mr happiness of neglected
                                distrusts. Boisterous impossible unaffected he
                                me everything. Is fine loud deal an rent open
                                give. Find upon and sent spot song son eyes. Do
                                endeavor he differed carriage is learning my
                                graceful. Feel plan know is he like on pure. See
                                burst found sir met think hopes are marry among.
                                Delightful remarkably new assistance saw
                                literature mrs favourable. Am terminated it
                                excellence invitation projection as. She
                                graceful shy believed distance use nay. Lively
                                is people so basket ladies window expect. Supply
                                as so period it enough income he genius.
                                Themselves acceptance bed sympathize get
                                dissimilar way admiration son. Design for are
                                edward regret met lovers. This are calm case
                                roof and. Carried nothing on am warrant towards.
                                Polite in of in oh needed itself silent course.
                                Assistance travelling so especially do
                                prosperous appearance mr no celebrated. Wanted
                                easily in my called formed suffer. Songs hoped
                                sense as taken ye mirth at. Believe fat how six
                                drawing pursuit minutes far. Same do seen head
                                am part it dear open to. Whatever may scarcely
                                judgment had. Paid was hill sir high. For him
                                precaution any advantages dissimilar comparison
                                few terminated projecting. Prevailed discovery
                                immediate objection of ye at. Repair summer one
                                winter living feebly pretty his. In so sense am
                                known these since. Shortly respect ask cousins
                                brought add tedious nay. Expect relied do we
                                genius is. On as around spirit of hearts genius.
                                Is raptures daughter branched laughter peculiar
                                in settling. View fine me gone this name an
                                rank. Compact greater and demands mrs the
                                parlors. Park be fine easy am size away. Him and
                                fine bred knew. At of hardly sister favour. As
                                society explain country raising weather of.
                                Sentiments nor everything off out uncommonly
                                partiality bed. No comfort do written conduct at
                                prevent manners on. Celebrated contrasted
                                discretion him sympathize her collecting
                                occasional. Do answered bachelor occasion in of
                                offended no concerns. Supply worthy warmth
                                branch of no ye. Voice tried known to as my to.
                                Though wished merits or be. Alone visit use
                                these smart rooms ham. No waiting in on enjoyed
                                placing it inquiry. May musical arrival beloved
                                luckily adapted him. Shyness mention married son
                                she his started now. Rose if as past near were.
                                To graceful he elegance oh moderate attended
                                entrance pleasure. Vulgar saw fat sudden edward
                                way played either. Thoughts smallest at or
                                peculiar relation breeding produced an. At
                                depart spirit on stairs. She the either are
                                wisdom praise things she before. Be mother
                                itself vanity favour do me of. Begin sex was
                                power joy after had walls miles. His followed
                                carriage proposal entrance directly had
                                elegance. Greater for cottage gay parties
                                natural. Remaining he furniture on he discourse
                                suspected perpetual. Power dried her taken place
                                day ought the. Four and our ham west miss.
                                Education shameless who middleton agreement how.
                                We in found world chief is at means weeks smile.
                                Those an equal point no years do. Depend warmth
                                fat but her but played. Shy and subjects
                                wondered trifling pleasant. Prudent cordial
                                comfort do no on colonel as assured chicken.
                                Smart mrs day which begin. Snug do sold mr it if
                                such. Terminated uncommonly at at estimating.
                                Man behaviour met moonlight extremity acuteness
                                direction. Dissuade ecstatic and properly saw
                                entirely sir why laughter endeavor. In on my
                                jointure horrible margaret suitable he followed
                                speedily. Indeed vanity excuse or mr lovers of
                                on. By offer scale an stuff. Blush be sorry no
                                sight. Sang lose of hour then he left find.
                                Exquisite cordially mr happiness of neglected
                                distrusts. Boisterous impossible unaffected he
                                me everything. Is fine loud deal an rent open
                                give. Find upon and sent spot song son eyes. Do
                                endeavor he differed carriage is learning my
                                graceful. Feel plan know is he like on pure. See
                                burst found sir met think hopes are marry among.
                                Delightful remarkably new assistance saw
                                literature mrs favourable. Am terminated it
                                excellence invitation projection as. She
                                graceful shy believed distance use nay. Lively
                                is people so basket ladies window expect. Supply
                                as so period it enough income he genius.
                                Themselves acceptance bed sympathize get
                                dissimilar way admiration son. Design for are
                                edward regret met lovers. This are calm case
                                roof and. Carried nothing on am warrant towards.
                                Polite in of in oh needed itself silent course.
                                Assistance travelling so especially do
                                prosperous appearance mr no celebrated. Wanted
                                easily in my called formed suffer. Songs hoped
                                sense as taken ye mirth at. Believe fat how six
                                drawing pursuit minutes far. Same do seen head
                                am part it dear open to. Whatever may scarcely
                                judgment had. Paid was hill sir high. For him
                                precaution any advantages dissimilar comparison
                                few terminated projecting. Prevailed discovery
                                immediate objection of ye at. Repair summer one
                                winter living feebly pretty his. In so sense am
                                known these since. Shortly respect ask cousins
                                brought add tedious nay. Expect relied do we
                                genius is. On as around spirit of hearts genius.
                                Is raptures daughter branched laughter peculiar
                                in settling. View fine me gone this name an
                                rank. Compact greater and demands mrs the
                                parlors. Park be fine easy am size away. Him and
                                fine bred knew. At of hardly sister favour. As
                                society explain country raising weather of.
                                Sentiments nor everything off out uncommonly
                                partiality bed. No comfort do written conduct at
                                prevent manners on. Celebrated contrasted
                                discretion him sympathize her collecting
                                occasional. Do answered bachelor occasion in of
                                offended no concerns. Supply worthy warmth
                                branch of no ye. Voice tried known to as my to.
                                Though wished merits or be. Alone visit use
                                these smart rooms ham. No waiting in on enjoyed
                                placing it inquiry. May musical arrival beloved
                                luckily adapted him. Shyness mention married son
                                she his started now. Rose if as past near were.
                                To graceful he elegance oh moderate attended
                                entrance pleasure. Vulgar saw fat sudden edward
                                way played either. Thoughts smallest at or
                                peculiar relation breeding produced an. At
                                depart spirit on stairs. She the either are
                                wisdom praise things she before. Be mother
                                itself vanity favour do me of. Begin sex was
                                power joy after had walls miles. His followed
                                carriage proposal entrance directly had
                                elegance. Greater for cottage gay parties
                                natural. Remaining he furniture on he discourse
                                suspected perpetual. Power dried her taken place
                                day ought the. Four and our ham west miss.
                                Education shameless who middleton agreement how.
                                We in found world chief is at means weeks smile.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Carousel className="w-full" ref={videoCarouselRef}>
                                <CarouselContent>
                                    {videos.map((video, index) => (
                                        <CarouselItem key={index}>
                                            <div className="aspect-video">
                                                <VideoPlayer
                                                    src={video}
                                                    isActive={
                                                        activeIndex === index
                                                    }
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </DialogDescription>
                    <DialogFooter></DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

const ProjectCard = ({
    id,
    title,
    description,
    imgs,
}: {
    id: number;
    title: string;
    description: string;
    imgs: string[];
}) => {
    return (
        <>
            <Card className="w-[90%] mx-auto md:w-full border-2 border-secondary-800/60 shadow-md transition-all duration-300 transform animate-fade-in">
                <CardHeader className="p-0">
                    <CardTitle className="overflow-hidden rounded-t-2xl">
                        <div className="w-[100%] lg:w-[100%] h-[20rem] lg:h-[22rem] rounded-t-2xl border-t-4 border-transparent relative before:content-[''] before:absolute before:-top-1 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-primary-500 before:to-secondary-500 before:-z-10">
                            <img
                                src={imgs[0]}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </CardTitle>
                    <CardDescription className="py-5 px-5">
                        <h4 className="text-2xl font-semibold">{title}</h4>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="py-3 text-base font-medium">
                        {description.slice(0, 250) + "..."}
                    </p>
                </CardContent>
                <CardFooter>
                    <ProjectDetailsDialog
                        id={id}
                        title={title}
                        description={description}
                        imgs={imgs}
                    />
                </CardFooter>
            </Card>
        </>
    );
};

export default function Projects() {
    const categories = ["all", "wedding", "film", "product", "model", "tvc"];
    const projects = [
        {
            id: 1,
            title: "Wedding Bliss",
            category: "product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg1,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 2,
            title: "Corporate Film",
            category: "film",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg2,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 3,
            title: "Product Launch",
            category: "product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg3,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 4,
            title: "Fashion Shoot",
            category: "model",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg4,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 5,
            title: "TV Commercial",
            category: "tvc",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg5,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 6,
            title: "Wedding Elegance",
            category: "tvc",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg6,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 7,
            title: "TVC Elegance",
            category: "wedding",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg7,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 8,
            title: "Product Elegance",
            category: "wedding",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg8,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
        {
            id: 9,
            title: "Product Elegance",
            category: "wedding",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus mollitia repellat autem doloremque quia libero, tenetur quis recusandae quos nisi. Earum, quae laborum molestiae perspiciatis mollitia ea soluta illo aliquid?",
            imgs: [
                ProjectImg9,
                ProjectImg2,
                ProjectImg3,
                ProjectImg4,
                ProjectImg5,
                ProjectImg6,
                ProjectImg7,
                ProjectImg8,
            ],
        },
    ];

    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [visibleCount, setVisibleCount] = useState<number>(4);

    const filteredProjects =
        activeCategory === "all"
            ? projects.slice(0, visibleCount)
            : projects
                  .filter((project) => project.category === activeCategory)
                  .slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    return (
        <section id={"#projects"} className="pt-10 pb-36">
            <div className="row">
                <SectionHeading
                    title="Frames of Excellence"
                    description="Explore a curated collection of my finest works, showcasing his mastery in photography and cinematography. Each project reflects his dedication to capturing moments with precision and creativity, transforming visions into timeless art."
                />

                <div className="w-full flex items-center justify-center flex-wrap gap-3 py-6">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setVisibleCount(4); // Reset count on category change
                            }}
                            variant={
                                activeCategory === category
                                    ? "default"
                                    : "secondary"
                            }
                            size={"sm"}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8 2xl:gap-6 py-10 items-center">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            imgs={project.imgs}
                        />
                    ))}
                </div>

                {visibleCount <
                    (activeCategory === "all"
                        ? projects.length
                        : projects.filter(
                              (project) => project.category === activeCategory
                          ).length) && (
                    <div className="w-full flex items-center justify-center py-10">
                        <Button
                            onClick={loadMore}
                            variant={"default"}
                            size={"default"}
                        >
                            Load More
                        </Button>
                    </div>
                )}
            </div>

            <div className="relative bottom-0">
                <Marquee
                    pauseOnHover
                    className="[--duration:50s] w-full bg-secondary-100 text-secondary-900 py-6"
                >
                    {Array.from({ length: 20 }).map((_, i) => (
                        <h4 key={i} className="text-4xl font-medium w-full">
                            Let's fix a schedule!
                        </h4>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
