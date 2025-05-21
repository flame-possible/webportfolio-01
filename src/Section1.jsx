

export default function Section1() {
  return (
    <div className="h-[648px] px-[16px] bg-gradient-to-r from-black to-[#1F1102] flex flex-col justify-center items-center">
        <div className="pt-[40px] flex flex-col gap-[40px]">

            <div className="gap-[12px] flex flex-col justify-center">

              <div>
                <h1 className="text-white text-center font-Bagel text-H1-px font-strong">
                {/* <h1 className="text-yellow-600"> */}
                    Nice to
                </h1>
                <h1 className="text-white text-center font-Bagel text-H1-px font-strong">
                {/* <h1 className="text-yellow-600"> */}
                    Meat You!
                </h1>
              </div>

              <p className="font-pretendard text-center text-LG-px text-white">진심으로 구운 고기, 진짜로 미친 맛</p>

            </div>

          <div className="flex gap-[16px]">

            <a
              href="#"
              class="w-[84px] h-[40px] bg-Primary rounded-[8px] px-[16px] text-white font-pretendard font-strong text-Base-px flex items-center"
            >
              메뉴 보기
            </a>

            <a
              href="#"
              class="w-[153px] h-[40px] border border-DefaultBorderColor rounded-[8px] px-[16px] text-white font-pretendard font-strong text-Base-px flex items-center shadow-defaultShadow"
            >
              방문 전 미리 경험하기
            </a>
            
          </div>


        </div>

        <img src="/section1.png" alt="Section1 이미지" className="w-auto h-[648px] object-cover" />

        </div>

  );
}