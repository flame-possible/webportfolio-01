import { FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

export default function Header() {
  return (
    <div className="w-full h-[80px] bg-Dark py-[8px] px-[16px] gap-[8px] flex flex-row items-center justify-between">
        <a href="#"> <FaBars color="#FFFFFF" size={18} /> </a>
        <h1 className="font-Bagel text-Primary text-H3-px font-strong">MEAT YOU</h1>
        <a href="#"> <BsCart3 color="#FFFFFF" size={18} /> </a>
        
    </div>
  );
}