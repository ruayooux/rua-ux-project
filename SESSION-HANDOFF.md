# Session Handoff

이 문서는 `/Users/temprua/Documents/New project` 포트폴리오 사이트의 현재 구현 상태, 유지해야 할 구조, 누적된 사용자 요구사항, 프로젝트별 예외 규칙을 새 세션에서 빠르게 이어받기 위한 기록이다.

가장 중요한 원칙:
- 현재 코드 구조와 사이트 구조를 유지한다.
- 기존 `HTML/CSS/JS` 기반 정적 사이트 방식을 유지한다.
- 이미 반영된 UI 방향을 크게 갈아엎지 않고, 현재 디자인 언어 위에서 수정한다.
- 새 세션에서는 이 문서를 먼저 읽고, 이후 추가 프롬프트를 반영한다.

## 워크스페이스
- 루트: `/Users/temprua/Documents/New project`
- 주요 파일
  - `/Users/temprua/Documents/New project/index.html`
  - `/Users/temprua/Documents/New project/project.html`
  - `/Users/temprua/Documents/New project/styles.css`
  - `/Users/temprua/Documents/New project/script.js`

## 사이트 개요
- 메인 아카이브 페이지: `index.html`
- 프로젝트 디테일 페이지: `project.html?project=<프로젝트명>`
- 데이터 렌더링 로직은 대부분 `script.js`
- 스타일은 대부분 `styles.css`

## 현재 유지해야 하는 화면 구조

### 1. 메인 페이지 구조
- 상단 네비게이션
- 중앙 히어로 타이틀
- 프로젝트 리스트 카드 그리드
- 하단 추가 섹션

현재 헤더 관련 방향:
- 브랜드/좌상단 텍스트는 포트폴리오 성격 유지
- 메인 타이틀은 현재 `Project UX Research`
- 이전에는 `Rua's UX Project` 사용 이력 있음
- 이후 수정하더라도 현재 구조는 유지

### 2. 프로젝트 카드 구조
각 카드에는 아래 요소가 존재한다.
- 썸네일
- 썸네일 상단 좌측 플랫폼 라벨
- 프로젝트 제목
- 유형/도메인 태그
- 기간
- 플랫폼 표기
- 역할 라벨들
- 디자인 툴 표시 영역

현재 카드 동작:
- 카드 클릭 시 해당 프로젝트 디테일 페이지로 이동

### 3. 디테일 페이지 구조
각 디테일 페이지는 아래 순서를 기본으로 한다.
- 상단 브랜드/네비
- 뒤로가기 링크
- `PROJECT DETAIL` 보조 타이틀
- 프로젝트 제목
- 좌측 썸네일
- 우측 메타 정보 및 설명/라벨/툴/링크
- 하단에 추가 이미지/PDF/랜딩 자료 노출 예정

## 현재 디자인 방향
- Behance처럼 썸네일 중심
- 설명보다 작업 화면 우선
- 전체 배경은 화이트
- 한글 폰트는 Pretendard 계열
- 영문/숫자는 기존 계열 유지
- 카드형 아카이브 구조 유지

## 현재 반영된 핵심 사항

### 썸네일
- 다수 프로젝트에 실제 썸네일 이미지가 연결되어 있음
- 썸네일 원본 비율을 따라가도록 조정됨
- 흰 배경 썸네일에서 상단 라벨이 안 보이지 않도록 상단 그라디언트 오버레이가 들어감
- 오버레이는 카드 전체 덮개가 아니라 상단에서 아래로 사라지는 그라디언트여야 함

### 카드 정렬/표현
- 프로젝트 리스트는 최근 날짜 순 정렬 이력이 있음
- 일부 이후 요청에서 링크 보유 상태 기준 정렬 요구가 추가됨
- 카드 내부 설명 문단은 최대한 줄이고 라벨 구조를 사용

### 디자인 툴 아이콘
- Figma / Sketch 아이콘 영역 존재
- 현재는 로고만 보이도록 정리된 상태를 기준으로 유지
- 검정색 pill 배경은 제거 방향
- 크기 조정 이력이 있음
- 프로젝트별로 Figma만, Sketch만, 둘 다, 혹은 `adobe XD` 텍스트로 대체해야 하는 예외가 있음

### 디테일 링크 유형
디자인 상 액션 라벨은 아래 3종으로 구분한다.
- `Website`
- `Google Play store`
- `App Store`

