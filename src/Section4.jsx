
export default function Section4() {
  return (

    <div className="px-[16px] py-[40px] md:px-[58px] md:py-[80px] xl:px-[120px]">

        <div className="flex flex-col gap-[40px] md:gap-[64px] justify-center items-center text-center">

            <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <div className="flex flex-col gap-[20px]">

                    <div className="flex flex-col gap-[4px]">
                        <p className="font-strong font-pretendard text-Base-px md:text-LG-px lg:text-H4-px">
                            우리와 함께한 그 한 입의 순간들
                        </p>
                        <p className="font-Bagel text-H3-px md:text-H2-px lg:text-H1-px text-Primary">
                            Real People. Real Bites.
                        </p>

                    </div>

                    <p className="font-pretendard text-Base-px text-TextSecondary md:hidden">
                        #NiceToMeatYou 해시태그와 함께 당신의 한 입을 공유해주세요! 
                        매주 최고의 사진엔 ‘Holy Coupon’이 찾아갑니다
                    </p>
                    
                    <div className="hidden md:flex flex-col">
                        <p className="font-pretendard text-Base-px lg:text-LG-px text-TextSecondary">
                            #NiceToMeatYou 해시태그와 함께 당신의 한 입을 공유해주세요!
                        </p>
                        
                        <p className="font-pretendard text-Base-px lg:text-LG-px text-TextSecondary"> 
                            매주 최고의 사진엔 ‘Holy Coupon’이 찾아갑니다
                        </p>
                    </div>

                </div>

                <div className="flex md:hidden flex-row gap-[16px]">
                    <div className="basis-1/2 flex flex-col gap-[16px]">
                        <div className="h-[66.66%]">
                            <img src="/section4_1.png" alt="Section4-1 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                        </div>
                        
                        <div className="h-[33.33%]">
                            <img src="/section4_7.png" alt="Section4-7 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                        </div>
                    </div>
                    <div className="basis-1/2 flex flex-col gap-[16px]">
                        
                        <div className="h-[33.33%]">
                        <img src="/section4_3.png" alt="Section4-3 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                        </div>

                        <div className="h-[66.66%]">
                        <img src="/section4_6.png" alt="Section4-6 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                        </div>
                    </div>
                    

                </div>

                
                <div className="hidden md:flex flex-row gap-[16px] aspect-[2/1] w-full max-h-[646px] overflow-hidden">

                    <div className="basis-1/2 flex flex-col gap-[16px] h-full min-h-0">
                    
                        <div className="basis-2/3 flex flex-row gap-[16px] min-h-0">
                            
                            <div className="basis-2/3 h-full">
                                <img src="/section4_1.png" alt="Section4-1 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                            </div>

                            <div className="basis-1/3 h-full flex flex-col gap-[16px] min-h-0">
                                <div className="flex-1">
                                    <img src="/section4_2.png" alt="Section4-2 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                                </div>
                                
                                <div className="flex-1">
                                    <img src="/section4_5.png" alt="Section4-5 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                                </div>
                            </div>

                        </div>
                        
                        <div className="basis-1/3 min-h-0">
                            <img src="/section4_7.png" alt="Section4-7 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                        </div>

                    </div>
                    
                    <div className="basis-1/2 flex flex-row gap-[16px] min-h-0">

                        
                        <div className="basis-2/3 flex flex-col gap-[16px]">
                            <div className="h-[33.33%]">
                            <img src="/section4_3.png" alt="Section4-3 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                            </div>

                            <div className="h-[66.66%]">
                            <img src="/section4_6.png" alt="Section4-6 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                            </div>
                        </div>
                        
                        <div className="basis-1/3 flex flex-col gap-[16px]">
                            <img src="/section4_4.png" alt="Section4-4 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                            

                            <img src="/section4_8.png" alt="Section4-8 이미지" className="w-full h-full rounded-[8px] object-cover shadow-section4Shadow" />
                            
                        </div>

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