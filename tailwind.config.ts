import type {Config} from 'tailwindcss'
const config:Config={content:['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{colors:{primary:{50:'#fff5f7',300:'#ffb6c1',600:'#ff6699'},accent:{gold:'#d4af37',rose:'#c2717f',cream:'#fff8f5'}},fontFamily:{serif:["Playfair Display","serif"],sans:["Poppins","sans-serif"]}}},plugins:[]}
export default config
