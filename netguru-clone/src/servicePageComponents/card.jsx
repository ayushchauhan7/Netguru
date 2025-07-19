export default function Card({ title, imageUrl, bg="bg-black" }) {
  return (
    <div className={`${bg} shadow-md  transition-colors duration-200 w-[350px] group cursor-pointer`}>
      <div className="overflow-visible transition-all duration-300 group-hover:-mx-4 group-hover:-mt-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-100"
        />
      </div>
      <div className="p-6 flex flex-col gap-6">
        <h3 className="text-white text-lg font-normal leading-snug transition-all duration-200 group-hover:underline">
          {title}
        </h3>
        <div className="flex justify-end">
          <div className="w-10 h-10 flex items-center justify-center transition-colors duration-200 cursor-pointer">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}