import SectionHeading from "@/components/SectionHeading";
import VideoCameraImg from "../../../assets/images/video-camera.svg";

export default function Service() {
    const services = [
        {
            id: 1,
            title: "Wedding Photography & Cinematography",
            description:
                "Capture the magic of your special day with stunning photographs and cinematic videos that tell your love story. From intimate moments to grand celebrations, I ensure every emotion is beautifully preserved.",
        },
        {
            id: 2,
            title: "Product Photography",
            description:
                "Showcase your products with professional-grade images that highlight their features and aesthetics. Perfect for e-commerce, advertisements, and catalogs, I create visuals that elevate your brand.",
        },
        {
            id: 3,
            title: "Commercial & TVC Cinematography",
            description:
                "Bring your commercial vision to life with impactful and engaging videos. From creative concepts to flawless execution, I produce TV commercials and promotional content that leave a lasting impression.",
        },
        {
            id: 4,
            title: "Short Film Production",
            description:
                "Dive into storytelling with cinematic short films that captivate and inspire. Whether it’s a narrative, documentary, or artistic project, I deliver high-quality productions tailored to your vision.",
        },
        {
            id: 5,
            title: "Photo & Video Editing",
            description:
                "Enhance your visuals with professional editing services. From color grading to retouching, I refine every detail to ensure your photos and videos look their absolute best.",
        },
        {
            id: 6,
            title: "Event Coverage",
            description:
                "Relive the energy and excitement of your events with comprehensive photo and video coverage. Be it corporate events, birthdays, or cultural gatherings, I ensure no moment goes unnoticed.",
        },
        {
            id: 7,
            title: "Fashion & Portrait Photography",
            description:
                "Highlight your style and personality with dynamic fashion shoots and artistic portraits. I craft visually stunning and creative compositions tailored to your aesthetic.",
        },
        {
            id: 8,
            title: "Cinematic Wedding Films",
            description:
                "Transform your wedding day into a timeless cinematic experience. I create heartwarming films that reflect your unique love story with elegance and artistry.",
        },
        {
            id: 9,
            title: "Branding & Promotional Content",
            description:
                "Strengthen your brand identity with captivating visuals. From promotional videos to branded photography, I help businesses stand out and connect with their audience.",
        },
        {
            id: 10,
            title: "Creative Concept Shoots",
            description:
                "Collaborate on unique and imaginative photography and cinematography projects. I bring innovative ideas to life, ensuring your vision is expressed through creative visuals.",
        },
    ];

    return (
        <section id={"#services"} className="pt-10 pb-36">
            <div className="row">
                <SectionHeading
                    title={"Expertise in Every Frame"}
                    description={
                        "I am dedicated to delivering exceptional visual stories that truly capture the essence of your moments. From breathtaking photography to cinematic creations, I approach each project with passion and precision. Let me bring your vision to life with timeless works that inspire and resonate."
                    }
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-20">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-transparent border-4 border-secondary-700/80 py-6 px-3 md:p-6 flex items-center justify-between flex-col gap-4 shadow-[6px_6px_#7c8613] w-full md:w-[95%]"
                        >
                            <div className="w-full flex items-center justify-start gap-5">
                                <img
                                    src={VideoCameraImg}
                                    className="w-14 md:w-20 h-14 md:h-20 bg-primary-500/10 p-3 md:p-5 rounded-full"
                                    alt=""
                                />
                                <h4 className="text-2xl md:text-3xl font-semibold">
                                    {service.title}
                                </h4>
                            </div>
                            <div className="w-full">
                                <p className="text-sm md:text-base font-medium px-4">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
