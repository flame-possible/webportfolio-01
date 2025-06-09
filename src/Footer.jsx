import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-[16px] py-[40px] md:px-[58px] md:py-[64px] xl:px-[120px]">

        <div className="flex flex-col gap-[48px]">

            <div>
                <div className="flex flex-col gap-[40px]">

                    <div className="flex flex-col gap[12px]">
                        <p className="font-Bagel text-Primary text-H4-px">
                            MEAT YOU
                        </p>
                        <p className="font-pretendard text-TextTertiary text-Base-px">
                            햄버거를 넘어, 한 입의 스토리를 전해드립니다.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between md:flex-row gap-[20px] md:gap-[24px]">

                        <div className="flex flex-row md:flex-col gap-[8px]">
                            <p className="basis-1/2 md:basis-auto font-pretendard font-strong text-Base-px">
                                버거이야기
                            </p>

                            <ul className="basis-1/2 md:basis-auto flex flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    <a href="#">브랜드 소개</a>
                                </li>
                                <li>
                                    <a href="#">탄생 비하인드</a>
                                </li>
                                <li>
                                    <a href="#">우리가 지키는 약속</a>
                                </li>
                                <li>
                                    <a href="#">수제 버거 철학</a>
                                </li>
                                <li>
                                    <a href="#">고기보다 사람 먼저</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row md:flex-col gap-[8px]">
                            <p className="basis-1/2 md:basis-auto font-pretendard font-strong text-Base-px">
                                메뉴 & 서비스
                            </p>

                            <ul className="basis-1/2 md:basis-auto flex flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    <a href="#">전체 메뉴 보기</a>
                                </li>
                                <li>
                                    <a href="#">시그니처 버거</a>
                                </li>
                                <li>
                                    <a href="#">버거 커스터마이징</a>
                                </li>
                                <li>
                                    <a href="#">하우스 소스 스토어</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row md:flex-col gap-[8px]">
                            <p className="basis-1/2 md:basis-auto font-pretendard font-strong text-Base-px">
                                고객 센터
                            </p>

                            <ul className="basis-1/2 md:basis-auto flex flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    <a href="#">자주 묻는 질문</a>
                                </li>
                                <li>
                                    <a href="#">알레르기 정보</a>
                                </li>
                                <li>
                                    <a href="#">매장 찾기</a>
                                </li>
                                <li>
                                    <a href="#">주문/배달 안내</a>
                                </li>
                                <li>
                                    <a href="#">영양 성분표</a>
                                </li>
                                <li>
                                    <a href="#">고객의 소리</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row md:flex-col gap-[8px]">
                            <p className="basis-1/2 md:basis-auto font-pretendard font-strong text-Base-px">
                                회사 정보
                            </p>

                            <ul className="basis-1/2 md:basis-auto flex flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    <a href="#">MEAT YOU 소개</a>
                                </li>
                                <li>
                                    <a href="#">채용 정보</a>
                                </li>
                                <li>
                                    <a href="#">뉴스 & 미디어</a>
                                </li>
                                <li>
                                    <a href="#">제휴/콜라보 문의</a>
                                </li>
                                <li>
                                    <a href="#">브랜드 자료실</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            <div className="border border-BorderDividerSubtle"></div>

            <div className="flex flex-col justify-between lg:flex-row gap-[40px]">
                <div className="flex flex-col md:flex-row gap-[24px] md:gap-[40px] font-pretendard text-TextSecondary text-Base-px">
                    <p>
                        © 2025 MEAT YOU. All rights reserved.
                    </p>

                    <div className="flex flex-row gap-[24px] md:gap-[40px] font-pretendard text-Base-px">
                        <p>
                            Privacy Policy
                        </p>
                        
                        <p>
                            Terms of Use
                        </p>
                    </div>

                </div>

                <div className="flex flex-row gap-[24px]">
                    <FaSquareXTwitter color="#868686" size={18} />
                    <FaYoutube color="#868686" size={18} />
                    <FaSkype color="#868686" size={18} />
                    <FaSquareInstagram color="#868686" size={18} />
                </div>

            </div>

        </div>

    </footer>
  );
}