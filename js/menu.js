/* Hamburger menu toggle */
const mb=document.getElementById('menuBtn'),mo=document.getElementById('menuOv');
mb.addEventListener('click',()=>{mb.classList.toggle('open');mo.classList.toggle('open')});
mo.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mb.classList.remove('open');mo.classList.remove('open')}));
