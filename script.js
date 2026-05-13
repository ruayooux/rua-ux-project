const projects = [
  {
    title: "BARO(판매)",
    platform: "Responsive Web",
    businessType: "B2C, C2C",
    status: "운영 중",
    period: "2019. 02 ~ 2023. 11(근무 내 상시)",
    websiteUrl: "https://mybaro.com/goods?type=new",
    designUrl: "https://drive.google.com/file/d/1uN2qSNCP2a87z_kKutRW5BP5eM2Gvyzv/view?usp=drive_link",
    summary: [
      "애플 중고 제품 구매자 회원가입",
      "애플 제품 스펙, 상태에 따라 자동 판매 견적 산출",
      "중고 애플 제품 구매",
      "희망 제품 요청",
    ],
    role: "서비스 기획, 화면 설계, GUI-UI, 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/baro-buy-sell.png",
  },
  {
    title: "BARO(매입)",
    platform: "Responsive Web",
    businessType: "B2B, B2C",
    status: "운영 중",
    period: "2019. 02 ~ 2023. 11(근무 내 상시)",
    websiteUrl: "https://sell.mybaro.com/",
    designUrl: "https://drive.google.com/file/d/1SmgMcqeetRGReYHQsJMHeaivOmQpoSf9/view?usp=drive_link",
    summary: [
      "애플 중고 제품 판매자 회원가입",
      "애플 제품 스펙, 상태에 따라 자동 판매 견적 산출",
      "중고 애플 제품 판매",
      "희망 제품 요청",
    ],
    role: "서비스 기획, 화면 설계, GUI-UI, 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/baro-buy-sell.png",
  },
  {
    title: "Shipda",
    platform: "Responsive Web",
    businessType: "B2B",
    status: "비공개, 운영 중",
    period: "2019. 04 ~ 2020. 09",
    websiteUrl: "https://www.ship-da.com/en",
    designUrl: "https://drive.google.com/file/d/1c_f0sVKHNShAH9rfDjCUU7biItghstqo/view?usp=sharing",
    summary: [
      "수입/물류/관세사 타입에 따른 권한 조건 및 가입",
      "수입/물류/관세사에 맞는 서비스 제공",
      "견적 요청, 입찰 및 매칭 중개",
    ],
    role: "서비스 기획, 화면 설계, GUI-UI, UX 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/shipda.png",
  },
  {
    title: "DOSO market",
    platform: "Responsive Web",
    businessType: "B2B",
    status: "운영 중",
    period: "2022. 10 ~ 2023. 02",
    websiteUrl: "https://dosomarket.com/",
    designUrl: "https://drive.google.com/file/d/1LJ1us0AB3PyixpyeE44QwdlHnASTPRXR/view?usp=drive_link",
    summary: [
      "구매자, 판매자에 맞는 서비스 제공 및 가입",
      "구매 희망 철강 제품에 대한 견적 요청",
      "철강 업체들에 의한 판매 입찰",
      "매칭(업체) 선택 후 주문, 결제, 배송, 정산",
      "알림톡 등을 통한 프로세스 안내",
    ],
    role: "화면 기획/설계, GUI-UI  디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/doso-market.png",
  },
  {
    title: "Series Ei8ht",
    platform: "Responsive Web",
    businessType: "B2C",
    status: "운영 중",
    period: "2020. 01 ~ 2022. 12",
    websiteUrl: "https://series-eight.com/",
    designUrl: "",
    summary: [
      "구매자에 명품 중고 대여",
      "날짜에 따른 중고 명품 대여 가격, 결제 플로우",
      "희망 제품이나 희망 날짜 요청 서비스",
      "중고 명품 재고 관리를 위한 관리자 페이지 제작",
      "제품 예약 날짜, 예약 정보 관리자에서 관리하도록 제작",
    ],
    role: "서비스 기획, 화면 설계, GUI-UI 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/series-eight.png",
  },
  {
    title: "펫피(PetP)",
    platform: "App",
    businessType: "B2C",
    status: "운영 중",
    period: "2019. 06 ~ 2020. 05",
    websiteUrl:
      "https://apps.apple.com/kr/app/%ED%8E%AB%ED%94%BC-%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EC%A0%81%EB%A6%BD%ED%98%95-%EA%B0%95%EC%95%84%EC%A7%80-%EC%82%B0%EC%B1%85%EC%95%B1/id1487605660",
    designUrl: "",
    summary: [
      "애견매트로 유명한 디팡(Dfang)에서 제공하는 ‘반려견을 위한 필수앱’으로 시작",
      "산책: 포인트 적립, 산책 기록",
      "커뮤니티: 산책 기록, 인근 애견 시설 소개, 각종 주제별 게시글 조회 및 작성",
      "모여진 포인트를 사용하여 애견 상품 구매",
    ],
    role: "화면기획/설계, GUI-UI 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/petp.png",
  },
  {
    title: "소노바",
    platform: "App",
    businessType: "B2B",
    status: "운영 중",
    period: "2022. 10 ~ 2022. 12",
    websiteUrl: "https://play.google.com/store/apps/details?id=com.sonova",
    designUrl: "",
    summary: [
      "보청기 제품 본사 관리자 상품 등록 및 관리",
      "보청기 제품 상품별 가능한 옵션 조합, 구성품 조합 등을 원하는 형태로 설정",
      "본사 SAP 연동 (주문, 상품, 배송 정보 동기화)",
    ],
    role: "화면기획/설계, GUI-UI 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/sonova.png",
  },
  {
    title: "마이피티(회원)",
    platform: "App",
    businessType: "B2C",
    status: "운영 중단",
    period: "2020. 12 ~ 2021. 03",
    websiteUrl: "https://kmong.com/portfolio/view/21406",
    designUrl: "https://drive.google.com/file/d/1iTXlzkG0-hww6qfXG_v-ClTDRWwKtnH7/view?usp=drive_link",
    summary: [
      "회원용 헬스 트레이닝 스케줄 생성 및 시간 예약 관리 서비스",
      "1:1 회원, 트레이너 간 실시간 스케줄 관리",
      "주변 장소 트레이너의 프로필 조회 가능",
    ],
    role: "(개인 외주 작업) App BI, 화면기획/설계, GUI-UI, UX 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/mypt-user.png",
  },
  {
    title: "마이피티(트레이너)",
    platform: "App",
    businessType: "B2B",
    status: "운영 중단",
    period: "2020. 12 ~ 2021. 03",
    websiteUrl: "https://kmong.com/portfolio/view/21405",
    designUrl: "https://drive.google.com/file/d/1ZvSpGEgONjvYzxl1HLwwtMI6f3t_yyly/view?usp=drive_link",
    summary: [
      "트레이너용 헬스 트레이닝 스케줄 생성 및 시간 예약 관리 서비스",
      "트레이너의 회원  관리",
      "트레이너 프로필 생성 가능",
    ],
    role: "(개인 외주 작업) App BI, 화면기획/설계, GUI-UI, UX 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/mypt-trainer.png",
  },
  {
    title: "틴토리",
    platform: "App",
    businessType: "B2C",
    status: "운영 중",
    period: "2019. 02 ~ 2021. 12",
    websiteUrl:
      "https://play.google.com/store/apps/details?id=com.hangun.m.hangun2&hl=ko",
    designUrl: "https://drive.google.com/file/d/10IHywPtSwqUd13pjUUYAB2L0VyJ-LriM/view?usp=sharing",
    summary: [
      "수업 컨텐츠 12가지 구분하여 문제 풀이 제공 (문법, 어순, 영한 단어, 한영 단어 등)",
      "진도 관리를 통해 주단위 학습량 부여",
      "주단위 진도 관리 및 학습 결과 (점수화된 평가 및 채점) 관리",
    ],
    role: "App BI, 기획 및 화면 설계, GUI-UI, UX 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/tintory.png",
  },
  {
    title: "디어메이트",
    platform: "App",
    businessType: "B2C",
    status: "비공개, 운영 중",
    period: "2022. 01 ~ 2022. 12",
    websiteUrl: "https://play.google.com/store/apps/details?id=ai.tunib.dearmate",
    designUrl: "https://drive.google.com/file/d/1QwE7O7BL8fnGoiCv-qtD90gAk8OizCOq/view?usp=sharing",
    summary: [
      "챗봇 AI 대화형 앱",
      "인공지능 챗봇과의 대화 과정에서 다양한 타입의 미션 수행(텍스트, 사진, URL 등)",
      "커뮤니티 서비스 제공(오늘의 질문, 댓글, 대댓글)",
    ],
    role: "화면 설계, GUI-UI 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/dearmate.png",
  },
  {
    title: "믿고맡겨",
    platform: "App",
    businessType: "B2C",
    status: "운영 중",
    period: "2020. 03 ~ 2020. 09",
    websiteUrl:
      "https://apps.apple.com/kr/app/%EB%AF%BF%EA%B3%A0%EB%A7%A1%EA%B2%A8/id1545509038",
    designUrl: "",
    summary: [
      "의류를 전용 박스에 보관할 수 있는 모바일 기반 O2O 서비스",
      "의류 보관 신청 및 수거, 분류, 검수, 세탁, 보관 진행 서비스",
      "필요 없는 물건 판매 서비스",
    ],
    role: "App BI, 기획 및 화면 설계, GUI-UI 디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/midgo.png",
  },
  {
    title: "God Teacher",
    platform: "Responsive Web",
    businessType: "B2C",
    status: "운영 중단",
    period: "2020. 01 ~ 2020. 12",
    websiteUrl: "",
    designUrl: "https://drive.google.com/file/d/1yUWY1UUGnkm6yL27Oifpwt6NYFqGcSMs/view?usp=sharing",
    summary: [
      "영어 단어장 생성 및 관리",
      "자료실을 통한 단어장 공유, 수정",
      "학생 관리",
      "단어장 출제 및 자동 채점",
    ],
    role: "화면 기획/설계, GUI-UI, UX디자인 총괄",
    designTool: "sketch",
    thumbnailPath: "./assets/thumbnails/god-teacher.png",
  },
  {
    title: "대학필기",
    platform: "App",
    businessType: "C2C",
    status: "운영 중단",
    period: "2019. 03 ~ 2019. 08",
    websiteUrl: "",
    designUrl: "https://drive.google.com/file/d/14OV6I2jU2wMbDCsfs6cG84_YzmhC0KCs/view?usp=drive_link",
    summary: [
      "대학 교과 필기 자료 구매/판매 서비스",
      "필기 자료 등록, 수정 가능",
      "미리보기, 파일 업로드 가능",
    ],
    role: "화면 기획/설계, GUI-UI, UX디자인 총괄",
    designTool: "figma",
    thumbnailPath: "./assets/thumbnails/college-note.png",
  },
];

