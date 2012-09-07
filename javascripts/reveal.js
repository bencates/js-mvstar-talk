/*!
 * reveal.js 1.5 r7
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 * 
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){function p(e){if(!c&&!l||!h){document.body.setAttribute("class","no-transforms");return}f.wrapper=document.querySelector(".reveal"),f.progress=document.querySelector(".reveal .progress"),f.progressbar=document.querySelector(".reveal .progress span"),r.controls&&(f.controls=document.querySelector(".reveal .controls"),f.controlsLeft=document.querySelector(".reveal .controls .left"),f.controlsRight=document.querySelector(".reveal .controls .right"),f.controlsUp=document.querySelector(".reveal .controls .up"),f.controlsDown=document.querySelector(".reveal .controls .down")),v(),g(r,e),d(),B(),R(),navigator.userAgent.match(/(iphone|ipod|android)/i)&&(document.documentElement.style.overflow="scroll",document.body.style.height="120%",window.addEventListener("load",w,!1),window.addEventListener("orientationchange",w,!1))}function d(){l===!1&&(r.transition="linear"),r.controls&&f.controls&&(f.controls.style.display="block"),r.progress&&f.progress&&(f.progress.style.display="block"),r.transition!=="default"&&f.wrapper.classList.add(r.transition),r.theme!=="default"&&document.documentElement.classList.add("theme-"+r.theme),r.mouseWheel&&(document.addEventListener("DOMMouseScroll",N,!1),document.addEventListener("mousewheel",N,!1)),r.rollingLinks&&k()}function v(){document.addEventListener("touchstart",S,!1),document.addEventListener("touchmove",x,!1),document.addEventListener("touchend",T,!1),window.addEventListener("hashchange",C,!1),r.keyboard&&document.addEventListener("keydown",E,!1),r.controls&&f.controls&&(f.controlsLeft.addEventListener("click",b(z),!1),f.controlsRight.addEventListener("click",b(W),!1),f.controlsUp.addEventListener("click",b(X),!1),f.controlsDown.addEventListener("click",b(V),!1))}function m(){document.removeEventListener("keydown",E,!1),document.removeEventListener("touchstart",S,!1),document.removeEventListener("touchmove",x,!1),document.removeEventListener("touchend",T,!1),window.removeEventListener("hashchange",C,!1),r.controls&&f.controls&&(f.controlsLeft.removeEventListener("click",b(z),!1),f.controlsRight.removeEventListener("click",b(W),!1),f.controlsUp.removeEventListener("click",b(X),!1),f.controlsDown.removeEventListener("click",b(V),!1))}function g(e,t){for(var n in t)e[n]=t[n]}function y(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function b(e){return function(t){t.preventDefault(),e.call()}}function w(){setTimeout(function(){window.scrollTo(0,1)},0)}function E(e){if(e.target.contentEditable!="inherit"||e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)return;var t=!1;switch(e.keyCode){case 80:case 33:$(),t=!0;break;case 78:case 34:J(),t=!0;break;case 72:case 37:z(),t=!0;break;case 76:case 39:W(),t=!0;break;case 75:case 38:X(),t=!0;break;case 74:case 40:V(),t=!0;break;case 36:U(0),t=!0;break;case 35:U(Number.MAX_VALUE),t=!0;break;case 32:O()?A():J(),t=!0;break;case 13:O()&&(A(),t=!0)}t?e.preventDefault():e.keyCode===27&&l&&(K(),e.preventDefault()),R()}function S(e){touch.startX=e.touches[0].clientX,touch.startY=e.touches[0].clientY,touch.startCount=e.touches.length,e.touches.length===2&&(touch.startSpan=y({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:touch.startX,y:touch.startY}))}function x(e){if(!touch.handled){var t=e.touches[0].clientX,n=e.touches[0].clientY;if(e.touches.length===2&&touch.startCount===2){var r=y({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:touch.startX,y:touch.startY});Math.abs(touch.startSpan-r)>touch.threshold&&(touch.handled=!0,r<touch.startSpan?L():A())}else if(e.touches.length===1){var i=t-touch.startX,s=n-touch.startY;i>touch.threshold&&Math.abs(i)>Math.abs(s)?(touch.handled=!0,z()):i<-touch.threshold&&Math.abs(i)>Math.abs(s)?(touch.handled=!0,W()):s>touch.threshold?(touch.handled=!0,X()):s<-touch.threshold&&(touch.handled=!0,V())}e.preventDefault()}}function T(e){touch.handled=!1}function N(e){clearTimeout(mouseWheelTimeout),mouseWheelTimeout=setTimeout(function(){var t=e.detail||-e.wheelDelta;t>0?J():$()},100)}function C(e){B()}function k(){if(l){var e=document.querySelectorAll(".reveal .slides section a:not(.image)");for(var t=0,n=e.length;t<n;t++){var r=e[t];r.textContent&&!r.querySelector("img")&&(!r.className||!r.classList.contains(r,"roll"))&&(r.classList.add("roll"),r.innerHTML='<span data-title="'+r.text+'">'+r.innerHTML+"</span>")}}}function L(){f.wrapper.classList.add("overview");var t=Array.prototype.slice.call(document.querySelectorAll(e));for(var n=0,r=t.length;n<r;n++){var o=t[n],u="translateZ(-2500px) translate("+(n-i)*105+"%, 0%)";o.setAttribute("data-index-h",n),o.style.display="block",o.style.WebkitTransform=u,o.style.MozTransform=u,o.style.msTransform=u,o.style.OTransform=u,o.style.transform=u,o.classList.contains("stack")||o.addEventListener("click",M,!0);var a=Array.prototype.slice.call(o.querySelectorAll("section"));for(var l=0,c=a.length;l<c;l++){var h=a[l],p="translate(0%, "+(l-s)*105+"%)";h.setAttribute("data-index-h",n),h.setAttribute("data-index-v",l),h.style.display="block",h.style.WebkitTransform=p,h.style.MozTransform=p,h.style.msTransform=p,h.style.OTransform=p,h.style.transform=p,h.addEventListener("click",M,!0)}}}function A(){f.wrapper.classList.remove("overview");var e=Array.prototype.slice.call(document.querySelectorAll(".reveal .slides section"));for(var t=0,n=e.length;t<n;t++){var r=e[t];r.style.WebkitTransform="",r.style.MozTransform="",r.style.msTransform="",r.style.OTransform="",r.style.transform="",r.removeEventListener("click",M)}D()}function O(){return f.wrapper.classList.contains("overview")}function M(e){O()&&(e.preventDefault(),A(),i=this.getAttribute("data-index-h"),s=this.getAttribute("data-index-v"),D())}function _(e,t){var n=Array.prototype.slice.call(document.querySelectorAll(e)),i=n.length;if(i){r.loop&&(t%=i,t<0&&(t=i+t)),t=Math.max(Math.min(t,i-1),0);for(var s=0;s<i;s++){var o=n[s];if(O()===!1){var u=Math.abs((t-s)%(i-3))||0;o.style.display=u>3?"none":"block"}n[s].classList.remove("past"),n[s].classList.remove("present"),n[s].classList.remove("future"),s<t?n[s].classList.add("past"):s>t&&n[s].classList.add("future"),o.querySelector("section")&&n[s].classList.add("stack")}n[t].classList.add("present");var f=n[t].getAttribute("data-state");f&&(a=a.concat(f.split(" ")))}else t=0;return t}function D(n,l){o=u;var c=a.concat();a.length=0;var h=i,p=s;i=_(e,n===undefined?i:n),s=_(t,l===undefined?s:l);e:for(var d=0,v=a.length;d<v;d++){for(var m=0;m<c.length;m++)if(c[m]===a[d]){c.splice(m,1);continue e}document.documentElement.classList.add(a[d]),F(a[d])}while(c.length)document.documentElement.classList.remove(c.pop());r.progress&&f.progress&&(f.progressbar.style.width=i/(document.querySelectorAll(e).length-1)*window.innerWidth+"px"),O()&&L(),P(),clearTimeout(writeURLTimeout),writeURLTimeout=setTimeout(j,1500);var g=document.querySelectorAll(e),y=g[i],b=y.querySelectorAll("section");u=b[s]||y,i!==h||s!==p?F("slidechanged",{indexh:i,indexv:s,previousSlide:o,currentSlide:u}):o=null,o&&o.classList.remove("present")}function P(){if(!r.controls||!f.controls)return;var e=H();[f.controlsLeft,f.controlsRight,f.controlsUp,f.controlsDown].forEach(function(e){e.classList.remove("enabled")}),e.left&&f.controlsLeft.classList.add("enabled"),e.right&&f.controlsRight.classList.add("enabled"),e.up&&f.controlsUp.classList.add("enabled"),e.down&&f.controlsDown.classList.add("enabled")}function H(){var n=document.querySelectorAll(e),r=document.querySelectorAll(t);return{left:i>0,right:i<n.length-1,up:s>0,down:s<r.length-1}}function B(){var e=window.location.hash.slice(2).split("/"),t=parseInt(e[0])||0,n=parseInt(e[1])||0;U(t,n)}function j(){if(r.history){var e="/";if(i>0||s>0)e+=i;s>0&&(e+="/"+s),window.location.hash=e}}function F(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),g(n,t),f.wrapper.dispatchEvent(n)}function I(){if(document.querySelector(t+".present")){var n=document.querySelectorAll(t+".present .fragment:not(.visible)");if(n.length)return n[0].classList.add("visible"),F("fragmentshown",{fragment:n[0]}),!0}else{var r=document.querySelectorAll(e+".present .fragment:not(.visible)");if(r.length)return r[0].classList.add("visible"),F("fragmentshown",{fragment:r[0]}),!0}return!1}function q(){if(document.querySelector(t+".present")){var n=document.querySelectorAll(t+".present .fragment.visible");if(n.length)return n[n.length-1].classList.remove("visible"),F("fragmenthidden",{fragment:n[n.length-1]}),!0}else{var r=document.querySelectorAll(e+".present .fragment.visible");if(r.length)return r[r.length-1].classList.remove("visible"),F("fragmenthidden",{fragment:r[r.length-1]}),!0}return!1}function R(){clearTimeout(autoSlideTimeout),r.autoSlide&&(autoSlideTimeout=setTimeout(J,r.autoSlide))}function U(e,t){D(e,t)}function z(){(O()||q()===!1)&&D(i-1,0)}function W(){(O()||I()===!1)&&D(i+1,0)}function X(){(O()||q()===!1)&&D(i,s-1)}function V(){(O()||I()===!1)&&D(i,s+1)}function $(){if(q()===!1)if(H().up)X();else{var e=document.querySelector(".reveal .slides>section.past:nth-child("+i+")");e&&(s=e.querySelectorAll("section").length+1||0,i--,D())}}function J(){I()===!1&&(H().down?V():W()),R()}function K(){O()?A():L()}var e=".reveal .slides>section",t=".reveal .slides>section.present>section",n="ontouchstart"in window,r={controls:!0,progress:!0,history:!1,keyboard:!0,loop:!1,autoSlide:0,mouseWheel:!0,rollingLinks:!0,theme:"default",transition:"default"},i=0,s=0,o,u,a=[],f={},l=document.body.style.WebkitPerspective!==undefined||document.body.style.MozPerspective!==undefined||document.body.style.msPerspective!==undefined||document.body.style.OPerspective!==undefined||document.body.style.perspective!==undefined,c=document.body.style.WebkitTransform!==undefined||document.body.style.MozTransform!==undefined||document.body.style.msTransform!==undefined||document.body.style.OTransform!==undefined||document.body.style.transform!==undefined,h=!!document.body.classList;return mouseWheelTimeout=0,autoSlideTimeout=0,writeURLTimeout=0,touch={startX:0,startY:0,startSpan:0,startCount:0,handled:!1,threshold:40},{initialize:p,navigateTo:U,navigateLeft:z,navigateRight:W,navigateUp:X,navigateDown:V,navigatePrev:$,navigateNext:J,toggleOverview:K,addEventListeners:v,removeEventListeners:m,getIndices:function(){return{h:i,v:s}},getPreviousSlide:function(){return o},getCurrentSlide:function(){return u},getQueryHash:function(){var e={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e},addEventListener:function(e,t,n){(f.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){(f.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();