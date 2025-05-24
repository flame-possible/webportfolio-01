

export default function Section2() {
  return (
    <div className="px-[16px] py-[40px] xl:px-[80px] xl:py-[120px] bg-white">

        <div className="flex flex-col gap-[20px] xl:gap-[48px] justify-center items-center">

            <div className="flex flex-col gap-[16px] xl:px-[120px] xl:gap-[36px] text-center">

                <div className="flex flex-col gap-[4px]">

                    <p className="font-pretendard text-Base-px font-strong xl:text-H4-px">
                        장난스러움 속의 진심
                    </p>

                    <div className="font-Bagel text-H3-px font-strong text-Primary xl:text-H1-px">
                        <p>
                            Between Buns,
                        </p>
                        <p>
                            Beyond Taste.
                        </p>
                    </div>

                </div>

                <p className="font-pretendard text-Base-px text-Secondary xl:text-LG-px">
                    버거는 누구나 만들 수 있지만, MEAT YOU는 "어떻게 만나느냐"를 고민합니다. 
                    우리의 고기는 단순한 고기가 아닙니다. 28일간 숙성한 호주산 와규, 직접 구운 번, 당일 생산 수제 소스. 
                    모든 조합엔 이유가 있습니다. 그리고 이 모든 건 당신과 이 햄버거가 처음 만나는 순간을 위해 준비된 것이죠.
                </p>

            </div>
            

            <div className="overflow-hidden">
                <img src="/section2.png" alt="Section2 이미지" className="w-[80vw] aspect-[3/2] xl:aspect-[2/1] object-cover" />
            </div>

        </div>

    </div>
  );
}