const colorThemes = [
  ["#184257", "#2e6f7f", "#d89368"],
  ["#4f3b78", "#7d5cc9", "#f6a96f"],
  ["#275248", "#5a8f68", "#efd6a5"],
  ["#6a2e2e", "#bc5f4d", "#f2c59b"],
  ["#303b74", "#6880f6", "#f2b07f"],
  ["#4f4533", "#9f845b", "#f0d5a6"],
];

const projectsGrid = document.getElementById("projects-grid");
const dialog = document.getElementById("project-dialog");
const dialogStatus = document.getElementById("dialog-status");
const dialogPeriod = document.getElementById("dialog-period");
const dialogTitle = document.getElementById("dialog-title");
const dialogSubline = document.getElementById("dialog-subline");
const dialogRole = document.getElementById("dialog-role");
const dialogSummary = document.getElementById("dialog-summary");
const dialogActions = document.getElementById("dialog-actions");
const projectDetail = document.getElementById("project-detail");
const figmaLogoPath = "./assets/icons/figma.png";
const sketchLogoPath = "./assets/icons/sketch-logo.png";
const detailMediaManifest = window.DETAIL_MEDIA_MANIFEST || {};

const sortedProjects = [...projects].sort((a, b) => compareProjectsForArchive(a, b));
const projectIndex = new Map(sortedProjects.map((project) => [getProjectId(project.title), project]));

