import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useContext, StyleSheet } from "react";
import { addTodo } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}

function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <button onClick={click} style={styles.button}>추가</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)}
      </header>
    </div>
  );
  function click() {
    dispatch(addTodo("todo"));
  }
}

const styles = ({
  button: {
    fontSize: 30,
  },
});

export default App;
