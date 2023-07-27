

const Header = () => {

  return (
    <div className="flex items-center justify-between w-full">
            <h1 className="lg:text-5xl text-3xl text-white font-black">Peeps</h1>
            <button className="flex items-center lg:gap-[10px] gap-[7.5px] lg:py-3 lg:px-6 py-2 px-[18px] bg-primary hover:bg-opacity-80 rounded-[40px]">
            <svg className="lg:w-6 lg:h-6 w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4534_1238)">
              <path d="M5 20C5 17.544 6.991 15.553 9.447 15.553H14.553C17.009 15.553 19 17.544 19 20" stroke="#696969" strokeWidth="1.4824" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_4534_1238">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <span className="lg:text-base text-sm text-primaryText font-extralight">Subscribe</span>
        </button>
    </div>
  )
}

export default Header