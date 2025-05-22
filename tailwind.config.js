/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React의 모든 컴포넌트 포함
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      colors: {
        Primary: '#EF5A0A',
        Tertiary: '#FDB104',
        Dark: '#030201',
        Secondary: '#271A08',
        DefaultBorderColor: "#D9D9D9",
        TextSecondary: "#000000A6",
        TextQuaternary: "#FFFFFF40",
        TextTertiary: "#00000073",
      },
      fontFamily: {
        Bagel: ['"Bagel Fat One"', 'sans-serif'], // 커스텀 폰트 등록
        pretendard: ['"Pretendard"', 'sans-serif'], // 커스텀 폰트 등록
      },
      fontSize: {
        // [폰트 크기, 행간] 둘 다 px로 작성 가능
        'Base-px': ['14px', '22px'], 
        'SM-px': ['12px', '20px'], 
        'LG-px': ['16px', '24px'], 
        'H1-px': ['38px', '46px'], 
        'H2-px': ['30px', '38px'], 
        'H3-px': ['24px', '32px'], 
        'H4-px': ['20px', '28px'], 
        'H5-px': ['16px', '24px'], 
      },
      fontWeight: {
        'strong': '600',  // 커스텀 이름
      },
      boxShadow:{
        'defaultShadow': '0 2px 0 rgba(0, 0, 0, 0.02)',
        'section4Shadow': '4px 4px 16px rgba(0, 0, 0, 0.08)'
      },

    },
  },
  plugins: [],
}