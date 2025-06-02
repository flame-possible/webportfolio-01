
export default function Section5() {
  return (
    <div className="bg-Tertiary px-[16px] py-[40px] md:px-[58px] md:py-[80px] xl:px-[120px]">

        <div className="flex flex-col gap-[16px] text-center items-center justify-center">

            <p className="font-pretendard text-white text-H4-px md:text-H3-px lg:text-H2-px font-strong">
                번 사이에 담긴 이야기까지 구워드립니다.
            </p>

            <img src="/section5.png" alt="Section5 이미지" className="object-cover" />


            <div className="h-[40px] px-[16px] flex items-center text-center justify-center bg-Primary rounded-[8px]">
                <a href="#" className="text-Base-px font-strong font-pretendard text-white"> 지금 주문하러 가기 </a>
            </div>

        </div>

    </div>
  );
}