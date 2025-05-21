
export default function Section1() {
  return (
    <div className="h-[1440px] px-[16px] py-[40px] bg-Secondary">

        <div className="flex flex-col h-[1360px] gap-[24px]">

            <div className="h-[98px] text-center flex flex-col gap-[12px]">
                <div className="font-Bagel text-Tertiary text-H3-px">
                    <p>
                        "진짜를 썼습니다.
                    </p>
                    <p>
                        그래서 진짜 맛있습니다."
                    </p>
                </div>

                
                <p className="font-pretendard text-white font-strong text-Base-px">
                    우리가 넣은 재료는 리스트가 아니라, 약속입니다.
                </p>

            </div>


            <img src="/section3.png" alt="Section3 이미지" className="w-auto h-[500px] object-cover" />

            <div className="flex flex-col gap-[36px]">

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