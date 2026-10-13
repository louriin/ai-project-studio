# AI Project Studio

개인 AI 프로젝트의 아이디어와 기획 흐름을 정리하는 공개 웹사이트 MVP입니다.

## 실행

별도 설치 없이 `index.html`을 더블클릭해서 브라우저로 여세요. 프로젝트 카드를 클릭하면 `project.html`에서 상세 내용을 볼 수 있습니다.

## 프로젝트 내용 수정

`app.js` 맨 위의 `projects` 배열에서 제목, 요약, 상태, 기능, 흐름, 결정사항 및 질문을 수정할 수 있습니다. 새 프로젝트도 동일한 형식으로 추가할 수 있습니다. 가능한 상태는 `Idea`, `Planning`, `Building`, `Testing`, `Done`입니다. 현재 자료는 모두 **예시 내용**입니다.

## GitHub Pages 업로드

GitHub 저장소의 `Add file → Upload files`에서 `index.html`, `project.html`, `style.css`, `app.js` 파일을 저장소 최상위에 업로드한 뒤 `Commit changes`를 누르세요. `Settings → Pages`에서 `main`, `/(root)` 설정이 필요합니다.

## 향후 기능

프로젝트별 댓글은 GitHub Discussions 및 giscus를 연결해 구현할 예정입니다. 이 MVP에는 댓글 작성 기능이 아직 없습니다.

## 주의

이 저장소는 공개용입니다. 회사 내부 정보, 실제 예산/고객 정보, 비밀값 및 액세스 토큰을 게시하지 마세요.