if (projectsGrid) {
  renderProjects();
}

if (projectDetail) {
  renderProjectDetail();
}

if (dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-dialog")) {
      dialog.close();
    }
  });

  dialog.addEventListener("mousedown", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) {
      dialog.close();
    }
  });
}

function compareProjectsForArchive(a, b) {
  const preferredOrder = [
    "펫피(PetP)",
    "Shipda",
    "틴토리",
    "마이피티(트레이너)",
    "마이피티(회원)",
    "BARO(매입)",
    "BARO(판매)",
  ];
  const preferredIndex = new Map(preferredOrder.map((title, index) => [title, index]));
  const orderA = preferredIndex.get(a.title);
  const orderB = preferredIndex.get(b.title);

  if (orderA !== undefined || orderB !== undefined) {
    if (orderA === undefined) {
      return 1;
    }
    if (orderB === undefined) {
      return -1;
    }
    return orderA - orderB;
  }

  const hasWebsiteA = Boolean(a.websiteUrl);
  const hasWebsiteB = Boolean(b.websiteUrl);
  if (hasWebsiteA !== hasWebsiteB) {
    return hasWebsiteA ? -1 : 1;
  }

  return a.title.localeCompare(b.title, "ko");
}

function parsePeriod(period) {
  const matches = [...period.matchAll(/(\d{4})\.\s*(\d{2})/g)];
  if (!matches.length) {
    return { startRank: 0, endRank: 0 };
  }

  const start = matches[0];
  const end = matches[matches.length - 1];

  return {
    startRank: Number(start[1]) * 100 + Number(start[2]),
    endRank: Number(end[1]) * 100 + Number(end[2]),
  };
}

