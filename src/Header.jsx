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
                메뉴
              </li>
              <li className="h-[40px] px-[15px] text-white font-pretendard font-strong text-Base-px flex items-center">
                스토리
              </li>
              <li className="h-[40px] px-[15px] text-white font-pretendard font-strong text-Base-px flex items-center">
                커스터마이즈
              </li>
              <li className="h-[40px] px-[15px] text-white font-pretendard font-strong text-Base-px flex items-center">
                매장위치
              </li>
              <li className="h-[40px] px-[15px] bg-Primary rounded-[8px] text-white font-pretendard font-strong text-Base-px flex items-center">
                주문하기
              </li>
            </ul>
          </div>
        </div>
        
    </header>

  );
}