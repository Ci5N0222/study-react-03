import styled, {css} from 'styled-components';
import './App.css';

const Container = styled.div`
    display: flex;
`
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #3c5b69;
    color: #b9eaff;
    margin: 0 1em;
    padding: 0.25em 1em;
    ${(props) =>
        props.primary && css`
            background: #009cd5;
            color: white;
        `
    };
`;

/**
 * Styled-Components
 * - 자바스크립트에서 css를 사용할 수 있게 해주는 라이브러리
 * 
 * 1. lib install
 *  - 'yarn add styled-components'
 * 
 * 2. import
 *  - import styled from 'styled-components';
 * 
 * 3. 사용
 *  - const Container = styled.div`[여기에 스타일]`
 */

export default function AppStyledComponents() {
  return (
    <>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </>
  );
}