function getProjectId(title) {
  return title
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDetailPageUrl(project) {
  return `./project.html?project=${encodeURIComponent(getProjectId(project.title))}`;
}

function getTheme(index) {
  return colorThemes[index % colorThemes.length];
}

function buildVisual(project, index, compact = false) {
  const [colorA, colorB, colorC] = getTheme(index);
  const wrapper = document.createElement("div");
  wrapper.className = "card-visual";
  if (project.thumbnailPath) {
    wrapper.classList.add("has-thumbnail");
    if (shouldApplyThumbnailOverlay(project)) {
      wrapper.classList.add("has-thumbnail-overlay");
    }
    if (hasLightThumbnail(project)) {
      wrapper.classList.add("has-light-thumbnail");
    }
    const image = document.createElement("img");
    image.className = "thumbnail-image";
    image.src = toAssetSrc(project.thumbnailPath);
    image.alt = `${project.title} thumbnail`;
    wrapper.append(image);
  } else {
    wrapper.style.background = `
      radial-gradient(circle at top left, ${hexToRgba(colorC, 0.78)}, transparent 34%),
      linear-gradient(135deg, ${colorA} 0%, ${colorB} 60%, ${hexToRgba(colorA, 0.92)} 100%)
    `;
  }

  const stack = document.createElement("div");
  stack.className = "visual-stack";
  const top = document.createElement("div");
  top.className = "visual-top";
  getVisualPlatformLabels(project, compact).forEach((label) => {
    const chip = document.createElement("span");
    chip.className = "visual-chip";
    chip.textContent = label;
    top.append(chip);
  });
  stack.append(top);
  wrapper.append(stack);
  return wrapper;
}

function renderProjects() {
  projectsGrid.innerHTML = "";

  sortedProjects.forEach((project, projectIndex) => {
    if (
      project.title === "디어메이트" ||
      project.title === "소노바" ||
      project.title === "Series Ei8ht"
    ) {
      return;
    }

    const card = document.createElement("article");
    card.className = "project-card";
    card.classList.add(cardSizeClass(projectIndex));
    applyCardLink(card, project);

    const visual = buildVisual(project, projectIndex, true);
    const body = document.createElement("div");
    body.className = "card-body";

    body.innerHTML = `
      <div class="card-title-row">
        <h3 class="card-title">${project.title}</h3>
        <span class="status-badge">${project.businessType}</span>
      </div>
      <div class="card-meta">
        <span class="meta-text">${formatPeriod(project.period)}</span>
        <span class="meta-text">${getPlatformMetaLabel(project)}</span>
      </div>
    `;

    const roleLabels = document.createElement("div");
    roleLabels.className = "role-labels";
    getRoleLabels(project).forEach((label) => {
      const chip = document.createElement("span");
      chip.className = "role-label";
      chip.textContent = label;
      roleLabels.append(chip);
    });
    body.append(roleLabels);

    const actions = document.createElement("div");
    actions.className = "card-actions";
    actions.append(createDesignTools(project));

    body.append(actions);
    card.append(visual, body);
    projectsGrid.append(card);
  });
}

function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const project = projectIndex.get(params.get("project"));

  if (!project) {
    projectDetail.innerHTML = `
      <section class="detail-empty">
        <p>프로젝트 정보를 찾을 수 없습니다.</p>
        <a class="detail-back-link" href="./index.html#archive">Back to archive</a>
      </section>
    `;
    return;
  }

  const detailIndex = sortedProjects.findIndex((item) => item.title === project.title);
  const visual = buildVisual(project, detailIndex);
  visual.classList.add("detail-visual");

  const toolIcons = createDesignTools(project);
  toolIcons.classList.add("detail-tool-icons");

  const roleLabels = document.createElement("div");
  roleLabels.className = "role-labels";
  getRoleLabels(project).forEach((label) => {
    const chip = document.createElement("span");
    chip.className = "role-label";
    chip.textContent = label;
    roleLabels.append(chip);
  });

  const summaryList = document.createElement("ul");
  summaryList.className = "detail-summary";
  project.summary.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    summaryList.append(li);
  });

  const actions = document.createElement("div");
  actions.className = "detail-actions";
  actions.append(createDetailAction(project.websiteUrl, "서비스 바로가기"));

  const mediaSection = createDetailMediaSection(project);

  projectDetail.innerHTML = "";

  const shell = document.createElement("section");
  shell.className = "detail-shell";
  shell.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">Project Detail</p>
      <h1>${project.title}</h1>
    </div>
    <div class="detail-grid">
      <div class="detail-visual-wrap"></div>
      <div class="detail-copy">
        <div class="detail-copy-top">
          <span class="status-badge">${project.businessType}</span>
          <span class="detail-platform">${getPlatformMetaLabel(project)}</span>
        </div>
        <p class="detail-service-name"><span class="detail-meta-label">서비스명:</span> ${getProjectServiceName(project)}</p>
        <p class="detail-scope"><span class="detail-meta-label">프로젝트 범위:</span> ${getProjectScope(project)}</p>
        <p class="detail-period"><span class="detail-meta-label">참여 기간:</span> ${formatPeriod(project.period)}</p>
      </div>
    </div>
  `;

  shell.querySelector(".detail-visual-wrap").append(visual);
  shell.querySelector(".detail-copy").append(roleLabels, toolIcons, summaryList, actions);
  if (mediaSection) {
    shell.append(mediaSection);
  }
  projectDetail.append(shell);

  document.title = `${project.title} | Project Archive`;
}

function getProjectScope(project) {
  const scopeOverrides = {
    "BARO(판매)": "운영 유지 - 프로젝트 별 기획/디자인 참여",
    "BARO(매입)": "운영 유지 - 프로젝트 별 기획/디자인 참여",
    "DOSO market": "서비스 기획 - MVP - 디자인",
    틴토리: "기능별 기획 - UX 화면 설계",
    "마이피티(트레이너)": "서비스 기획 - 디자인",
    "마이피티(회원)": "서비스 기획 - 디자인",
    믿고맡겨: "서비스 기획 - MVP - 디자인",
    Shipda: "서비스 기획 - MVP - 디자인 및 기능 고도화",
    "God Teacher": "서비스 기획 - 기능별 기획 및 화면 설계",
    "펫피(PetP)": "MVP - 기능 고도화 및 디자인",
    대학필기: "MVP - 디자인",
  };

  return scopeOverrides[project.title] || "프로젝트 별 기획/디자인 참여";
}

function getProjectServiceName(project) {
  const serviceNames = {
    "BARO(판매)": "중고 맥북 거래(판매) 플랫폼",
    "BARO(매입)": "중고 맥북 거래(매입) 플랫폼",
    "DOSO market": "철강/건자재 최저가 거래 플랫폼",
    틴토리: "초중고 영어학원/문제풀이 전문 앱",
    "마이피티(트레이너)": "PT 회원 스케줄 관리 앱",
    "마이피티(회원)": "PT 스케줄 관리 앱",
    "God Teacher": "수능 영어 기출 문제 풀이 제작 앱(교사, 강사용)",
    믿고맡겨: "짐보관/관리/의류 스타일링 관리 서비스",
    Shipda: "수출입 포워딩 운임 실시간 조회, 견적 플랫폼",
    "펫피(PetP)": "포인트 적립형 강아지 산책 앱",
  };

  return serviceNames[project.title] || project.title;
}

function openDialog(project) {
  const index = sortedProjects.indexOf(project);
  renderDialogVisual(project, index);

  dialogStatus.textContent = project.status;
  dialogPeriod.textContent = formatPeriod(project.period);
  dialogTitle.textContent = project.title;
  dialogSubline.textContent = `${project.platform} • ${project.businessType}`;
  dialogRole.textContent = project.role;
  dialogSummary.innerHTML = "";

  project.summary.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    dialogSummary.append(li);
  });

  dialogActions.innerHTML = "";
  if (project.designUrl) {
    dialogActions.append(createDialogLink(project.designUrl, "Design attachment", true));
  }
  if (project.websiteUrl) {
    dialogActions.append(createDialogLink(project.websiteUrl, "Open website"));
  }

  if (!dialog.open) {
    dialog.showModal();
  }
}

function createDialogLink(href, label, primary = false) {
  const anchor = document.createElement("a");
  anchor.className = `dialog-button${primary ? " primary" : ""}`;
  anchor.href = href;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = label;
  return anchor;
}

function createDetailAction(href, label) {
  const anchor = document.createElement("a");
  anchor.className = "detail-action";
  anchor.textContent = label;
  if (href) {
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const opened = window.open(href, "_blank", "noopener,noreferrer");
      if (!opened) {
        window.location.href = href;
      }
    });
  } else {
    anchor.classList.add("is-disabled");
    anchor.setAttribute("aria-disabled", "true");
    anchor.tabIndex = -1;
  }
  return anchor;
}

function createDetailMediaSection(project) {
  const section = document.createElement("section");
  section.className = "detail-media";

  const header = document.createElement("div");
  header.className = "detail-media-header";

  const title = document.createElement("h2");
  title.className = "detail-media-title";
  title.textContent = "Design Pages";

  const items = getDetailMediaItems(project);

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "detail-media-empty";
    empty.textContent = "No detail images yet.";
    header.append(title);
    section.append(header, empty);
    return section;
  }

  const grid = document.createElement("div");
  grid.className = "detail-media-slider";

  const frame = document.createElement("div");
  frame.className = "detail-media-frame";

  const track = document.createElement("div");
  track.className = "detail-media-track";

  const slides = groupDetailMediaItems(project, items);

  slides.forEach((slideItems, index) => {
    const figure = document.createElement("figure");
    figure.className = "detail-media-item";
    figure.dataset.index = String(index);
    if (index === 0) {
      figure.classList.add("is-active");
    }

    if (slideItems.length > 1) {
      figure.classList.add("is-grouped");
      if (project.title === "펫피(PetP)") {
        figure.classList.add("is-petp-grouped");
      }
      const mediaGrid = document.createElement("div");
      mediaGrid.className = "detail-media-item-grid";
      slideItems.forEach((image, imageIndex) => {
        const media = createDetailMediaAsset(project, image, imageIndex);
        mediaGrid.append(media);
      });
      figure.append(mediaGrid);
    } else {
      const media = createDetailMediaAsset(project, slideItems[0], index);
      figure.append(media);
    }

    track.append(figure);
  });

  const controls = createDetailMediaControls(track, slides.length);
  frame.append(track, controls.buttons);
  grid.append(frame, controls.counter);
  header.append(title, controls.headerButtons);
  section.append(header, grid);
  return section;
}

function groupDetailMediaItems(project, items) {
  const groupSize = getDetailMediaGroupSize(project);
  if (groupSize <= 1) {
    return items.map((item) => [item]);
  }

  const slides = [];
  for (let index = 0; index < items.length; index += groupSize) {
    slides.push(items.slice(index, index + groupSize));
  }

  return slides;
}

function getDetailMediaGroupSize(project) {
  const groupedProjects = new Set([
    "틴토리",
    "마이피티(트레이너)",
    "마이피티(회원)",
    "믿고맡겨",
    "펫피(PetP)",
    "대학필기",
  ]);
  return groupedProjects.has(project.title) ? 3 : 1;
}

function getDetailMediaItems(project) {
  const matched = detailMediaManifest[project.title.normalize("NFC")] || [];

  return matched.map((item) => ({
    src: item.src,
    type: item.type || "image",
    alt: `${project.title} detail image`,
  }));
}

function toAssetSrc(src) {
  if (src.startsWith(".")) {
    return new URL(src, window.location.href).href;
  }

  return `file://${encodeURI(src)}`;
}

