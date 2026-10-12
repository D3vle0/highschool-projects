import React, { useState, useEffect } from 'react';
import App0927 from './App_0927';
import App0928 from './App_0928';
import App1005 from './App_1005';
import App1012 from './App_1012';

function MainPage() {
  const [page, setPage] = useState(() => window.location.hash.replace('#', ''));

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash.replace('#', ''));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (page === '0927') {
    return (
      <div className="container mt-3">
        <a href="#/">← 목록</a>
        <hr />
        <App0927 />
      </div>
    );
  }

  if (page === '0928') {
    return (
      <div className="container mt-3">
        <a href="#/">← 목록</a>
        <hr />
        <App0928 value="1234" boolvalue={true} />
      </div>
    );
  }

  if (page === '1005') {
    return (
      <div className="container mt-3">
        <a href="#/">← 목록</a>
        <hr />
        <App1005>
          <div>
            <span sample="aaaa">자식 노드</span>
          </div>
        </App1005>
      </div>
    );
  }

  if (page === '1012') {
    return (
      <div className="container mt-3">
        <a href="#/">← 목록</a>
        <hr />
        <App1012 />
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <h1>React 기초</h1>
      <ul>
        <li><a href="#0927">0927</a></li>
        <li><a href="#0928">0928</a></li>
        <li><a href="#1005">1005</a></li>
        <li><a href="#1012">1012</a></li>
      </ul>
    </div>
  );
}

export default MainPage;
