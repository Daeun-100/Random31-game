# GitHub Pages 배포 가이드

## 1. GitHub 저장소 생성

1. GitHub에서 새 저장소를 생성합니다 (예: `random31-game`)
2. 저장소를 public으로 설정합니다

## 2. 로컬 설정

### package.json 수정

`package.json`의 `homepage` 필드에서 `[your-username]`을 실제 GitHub 사용자명으로 변경합니다:

```json
{
  "homepage": "https://your-actual-username.github.io/random31-game"
}
```

### Git 설정

```bash
# 현재 디렉토리에서
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/random31-game.git
git push -u origin main
```

## 3. GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. Settings 탭 클릭
3. 왼쪽 메뉴에서 "Pages" 클릭
4. Source를 "Deploy from a branch"로 설정
5. Branch를 "gh-pages"로 설정
6. Save 클릭

## 4. 배포

### 자동 배포 (권장)

- main 브랜치에 push하면 자동으로 배포됩니다
- GitHub Actions가 자동으로 빌드하고 gh-pages 브랜치에 배포합니다

### 수동 배포

```bash
npm run deploy
```

## 5. 확인

배포가 완료되면 다음 URL에서 게임을 확인할 수 있습니다:
`https://your-username.github.io/random31-game`

## 문제 해결

### 404 에러가 발생하는 경우

- GitHub Pages 설정에서 gh-pages 브랜치가 올바르게 설정되었는지 확인
- 배포 후 몇 분 정도 기다린 후 다시 시도

### 빌드 에러가 발생하는 경우

- `npm run build` 명령어로 로컬에서 빌드 테스트
- GitHub Actions 탭에서 빌드 로그 확인
