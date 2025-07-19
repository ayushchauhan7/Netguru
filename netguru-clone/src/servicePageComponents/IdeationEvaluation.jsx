const SectionBlock = ({
  title,
  highlight,
  description,
  layout = "column", // "column" or "row"
  bg= 'bg-black'
}) => {
  return (
    <section className={`${bg} text-white font-sans w-full py-20 px-4`}>
      <div
        className={`max-w-[80%] w-full m-auto my-6 flex ${
          layout === "row" ? "flex-col md:flex-row gap-8 md:gap-36" : "flex-col gap-8 md:gap-12"
        }`}
      >
        {/* Title */}
        <div className={layout === "row" ? "md:w-1/2" : ""}>
          <h1 className="text-2xl md:text-3xl font-light leading-snug">
            {title}{" "}
            <span className="text-green-500">{highlight}</span>
          </h1>
        </div>

        {/* Description */}
        <div className={layout === "row" ? "md:w-1/2" : "mt-6 max-w-2xl"}>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBlock;
