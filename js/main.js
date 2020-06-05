!function(t,e){if("function"==typeof define&&define.amd)define([],e);else if("object"==typeof module&&module.exports)module.exports=e();else{var n=e();t.Alert=n.Alert,t.Button=n.Button,t.Carousel=n.Carousel,t.Collapse=n.Collapse,t.Dropdown=n.Dropdown,t.Modal=n.Modal,t.Popover=n.Popover,t.ScrollSpy=n.ScrollSpy,t.Tab=n.Tab,t.Toast=n.Toast,t.Tooltip=n.Tooltip}}(this,(function(){"use strict";var t="undefined"!=typeof global?global:this||window,e=document,n=e.documentElement,i="body",a=t.BSN={},o=a.supports=[],l="data-toggle",r="delay",s="target",c="animation",d="onmouseleave"in e?["mouseenter","mouseleave"]:["mouseover","mouseout"],u="touchstart",f="touchend",h="getAttribute",p="setAttribute",m="parentNode",g="length",v="Transition",y="Webkit",w="style",b="push",T="active",C="left",A="top",k=/\b(top|bottom|left|right)+/,z=0,E=y+v in n[w]||v.toLowerCase()in n[w],x=y+v in n[w]?y.toLowerCase()+v+"End":v.toLowerCase()+"end",L=y+"Duration"in n[w]?y.toLowerCase()+v+"Duration":v.toLowerCase()+"Duration",M=function(t){t.focus?t.focus():t.setActive()},N=function(t,e){t.classList.add(e)},B=function(t,e){t.classList.remove(e)},H=function(t,e){return t.classList.contains(e)},I=function(t,e){return[].slice.call(t.getElementsByClassName(e))},S=function(t,n){return"object"==typeof t?t:(n||e).querySelector(t)},D=function(t,n){var i=n.charAt(0),a=n.substr(1);if("."===i){for(;t&&t!==e;t=t[m])if(null!==S(n,t[m])&&H(t,a))return t}else if("#"===i)for(;t&&t!==e;t=t[m])if(t.id===a)return t;return!1},W=function(t,e,n,i){i=i||!1,t.addEventListener(e,n,i)},_=function(t,e,n,i){i=i||!1,t.removeEventListener(e,n,i)},R=function(t,e,n,i){W(t,e,(function a(o){n(o),_(t,e,a,i)}),i)},P=!!function(){var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e=!0}});R(t,"testPassive",null,n)}catch(t){}return e}()&&{passive:!0},O=function(e){var n=E?t.getComputedStyle(e)[L]:0;return"number"!=typeof(n=parseFloat(n))||isNaN(n)?0:1e3*n},q=function(t,e){var n=0;O(t)?R(t,x,(function(t){!n&&e(t),n=1})):setTimeout((function(){!n&&e(),n=1}),17)},F=function(t,e,n){var i=new CustomEvent(t+".bs."+e);i.relatedTarget=n,this.dispatchEvent(i)},Y=function(){return{y:t.pageYOffset||n.scrollTop,x:t.pageXOffset||n.scrollLeft}},j=function(t,a,o,l){var r,s,c,d,u,f,h=a.offsetWidth,p=a.offsetHeight,m=n.clientWidth||e[i].clientWidth,g=n.clientHeight||e[i].clientHeight,v=t.getBoundingClientRect(),y=l===e[i]?Y():{x:l.offsetLeft+l.scrollLeft,y:l.offsetTop+l.scrollTop},b=v.right-v[C],T=v.bottom-v[A],z=H(a,"popover"),E=S(".arrow",a),x=v[A]+T/2-p/2<0,L=v[C]+b/2-h/2<0,M=v[C]+h/2+b/2>=m,N=v[A]+p/2+T/2>=g,B=v[A]-p<0,I=v[C]-h<0,D=v[A]+p+T>=g,W=v[C]+h+b>=m;o="right"===(o=(o="bottom"===(o=(o=(o===C||"right"===o)&&I&&W?A:o)===A&&B?"bottom":o)&&D?A:o)===C&&I?"right":o)&&W?C:o,-1===a.className.indexOf(o)&&(a.className=a.className.replace(k,o)),u=E.offsetWidth,f=E.offsetHeight,o===C||"right"===o?(s=o===C?v[C]+y.x-h-(z?u:0):v[C]+y.x+b,x?(r=v[A]+y.y,c=T/2-u):N?(r=v[A]+y.y-p+T,c=p-T/2-u):(r=v[A]+y.y-p/2+T/2,c=p/2-(z?.9*f:f/2))):o!==A&&"bottom"!==o||(r=o===A?v[A]+y.y-p-(z?f:0):v[A]+y.y+T,L?(s=0,d=v[C]+b/2-u):M?(s=m-1.01*h,d=h-(m-v[C])+b/2-u/2):(s=v[C]+y.x-h/2+b/2,d=h/2-u/2)),a[w][A]=r+"px",a[w][C]=s+"px",c&&(E[w][A]=c+"px"),d&&(E[w][C]=d+"px")};a.version="2.0.27";var U=function(t){t=S(t);var e=this,n=D(t,".alert"),i=function(i){n=D(i[s],".alert"),(t=S('[data-dismiss="alert"]',n))&&n&&(t===i[s]||t.contains(i[s]))&&e.close()},a=function(){F.call(n,"closed","alert"),_(t,"click",i),n[m].removeChild(n)};this.close=function(){n&&t&&H(n,"show")&&(F.call(n,"close","alert"),B(n,"show"),n&&(H(n,"fade")?q(n,a):a()))},"Alert"in t||W(t,"click",i),t.Alert=e};o[b](["Alert",U,'[data-dismiss="alert"]']);var $=function(t){t=S(t);var n=!1,i="checked",a=function(e){var a="LABEL"===e[s].tagName?e[s]:"LABEL"===e[s][m].tagName?e[s][m]:null;if(a){var o=e[s],l=I(o[m],"btn"),r=a.getElementsByTagName("INPUT")[0];if(r){if("checkbox"===r.type&&(r[i]?(B(a,T),r[h](i),r.removeAttribute(i),r[i]=!1):(N(a,T),r[h](i),r[p](i,i),r[i]=!0),n||(n=!0,F.call(r,"change","button"),F.call(t,"change","button"))),"radio"===r.type&&!n&&!r[i]){N(a,T),r[p](i,i),r[i]=!0,F.call(r,"change","button"),F.call(t,"change","button"),n=!0;for(var c=0,d=l[g];c<d;c++){var u=l[c],f=u.getElementsByTagName("INPUT")[0];u!==a&&H(u,T)&&(B(u,T),f.removeAttribute(i),f[i]=!1,F.call(f,"change","button"))}}setTimeout((function(){n=!1}),50)}}};"Button"in t||(W(t,"click",a),S("[tabindex]",t)&&W(t,"keyup",(function(t){32===(t.which||t.keyCode)&&t[s]===e.activeElement&&a(t)})),W(t,"keydown",(function(t){32===(t.which||t.keyCode)&&t.preventDefault()})));for(var o=I(t,"btn"),l=o[g],r=0;r<l;r++)!H(o[r],T)&&S("input:checked",o[r])&&N(o[r],T);t.Button=this};o[b](["Button",$,'[data-toggle="buttons"]']);var X=function(i,a){a=a||{};var o=(i=S(i))[h]("data-interval"),l=a.interval,r="false"===o?0:parseInt(o),c="hover"===i[h]("data-pause")||!1,p="true"===i[h]("data-keyboard")||!1;this.keyboard=!0===a.keyboard||p,this.pause=!("hover"!==a.pause&&!c)&&"hover",this.interval="number"==typeof l?l:!1===l||0===r||!1===r?0:isNaN(r)?5e3:r;var m=this,v=i.index=0,y=i.timer=0,w=!1,b=!1,k=null,z=null,x=null,L=I(i,"carousel-item"),M=L[g],D=this.direction=C,R=I(i,"carousel-control-prev")[0],O=I(i,"carousel-control-next")[0],Y=S(".carousel-indicators",i),j=Y&&Y.getElementsByTagName("LI")||[];if(!(M<2)){var U=function(){!1===m.interval||H(i,"paused")||(N(i,"paused"),!w&&(clearInterval(y),y=null))},$=function(){!1!==m.interval&&H(i,"paused")&&(B(i,"paused"),!w&&(clearInterval(y),y=null),!w&&m.cycle())},X=function(t){if(t.preventDefault(),!w){var e=t.currentTarget||t.srcElement;e===O?v++:e===R&&v--,m.slideTo(v)}},G=function(t){t(i,"touchmove",J,P),t(i,f,K,P)},J=function(t){return b?(z=parseInt(t.touches[0].pageX),"touchmove"===t.type&&t.touches[g]>1?(t.preventDefault(),!1):void 0):void t.preventDefault()},K=function(t){if(b&&!w&&(x=z||parseInt(t.touches[0].pageX),b)){if((!i.contains(t[s])||!i.contains(t.relatedTarget))&&Math.abs(k-x)<75)return!1;z<k?v++:z>k&&v--,b=!1,m.slideTo(v),G(_)}},Q=function(t){for(var e=0,n=j[g];e<n;e++)B(j[e],T);j[t]&&N(j[t],T)};this.cycle=function(){y&&(clearInterval(y),y=null),y=setInterval((function(){(function(){var e=i.getBoundingClientRect(),a=t.innerHeight||n.clientHeight;return e[A]<=a&&e.bottom>=0})()&&(v++,m.slideTo(v))}),this.interval)},this.slideTo=function(t){if(!w){var n,a=this.getActiveIndex();a!==t&&(a<t||0===a&&t===M-1?D=m.direction=C:(a>t||a===M-1&&0===t)&&(D=m.direction="right"),t<0?t=M-1:t>=M&&(t=0),v=t,n=D===C?"next":"prev",F.call(i,"slide","carousel",L[t]),w=!0,clearInterval(y),y=null,Q(t),E&&H(i,"slide")?(N(L[t],"carousel-item-"+n),L[t].offsetWidth,N(L[t],"carousel-item-"+D),N(L[a],"carousel-item-"+D),q(L[t],(function(o){var l=o&&o[s]!==L[t]?1e3*o.elapsedTime+100:20;w&&setTimeout((function(){w=!1,N(L[t],T),B(L[a],T),B(L[t],"carousel-item-"+n),B(L[t],"carousel-item-"+D),B(L[a],"carousel-item-"+D),F.call(i,"slid","carousel",L[t]),e.hidden||!m.interval||H(i,"paused")||m.cycle()}),l)}))):(N(L[t],T),L[t].offsetWidth,B(L[a],T),setTimeout((function(){w=!1,m.interval&&!H(i,"paused")&&m.cycle(),F.call(i,"slid","carousel",L[t])}),100)))}},this.getActiveIndex=function(){return L.indexOf(I(i,"carousel-item active")[0])||0},"Carousel"in i||(m.pause&&m.interval&&(W(i,d[0],U),W(i,d[1],$),W(i,u,U,P),W(i,f,$,P)),L[g]>1&&W(i,u,(function(t){b||(k=parseInt(t.touches[0].pageX),i.contains(t[s])&&(b=!0,G(W)))}),P),O&&W(O,"click",X),R&&W(R,"click",X),Y&&W(Y,"click",(function(t){if(t.preventDefault(),!w){var e=t[s];if(!e||H(e,T)||!e[h]("data-slide-to"))return!1;v=parseInt(e[h]("data-slide-to"),10),m.slideTo(v)}})),m.keyboard&&W(t,"keydown",(function(t){if(!w){switch(t.which){case 39:v++;break;case 37:v--;break;default:return}m.slideTo(v)}}))),m.getActiveIndex()<0&&(L[g]&&N(L[0],T),j[g]&&Q(0)),m.interval&&m.cycle(),i.Carousel=m}};o[b](["Carousel",X,'[data-ride="carousel"]']);var G=function(t,e){t=S(t),e=e||{};var n,i,a=null,o=null,l=this,r=t[h]("data-parent"),s=function(t,e){F.call(t,"hide","collapse"),t.isAnimating=!0,t[w].height=t.scrollHeight+"px",B(t,"collapse"),B(t,"show"),N(t,"collapsing"),t.offsetWidth,t[w].height="0px",q(t,(function(){t.isAnimating=!1,t[p]("aria-expanded","false"),e[p]("aria-expanded","false"),B(t,"collapsing"),N(t,"collapse"),t[w].height="",F.call(t,"hidden","collapse")}))};this.toggle=function(t){t.preventDefault(),H(o,"show")?l.hide():l.show()},this.hide=function(){o.isAnimating||(s(o,t),N(t,"collapsed"))},this.show=function(){a&&(n=S(".collapse.show",a),i=n&&(S('[data-target="#'+n.id+'"]',a)||S('[href="#'+n.id+'"]',a))),(!o.isAnimating||n&&!n.isAnimating)&&(i&&n!==o&&(s(n,i),N(i,"collapsed")),function(t,e){F.call(t,"show","collapse"),t.isAnimating=!0,N(t,"collapsing"),B(t,"collapse"),t[w].height=t.scrollHeight+"px",q(t,(function(){t.isAnimating=!1,t[p]("aria-expanded","true"),e[p]("aria-expanded","true"),B(t,"collapsing"),N(t,"collapse"),N(t,"show"),t[w].height="",F.call(t,"shown","collapse")}))}(o,t),B(t,"collapsed"))},"Collapse"in t||W(t,"click",l.toggle),(o=function(){var e=t.href&&t[h]("href"),n=t[h]("data-target"),i=e||n&&"#"===n.charAt(0)&&n;return i&&S(i)}()).isAnimating=!1,a=S(e.parent)||r&&D(t,r),t.Collapse=l};o[b](["Collapse",G,'[data-toggle="collapse"]']);var J=function(t,n){t=S(t),this.persist=!0===n||"true"===t[h]("data-persist")||!1;var i=this,a=t[m],o=null,r=S(".dropdown-menu",a),c=function(){for(var t=r.children,e=[],n=0;n<t[g];n++)t[n].children[g]&&"A"===t[n].children[0].tagName&&e[b](t[n].children[0]),"A"===t[n].tagName&&e[b](t[n]);return e}(),d=function(t){(t.href&&"#"===t.href.slice(-1)||t[m]&&t[m].href&&"#"===t[m].href.slice(-1))&&this.preventDefault()},u=function(){var n=t.open?W:_;n(e,"click",f),n(e,"keydown",y),n(e,"keyup",w),n(e,"focus",f,!0)},f=function(e){var n=e[s],a=n&&(n[h](l)||n[m]&&h in n[m]&&n[m][h](l));("focus"!==e.type||n!==t&&n!==r&&!r.contains(n))&&(n!==r&&!r.contains(n)||!i.persist&&!a)&&(o=n===t||t.contains(n)?t:null,C(),d.call(e,n))},v=function(e){o=t,T(),d.call(e,e[s])},y=function(t){var e=t.which||t.keyCode;38!==e&&40!==e||t.preventDefault()},w=function(n){var a=n.which||n.keyCode,l=e.activeElement,s=c.indexOf(l),d=l===t,u=r.contains(l),f=l[m]===r||l[m][m]===r;f&&(s=d?0:38===a?s>1?s-1:0:40===a&&s<c[g]-1?s+1:s,c[s]&&M(c[s])),(c[g]&&f||!c[g]&&(u||d)||!u)&&t.open&&27===a&&(i.toggle(),o=null)},T=function(){F.call(a,"show","dropdown",o),N(r,"show"),N(a,"show"),t[p]("aria-expanded",!0),F.call(a,"shown","dropdown",o),t.open=!0,_(t,"click",v),setTimeout((function(){M(r.getElementsByTagName("INPUT")[0]||t),u()}),1)},C=function(){F.call(a,"hide","dropdown",o),B(r,"show"),B(a,"show"),t[p]("aria-expanded",!1),F.call(a,"hidden","dropdown",o),t.open=!1,u(),M(t),setTimeout((function(){W(t,"click",v)}),1)};t.open=!1,this.toggle=function(){H(a,"show")&&t.open?C():T()},"Dropdown"in t||(!1 in r&&r[p]("tabindex","0"),W(t,"click",v)),t.Dropdown=i};o[b](["Dropdown",J,'[data-toggle="dropdown"]']);var K=function(a,o){var l=(a=S(a))[h]("data-target")||a[h]("href"),r=S(l),d=H(a,"modal")?a:r;if(H(a,"modal")&&(a=null),d){o=o||{},this.keyboard=!1!==o.keyboard&&"false"!==d[h]("data-keyboard"),this.backdrop="static"!==o.backdrop&&"static"!==d[h]("data-backdrop")||"static",this.backdrop=!1!==o.backdrop&&"false"!==d[h]("data-backdrop")&&this.backdrop,this[c]=!!H(d,"fade"),this.content=o.content,d.isAnimating=!1;var u,f,v,y,b,T=this,A=null,k=I(n,"fixed-top").concat(I(n,"fixed-bottom")),x=function(){var n,a=t.getComputedStyle(e[i]),o=parseInt(a.paddingRight,10);if(u&&(e[i][w].paddingRight=o+f+"px",d[w].paddingRight=f+"px",k[g]))for(var l=0;l<k[g];l++)n=t.getComputedStyle(k[l]).paddingRight,k[l][w].paddingRight=parseInt(n)+f+"px"},L=function(){u=e[i].clientWidth<function(){var e=n.getBoundingClientRect();return t.innerWidth||e.right-Math.abs(e[C])}(),f=function(){var t,n=e.createElement("div");return n.className="modal-scrollbar-measure",e[i].appendChild(n),t=n.offsetWidth-n.clientWidth,e[i].removeChild(n),t}()},D=function(){(v=S(".modal-backdrop"))&&null!==v&&"object"==typeof v&&(z=0,e[i].removeChild(v),v=null)},R=function(){M(d),d.isAnimating=!1,F.call(d,"shown","modal",A),W(t,"resize",T.update,P),W(d,"click",U),W(e,"keydown",j)},Y=function(){d[w].display="",a&&M(a),F.call(d,"hidden","modal"),I(e,"modal show")[0]||(function(){if(e[i][w].paddingRight="",d[w].paddingRight="",k[g])for(var t=0;t<k[g];t++)k[t][w].paddingRight=""}(),B(e[i],"modal-open"),v&&H(v,"fade")?(B(v,"show"),q(v,D)):D(),_(t,"resize",T.update,P),_(d,"click",U),_(e,"keydown",j)),d.isAnimating=!1},j=function(t){d.isAnimating||T.keyboard&&27==t.which&&H(d,"show")&&T.hide()},U=function(t){if(!d.isAnimating){var e=t[s];H(d,"show")&&("modal"===e[m][h]("data-dismiss")||"modal"===e[h]("data-dismiss")||e===d&&"static"!==T.backdrop)&&(T.hide(),A=null,t.preventDefault())}};this.toggle=function(){H(d,"show")?this.hide():this.show()},this.show=function(){H(d,"show")||d.isAnimating||(clearTimeout(b),b=setTimeout((function(){d.isAnimating=!0,F.call(d,"show","modal",A);var t=I(e,"modal show")[0];t&&t!==d&&("modalTrigger"in t&&t.modalTrigger.Modal.hide(),"Modal"in t&&t.Modal.hide()),T.backdrop&&!z&&!v&&function(){var t=e.createElement("div");null===(v=S(".modal-backdrop"))&&(t[p]("class","modal-backdrop"+(T[c]?" fade":"")),v=t,e[i].appendChild(v)),z=1}(),v&&!H(v,"show")&&(v.offsetWidth,y=O(v),N(v,"show")),setTimeout((function(){d[w].display="block",L(),x(),N(e[i],"modal-open"),N(d,"show"),d[p]("aria-hidden",!1),H(d,"fade")?q(d,R):R()}),E&&v&&y?y:1)}),1))},this.hide=function(){!d.isAnimating&&H(d,"show")&&(clearTimeout(b),b=setTimeout((function(){d.isAnimating=!0,F.call(d,"hide","modal"),v=S(".modal-backdrop"),y=v&&O(v),B(d,"show"),d[p]("aria-hidden",!0),setTimeout((function(){H(d,"fade")?q(d,Y):Y()}),E&&v&&y?y:2)}),2))},this.setContent=function(t){S(".modal-content",d).innerHTML=t},this.update=function(){H(d,"show")&&(L(),x())},!a||"Modal"in a||W(a,"click",(function(t){if(!d.isAnimating){var e=t[s];(e=e.hasAttribute("data-target")||e.hasAttribute("href")?e:e[m])!==a||H(d,"show")||(d.modalTrigger=a,A=a,T.show(),t.preventDefault())}})),T.content&&T.setContent(T.content),a?(a.Modal=T,d.modalTrigger=a):d.Modal=T}};o[b](["Modal",K,'[data-toggle="modal"]']);var Q=function(n,a){n=S(n),a=a||{};var o=n[h]("data-trigger"),l=n[h]("data-animation"),u=n[h]("data-placement"),f=n[h]("data-dismissible"),m=n[h]("data-delay"),g=n[h]("data-container"),v='<button type="button" class="close">×</button>',y=S(a.container),b=S(g),T=D(n,".modal"),C=D(n,".fixed-top"),k=D(n,".fixed-bottom");this.template=a.template?a.template:null,this.trigger=a.trigger?a.trigger:o||"hover",this[c]=a[c]&&"fade"!==a[c]?a[c]:l||"fade",this.placement=a.placement?a.placement:u||A,this[r]=parseInt(a[r]||m)||200,this.dismissible=!(!a.dismissible&&"true"!==f),this.container=y||b||C||k||T||e[i];var z=this,E=a.title||n[h]("data-title")||null,x=a.content||n[h]("data-content")||null;if(x||this.template){var L=null,M=0,I=this.placement,R=function(t){null!==L&&t[s]===S(".close",L)&&z.hide()},O=function(i){"click"!=z.trigger&&"focus"!=z.trigger||!z.dismissible&&i(n,"blur",z.hide),z.dismissible&&i(e,"click",R),i(t,"resize",z.hide,P)},Y=function(){O(W),F.call(n,"shown","popover")},U=function(){O(_),z.container.removeChild(L),M=null,L=null,F.call(n,"hidden","popover")};this.toggle=function(){null===L?z.show():z.hide()},this.show=function(){clearTimeout(M),M=setTimeout((function(){null===L&&(I=z.placement,function(){E=a.title||n[h]("data-title"),x=(x=a.content||n[h]("data-content")).trim(),L=e.createElement("div");var t=e.createElement("div");if(t[p]("class","arrow"),L.appendChild(t),null!==x&&null===z.template){if(L[p]("role","tooltip"),null!==E){var i=e.createElement("h3");i[p]("class","popover-header"),i.innerHTML=z.dismissible?E+v:E,L.appendChild(i)}var o=e.createElement("div");o[p]("class","popover-body"),o.innerHTML=z.dismissible&&null===E?x+v:x,L.appendChild(o)}else{var l=e.createElement("div");z.template=z.template.trim(),l.innerHTML=z.template,L.innerHTML=l.firstChild.innerHTML}z.container.appendChild(L),L[w].display="block",L[p]("class","popover bs-popover-"+I+" "+z[c])}(),j(n,L,I,z.container),!H(L,"show")&&N(L,"show"),F.call(n,"show","popover"),z[c]?q(L,Y):Y())}),20)},this.hide=function(){clearTimeout(M),M=setTimeout((function(){L&&null!==L&&H(L,"show")&&(F.call(n,"hide","popover"),B(L,"show"),z[c]?q(L,U):U())}),z[r])},"Popover"in n||("hover"===z.trigger?(W(n,d[0],z.show),z.dismissible||W(n,d[1],z.hide)):"click"!=z.trigger&&"focus"!=z.trigger||W(n,z.trigger,z.toggle)),n.Popover=z}};o[b](["Popover",Q,'[data-toggle="popover"]']);var V=function(e,n){e=S(e);var i=S(e[h]("data-target")),a=e[h]("data-offset");if((n=n||{})[s]||i){for(var o,l=this,r=n[s]&&S(n[s])||i,c=r&&r.getElementsByTagName("A"),d=parseInt(n.offset||a)||10,u=[],f=[],p=e.offsetHeight<e.scrollHeight?e:t,v=p===t,y=0,w=c[g];y<w;y++){var C=c[y][h]("href"),k=C&&"#"===C.charAt(0)&&"#"!==C.slice(-1)&&S(C);k&&(u[b](c[y]),f[b](k))}var z=function(t){var n=u[t],i=f[t],a=n[m][m],l=H(a,"dropdown")&&a.getElementsByTagName("A")[0],r=v&&i.getBoundingClientRect(),s=H(n,T)||!1,c=(v?r[A]+o:i.offsetTop)-d,h=v?r.bottom+o-d:f[t+1]?f[t+1].offsetTop-d:e.scrollHeight,p=o>=c&&h>o;if(!s&&p)H(n,T)||(N(n,T),l&&!H(l,T)&&N(l,T),F.call(e,"activate","scrollspy",u[t]));else if(p){if(!p&&!s||s&&p)return}else H(n,T)&&(B(n,T),l&&H(l,T)&&!I(n[m],T).length&&B(l,T))};this.refresh=function(){!function(){o=v?Y().y:e.scrollTop;for(var t=0,n=u[g];t<n;t++)z(t)}()},"ScrollSpy"in e||(W(p,"scroll",l.refresh,P),W(t,"resize",l.refresh,P)),l.refresh(),e.ScrollSpy=l}};o[b](["ScrollSpy",V,'[data-spy="scroll"]']);var Z=function(t,e){var n=(t=S(t))[h]("data-height");e=e||{},this.height=!!E&&(e.height||"true"===n);var i,a,o,l,r,s,c,d=this,u=D(t,".nav"),f=!1,v=u&&S(".dropdown-toggle",u),y=function(){f[w].height="",B(f,"collapsing"),u.isAnimating=!1},b=function(){f?s?y():setTimeout((function(){f[w].height=c+"px",f.offsetWidth,q(f,y)}),50):u.isAnimating=!1,F.call(i,"shown","tab",a)},A=function(){f&&(o[w].float=C,l[w].float=C,r=o.scrollHeight),N(l,T),F.call(i,"show","tab",a),B(o,T),F.call(a,"hidden","tab",i),f&&(c=l.scrollHeight,s=c===r,N(f,"collapsing"),f[w].height=r+"px",f.offsetHeight,o[w].float="",l[w].float=""),H(l,"fade")?setTimeout((function(){N(l,"show"),q(l,b)}),20):b()};if(u){u.isAnimating=!1;var k=function(){var t,e=I(u,T);return 1!==e[g]||H(e[0][m],"dropdown")?e[g]>1&&(t=e[e[g]-1]):t=e[0],t},z=function(){return S(k()[h]("href"))};this.show=function(){l=S((i=i||t)[h]("href")),a=k(),o=z(),u.isAnimating=!0,B(a,T),a[p]("aria-selected","false"),N(i,T),i[p]("aria-selected","true"),v&&(H(t[m],"dropdown-menu")?H(v,T)||N(v,T):H(v,T)&&B(v,T)),F.call(a,"hide","tab",i),H(o,"fade")?(B(o,"show"),q(o,A)):A()},"Tab"in t||W(t,"click",(function(t){t.preventDefault(),i=t.currentTarget,!u.isAnimating&&!H(i,T)&&d.show()})),d.height&&(f=z()[m]),t.Tab=d}};o[b](["Tab",Z,'[data-toggle="tab"]']);var tt=function(t,e){e=e||{};var n=(t=S(t))[h]("data-animation"),i=t[h]("data-autohide"),a=t[h]("data-delay");this.animation=!1===e.animation||"false"===n?0:1,this.autohide=!1===e.autohide||"false"===i?0:1,this[r]=parseInt(e[r]||a)||500;var o=this,l=0,s=D(t,".toast"),c=function(){B(s,"showing"),N(s,"show"),F.call(s,"shown","toast"),o.autohide&&o.hide()},d=function(){N(s,"hide"),F.call(s,"hidden","toast")},u=function(){B(s,"show"),o.animation?q(s,d):d()},f=function(){clearTimeout(l),l=null,N(s,"hide"),_(t,"click",o.hide),t.Toast=null,t=null,s=null};this.show=function(){s&&(F.call(s,"show","toast"),o.animation&&N(s,"fade"),B(s,"hide"),N(s,"showing"),o.animation?q(s,c):c())},this.hide=function(t){s&&H(s,"show")&&(F.call(s,"hide","toast"),t?u():l=setTimeout(u,o[r]))},this.dispose=function(){s&&H(s,"show")&&(B(s,"show"),o.animation?q(s,f):f())},"Toast"in t||W(t,"click",o.hide),t.Toast=o};o[b](["Toast",tt,'[data-dismiss="toast"]']);var et=function(n,a){a=a||{};var o=(n=S(n))[h]("data-animation"),l=n[h]("data-placement"),s=n[h]("data-delay"),u=n[h]("data-container"),f=S(a.container),m=S(u),g=D(n,".modal"),v=D(n,".fixed-top"),y=D(n,".fixed-bottom");this[c]=a[c]&&"fade"!==a[c]?a[c]:o||"fade",this.placement=a.placement?a.placement:l||A,this[r]=parseInt(a[r]||s)||200,this.container=f||m||v||y||g||e[i];var w=this,b=0,T=this.placement,C=null,k=n[h]("title")||n[h]("data-title")||n[h]("data-original-title");if(k&&""!=k){var z=function(){W(t,"resize",w.hide,P),F.call(n,"shown","tooltip")},E=function(){_(t,"resize",w.hide,P),w.container.removeChild(C),C=null,b=null,F.call(n,"hidden","tooltip")};this.show=function(){clearTimeout(b),b=setTimeout((function(){if(null===C){if(T=w.placement,0==function(){if(!(k=n[h]("title")||n[h]("data-title")||n[h]("data-original-title"))||""==k)return!1;(C=e.createElement("div"))[p]("role","tooltip");var t=e.createElement("div");t[p]("class","arrow"),C.appendChild(t);var i=e.createElement("div");i[p]("class","tooltip-inner"),C.appendChild(i),i.innerHTML=k,w.container.appendChild(C),C[p]("class","tooltip bs-tooltip-"+T+" "+w[c])}())return;j(n,C,T,w.container),!H(C,"show")&&N(C,"show"),F.call(n,"show","tooltip"),w[c]?q(C,z):z()}}),20)},this.hide=function(){clearTimeout(b),b=setTimeout((function(){C&&H(C,"show")&&(F.call(n,"hide","tooltip"),B(C,"show"),w[c]?q(C,E):E())}),w[r])},this.toggle=function(){C?w.hide():w.show()},"Tooltip"in n||(n[p]("data-original-title",k),n.removeAttribute("title"),W(n,d[0],w.show),W(n,d[1],w.hide)),n.Tooltip=w}};o[b](["Tooltip",et,'[data-toggle="tooltip"]']);var nt=function(t,e){for(var n=0,i=e[g];n<i;n++)new t(e[n])},it=a.initCallback=function(t){t=t||e;for(var n=0,i=o[g];n<i;n++)nt(o[n][1],t.querySelectorAll(o[n][2]))};return e[i]?it():W(e,"DOMContentLoaded",(function(){it()})),{Alert:U,Button:$,Carousel:X,Collapse:G,Dropdown:J,Modal:K,Popover:Q,ScrollSpy:V,Tab:Z,Toast:tt,Tooltip:et}})),function(t,e){var n=function(t,e){"use strict";var n,i;if(function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in i=t.lazySizesConfig||t.lazysizesConfig||{},n)e in i||(i[e]=n[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var a=e.documentElement,o=t.Date,l=t.HTMLPictureElement,r="addEventListener",s="getAttribute",c=t[r],d=t.setTimeout,u=t.requestAnimationFrame||d,f=t.requestIdleCallback,h=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],m={},g=Array.prototype.forEach,v=function(t,e){return m[e]||(m[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),m[e].test(t[s]("class")||"")&&m[e]},y=function(t,e){v(t,e)||t.setAttribute("class",(t[s]("class")||"").trim()+" "+e)},w=function(t,e){var n;(n=v(t,e))&&t.setAttribute("class",(t[s]("class")||"").replace(n," "))},b=function(t,e,n){var i=n?r:"removeEventListener";n&&b(t,e),p.forEach((function(n){t[i](n,e)}))},T=function(t,i,a,o,l){var r=e.createEvent("Event");return a||(a={}),a.instance=n,r.initEvent(i,!o,!l),r.detail=a,t.dispatchEvent(r),r},C=function(e,n){var a;!l&&(a=t.picturefill||i.pf)?(n&&n.src&&!e[s]("srcset")&&e.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[e]})):n&&n.src&&(e.src=n.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},k=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},z=function(){var t,n,i=[],a=[],o=i,l=function(){var e=o;for(o=i.length?a:i,t=!0,n=!1;e.length;)e.shift()();t=!1},r=function(i,a){t&&!a?i.apply(this,arguments):(o.push(i),n||(n=!0,(e.hidden?d:u)(l)))};return r._lsFlush=l,r}(),E=function(t,e){return e?function(){z(t)}:function(){var e=this,n=arguments;z((function(){t.apply(e,n)}))}},x=function(t){var e,n=0,a=i.throttleDelay,l=i.ricTimeout,r=function(){e=!1,n=o.now(),t()},s=f&&l>49?function(){f(r,{timeout:l}),l!==i.ricTimeout&&(l=i.ricTimeout)}:E((function(){d(r)}),!0);return function(t){var i;(t=!0===t)&&(l=33),e||(e=!0,(i=a-(o.now()-n))<0&&(i=0),t||i<9?s():d(s,i))}},L=function(t){var e,n,i=function(){e=null,t()},a=function(){var t=o.now()-n;t<99?d(a,99-t):(f||i)(i)};return function(){n=o.now(),e||(e=d(a,99))}},M=function(){var l,u,f,p,m,k,M,B,H,I,S,D,W=/^img$/i,_=/^iframe$/i,R="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),P=0,O=0,q=-1,F=function(t){O--,(!t||O<0||!t.target)&&(O=0)},Y=function(t){return null==D&&(D="hidden"==A(e.body,"visibility")),D||"hidden"!=A(t.parentNode,"visibility")&&"hidden"!=A(t,"visibility")},j=function(t,n){var i,o=t,l=Y(t);for(B-=n,S+=n,H-=n,I+=n;l&&(o=o.offsetParent)&&o!=e.body&&o!=a;)(l=(A(o,"opacity")||1)>0)&&"visible"!=A(o,"overflow")&&(i=o.getBoundingClientRect(),l=I>i.left&&H<i.right&&S>i.top-1&&B<i.bottom+1);return l},U=function(){var t,o,r,c,d,f,h,m,g,v,y,w,b=n.elements;if((p=i.loadMode)&&O<8&&(t=b.length)){for(o=0,q++;o<t;o++)if(b[o]&&!b[o]._lazyRace)if(!R||n.prematureUnveil&&n.prematureUnveil(b[o]))V(b[o]);else if((m=b[o][s]("data-expand"))&&(f=1*m)||(f=P),v||(v=!i.expand||i.expand<1?a.clientHeight>500&&a.clientWidth>500?500:370:i.expand,n._defEx=v,y=v*i.expFactor,w=i.hFac,D=null,P<y&&O<1&&q>2&&p>2&&!e.hidden?(P=y,q=0):P=p>1&&q>1&&O<6?v:0),g!==f&&(k=innerWidth+f*w,M=innerHeight+f,h=-1*f,g=f),r=b[o].getBoundingClientRect(),(S=r.bottom)>=h&&(B=r.top)<=M&&(I=r.right)>=h*w&&(H=r.left)<=k&&(S||I||H||B)&&(i.loadHidden||Y(b[o]))&&(u&&O<3&&!m&&(p<3||q<4)||j(b[o],f))){if(V(b[o]),d=!0,O>9)break}else!d&&u&&!c&&O<4&&q<4&&p>2&&(l[0]||i.preloadAfterLoad)&&(l[0]||!m&&(S||I||H||B||"auto"!=b[o][s](i.sizesAttr)))&&(c=l[0]||b[o]);c&&!d&&V(c)}},$=x(U),X=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(F(t),y(e,i.loadedClass),w(e,i.loadingClass),b(e,J),T(e,"lazyloaded"))},G=E(X),J=function(t){G({target:t.target})},K=function(t){var e,n=t[s](i.srcsetAttr);(e=i.customMedia[t[s]("data-media")||t[s]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},Q=E((function(t,e,n,a,o){var l,r,c,u,p,m;(p=T(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?y(t,i.autosizesClass):t.setAttribute("sizes",a)),r=t[s](i.srcsetAttr),l=t[s](i.srcAttr),o&&(u=(c=t.parentNode)&&h.test(c.nodeName||"")),m=e.firesLoad||"src"in t&&(r||l||u),p={target:t},y(t,i.loadingClass),m&&(clearTimeout(f),f=d(F,2500),b(t,J,!0)),u&&g.call(c.getElementsByTagName("source"),K),r?t.setAttribute("srcset",r):l&&!u&&(_.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}}(t,l):t.src=l),o&&(r||u)&&C(t,{src:l})),t._lazyRace&&delete t._lazyRace,w(t,i.lazyClass),z((function(){var e=t.complete&&t.naturalWidth>1;m&&!e||(e&&y(t,"ls-is-cached"),X(p),t._lazyCache=!0,d((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&O--}),!0)})),V=function(t){if(!t._lazyRace){var e,n=W.test(t.nodeName),a=n&&(t[s](i.sizesAttr)||t[s]("sizes")),o="auto"==a;(!o&&u||!n||!t[s]("src")&&!t.srcset||t.complete||v(t,i.errorClass)||!v(t,i.lazyClass))&&(e=T(t,"lazyunveilread").detail,o&&N.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,O++,Q(t,e,o,a,n))}},Z=L((function(){i.loadMode=3,$()})),tt=function(){3==i.loadMode&&(i.loadMode=2),Z()},et=function(){if(!u){if(o.now()-m<999)return void d(et,999);u=!0,i.loadMode=3,$(),c("scroll",tt,!0)}};return{_:function(){m=o.now(),n.elements=e.getElementsByClassName(i.lazyClass),l=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",$,!0),c("resize",$,!0),t.MutationObserver?new MutationObserver($).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a[r]("DOMNodeInserted",$,!0),a[r]("DOMAttrModified",$,!0),setInterval($,999)),c("hashchange",$,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e[r](t,$,!0)})),/d$|^c/.test(e.readyState)?et():(c("load",et),e[r]("DOMContentLoaded",$),d(et,2e4)),n.elements.length?(U(),z._lsFlush()):$()},checkElems:$,unveil:V,_aLSL:tt}}(),N=function(){var t,n=E((function(t,e,n,i){var a,o,l;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),h.test(e.nodeName||""))for(o=0,l=(a=e.getElementsByTagName("source")).length;o<l;o++)a[o].setAttribute("sizes",i);n.detail.dataAttr||C(t,n.detail)})),a=function(t,e,i){var a,o=t.parentNode;o&&(i=k(t,o,i),(a=T(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=a.detail.width)&&i!==t._lazysizesWidth&&n(t,o,a,i))},o=L((function(){var e,n=t.length;if(n)for(e=0;e<n;e++)a(t[e])}));return{_:function(){t=e.getElementsByClassName(i.autosizesClass),c("resize",o)},checkElems:o,updateElem:a}}(),B=function(){!B.i&&e.getElementsByClassName&&(B.i=!0,N._(),M._())};return d((function(){i.init&&B()})),n={cfg:i,autoSizer:N,loader:M,init:B,uP:C,aC:y,rC:w,hC:v,fire:T,gW:k,rAF:z}}(t,t.document);t.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}("undefined"!=typeof window?window:{}),document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector("#scroll-nav"),e=document.querySelector(".width-indicator-inner"),n=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=window.pageYOffset|document.body.scrollTop|document.documentElement.scrollTop;function a(t,e=0,n=null,i=3e3){if(t){let o=t.innerHTML,l=(n=n||parseInt(o.replace(/\D/g,"")))-e,r=50,s=Math.abs(Math.floor(i/l));s=Math.max(s,r);let c,d=(new Date).getTime()+i;function a(){let e=(new Date).getTime(),a=Math.max((d-e)/i,0),r=Math.round(n-a*l);t.innerHTML=o.replace(/([0-9]+)/g,r),r==n&&clearInterval(c)}c=setInterval(a,s),a()}}window.addEventListener("scroll",()=>{(i=window.pageYOffset|document.body.scrollTop|document.documentElement.scrollTop)>0?t.classList.contains("animated")||(t.classList.add("shadow","animated"),t.animate([{transform:"translateY(-100px)"},{transform:"translateY(0px)"}],{duration:400})):(t.classList.remove("shadow","animated"),t.animate([{transform:"translateY(10px)"},{transform:"translateY(0px)"}],{duration:200})),n=document.documentElement.scrollHeight-document.documentElement.clientHeight,e.style.width=i/n*100+"%";let o=document.querySelector("#counter").getBoundingClientRect().top;document.querySelector("#counter").classList.contains("animated")||o<400&&(document.querySelector("#counter").classList.add("animated"),a(document.getElementById("count1")),a(document.getElementById("count2")),a(document.getElementById("count3")))})});