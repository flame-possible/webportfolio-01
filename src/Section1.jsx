

export default function Section1() {
  return (
    <div className="px-[16px] md:px-[42px] lg:px-[58px] xl:px-[120px] md:h-[480px] lg:h-[620px] bg-gradient-to-r from-black to-[#1F1102] flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="pt-[40px] flex flex-col gap-[40px] basis-[95%]">

            <div className="gap-[12px] xl:gap-[18px] flex flex-col justify-center text-center md:text-left">

              <div>
                <h1 className="text-Primary font-Bagel text-H1-px font-strong md:text-[56px] xl:text-[72px] md:leading-[120%] md:font-normal">
                {/* <h1 className="text-yellow-600"> */}
                    Nice to
                </h1>
                <h1 className="text-Primary font-Bagel text-H1-px font-strong md:text-[56px] xl:text-[72px] md:leading-[120%] md:font-normal">
                {/* <h1 className="text-yellow-600"> */}
                    Meat You!
                </h1>
              </div>

              <p className="font-pretendard text-LG-px text-white lg:text-H4-px">
                진심으로 구운 고기, 진짜로 미친 맛
              </p>

            </div>

          <div className="flex gap-[16px]">

            <a
              href="#"
              class="h-[40px] lg:h-[48px] bg-Primary rounded-[8px] px-[16px] lg:px-[20px] text-white font-pretendard font-strong text-Base-px flex items-center lg:text-LG-px"
            >
              메뉴 보기
            </a>

            <a
              href="#"
              class="h-[40px] lg:h-[48px] border border-DefaultBorderColor rounded-[8px] px-[16px] lg:px-[20px] text-white font-pretendard font-strong text-Base-px flex items-center shadow-defaultShadow lg:text-LG-px"
            >
              방문 전 미리 경험하기
            </a>
            
          </div>


        </div>

        <img src="/section1.png" alt="Section1 이미지" className="w-auto object-cover md:hidden" />

        <div>
          <img src="/section1_1.png" alt="Section1 이미지" className="hidden w-auto object-cover md:block" />
        </div>

    </div>

  );
}