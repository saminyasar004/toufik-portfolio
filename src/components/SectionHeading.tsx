import HeadingUnderline from "../assets/images/heading-underline.svg";

interface SectionHeadingProps {
    title: string;
    description?: string;
}

export default function SectionHeading({
    title,
    description,
}: SectionHeadingProps) {
    return (
        <>
            <div className="w-full flex items-center justify-center flex-col lg:gap-4">
                <h2 className="text-[2.2rem] lg:text-5xl leading-12 text-center font-bold whitespace-pre-wrap bg-gradient-to-b from-text-400 to-background-100/90 bg-clip-text text-transparent">
                    {title}
                </h2>
                <img
                    className="max-w-[150px] lg:max-w-[200px]"
                    src={HeadingUnderline}
                    alt=""
                />
                {description && (
                    <p className="lg:w-1/2 mx-auto leading-5 text-center text-sm md:text-base font-medium py-4 whitespace-pre-wrap bg-gradient-to-b from-text-400/90 to-background-100/50 bg-clip-text text-transparent">
                        {description}
                    </p>
                )}
            </div>
        </>
    );
}
