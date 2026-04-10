/* Scroll reveal animation */
document.querySelectorAll('.rv').forEach(e=>{
  new IntersectionObserver(([o])=>{
    if(o.isIntersecting)o.target.classList.add('vi')
  },{threshold:.15}).observe(e)
});
