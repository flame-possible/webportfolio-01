
export default function Section4() {
  return (

    <div className="px-[16px] py-[40px]">

        <div className="flex flex-col gap-[40px] justify-center items-center text-center">

            <div className="flex flex-col gap-[20px]">

                <div className="flex flex-col gap-[4px]">
                    <p className="font-strong font-pretendard text-Base-px">
                        우리와 함께한 그 한 입의 순간들
                    </p>
                    <p className="font-strong font-Bagel text-H3-px text-Primary">
                        Real People. Real Bites.
                    </p>

                </div>

                <p className="font-pretendard text-Base-px">
                    #NiceToMeatYou 해시태그와 함께 당신의 한 입을 공유해주세요! 
                    매주 최고의 사진엔 ‘Holy Coupon’이 찾아갑니다
                </p>

            </div>

            <div className="flex flex-row gap-[16px]">
                <div className="flex flex-col gap-[16px]">
                    <div className="aspect-[3/4]">
                        <img src="/section4_1.png" alt="Section4-1 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                    </div>
                    
                    <div className="aspect-[3/2]">
                        <img src="/section4_7.png" alt="Section4-7 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    
                    <div className="aspect-[3/2]">
                    <img src="/section4_3.png" alt="Section4-3 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                    </div>

                    <div className="aspect-[3/4]">
                    <img src="/section4_6.png" alt="Section4-6 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                    </div>
                </div>
                

            </div>

            <div className="w-[141px] h-[40px] px-[16px] flex items-center text-center justify-center border border-DefaultBorderColor rounded-[8px]">
                <a href="#" className="text-Base-px font-strong font-pretendard"> Real 후기 보러가기 </a>
            </div>

        </div>

    </div>

  );
}