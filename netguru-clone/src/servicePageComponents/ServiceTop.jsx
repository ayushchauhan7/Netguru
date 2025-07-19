import React from "react";

const ServiceTop = ({
    backgroundImage,
    title,
    highlighted,
    subtitle,
    buttonText,
    onButtonClick,
    buttonHref,
}) => {
    return (
        <section className="relative z-20 min-h-[80vh] flex justify-center items-center">
            {/* Background image overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex flex-col items-start  h-full py-12 mx-7 max-w-[80%] w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {title}
                    <br />
                    {highlighted && (
                        <>for <span className="text-green-400">{highlighted}</span></>
                    )}
                </h1>
                <p className="text-white text-lg md:text-2xl font-medium mb-8">
                    {subtitle}
                </p>
                {buttonText && (
                    buttonHref ? (
                        <a
                            href={buttonHref}
                            className="bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-8 rounded-lg shadow transition duration-200 text-lg"
                        >
                            {buttonText} &rarr;
                        </a>
                    ) : (
                        <button
                            className="bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-8 rounded-lg shadow transition duration-200 text-lg"
                            onClick={onButtonClick}
                        >
                            {buttonText} &rarr;
                        </button>
                    )
                )}
            </div>
        </section>
    );
};

export default ServiceTop;
