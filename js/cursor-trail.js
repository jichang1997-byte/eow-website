/* Cursor trail poster effect — landing page only */
(function(){
  const container=document.getElementById('trailContainer');
  const hero=document.querySelector('.hero');
  if(!container||!hero)return;

  const srcs=[
    'images/posters/gd-worldtour-2025.jpg',
    'images/posters/busan-rock-2025.jpg',
    'images/posters/ph1-worldtour-2022.jpg',
    'images/posters/pentaport_2025.jpg',
    'images/posters/PENTAPORT_2024.webp',
    'images/posters/PENTAPORT_2023.webp',
    'images/posters/PENTAPORT_2022.webp',
    'images/posters/BUSANROCK_2022.webp',
    'images/posters/BUSANROCK_2023.webp',
    'images/posters/SPECTRUM_2018.webp',
    'images/posters/LOVESOME_2024.jpg',
    'images/posters/JISAN ROCK_2013.jpg',
    'images/posters/PAULMcCARTNEY_2015.png',
    'images/posters/BINGBANG ALIVE GALAXY TOUR_2012.webp'
  ];
  for(let i=srcs.length-1;i>0;i--){const j=Math.random()*i|0;[srcs[i],srcs[j]]=[srcs[j],srcs[i]]}
  srcs.forEach(s=>{const i=new Image();i.src=s});

  const POOL=12;
  const pool=[];
  let idx=0,zIdx=1;
  for(let i=0;i<POOL;i++){
    const img=document.createElement('img');
    img.className='trail-img';
    img.alt='';
    img.draggable=false;
    container.appendChild(img);
    pool.push(img);
  }

  let lastX=0,lastY=0,lastTime=0;

  function showImage(x,y){
    const img=pool[idx%POOL];
    idx++;
    img.src=srcs[idx%srcs.length];
    const ox=(Math.random()-0.5)*60;
    const oy=(Math.random()-0.5)*40;
    const rot=(Math.random()-0.5)*8;
    img.style.left=(x-120+ox)+'px';
    img.style.top=(y-160+oy)+'px';
    img.style.zIndex=zIdx++;
    img.style.transition='none';
    img.style.opacity='0';
    img.style.transform='scale(.92) rotate('+rot+'deg)';
    void img.offsetWidth;
    img.style.transition='opacity .8s ease-out, transform 1s ease-out';
    img.style.opacity='0.85';
    img.style.transform='scale(1) rotate('+rot+'deg)';
    setTimeout(()=>{
      img.style.transition='opacity 1.2s ease-in, transform 1s ease-in';
      img.style.opacity='0';
      img.style.transform='scale(.96) rotate('+rot+'deg) translateY(12px)';
    },3000);
    if(zIdx>9999)zIdx=1;
  }

  function onMove(e){
    const now=performance.now();
    if(now-lastTime<120)return;
    const rect=hero.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;
    const dist=Math.sqrt((x-lastX)**2+(y-lastY)**2);
    if(dist<100)return;
    lastX=x;lastY=y;lastTime=now;
    requestAnimationFrame(()=>showImage(x,y));
  }

  if(window.matchMedia('(pointer:fine)').matches){
    hero.addEventListener('mousemove',onMove,{passive:true});
  }
})();
