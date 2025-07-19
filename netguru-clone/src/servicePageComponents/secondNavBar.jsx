import React from "react";

export default function SecondNavBar({ navItems }) {
    return (
        <div className="sticky top-0 z-30 bg-black">
            <nav className="w-full">
                <ul
                    className="
                        flex whitespace-nowrap overflow-x-auto scrollbar-hide
                        items-center gap-x-8 gap-y-4
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
        </div>
    );
}
