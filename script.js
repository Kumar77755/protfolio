// initialize AOS (we use it for simple reveal)
AOS.init({
  duration: 900,
  once: true,
  offset: 80,
});

// Make AOS utility play nicely: add aos-animate class when element in view (fallback)
(function(){
  const els = document.querySelectorAll('[data-aos]');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting) ent.target.classList.add('aos-animate');
    });
  }, {threshold: 0.15});
  els.forEach(e=>obs.observe(e));
})();

// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', ()=>{
  document.querySelector('.nav').classList.toggle('open');
});

// nav smooth-scroll
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  });
});

// animate skill fills when skills section is visible
const skillSection = document.getElementById('skills');
if(skillSection){
  const obs2 = new IntersectionObserver(entries=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){
        document.querySelectorAll('.fill').forEach(f=>{
          const w = getComputedStyle(f).getPropertyValue('--w');
          f.style.width = w;
        });
      }
    });
  }, {threshold: 0.25});
  obs2.observe(skillSection);
}