function createDetailMediaAsset(project, item, index) {
  const media = document.createElement("img");
  media.className = "detail-media-image";
  media.src = toAssetSrc(item.src);
  media.alt = item.alt || `${project.title} detail image ${index + 1}`;
  media.loading = "lazy";
  return media;
}

function createDetailMediaControls(track, totalItems) {
  const controls = document.createElement("div");
  controls.className = "detail-media-controls";

  const headerButtons = document.createElement("div");
  headerButtons.className = "detail-media-header-controls";

  const prevButton = document.createElement("button");
  prevButton.className = "detail-media-button";
  prevButton.type = "button";
  prevButton.setAttribute("aria-label", "Previous image");
  prevButton.innerHTML = getCarouselArrowIcon("left");

  const counter = document.createElement("p");
  counter.className = "detail-media-counter";

  const nextButton = document.createElement("button");
  nextButton.className = "detail-media-button";
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Next image");
  nextButton.innerHTML = getCarouselArrowIcon("right");

  prevButton.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlide();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = Math.min(totalItems - 1, currentIndex + 1);
    updateSlide();
  });

  headerButtons.append(prevButton.cloneNode(true), nextButton.cloneNode(true));
  const [headerPrevButton, headerNextButton] = headerButtons.querySelectorAll(".detail-media-button");

  headerPrevButton.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlide();
  });

  headerNextButton.addEventListener("click", () => {
    currentIndex = Math.min(totalItems - 1, currentIndex + 1);
    updateSlide();
  });

  let currentIndex = 0;
  controls.append(prevButton, counter, nextButton);
  controls.removeChild(counter);
  updateSlide();
  return { buttons: controls, counter, headerButtons };

  function updateSlide() {
    [...track.children].forEach((item, index) => {
      item.classList.toggle("is-active", index === currentIndex);
    });

    counter.textContent = `${currentIndex + 1} / ${totalItems}`;
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === totalItems - 1;

    setButtonState(prevButton, !isFirst);
    setButtonState(headerPrevButton, !isFirst);
    setButtonState(nextButton, !isLast);
    setButtonState(headerNextButton, !isLast);
  }
}

