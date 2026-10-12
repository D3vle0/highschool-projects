# style-loaders-example

React에서 다양한 스타일링 기법(CSS Modules, Sass/SCSS, Styled Components)의 설정과 사용법을 학습한 실습 프로젝트입니다.

## 📌 주요 스타일링 기법

- **CSS Modules (`*.module.css`)**
  - 컴포넌트 스코프 기반으로 고유한 해시 클래스명을 생성하여 전역 스타일 충돌 방지 (`Button.module.css`, `App.module.css`)
- **Sass / SCSS (`App.scss`)**
  - 중첩(Nesting), 변수, 믹스인 등을 활용할 수 있는 CSS 전처리기 연동
- **Styled Components (`styled-components`)**
  - **기본 스타일링**: 백틱 문법(Tagged Template Literal)을 통한 컴포넌트 기반 스타일링
  - **동적 스타일링**: 컴포넌트 props에 따른 조건부 스타일 적용 (`props.primary && css\`...\``)
  - **컴포넌트 확장**: 기존 컴포넌트에 스타일 입히기 (`styled(Button)`)
  - **다형성 (`as` prop)**: 스타일을 유지하면서 HTML 태그나 다른 컴포넌트로 변경 (`as="a"`, `as={UppercaseButton}`)
