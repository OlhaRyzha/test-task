!function(){const t=document.querySelectorAll(".input-wrap p");fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((t=>t.json())).then((function(n){const e=[...n.positions].sort(((t,n)=>t.name.localeCompare(n.name))).map((t=>t.name));for(let n=0;n<t.length;n+=1)t[n].textContent=e[n]})).catch((t=>alert("Error")))}();
//# sourceMappingURL=index.8b0092ac.js.map
