import './App.css';
import Button1 from './components/post-css/Button1';
import Button2 from './components/post-css/Button2';

/**
 * PostCSS
 * 1. 파일 이름
 *  - css 확장자 전에 module을 붙여준다.
 *  - 예시 : Button1.module.css
 * 
 * 2. 임포트
 *  - import 시 사용하고자 하는 변수명을 설정한다.
 *  - 예시 : import styles from './Button2.module.css'
 * 
 * 3. 사용
 *  - 사용시 {} 안에 import된 변수명.클래스명으로 사용
 *  - 예시 : <button className={styles.button}>Button1</button>
 */

export default function AppPostCss() {
  return (
    <>
      <Button1 />
      <Button2 />
    </>
  );
}


