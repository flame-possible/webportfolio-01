import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-[16px] py-[40px]">

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

                    <div className="flex flex-col gap-[20px]">

                        <div className="flex flex-row gap-[8px]">
                            <p className="basis-1/2 font-pretendard font-strong text-Base-px">
                                버거이야기
                            </p>

                            <ul className="basis-1/2 flex flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    브랜드 소개
                                </li>
                                <li>
                                    탄생 비하인드
                                </li>
                                <li>
                                    우리가 지키는 약속
                                </li>
                                <li>
                                    수제 버거 철학
                                </li>
                                <li>
                                    고기보다 사람 먼저
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row gap-[8px]">
                            <p className="basis-1/2 font-pretendard font-strong text-Base-px">
                                메뉴 & 서비스
                            </p>

                            <ul className="basis-1/2 flex flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    전체 메뉴 보기
                                </li>
                                <li>
                                    시그니처 버거
                                </li>
                                <li>
                                    버거 커스터마이징
                                </li>
                                <li>
                                    하우스 소스 스토어
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row gap-[8px]">
                            <p className="basis-1/2 font-pretendard font-strong text-Base-px">
                                고객 센터
                            </p>

                            <ul className="basis-1/2 flex flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    자주 묻는 질문
                                </li>
                                <li>
                                    알레르기 정보
                                </li>
                                <li>
                                    매장 찾기
                                </li>
                                <li>
                                    주문/배달 안내
                                </li>
                                <li>
                                    영양 성분표
                                </li>
                                <li>
                                    고객의 소리
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row gap-[8px]">
                            <p className="basis-1/2 font-pretendard font-strong text-Base-px">
                                회사 정보
                            </p>

                            <ul className="basis-1/2 flex-col gap-[8px] font-pretendard text-TextSecondary text-Base-px">
                                <li>
                                    MEAT YOU 소개
                                </li>
                                <li>
                                    채용 정보
                                </li>
                                <li>
                                    뉴스 & 미디어
                                </li>
                                <li>
                                    제휴/콜라보 문의
                                </li>
                                <li>
                                    브랜드 자료실
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            <div className="border border-DefaultBorderColor"></div>

            <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[24px] font-pretendard text-TextSecondary text-Base-px">
                    <p>
                        © 2025 MEAT YOU. All rights reserved.
                    </p>

                    <div className="flex flex-row gap-[24px]">
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