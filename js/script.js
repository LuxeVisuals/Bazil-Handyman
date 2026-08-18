
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".nav-toggle");
  const links=document.querySelector(".nav-links");
  if(toggle&&links){
    toggle.addEventListener("click",()=>{
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded",links.classList.contains("open"));
    });
    links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
  }

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add("in");observer.unobserve(e.target)}
    })
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach((el,i)=>{
    el.style.transitionDelay=(i%6)*70+"ms";
    observer.observe(el);
  });

  document.querySelectorAll(".faq-item").forEach(item=>{
    const q=item.querySelector(".faq-q"),a=item.querySelector(".faq-a");
    q?.addEventListener("click",()=>{
      const open=item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(x=>{
        x.classList.remove("open");
        const ans=x.querySelector(".faq-a");
        if(ans) ans.style.maxHeight=null;
      });
      if(!open){
        item.classList.add("open");
        a.style.maxHeight=a.scrollHeight+"px";
      }
    });
  });

  const form=document.querySelector("#contact-form");
  if(form){
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const success=document.querySelector("#form-success");
      if(success) success.classList.add("show");
      form.reset();
    });
  }
});
