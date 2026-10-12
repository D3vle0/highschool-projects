import logo from './logo.svg';
// import './App.scss';
import styles from './App.module.css';
import Button from './components/Button';
import StyledButton from './components/StyledButton';
import StyledButton2 from './components/StyledButton2';
import styled from 'styled-components';

const PrimaryStyledButton = styled(StyledButton)`
  background: blue;
  color: white;
`;

const UppercaseButton = (props) => <Button {...props} children={props.children.toUpperCase()} />;

const MyButton = (props) => <Button {...props} children={`MyButton ${props.children}`} />;

const StyledMyButton = styled(MyButton)`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 20px;
`;

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["Header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles["link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>버튼</Button>
        <StyledButton>스타일드버튼1</StyledButton>
        <StyledButton primary={true}>스타일드버튼2</StyledButton>
        <PrimaryStyledButton>버튼</PrimaryStyledButton>
        <StyledButton as="a" href="http://naver.com" target="_blank">스타일드a버튼</StyledButton>
        <StyledButton as={UppercaseButton}>styledupperbutton</StyledButton>
        <StyledButton2>h1</StyledButton2>
        <StyledMyButton>styledmybutton</StyledMyButton>
      </header>
    </div>
  );
}

export default App;
