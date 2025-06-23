function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-[#191919] rounded-[15px] p-6 w-full max-w-sm flex flex-col items-center shadow-md hover:shadow-yellow-400/30 transition-shadow duration-300">
      {/* Icon */}
      <img src={icon} alt={title} className="w-20 h-20 mb-5" />

      {/* Title */}
      <h3 className="font-poppins text-center text-xl sm:text-2xl font-semibold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-center font-poppins text-gray-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default ServiceCard;
