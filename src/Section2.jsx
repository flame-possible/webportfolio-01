

export default function Section2() {
  return (
    <div className="px-[16px] py-[40px] xl:px-[80px] xl:py-[120px] md:px-[58px] md:py-[80px] bg-white">

        <div className="flex flex-col gap-[20px] md:gap-[40px] xl:gap-[48px] justify-center items-center">

            <div className="flex flex-col gap-[16px] lg:px-[120px] lg:gap-[8px] text-center">

                <div className="flex flex-col gap-[4px]">

                    <p className="font-pretendard text-Base-px font-strong lg:text-H4-px md:text-LG-px">
                        장난스러움 속의 진심
                    </p>

                    <div className="font-Bagel text-H3-px text-Primary lg:text-H1-px md:text-H2-px">
                        <p>
                            Between Buns,
                        </p>
                        <p>
                            Beyond Taste.
                        </p>
                    </div>

                </div>

                <p className="font-pretendard text-Base-px text-Secondary lg:text-LG-px">
                    버거는 누구나 만들 수 있지만, MEAT YOU는 "어떻게 만나느냐"를 고민합니다.
                </p>

            </div>
            

            <div className="overflow-hidden">
                <img src="/section2.png" alt="Section2 이미지" className="w-[80vw] aspect-[3/2] xl:aspect-[2/1] object-cover rounded-[8px]" />
            </div>

        </div>

    </div>
  );
}