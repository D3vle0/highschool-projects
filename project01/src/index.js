import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App0928 from './App_0928';
// import App1005 from './App_1005';
import App1012 from './App_1012';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // <React.StrictMode>
    //     {/* <App0928 value="1234" boolvalue={true} /> */}
    //     <App1005>
    //         <div>
    //             <span sample="aaaa">자식 노드</span>
    //         </div>
    //     </App1005>
    // </React.StrictMode>,
    <React.StrictMode>
        <App1012>
        </App1012>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();