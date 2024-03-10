import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

/**
 * 중요
 * 1. 모든 컴포넌트는 1개의 테그를 반환해야 한다 (두개 이상의 태그가 병렬로 반환되면 안됨)
 * 2. 변수 사용 법 : { 변수 }
 */

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("Button Click");
  }
  return (
    <>
      <button onClick={handleClick} >Button</button>
      <Avatar image={"/image/profile.jpg"}
        isNew={true}
      />
      <Profile 
        image={"/image/profile.jpg"}
        name="Sion Noh"
        title="Front-End Developer"
        isNew={true} 
      />
    </>
  );
}

export default AppProfile;
