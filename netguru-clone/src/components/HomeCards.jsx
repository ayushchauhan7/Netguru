import React from "react";
import Card from "./card";

const cardData = [
  {
    img: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg",
    company: "Merck",
    companyLogoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    tag: "R&D Productivity",
    title: "Speeding up Merck’s process from 6 months to 6 hours",
    description:
        "An AI Assistant that boosts R&D delivered in five weeks and under budget",
    link: "#",
  },
  {
    img: "https://www.netguru.com/hs-fs/hubfs/Newzip%20HP.jpg?width=1022&height=1022&name=Newzip%20HP.jpg",
    company: "Newzip",
    companyLogoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/newzip.svg",
    tag: "AI for Real Estate",
    title: "60% more user engagement with hyper-personalization",
    description:
        "AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content to increase customer engagement",
    link: "#",
  },
  {
    img: "https://www.netguru.com/hs-fs/hubfs/UBS-CS-02-Visual-05.jpg?width=1460&height=1022&name=UBS-CS-02-Visual-05.jpg",
    company: "UBS",
    companyLogoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg",
    tag: "Mobile Banking Design",
    title: "Team extension for mobile design revamp at speed",
    description:
        "Seamless and consistent experience, unified payment flows, and easier in-app navigation",
    link: "#",
  },
  {
    img: "https://www.netguru.com/hs-fs/hubfs/Prospero%20CS%20HP.png?width=1022&height=1022&name=Prospero%20CS%20HP.png",
    company: "Prospero.Ai",
    companyLogoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/prospero.svg",
    tag: "Mobile MVP",
    title: "Mobile app MVP in 5 weeks for a New York fintech",
    description:
        "New version of a financial predictions app, complete with a revamped user interface and additional features",
    link: "#",
  },
  { // Client E card updated to use video
    img: null, // Set img to null as video will be used
    videoUrl: "https://www.netguru.com/hubfs/_N19%20Modules/Homepage/Videos/kw.mp4", // Video URL provided by the user
    company: "Client E",
    companyLogoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg",
    tag: "DESIGN SYSTEMS",
    title: "Increased engineering efficiency and more consistent design",
    description:
        "Improved developer experience and more efficient engineering for the world's largest real estate franchise",
    link: "#",
  },
  {
    img: "https://www.netguru.com/hs-fs/hubfs/NewGlobe%20HP.jpg?width=1022&height=1022&name=NewGlobe%20HP.jpg",
    company: "Client F",
    companyLogoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/new-globe.svg",
    tag: "EDTECH AI",
    title: "Boosting content creation with GenAI from hours to seconds",
    description:
        "Content creation transformed into a streamlined process without compromising on quality",
    link: "#",
  },
];

export default function CardsSection() {
  return (
      <section className="bg-black text-white px-4 md:px-12 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-0">
            Design, engineering & <span className="text-green-500">applied AI</span>
          </h2>
          <a href="#" className="text-lg underline hover:text-green-500">
            More case studies
          </a>
        </div>

        <div
            className="
          flex gap-6 items-center
          overflow-x-auto
          md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12
          lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20
          scrollbar-hide
          -mx-4 px-4
        "
        >
          {cardData.map((card, index) => (
              <div
                  key={index}
                  className="
              flex-shrink-0
              w-72
              md:w-auto
              lg:w-auto
              max-w-full
              lg:mb-0
            "
              >
                <Card
                    img={card.img}
                    videoUrl={card.videoUrl} // Pass videoUrl prop
                    company={card.company}
                    companyLogoUrl={card.companyLogoUrl}
                    tag={card.tag}
                    title={card.title}
                    description={card.description}
                    index={index}
                />
              </div>
          ))}
        </div>
      </section>
  );
}