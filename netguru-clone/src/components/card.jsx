import React from 'react';

const Card = ({ img, company, tag, title, description, companyLogoUrl, videoUrl, index }) => { // Accept videoUrl prop
                                                                                               // Determine shift direction based on index
    const isLeft = Math.floor(index / 2) % 2 === 0;
    const translateClass = isLeft ? 'md:-translate-x-6' : 'md:translate-x-6';

    return (
        <div className={`bg-black text-white w-72 sm:w-96 md:w-[500px] max-w-[95%] rounded overflow-hidden group transition duration-300 ease-in-out ${translateClass}`}>
            {videoUrl ? ( // Conditionally render video if videoUrl exists
                <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 sm:h-72 md:h-[550px] object-cover transition-transform group-hover:scale-105"
                />
            ) : ( // Otherwise, render image
                <img
                    src={img}
                    alt={title}
                    className="w-full h-48 sm:h-72 md:h-[550px] object-cover transition-transform group-hover:scale-105"
                />
            )}

            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 uppercase font-semibold tracking-wide">
                    {companyLogoUrl ? (
                        <img
                            src={companyLogoUrl}
                            alt={`${company} logo`}
                            className="h-6 object-contain self-start filter grayscale brightness-0 invert"
                        />
                    ) : (
                        <span>@ {company}</span>
                    )}
                    <span>{tag}</span>
                </div>

                <h3 className="text-white text-3xl font-bold leading-snug">
                    {title}
                </h3>

                <p className="text-gray-400 text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;