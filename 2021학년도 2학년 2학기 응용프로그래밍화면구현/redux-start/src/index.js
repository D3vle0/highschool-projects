import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo, completeTodo, showComplete } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

store.subscribe(() => {
  console.log(store.getState());
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store);
console.log(store.getState());
store.dispatch(addTodo("coding"));
console.log(store.getState());
store.dispatch(addTodo("reading"));
store.dispatch(addTodo("eating"));

unsubscribe();

store.dispatch(addTodo("coding1"));
store.dispatch(addTodo("reading1"));
store.dispatch(addTodo("eating1"));

console.log(store.getState());

store.dispatch(addTodo("todo"));
store.dispatch(completeTodo(0));
store.dispatch(showComplete());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
