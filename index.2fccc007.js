!function(){const t=document.querySelectorAll(".input-wrap p"),e=[...document.querySelectorAll(".input-radio")];fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((t=>t.json())).then((function(n){const o=[...n.positions].sort(((t,e)=>t.name.localeCompare(e.name))).map((t=>t.name));for(let n=0;n<t.length;n+=1)t[n].textContent=o[n],e[n].value=n+1})).catch((t=>alert("Error")))}();
//# sourceMappingURL=index.2fccc007.js.map