function getCarouselArrowIcon(direction) {
  const rotation = direction === "left" ? "180" : "0";
  return `
    <svg class="detail-media-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5l8 7-8 7" transform="rotate(${rotation} 12 12)"></path>
    </svg>
  `;
}

function setButtonState(button, enabled) {
  button.disabled = !enabled;
  button.classList.toggle("is-disabled", !enabled);
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const bigint = Number.parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderDialogVisual(project, index) {
  const dialogVisual = document.getElementById("dialog-visual");
  dialogVisual.innerHTML = "";
  const [colorA, colorB, colorC] = getTheme(index);
  dialogVisual.style.background = `
    radial-gradient(circle at top left, ${hexToRgba(colorC, 0.78)}, transparent 34%),
    linear-gradient(135deg, ${colorA} 0%, ${colorB} 60%, ${hexToRgba(colorA, 0.92)} 100%)
  `;

  const stack = document.createElement("div");
  stack.className = "visual-stack";
  const top = document.createElement("div");
  top.className = "visual-top";
  getVisualPlatformLabels(project).forEach((label) => {
    const chip = document.createElement("span");
    chip.className = "visual-chip";
    chip.textContent = label;
    top.append(chip);
  });
  stack.append(top);
  dialogVisual.append(stack);
}

function cardSizeClass(index) {
  if (index % 7 === 0 || index % 7 === 3) {
    return "is-large";
  }
  if (index % 2 === 0) {
    return "is-medium";
  }
  return "is-compact";
}

function formatPeriod(period) {
  return period.replace(/\(근무 내 상시\)/g, "").replace(/\s{2,}/g, " ").trim();
}

function getPrimaryLink(project) {
  return project.websiteUrl || project.designUrl || "";
}

function applyCardLink(card, project) {
  const href = getDetailPageUrl(project);
  if (!href) {
    return;
  }

  card.addEventListener("click", (event) => {
    if (event.target.closest(".card-action")) {
      return;
    }
    window.location.href = href;
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = href;
    }
  });

  card.tabIndex = 0;
}

