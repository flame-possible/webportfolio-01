import { FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

export default function Header() {
  return (
    <header>

        <div className="w-full h-[80px] bg-Dark py-[8px] px-[16px] gap-[8px] flex flex-row items-center justify-between md:hidden">
          <a href="#"> <FaBars color="#FFFFFF" size={18} /> </a>
          <h1 className="font-Bagel text-Primary text-H3-px font-strong">MEAT YOU</h1>
          <a href="#"> <BsCart3 color="#FFFFFF" size={18} /> </a>
        </div>
        
        <div className="hidden w-full h-[80px] bg-Dark py-[8px] px-[42px] gap-[8px] md:flex flex-row items-center justify-between">
          <p className="font-Bagel text-Primary text-H3-px">
            MEAT YOU
          </p>
          <div>
            <ul className="flex flex-row gap-[36px] items-center justify-between">
              <li className="h-[40px] px-[15px] text-white font-pretendard font-strong text-Base-px flex items-center">
                <a href="#">메뉴</a>
              </li>
              <li className="h-[40px] px-[15px] text-white font-pretendard font-strong text-Base-px flex items-center">
                <a href="#">스토리</a>
              </li>
              <li className="h-[40px] px-[15px] text-white font-pretendard font-strong text-Base-px flex items-center">
                <a href="#">커스터마이즈</a>
              </li>
              <li className="h-[40px] px-[15px] text-white font-pretendard font-strong text-Base-px flex items-center">
                <a href="#">매장위치</a>
              </li>
              <li className="h-[40px] px-[15px] bg-Primary rounded-[8px] text-white font-pretendard font-strong text-Base-px flex items-center hover:bg-BrandHover hover:cursor-pointer">
                주문하기
              </li>
            </ul>
          </div>
        </div>
        
    </header>

  );
}