이 구분은 실제 링크 유형에 따라 달라져야 한다.

### 플랫폼 표기 규칙
플랫폼은 아래 기준으로 관리한다.
- `Responsive Web`
- `iOS`
- `Android`

중복 포함 가능:
- 예: `Responsive Web · iOS · Android`

기존의 `App(iOS/Android)` 같은 표기를 점진적으로 위 규칙으로 치환한다.

## 새 세션에서 반드시 지켜야 할 구현 원칙
- 기존 파일을 전면 재구성하지 않는다.
- 새 프레임워크 도입 금지
- 데이터를 외부 API로 옮기지 않는다.
- 현재 `script.js` 기반 렌더링 구조를 유지한다.
- 예외 규칙은 `project` 단위로 분기한다.

## 프로젝트별 누적 예외 규칙

아래는 지금까지 사용자 요구로 누적된 예외 규칙이다. 모두가 반영 완료된 것은 아닐 수 있으나, 새 세션에서 참고 기준으로 삼는다.

### BARO(매입)
- 디테일 링크:
  - Website -> `https://sell.mybaro.com/`
- 디자인 툴:
  - Figma + Sketch 둘 다 표시 요구 이력 있음
- 디테일 페이지:
  - 역할 텍스트 문단 삭제 요구

### BARO(판매)
- 디테일 링크:
  - Website -> `https://mybaro.com/goods?type=new`
- 플랫폼:
  - Responsive Web + iOS + Android 성격으로 관리 가능
- 상세 하단 자료:
  - PDF 예시 파일 연결 논의 이력 있음

### DOSO market
- 디테일 링크:
  - Website -> `https://dosomarket.com/`
- 역할 라벨:
  - `화면 기획`, `Design System`, `UI`
- 디테일 썸네일:
  - 105% 확대 + 가운데 정렬 요구 이력 있음
- 흰 배경 썸네일이라 상단 라벨 대비 중요

### 소노바
- 리스트 플랫폼 표기:
  - `Android`로 수정 요구 이력 있음
- 디테일 링크:
  - `Google Play` 버튼 텍스트
  - 링크: `https://play.google.com/store/apps/details?id=com.sonova&hl=ko`

### 디어메이트
- 플랫폼:
  - App 중심
- 역할 라벨:
  - `화면 설계`, `Design System`, `UI`
- 디테일 링크:
  - `App Store`
  - `Google Play`
  - App Store: `https://apps.apple.com/kr/app/%EB%94%94%EC%96%B4%EB%A9%94%EC%9D%B4%ED%8A%B8-ai%EB%9E%91-%EB%85%B8%EB%8A%94-chatplay/id6444549452`
  - Google Play: `https://play.google.com/store/apps/details?id=ai.tunib.dearmate&hl=ko`
- 디자인 툴:
  - Figma만 표시 요구 이력 있음

### 틴토리
- 디테일 링크:
  - App Store: `https://apps.apple.com/us/app/%ED%8B%B4%ED%86%A0%EB%A6%AC/id1550720119`
  - Google Play: `https://play.google.com/store/apps/details?id=com.hangun.m.hangun2`
- 디자인 툴:
  - Figma + Sketch 둘 다 표시 요구 이력 있음

### 마이피티(트레이너)
- 썸네일 있음
- 디자인 툴:
  - Figma만 표시 요구 이력 있음

### 마이피티(회원)
- 썸네일 있음
- 디자인 툴:
  - Figma만 표시 요구 이력 있음

### God Teacher
- 썸네일 있음
- 디자인 툴:
  - Sketch만 표시 요구 이력 있음

### 믿고맡겨
- 썸네일 있음
- 디자인 툴:
  - Figma만 표시 요구 이력 있음

### Shipda
- 디자인 툴:
  - Sketch만 표시 요구 이력 있음

### 펫피(PetP)
- 디자인 툴:
  - Figma + Sketch 둘 다 표시 요구 이력 있음

### 대학필기
- 디자인 툴:
  - `adobe XD` 텍스트로 대체 요구 이력 있음
- 역할 라벨:
  - `화면 기획`, `Design System`, `UI`

### Series Ei8ht
- 역할 라벨:
  - `화면 기획`, `Design System`, `UI`
- 일부 하단 피그마 로고 노출 요구 이력 있음

## 역할 라벨 규칙

기본적으로 역할은 문장보다 라벨로 관리한다.