function createDesignTools(project) {
  const wrapper = document.createElement("span");
  wrapper.className = "design-tools";

  const tools = getDesignToolSet(project);
  tools.forEach((tool) => {
    if (tool === "adobe-xd") {
      const text = document.createElement("span");
      text.className = "design-tool-text";
      text.textContent = "adobe XD";
      wrapper.append(text);
      return;
    }

    const icon = document.createElement("img");
    icon.className = `design-tool-icon ${tool}`;
    icon.src = tool === "sketch" ? sketchLogoPath : figmaLogoPath;
    icon.alt = tool === "sketch" ? "Sketch" : "Figma";
    wrapper.append(icon);
  });
  return wrapper;
}

function getDesignToolSet(project) {
  const bothTools = new Set(["BARO(매입)", "BARO(판매)", "틴토리", "펫피(PetP)"]);
  const sketchOnly = new Set(["God Teacher", "Shipda"]);
  const figmaOnly = new Set([
    "DOSO market",
    "디어메이트",
    "마이피티(트레이너)",
    "마이피티(회원)",
    "믿고맡겨",
    "소노바",
    "Series Ei8ht",
  ]);

  if (project.title === "대학필기") {
    return ["adobe-xd"];
  }
  if (bothTools.has(project.title)) {
    return ["figma", "sketch"];
  }
  if (sketchOnly.has(project.title)) {
    return ["sketch"];
  }
  if (figmaOnly.has(project.title)) {
    return ["figma"];
  }
  return ["figma"];
}

