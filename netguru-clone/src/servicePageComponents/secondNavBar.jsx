import React, { useRef, useEffect, useState } from "react";

export default function SecondNavBar(navItems) {
    
    const navRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const { top } = navRef.current.getBoundingClientRect();
                setIsSticky(top <= 0);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`
                w-full z-30
                ${isSticky ? "fixed top-0 left-0 shadow-lg" : ""}
                bg-black transition-all duration-300
            `}
        >
            <ul
                className="
                    flex whitespace-nowrap overflow-x-auto scrollbar-hide
                    items-center  gap-x-8 gap-y-4
                    px-4 py-4
                    text-white font-medium text-base
                    justify-between
                    max-w-[80%] w-full m-auto
                "
            >
                {navItems.map((item) => (
                    <li key={item} className="flex-shrink-0">
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors duration-200 px-2 py-1 rounded"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}