EOW 웹사이트 — eow.co.kr
========================

상태: 라이브 (2026-04-10 배포)
GitHub: https://github.com/jichang1997-byte/eow-website
Vercel: https://eow-website.vercel.app
도메인: eow.co.kr (가비아 DNS → Vercel)


사이트 구조
----------
index.html          랜딩 (히어로 포스터 트레일)
about.html          About + Tour-as-a-Service
services.html       핵심 서비스 3개 (Visa, Hospitality, TM)
portfolio.html      프로젝트 포트폴리오 (11개)
team.html           팀 소개 (3명)
partners.html       HIKE* 파트너 + 클라이언트 목록
contact.html        연락처 + 이메일

ko/                 한국어 버전 (위와 동일 구조)
css/style.css       공용 스타일시트
js/                 메뉴, 스크롤 리빌, 커서 트레일
images/logos/       EOW + HIKE* 로고
images/posters/     포스터 14장 (트레일용)


업데이트 방법
------------
1. Claude Code에서 파일 수정 요청
   예: "포트폴리오에 새 프로젝트 추가해줘"
   예: "서비스 설명 문구 바꿔줘"
   예: "팀원 연락처 수정해줘"

2. Claude가 파일 수정 → git commit → git push

3. Vercel이 자동 감지 → 30초 내 eow.co.kr 반영

4. 라이브 사이트 확인 → 추가 수정 or 완료

* Ji가 직접 git/터미널 조작할 필요 없음
* 모든 변경 이력 GitHub에 저장됨
* 문제 발생 시 이전 버전으로 즉시 롤백 가능


디자인 토큰
----------
배경:    #0b0b0b / #111110 / #181817
텍스트:  #ececea / #9a9a96 / #666662
골드:    #c8a96e
보더:    #2a2a28
폰트:    DM Serif Display (헤드라인) + Inter (본문)


DNS 설정 (가비아)
----------------
A     @     76.76.21.21        (Vercel 연결)
TXT   @     google-site-...    (구글 인증 — 건드리지 말것)
MX    @     aspmx.l.google...  (구글 워크스페이스 이메일 — 건드리지 말것)


주의사항
-------
- 가비아 DNS에서 MX/TXT 레코드 삭제하면 @eow.co.kr 이메일 깨짐
- images/posters/ 에 400KB 이상 파일 넣지 말것 (로딩 속도)
- 한국어 수정 시 /ko/ 폴더 파일도 같이 수정해야 함
