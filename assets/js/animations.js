/* Quiet, one-time entrances and subtle in-place photo motion. */
(()=>{
  const reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const targets=[...document.querySelectorAll('main h1,main h2,main .eyebrow,.copy>p:not(.eyebrow),.feature-copy>p:not(.eyebrow),.page-intro>p:not(.eyebrow),.room-card,.gallery>img,.gallery-item,.split>img,.image-pair img,.wide-image img,.food-gallery img,.contact-details>img,.contact-landscape img,.facts>span,.dish,.building>a,.cta .actions,.hero .actions,.footer-grid>div')].filter(el=>!el.parentElement.closest('.room-card,.gallery-item'));
  let observer;
  if('IntersectionObserver'in window&&!reduced.matches){
    observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting);
      visible.forEach((entry,index)=>{
        entry.target.style.setProperty('--entrance-delay',`${Math.min(index%4,3)*75}ms`);
        entry.target.classList.add('is-visible');observer.unobserve(entry.target);
      });
    },{threshold:.06});
    targets.forEach(el=>{el.classList.add('motion-enter');observer.observe(el)});
  }
  const revealAll=()=>{observer?.disconnect();targets.forEach(el=>el.classList.add('is-visible'))};
  reduced.addEventListener('change',()=>{if(reduced.matches)revealAll()});
  // Focus and in-page navigation must never wait for a scroll animation.
  document.addEventListener('focusin',e=>e.target.closest('.motion-enter')?.classList.add('is-visible'));

  document.querySelectorAll('main img').forEach(img=>{if(!img.closest('.hero,.restaurant-feature,.contact-landscape'))img.classList.add('subtle-zoom')});
})();
