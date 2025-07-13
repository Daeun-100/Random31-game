# Random 31 Game

A React-based card game where players try to reach 31 points.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. GitHub에 저장소를 생성합니다 (예: `random31-game`)
2. `package.json`의 `homepage` 필드에서 `[your-username]`을 실제 GitHub 사용자명으로 변경합니다
3. 다음 명령어로 배포합니다:

```bash
npm run deploy
```

4. GitHub 저장소 설정에서 Pages 소스를 `gh-pages` 브랜치로 설정합니다

## Live Demo

[게임 데모 링크](https://[your-username].github.io/random31-game)

# 🎲 랜덤 31게임

Vite + React + TypeScript로 구현된 턴제 전략 게임입니다.

## 🎯 게임 소개

랜덤 31게임은 숫자를 순차적으로 불러가는 전략 게임입니다. 매번 랜덤하게 설정되는 목표 숫자에 도달하지 않도록 하면서, 상대방이 마지막 숫자를 누르도록 유도하는 것이 목표입니다.

## 🎮 게임 규칙

### 기본 규칙

- **목표 숫자**: 게임 시작 시 20~50 사이의 정수 중 하나가 랜덤으로 설정됩니다
- **플레이어**: 최소 2명, 최대 6명까지 플레이 가능합니다
- **진행 방식**: 턴제로 진행되며, 각 플레이어는 자신의 차례에 + 버튼을 1~3회 클릭할 수 있습니다

### 상세 규칙

1. **숫자 증가**: + 버튼을 클릭하면 현재 숫자가 1씩 증가합니다
2. **턴 제한**: 한 턴에서 최소 1회, 최대 3회까지 클릭 가능합니다
3. **턴 전환**:
   - 1~2회 클릭 시: "다음으로 넘기기" 버튼을 눌러야 턴이 넘어갑니다
   - 3회 클릭 시: 자동으로 턴이 넘어갑니다
4. **게임 종료**: 누군가 목표 숫자에 도달하면 게임이 종료되고, 해당 플레이어가 패배합니다

## 🚀 설치 및 실행

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 방법

1. 프로젝트 클론

```bash
git clone <repository-url>
cd random31-game
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 브라우저에서 확인

```
http://localhost:5173
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🛠️ 기술 스택

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: React Context API
- **Styling**: CSS3 (Custom)

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── GameScreen.tsx   # 메인 게임 화면
│   ├── GameScreen.css   # 게임 화면 스타일
│   ├── GameSetup.tsx    # 게임 설정 화면
│   └── GameSetup.css    # 설정 화면 스타일
├── context/             # React Context
│   └── GameContext.tsx  # 게임 상태 관리
├── types/               # TypeScript 타입 정의
│   └── game.ts         # 게임 관련 타입
├── App.tsx             # 메인 앱 컴포넌트
├── App.css             # 앱 스타일
└── main.tsx            # 앱 진입점
```

## 🎨 디자인 특징

- **다크 테마**: 눈의 피로를 줄이는 다크 컬러 스킴
- **반응형 디자인**: 모바일과 데스크톱 모두 지원
- **직관적 UI**: 게임 상태를 한눈에 파악할 수 있는 명확한 인터페이스
- **애니메이션**: 부드러운 전환 효과와 호버 애니메이션

## 🎯 주요 기능

### 게임 설정

- 플레이어 이름 설정 (2~6명)
- 플레이어 추가/제거
- 게임 규칙 안내

### 게임 플레이

- 실시간 숫자 표시
- 턴 진행 상태 표시
- 클릭 횟수 진행 표시
- 자동 턴 전환 (3회 클릭 시)

### 게임 종료

- 승자/패배자 표시
- 최종 숫자 및 목표 숫자 표시
- 새 게임 시작 기능

## 🔧 개발 가이드

### 새로운 기능 추가

1. **타입 정의**: `src/types/game.ts`에 새로운 타입 추가
2. **상태 관리**: `src/context/GameContext.tsx`에 상태 로직 추가
3. **컴포넌트**: `src/components/`에 새로운 컴포넌트 생성
4. **스타일**: 해당 컴포넌트의 CSS 파일 생성

### 코드 스타일

- TypeScript strict 모드 사용
- 함수형 컴포넌트와 React Hooks 사용
- CSS 클래스명은 kebab-case 사용
- 컴포넌트명은 PascalCase 사용

## 🐛 알려진 이슈

현재 알려진 이슈가 없습니다.

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.
