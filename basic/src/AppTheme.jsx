import React, { useContext } from 'react';
import './AppTheme.css';
import { DardModeProvider, DarkModeContext } from './context/DarkModeContext';

/**
 * state를 가장 근접한 부모 컴포넌트로 올리고 props로 전달 받는다.
 * 최하위 컴포넌트에서 최상위 부모 컴포넌트의 state를 사용하기 위해 props를 계속해서 받는다면?
 * ====================================================================================
 * 모든 컴포넌트들이 필요하거나 어플리케이션 전반적으로 필요한 state가 있다면
 * Context API를 사용할 수 있다
 * 예: 언어, 테마(다크모드), 로그인
 * 
 * *** 빈번히 업데이트 되는 상태는 사용하지 않는다
 * 엄브렐라 테크닉을 사용
 * - 원하는 컴포넌트 트리에 사용
 */

export default function AppTheme() {
    return (
        <DardModeProvider>
            <Header />
            <Main />
            <Footer />
        </DardModeProvider>
    );
}

function Header() {
    return(
        <header className='header'>
            Header
        </header>
    )
}

function Main() {
    return(
        <main className='main'>
            Main
            <Profile />
            <Products />
        </main>
    )
}

function Profile() {
    return(
        <div>
            Profile
            <User />
        </div>
    )
}

function User() {
    return(
        <div>
            User
        </div>
    )
}

function Products() {
    return(
        <div>
            Products
            <ProductsDetail />
        </div>
    )
}

function ProductsDetail() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return(
        <div>
            ProductsDetail
            <p>
                DarkMode: 
                { darkMode ? (
                    <span style={{backgroundColor: 'black', color: 'white'}}>
                        Dark Mode
                    </span>
                ) : (
                    <span>Light Mode</span>
                )}
            </p>
            <button onClick={()=>toggleDarkMode()}>Toggle</button>
        </div>
    )
}

function Footer() {
    return(
        <footer className='footer'>
            Footer
        </footer>
    )
}