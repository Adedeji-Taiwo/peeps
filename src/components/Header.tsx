import { Button } from "."
import userIcon from "../../public/assets/icons/userIcon.svg"
import Image from "next/image"

const Header = () => {

  return (
    <div className="flex items-center justify-between w-full">
            <h1 className="lg:text-5xl text-3xl text-white font-black">Peeps</h1>
            <Button type="button" className="bg-primary">
              <Image 
                src={userIcon}
                alt="user icon"
                priority
              />
              <span className="lg:text-base text-sm text-primaryText font-extralight">Subscribe</span>
            </Button>
    </div>
  )
}

export default Header