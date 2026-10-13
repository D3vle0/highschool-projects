# react-portfolio

`framer-motion` 애니메이션과 `react-router-dom` 라우팅을 활용한 개인 포트폴리오 웹 애플리케이션입니다.

## 📌 주요 기능 및 구조

- **인터랙티브 애니메이션 카드 (`framer-motion`)**
  - 메인 페이지에서 각 카드(`Profile`, `Experience`, `Projects`, `Links`)를 클릭 시 부드럽게 펼쳐지는 확장형 UI (`AnimatePresence`, `layout`)
- **라우팅 구조 (`react-router-dom`)**
  - `/`: 메인 포트폴리오 화면 (`Home`)
  - `/stats`: GitHub 통계 및 언어 사용 분석 대시보드 (`Stats`)