기본 후보 라벨:
- `서비스 기획`
- `화면 기획`
- `화면 설계`
- `Design System`
- `UI`
- `UX`

예외적으로 아래 조합 요구가 자주 등장함:
- `화면 기획`, `Design System`, `UI`
- `화면 설계`, `Design System`, `UI`

디테일 페이지에서는 역할 문장(`서비스 기획, 화면 설계, GUI-UI ...`)을 삭제하고 라벨 중심으로 가는 방향 요구가 있다.

## 디테일 페이지 규칙

### 기본 구조
- 좌측: 대표 썸네일
- 우측: 유형/플랫폼/기간/라벨/툴/요약/액션
- 하단: 상세 자료 섹션

### 뒤로가기
- `Back to archive` -> `← 뒤로가기` 요구 이력 있음

### 제목
- 한글 타이틀은 더 넓은 자간/줄높이 조정 요청 이력 있음

### 기간
- `착수기간: 0000. 00. 00 - 0000. 00. 00` 형식 요구 이력 있음
- 현재 데이터는 `2019. 02 ~ 2023. 11` 같은 형식도 존재

### 상세 자료 섹션
사용자 목표:
- 리스트에 노출된 정보 외에 하단에 이미지, JPG, PNG, PDF 등을 추가 노출
- 썸네일/프로젝트 설명 하단에 배치
- 상->하 기본 배치
- 단, 앱 화면처럼 세로가 가로보다 2.5배 이상 긴 이미지들은 3개씩 좌->우 배치

상세 자료 소스 폴더:
- `/Users/temprua/Desktop/Documents/포트폴리오 자료/디테일 페이지`

노출 규칙:
- 폴더명 -> 프로젝트 매핑
- 파일명 순으로 노출
- PDF는 embed/iframe 혹은 링크형 뷰어 방식 고려
- 이미지와 PDF를 동일한 상세 자료 섹션 안에서 순서대로 렌더링

### BARO(판매) 상세 PDF 예시
- 파일:
  - `/Users/temprua/Desktop/Documents/포트폴리오 자료/디테일 페이지/바로/바로 판매1.pdf`
- 목표:
  - `project.html?project=baro판매` 디테일 페이지에서
  - 현재 요약 썸네일 + 프로젝트 설명 하단부에 PDF 노출

## UX Research
- UX Research는 별도 섹션/리스트로 구성 예정
- CSV 참고 가능

CSV 경로:
- `/Users/temprua/Desktop/Documents/ExportBlock-c1916df0-3063-4ae5-bc87-224beb614e7b-Part-1/UX Research Project(2022-25)/Untitled 1d9af95f501e80f18868fb4d70e87dd9.csv`

참고 방향:
- 현재 메인 헤더는 `Project UX Research`
- UX Research 섹션은 기존 프로젝트 리스트와 시각적으로 유사한 카드 구조를 사용할 수 있음

## 현재 사용자 의도
- 썸네일 중심 프로젝트 아카이브를 유지
- 디테일 페이지를 더 실무 포트폴리오처럼 보강
- 프로젝트별 링크/플랫폼/툴을 정확히 분기
- 새 세션에서 반복 설명 없이 바로 이어서 작업 가능하게 만들기

## 새 세션 추천 시작 방식
새 세션에서 아래처럼 시작하면 된다.

예시:
1. `SESSION-HANDOFF.md 먼저 읽고 현재 구조 유지하면서 이어서 작업해줘`
2. `이번엔 BARO(판매) 디테일 하단 PDF 노출만 처리해줘`
3. `플랫폼 라벨을 Responsive Web / iOS / Android 체계로 정리해줘`
4. `디자인 툴 예외 규칙만 반영해줘`

## 우선순위 높은 남은 작업
1. 디테일 페이지 하단 상세 자료(이미지/PDF) 렌더링
2. 링크 유형별 버튼 라벨 분기
3. 플랫폼 분류 체계 정리 (`Responsive Web`, `iOS`, `Android`)
4. 프로젝트별 디자인 툴 예외 규칙 완성
5. UX Research CSV 기반 섹션 구성
6. 리스트 정렬 조건 재정의

## 토큰 절약을 위한 권장 작업 방식
- 한 번에 하나의 기능만 요청
- 브라우저 주석은 3~5개 단위로 나눠서 전달
- “이전 요청 무시하고 이것만 처리” 방식 선호
- 새 세션에서는 이 문서를 먼저 읽게 한 뒤, 현재 작업 1건만 지시
