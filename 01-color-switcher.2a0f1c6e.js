const o=document.querySelector("button[data-start]");console.log(o);const t=document.querySelector("button[data-stop]");console.log(t);const e=document.body;console.log(e),o.addEventListener("click",function(n){n.target.disabled=!0,console.log(n);let l=setInterval(()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3);console.dir(o),t.addEventListener("click",t=>{clearInterval(l),o.disabled=!1,console.log(t)})});
//# sourceMappingURL=01-color-switcher.2a0f1c6e.js.map