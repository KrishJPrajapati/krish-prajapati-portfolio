
function ServiceCard({icon,title,text}) {
  return (
    <div className="flex-col justify-center  bg-[#191919] rounded-[15px] mx-7 my-7 px-7 py-7 md:max-w-[420px]">
        <div className="flex justify-center">
                <img src={icon} alt={icon}/>
        </div>
        <div className="font-poppins md:max-w-[330px] font-semibold text-[38px] text-center">
            {title}
        </div>
        <div className="text-[18px] font-poppins font-normal flex justify-center text-center">
            {text}
        </div>
    </div>
  )
}

export default ServiceCard