function hasLightThumbnail(project) {
  const lightThumbnailProjects = new Set([
    "DOSO market",
    "소노바",
    "디어메이트",
    "Series Ei8ht",
    "Shipda",
  ]);

  return lightThumbnailProjects.has(project.title);
}

function shouldApplyThumbnailOverlay(project) {
  const overlayProjects = new Set([
    "소노바",
    "DOSO market",
    "Shipda",
    "Series Ei8ht",
    "디어메이트",
  ]);

  return overlayProjects.has(project.title);
}

function getVisualPlatformLabels(project, compact = false) {
  const labels = [project.platform];
  const extra = getSupplementalVisualPlatform(project);
  if (extra) {
    labels.push(compact ? "App" : extra);
  }
  return labels;
}

function getSupplementalVisualPlatform(project) {
  if (project.title === "BARO(판매)" || project.title === "Series Ei8ht") {
    return "App(iOS/Android)";
  }
  return "";
}

function getPlatformMetaLabel(project) {
  if (project.title === "대학필기") {
    return "App(Android)";
  }

  if (project.platform === "App") {
    return "App(iOS/Android)";
  }

  const extra = getSupplementalVisualPlatform(project);
  if (extra) {
    return `${project.platform} · ${extra}`;
  }

  return project.platform;
}

function getRoleLabels(project) {
  const roleOverrides = {
    "DOSO market": ["화면 기획", "Design System", "UI"],
    "소노바": ["화면 기획", "Design System", "UI"],
    "대학필기": ["화면 기획", "Design System", "UI"],
  };

  if (roleOverrides[project.title]) {
    return roleOverrides[project.title];
  }

  const labels = [];
  const role = project.role;

  if (role.includes("서비스 기획") || role.includes("기획")) {
    labels.push("서비스 기획");
  }
  if (role.includes("화면")) {
    labels.push("화면 설계");
  }
  if (role.includes("디자인 총괄") || role.includes("디자인")) {
    labels.push("Design System");
  }
  if (role.includes("GUI-UI") || role.includes("UI")) {
    labels.push("UI");
  }
  if (role.includes("UX")) {
    labels.push("UX");
  }

  const unique = [...new Set(labels)];
  return unique.length ? unique : ["서비스 기획", "화면 설계", "Design System", "UI"];
}
