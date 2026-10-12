# redux-start

순수 Redux의 핵심 개념(Store, Action, Reducer)을 익히고, React Context API와 커스텀 훅을 활용해 Redux와 React를 직접 연동해보는 실습 프로젝트입니다.

## 📌 주요 구성 및 동작 원리

- **Redux 코어 (`src/redux/`)**
  - **`actions.js`**: 할 일 추가/완료 및 필터 변경 액션 생성자 (`addTodo`, `completeTodo`, `showComplete`, `showAll`)
  - **`reducers.js`**: 이전 상태(`todos`, `filter`)와 액션을 받아 불변성을 유지하며 새로운 상태를 반환하는 `todoApp` 리듀서
  - **`store.js`**: `createStore(todoApp)`를 통해 전역 상태 저장소 생성

- **React 연동 (`src/App.js`, `src/contexts/`)**
  - **`ReduxContext.js`**: React 트리 전체에 Redux store 인스턴스를 공유하기 위한 Context
  - **`useReduxState()`**: `store.subscribe`를 활용해 Redux 상태가 바뀔 때마다 컴포넌트를 리렌더링시키는 커스텀 훅 (마치 `useSelector`)
  - **`useReduxDispatch()`**: 컴포넌트에서 액션을 발행할 수 있도록 `store.dispatch`를 반환하는 커스텀 훅 (마치 `useDispatch`)
  - **UI 렌더링**: '추가' 버튼 클릭 시 `dispatch(addTodo("todo"))`가 실행되며 변경된 스토어 상태가 화면에 즉시 반영됨
