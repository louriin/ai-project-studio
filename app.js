// Project content is illustrative. Edit this file to customize your own planning documents.
const projects = [
  {
    id: 'budget-app',
    title: 'A&P Budget Management App',
    summary: '예산 계획과 지출 현황을 더 간단히 관리하기 위한 개인 학습용 웹앱',
    status: 'Building',
    focus: '사용자 흐름과 데이터 저장 방식',
    overview: '여러 사용자가 예산 계획과 지출 내역을 한 화면에서 확인하고 수정하는 방법을 탐색한다. 실제 회사 데이터가 아닌 가상 데이터만 사용한다.',
    features: ['브랜드별·월별 예산 계획 표시', '가상 PO 및 지출 내역 입력', '계획과 실적 비교', '데이터 저장 방식 검토'],
    flow: ['프로젝트/브랜드 선택', '월별 예산 검토', '지출 내역 입력', '계획 대비 실적 확인'],
    decisions: ['첫 버전은 가상 데이터를 사용한다.', '범위를 작게 시작하고 실제 사용성을 먼저 확인한다.'],
    questions: ['사용자 간 데이터 공유는 어떤 방식으로 구현할까?', '가장 간단한 저장 방식은 무엇일까?'],
    links: []
  },
  {
    id: 'workflow-agent',
    title: 'AI Workflow Automation',
    summary: '반복 작업을 덜어주는 간단한 AI 자동화 흐름 구상',
    status: 'Planning',
    focus: '자동화할 업무 한 가지 선정',
    overview: '반복되는 브라우저/파일 작업에서 작은 자동화 과제를 선택해 단계적으로 실험한다.',
    features: ['반복 작업의 단계 기록', '자동화 가능 구간 찾기', '오류 및 예외 상황 정리'],
    flow: ['반복 작업 선정', '기존 수작업 단계 기록', '자동화 흐름 설계', '샘플 데이터로 테스트'],
    decisions: ['먼저 하나의 작고 명확한 작업부터 시작한다.'],
    questions: ['첫 번째로 자동화할 작업은 무엇이 좋을까?', '어느 부분에 사용자 확인이 필요할까?'],
    links: []
  }
];
const statuses = ['All', 'Idea', 'Planning', 'Building', 'Testing', 'Done'];
const labels = {All:'All Projects',Idea:'Idea',Planning:'Planning',Building:'Building',Testing:'Testing',Done:'Done'};
const app = document.getElementById('app');
document.getElementById('year').textContent = new Date().getFullYear();
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function badge(status){return el('span',`badge ${status.toLowerCase()}`,status);}
function heading(parent,title){parent.append(el('h2','',title));}
function section(parent,title,values,ordered=false){const s=el('section','content-section');heading(s,title);if(Array.isArray(values)){const list=el(ordered?'ol':'ul');values.forEach(v=>list.append(el('li','',v)));s.append(list);}else s.append(el('p','',values));parent.append(s);}
function renderHome(){app.replaceChildren();const intro=el('section','intro');intro.append(el('div','eyebrow','Your creative workspace'),el('h1','','Projects start with ideas.'),el('p','','만들고 싶은 AI 프로젝트를 정리하고, 기획 방향을 발전시키며, 의견을 나누는 공간.'));app.append(intro);const filters=el('div','filters');const grid=el('div','project-grid');let chosen='All';function paint(){grid.replaceChildren();const shown=projects.filter(p=>chosen==='All'||p.status===chosen);if(!shown.length){grid.append(el('div','empty','아직 이 단계의 프로젝트가 없어요.'));return;}shown.forEach(p=>{const card=el('a','project-card');card.href=`project.html?id=${encodeURIComponent(p.id)}`;const top=el('div','card-top');top.append(el('span','muted','PROJECT'),badge(p.status));card.append(top,el('h2','',p.title),el('p','',p.summary));const meta=el('div','meta');meta.append(el('span','',`Focus · ${p.focus}`),el('span','','→'));card.append(meta);grid.append(card);});}statuses.forEach(status=>{const button=el('button','filter',labels[status]);button.type='button';button.addEventListener('click',()=>{chosen=status;filters.querySelectorAll('button').forEach(b=>b.classList.remove('active'));button.classList.add('active');paint();});if(status==='All')button.classList.add('active');filters.append(button);});app.append(filters,grid);paint();}
function renderDetail(){app.replaceChildren();const id=new URLSearchParams(location.search).get('id');const p=projects.find(item=>item.id===id);const back=el('a','back','← All Projects');back.href='index.html';app.append(back);if(!p){app.append(el('p','empty','프로젝트를 찾을 수 없어요. 목록으로 돌아가 주세요.'));return;}document.title=`${p.title} · AI Project Studio`;const head=el('section','detail-head');head.append(badge(p.status),el('h1','',p.title),el('p','',p.summary));app.append(head);const body=el('div','detail-body');section(body,'01. Overview & Goal',p.overview);section(body,'02. Key Features',p.features);section(body,'03. User Flow',p.flow,true);section(body,'04. Decisions',p.decisions);section(body,'05. Open Questions',p.questions);const resources=el('section','content-section');heading(resources,'06. Related Links');if(p.links.length===0)resources.append(el('p','muted','아직 등록된 링크가 없어요.'));else p.links.forEach(link=>{try{const u=new URL(link.url);if(!['https:','http:'].includes(u.protocol))return;const a=el('a','resource-link',link.label);a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';resources.append(a);}catch(_){}});body.append(resources);const discussion=el('section','content-section');heading(discussion,'07. Discussion');discussion.append(el('p','discussion-note','댓글은 다음 단계에서 GitHub Discussions(giscus)와 연결할 예정이야.'));body.append(discussion);app.append(body);}
if(location.pathname.split('/').pop()==='project.html')renderDetail();else renderHome();
