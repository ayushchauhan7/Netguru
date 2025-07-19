import SectionBlock from "./IdeationEvaluation.jsx"
import Card from "./card.jsx"
export default function CaseStudies() {
  return (
    <div className="bg-black text-white font-sans w-full py-20 px-4">
      <SectionBlock
        title="Ideation and evaluation"
        highlight=" case studies"
        description="See how we help shape new concepts and reimagine existing products. Our clients’ success stories speak for themselves."
        layout="row"
        bg="black"
      />
      <div
        className="
          flex overflow-x-auto gap-6 max-w-[80%] w-full m-auto
          md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 m:overflow-visible
        "
      >
        <div className="flex-shrink-0 w-[320px] md:w-auto">
          <Card
            title="Customer Service Process for Volkswagen With Product Design Consulting"
            imageUrl="https://www.netguru.com/hs-fs/hubfs/MA241_Volkswagen_HR_05-935391-edited.jpg?length=1086"
          />
        </div>
        <div className="flex-shrink-0 w-[320px] md:w-auto md:mt-16">
          <Card
            title="Effective User Research Process for a Fintech Startup"
            imageUrl="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/N19%20Bespoke%20Case%20Studies/Fundit/Fundid%20header%20copy.jpg?length=790"
          />
        </div>
        <div className="flex-shrink-0 w-[320px] md:w-auto md:mt-32">
          <Card
            title="Growth Consulting for a Digital HR Solution"
            imageUrl="https://www.netguru.com/hs-fs/hubfs/innovation_consulting-1.jpg?length=623"
          />
        </div>
      </div>
    </div>
  );
}
