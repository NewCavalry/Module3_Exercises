(()=>{function h(t,n){function e(){t.contentWindow.removeEventListener("unload",n),t.contentWindow.addEventListener("unload",n)}t.addEventListener("load",e),e()}var c=!1;async function d(t="/"){c=!0;let n=document.getElementById("iframe"),e=await fetch(t,{method:"GET",credentials:"same-origin"});if(!e.ok)throw parent==null||parent.postMessage({type:"error",payload:`fetch-error: ${e.status} ${e.statusText}`},"https://replit.com"),new Error(e.statusText);let s=await e.text(),r=new DOMParser().parseFromString(s,"text/html"),a=document.createElement("script"),p=t.startsWith("/")?t:new URL(t).pathname;a.innerHTML=`history.pushState(null, null, ${JSON.stringify(p)});`;let m=l();r.head.prepend(a,m);let i=n.contentDocument;i.open(),i.write(r.documentElement.outerHTML),i.close(),c=!1,h(n,u=>{c||(c=!0,u.preventDefault(),setTimeout(function(){try{let f=n.contentWindow.location;d(f.href)}catch{}},0))})}function l(){let t=document.createElement("script");return console.log(location.href),t.async=!1,t.src="https://replco.util.repl.co/devtools/devtools.js",t.setAttribute("onerror","parent.postMessage({ event: 'error', payload: 'script.onerror: Failed to load ' + event.target.src }, '*')"),t}var o=document.getElementById("iframe");(async()=>{try{await d()}catch(t){g(),parent==null||parent.postMessage({type:"error",payload:t})}})();function g(){var e,s;let t="__replit_devtools__";function n(){let r=o.contentWindow.document;if(r.getElementById(t))return;let a=l();a.id=t,r.head.appendChild(a)}(e=o.contentDocument)!=null&&e.head&&n(),o.addEventListener("load",n),o.src||(o.src="/"),(s=o.contentDocument)!=null&&s.head&&n()}window.addEventListener("message",t=>{t.origin===location.origin?(parent==null||parent.postMessage(t.data,"http://localhost:3000"),parent==null||parent.postMessage(t.data,"https://replit.com")):o.contentWindow.postMessage(t.data,location.origin)});})();
