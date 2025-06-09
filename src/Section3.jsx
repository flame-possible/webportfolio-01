
export default function Section3() {
  return (
    <div className="px-[16px] py-[40px] md:px-[58px] md:py-[80px] xl:px-[120px] bg-Secondary min-h-[1000px]">

        <div className="flex flex-col gap-[24px] md:gap-[54px] relative ">

            <div className="text-center flex flex-col gap-[12px]">
                <div className="font-Bagel text-Tertiary text-H3-px md:hidden">
                    <p>
                        "진짜를 썼습니다.
                    </p>
                    <p>
                        그래서 진짜 맛있습니다."
                    </p>
                </div>
                
                <div className="hidden font-Bagel text-Tertiary text-H2-px lg:text-H1-px md:block">
                    <p>
                        "진짜를 썼습니다. 그래서 진짜 맛있습니다."
                    </p>
                </div>

                
                <p className="font-pretendard text-white font-strong text-Base-px md:text-LG-px lg:text-H4-px">
                    우리가 넣은 재료는 리스트가 아니라, 약속입니다.
                </p>

            </div>

            <div className="flex flex-row justify-center z-0">
                <img src="/section3.png" alt="Section3 이미지" className="w-auto max-h-[500px] object-cover md:hidden" />
                <img src="/section3.png" alt="Section3 이미지" className="hidden w-auto max-h-[835px] object-cover md:block md:absolute" />

            </div>

            <div className="h-[30px]" />

            <div className="hidden md:flex flex-col z-10 my-auto">
                <div className="flex flex-col gap-[8px] justify-end text-right">
                    <p className="text-H4-px font-strong text-white">
                        The BUN
                    </p>
                    <div className="flex flex-row justify-end items-center">
                        <div></div>
                        <div className="basis-[51%] flex flex-row items-center">
                            <div className="w-[26px] h-[26px] border-[1.5px] rounded-full border-BorderDivider"></div>
                            <div className="w-full h-[1px] border-[1px] border-BorderDivider"></div>
                        </div>
                    </div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            당일 구운 브리오슈 번
                        </p>
                        <p>
                            트러플 오일 살짝 가미
                        </p>
                        <p>
                            겉은 바삭, 속은 버터처럼 부드럽게
                        </p>
                    </div>
                    
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-H4-px font-strong text-white">
                        The Greens
                    </p>
                    <div className="flex flex-row items-center">
                        <div className="basis-[51%] flex flex-row items-center">
                            <div className="w-full h-[1px] border-[1px] border-BorderDivider"></div>
                            <div className="w-[26px] h-[26px] border-[1.5px] rounded-full border-BorderDivider"></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            국내 로컬 팜과 제휴한 친환경 채소
                        </p>
                        <p>
                            아보카도는 수입 후 매장에서 후숙
                        </p>
                        <p>
                            리프 채소는 당일 수급 only
                        </p>
                    </div>
                    
                </div>

                <div className="flex flex-col gap-[8px] justify-end text-right">
                    <p className="text-H4-px font-strong text-white">
                        The MEAT
                    </p>
                    <div className="flex flex-row justify-end items-center">
                        <div></div>
                        <div className="basis-[51%] flex flex-row items-center">
                            <div className="w-[26px] h-[26px] border-[1.5px] rounded-full border-BorderDivider"></div>
                            <div className="w-full h-[1px] border-[1px] border-BorderDivider"></div>
                        </div>
                    </div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            28일간 드라이에이징된 호주산 와규
                        </p>
                        <p>
                            하루 2회 그라인딩 / 보존료 무첨가
                        </p>
                        <p>
                            수비드 조리 후 직화 마무리
                        </p>
                    </div>
                    
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-H4-px font-strong text-white">
                        The Cheese
                    </p>
                    <div className="flex flex-row items-center">
                        <div className="basis-[51%] flex flex-row items-center">
                            <div className="w-full h-[1px] border-[1px] border-BorderDivider"></div>
                            <div className="w-[26px] h-[26px] border-[1.5px] rounded-full border-BorderDivider"></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            슬로우 체다 숙성 6개월 이상
                        </p>
                        <p>
                            고다 / 블루치즈 수제 블렌딩
                        </p>
                        <p>
                            직접 슬라이스하여 버거에 적층
                        </p>
                    </div>
                    
                </div>
                
                <div className="flex flex-col gap-[8px] justify-end text-right">
                    <p className="text-H4-px font-strong text-white">
                        The Sauce
                    </p>
                    <div className="flex flex-row justify-end items-center">
                        <div></div>
                        <div className="basis-[51%] flex flex-row items-center">
                            <div className="w-[26px] h-[26px] border-[1.5px] rounded-full border-BorderDivider"></div>
                            <div className="w-full h-[1px] border-[1px] border-BorderDivider"></div>
                        </div>
                    </div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            매장에서 직접 제조하는 4가지 시그니처 소스
                        </p>
                        <p>
                            설탕 대신 과일당 사용
                        </p>
                        <p>
                            트러플 갈릭 / 하우스 바비큐 / 바질 머스타드 등
                        </p>
                    </div>
                    
                </div>

            </div>



            <div className="flex flex-col gap-[36px] md:hidden">

                <div className="flex flex-col gap-[12px]">
                    <p className="font-pretendard text-LG-px text-white font-strong">
                        The BUN
                    </p>
                    <div className="border-2 "></div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            당일 구운 브리오슈 번
                        </p>
                        <p>
                            트러플 오일 살짝 가미
                        </p>
                        <p>
                            겉은 바삭, 속은 버터처럼 부드럽게
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <p className="font-pretendard text-LG-px text-white font-strong">
                        The Greens
                    </p>
                    <div className="border-2 "></div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            국내 로컬 팜과 제휴한 친환경 채소
                        </p>
                        <p>
                            아보카도는 수입 후 매장에서 후숙
                        </p>
                        <p>
                            리프 채소는 당일 수급 only
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <p className="font-pretendard text-LG-px text-white font-strong">
                        The MEAT
                    </p>
                    <div className="border-2 "></div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            28일간 드라이에이징된 호주산 와규
                        </p>
                        <p>
                            하루 2회 그라인딩 / 보존료 무첨가
                        </p>
                        <p>
                            수비드 조리 후 직화 마무리
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <p className="font-pretendard text-LG-px text-white font-strong">
                        The Cheese
                    </p>
                    <div className="border-2 "></div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            슬로우 체다 숙성 6개월 이상
                        </p>
                        <p>
                            고다 / 블루치즈 수제 블렌딩
                        </p>
                        <p>
                            직접 슬라이스하여 버거에 적층
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <p className="font-pretendard text-LG-px text-white font-strong">
                        The Sauce
                    </p>
                    <div className="border-2 "></div>
                    <div className="font-pretendard text-Base-px text-TextQuaternary font-strong">
                        <p>
                            매장에서 직접 제조하는 4가지 시그니처 소스
                        </p>
                        <p>
                            설탕 대신 과일당 사용
                        </p>
                        <p>
                            트러플 갈릭 / 하우스 바비큐 / 바질 머스타드 등
                        </p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  );
}