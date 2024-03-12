import './App.css';

/**
 * Tailwind
 * - utility css
 * - https://tailwindcss.com/
 * 
 * 1. dev install (terminal)
 *  - 'yarn add -D tailwindcss'
 *  - `npx tailwindcss init`
 * 
 * 2. tailwind.config.js 설정
 * 
 * 3. index.css 최 상단에 추가
 *  @tailwind base;
 *  @tailwind components;
 *  @tailwind utilities;
 */

export default function AppTailwind() {
  return (
    <>
      <h1 className='text-2xl'>안녕!</h1>
      <button className='bg-blue-500 rounded-xl px-2'>Button</button>
    </>
  );
}


