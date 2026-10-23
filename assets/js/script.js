const header=document.querySelector('.header');
const onScroll=()=>header.classList.toggle('scrolled',scrollY>30);onScroll();addEventListener('scroll',onScroll,{passive:true});
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation'),mobile=matchMedia('(max-width:800px)');
function closeMenu(focus=false){if(mobile.matches){nav.hidden=true;toggle.setAttribute('aria-expanded','false');if(focus)toggle.focus()}}
function syncMenu(){nav.hidden=mobile.matches;toggle.setAttribute('aria-expanded','false')}syncMenu();mobile.addEventListener('change',syncMenu);
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.hidden=!open;toggle.setAttribute('aria-expanded',String(open))});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu(true)});document.addEventListener('click',e=>{if(!header.contains(e.target))closeMenu()});
const motion=matchMedia('(prefers-reduced-motion:reduce)');
const heroVideo=document.querySelector('#hero-video'),videoToggle=document.querySelector('#video-toggle');
if(heroVideo&&videoToggle){
  let wantsPlayback=!motion.matches;
  const syncVideoButton=()=>{videoToggle.textContent=heroVideo.paused?'Pornește video':'Pauză video'};
  const playHero=()=>{if(!heroVideo.getAttribute('src')){heroVideo.src=heroVideo.dataset.src;heroVideo.load()}heroVideo.muted=true;heroVideo.play().catch(syncVideoButton)};
  videoToggle.hidden=false;
  heroVideo.addEventListener('play',syncVideoButton);heroVideo.addEventListener('pause',syncVideoButton);
  heroVideo.addEventListener('error',()=>{videoToggle.hidden=true});
  videoToggle.addEventListener('click',()=>{wantsPlayback=heroVideo.paused;if(wantsPlayback)playHero();else heroVideo.pause()});
  motion.addEventListener('change',()=>{wantsPlayback=!motion.matches;if(wantsPlayback)playHero();else heroVideo.pause()});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)heroVideo.pause();else if(wantsPlayback)playHero()});
  if(wantsPlayback)playHero();
}
document.querySelectorAll('[data-lazy-video]').forEach(v=>{const load=()=>{v.src=v.dataset.lazyVideo;v.removeEventListener('pointerdown',load);v.removeEventListener('keydown',load)};v.addEventListener('pointerdown',load,{once:true});v.addEventListener('keydown',load,{once:true})});
const tablist=document.querySelector('.floor-tabs');if(tablist){const tabs=[...tablist.querySelectorAll('a')],panels=tabs.map(t=>document.querySelector(t.getAttribute('href')));function activate(i,focus=false){tabs.forEach((t,n)=>{t.setAttribute('aria-selected',String(n===i));t.tabIndex=n===i?0:-1;panels[n].hidden=n!==i});if(focus)tabs[i].focus()}
tablist.setAttribute('role','tablist');tabs.forEach((t,i)=>{t.setAttribute('role','tab');t.setAttribute('aria-controls',panels[i].id);panels[i].setAttribute('role','tabpanel');panels[i].tabIndex=0;t.addEventListener('click',e=>{e.preventDefault();activate(i);history.replaceState(null,'',t.getAttribute('href'))});t.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%4;if(e.key==='ArrowLeft')next=(i+3)%4;if(e.key==='Home')next=0;if(e.key==='End')next=3;if(next!==undefined){e.preventDefault();activate(next,true)}})});function fromHash(){const i=panels.findIndex(p=>'#'+p.id===location.hash);activate(i<0?0:i)}fromHash();document.querySelector('.floor-section').classList.add('tabs-ready');addEventListener('hashchange',fromHash)}
const form=document.querySelector('#reservation-form');if(form){form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.tagName!=='TEXTAREA'&&e.target.tagName!=='SELECT'&&e.target.type!=='date')e.preventDefault()})}
