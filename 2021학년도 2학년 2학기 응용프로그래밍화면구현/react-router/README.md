# react-router

`react-router-dom`을 활용한 SPA(Single Page Application) 클라이언트 사이드 라우팅 학습 실습 프로젝트입니다.

## 📌 주요 학습 내용

- **`<BrowserRouter>` & `<Switch>`**: URL 경로에 따라 적절한 컴포넌트를 매칭 및 렌더링
- **`<NavLink>`**: 현재 활성화된 라우트에 스타일(`activeStyle`) 적용
- **동적 URL 파라미터 (`/profile/:id`)**: `props.match.params.id`로 URL 경로 변수 추출
- **쿼리스트링 파싱 (`/about?name=...`)**: `query-string` 라이브러리 및 `URLSearchParams`를 활용한 쿼리 분석
- **프로그래밍 방식 라우팅**: `withRouter` HOC를 사용해 `props.history.push('/')`로 페이지 이동 처리
- **404 Not Found**: 매칭되지 않는 잘못된 URL에 대한 Fallback 페이지 처리
