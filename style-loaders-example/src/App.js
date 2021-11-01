import logo from './logo.svg';
// import './App.scss';
import styles from './App.module.css';
import Button from './components/Button';

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
      </header>
    </div>
  );
}

export default App;
