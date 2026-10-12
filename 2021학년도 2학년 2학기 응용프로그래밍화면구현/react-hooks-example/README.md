# react-hooks-example

기존 클래스형 컴포넌트와 React Hooks(함수형 컴포넌트) 방식을 비교하며 주요 훅들의 개념과 사용법을 학습한 실습 프로젝트입니다.

## 📌 코드별 설명

### 1. 상태 관리 (Class vs useState)
- **`Example1.jsx`**: 클래스 컴포넌트의 `this.state`와 `this.setState`를 사용한 카운터
- **`Example2.jsx`**: 함수 컴포넌트의 `useState(0)` 기본 원시값 상태 카운터
- **`Example3.jsx`**: 함수 컴포넌트의 `useState({ count: 0 })` 객체 형태 상태 카운터

### 2. 생명주기 & 사이드 이펙트 (Lifecycle vs useEffect)
- **`Example4.jsx`**: 클래스 컴포넌트 생명주기 메서드(`componentDidMount`, `componentDidUpdate`) 동작 확인
- **`Example5.jsx`**: `useEffect` 훅의 의존성 배열(deps)과 cleanup 함수를 활용한 마운트/업데이트/언마운트 처리

### 3. 커스텀 훅 (Custom Hook)
- **`useWindowWidth.js`**: 창 크기 변경(`resize`) 이벤트 리스너를 커스텀 훅으로 분리해 화면 너비를 실시간 감지

### 4. 성능 최적화 (useMemo)
- **`Example7.jsx`**: `useMemo` 훅을 사용해 고비용 연산 결과(`sum`)를 메모이제이션하여 불필요한 재연산 방지

### 5. Context API 데이터 조회 비교
- **`Example11.jsx`**: `<PersonContext.Consumer>` 렌더 프롭(Render Props) 패턴으로 Context 데이터 조회
- **`Example12.jsx`**: 클래스 컴포넌트의 `contextType`을 이용해 `this.context`로 Context 데이터 조회
- **`Example13.jsx`**: 함수 컴포넌트의 `useContext(PersonContext)` 훅을 사용한 가장 간결한 Context 데이터 조회
