import { AlignLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Header() {
    const navItems = [
        {
            name: "Home",
            url: "#home",
        },
        {
            name: "Services",
            url: "#services",
        },
        {
            name: "Projects",
            url: "#projects",
        },
        {
            name: "About",
            url: "#about",
        },
        {
            name: "Testimonials",
            url: "#testimonials",
        },
        {
            name: "Contact",
            url: "#contact",
        },
    ];

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const closeSheet = () => setIsSheetOpen(false);

    return (
        <nav className="w-full z-50 py-2 lg:py-4 bg-background-900/60 shadow-lg backdrop-blur-md sticky top-0">
            <div className="row grid grid-cols-2 lg:grid-cols-3">
                <Link
                    to={"#home"}
                    className="cursor-pointer"
                    smooth={true}
                    offset={-80}
                    duration={300}
                >
                    <div className="max-w-[150px] flex items-start justify-center flex-col gap-0">
                        <h3 className="text-base lg:text-xl text-slate-100/70 font-semibold">
                            Abdullah Al
                        </h3>
                        <h3 className="text-lg lg:text-2xl pl-2 text-primary-500 tracking-widest font-black">
                            Toufik
                        </h3>
                    </div>
                </Link>
                <div className="lg:col-span-2 flex items-center justify-end lg:items-center lg:justify-center">
                    <ul className="hidden w-full lg:flex items-end justify-end gap-5">
                        {navItems.map((item) => (
                            <li
                                className="text-base lg:text-lg font-semibold transition-all duration-300 hover:text-primary-500 cursor-pointer"
                                key={item.name}
                            >
                                <Link
                                    to={item.url}
                                    smooth={true}
                                    offset={-70}
                                    duration={300}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger>
                            <div className="w-full pr-2">
                                <AlignLeft
                                    className="lg:hidden cursor-pointer hover:text-primary-500 transition-all duration-300"
                                    size={40}
                                    onClick={() => setIsSheetOpen(true)}
                                />
                            </div>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-full bg-secondary-800/90 pl-0 ml-0">
                            <ul className="h-full flex items-center justify-center flex-col gap-8">
                                {navItems.map((item) => (
                                    <li
                                        className="text-base lg:text-lg font-semibold transition-all duration-300 hover:text-primary-500 cursor-pointer"
                                        key={item.name}
                                    >
                                        <Link
                                            to={item.url}
                                            smooth={true}
                                            offset={-70}
                                            duration={300}
                                            onClick={closeSheet}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
