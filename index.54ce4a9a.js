!function(){const t=[...document.querySelector(".contacts__list").children],e=document.querySelector(".contacts__btn");fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=32").then((t=>t.json())).then((function(o){const n=[...o.users].sort(((t,e)=>t.registration_timestamp-e.registration_timestamp));for(let a=0;a<t.length;a+=1){const s=document.querySelectorAll(".contacts__img"),l=document.querySelectorAll(".contacts__name"),i=document.querySelectorAll(".contacts__tel"),r=document.querySelectorAll(".contacts__job-title"),d=document.querySelectorAll(".contacts__email");s[a].src=n[a].photo,l[a].textContent=n[a].name,i[a].textContent=n[a].phone,r[a].textContent=n[a].position,d[a].textContent=n[a].email,l[a].dataset.tooltip=l[a].textContent,i[a].dataset.tooltip=i[a].textContent,d[a].dataset.tooltip=d[a].textContent,r[a].dataset.tooltip=r[a].textContent;let u=0;function c(t){u+=1;const o=a+6*u;o<n.length?(s[a].src=n[o].photo,l[a].dataset.tooltip=l[a].textContent=n[o].name,i[a].dataset.tooltip=i[a].textContent=n[o].phone,r[a].dataset.tooltip=r[a].textContent=n[o].position,d[a].dataset.tooltip=d[a].textContent=n[o].email):e.classList.add("visually-hidden")}e.addEventListener("click",c)}})).catch((t=>alert("Error")))}();
//# sourceMappingURL=index.54ce4a9a.js.map
