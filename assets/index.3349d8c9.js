import{j as l,R as m,a as u}from"./vendor.1590dc21.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}};h();const e=l.exports.jsx,i=l.exports.jsxs;function g(){return e("header",{children:e("h1",{className:"FontP name",children:"Imenes"})})}function f(){return e("section",{className:"section-card container",children:e("div",{className:"card",children:i("div",{className:"foto_redes",children:[e("img",{className:"foto_card",src:"https://avatars.githubusercontent.com/u/69609443?v=4",alt:"Foto do Daniel"}),i("div",{className:"redes",children:[" ",e("a",{href:"https://www.linkedin.com/in/gabriel-imenes-789744209",target:"_blank",children:e("i",{className:"bx bxl-linkedin rede-icon"})})," ",e("a",{href:"https://github.com/imenesg",target:"_blank",children:e("i",{className:"bx bxl-github rede-icon"})})," "]})]})})})}function p(){return i("section",{className:"sobre container",children:[e("h2",{className:"FontP",children:"sobre"}),e("p",{children:"Ol\xE1, me chamo Gabriel Imenes, gosto muito de tecnologia e de como ela avan\xE7a a cada instante. Sou um Dev Front-end e pretendo estar cada vez mais inserido nas novas tecnologias. :)"})]})}function a(o){return e("a",{href:o.link,target:"_blank",children:i("div",{className:"projeto",children:[e("h3",{children:o.titulo}),e("img",{className:"img_projeto",src:o.img,alt:""})]})})}var b="/assets/frutaefrutoedit.1562c9ee.png",v="/assets/listaedit.fea3e32d.png",N="/assets/polaredit.0bcf8605.png",x="/assets/YOANDLAedit.ec8c6cae.png",k="/assets/Rick and Morty characters !edit.6b11eeae.png";function j(){return i("section",{className:"section_projetos container",children:[e("h2",{className:"FontP",children:"top projetos"}),i("span",{className:"instrucao",children:["Clique sobre a foto e veja o projeto",e("i",{className:"bx bxs-hand-up"})]}),i("div",{className:"projetos",children:[e(a,{link:"https://imenesg.github.io/Fruta_E_Fruto/",titulo:"Um projeto feito por mim no curso Alura",img:b}),e(a,{link:"https://imenesg.github.io/Lista-mercado/",titulo:"Lista de mercado digital",img:v}),e(a,{link:"https://polarsites.com.br/",titulo:"Site polar",img:N}),e(a,{link:"https://imenesg.github.io/YOANDLA/",titulo:"Yoandla",img:x}),e(a,{link:"https://imenesg.github.io/Rick-and-Morty-characters/",titulo:"Rick and Morty characters !",img:k})]})]})}function y(){return i("footer",{className:"container",children:[i("div",{className:"redes",children:[" ",e("a",{href:"https://www.linkedin.com/in/gabriel-imenes-789744209",target:"_blank",children:e("i",{className:"bx bxl-linkedin rede-icon"})})," ",e("a",{href:"https://github.com/imenesg",target:"_blank",children:e("i",{className:"bx bxl-github rede-icon"})})," "]}),i("div",{className:"emailContato",children:[e("i",{className:"bx  bx-mail-send email-icon"}),e("p",{children:"imenesgabriel@gmail.com"})]})]})}m.render(i(u.StrictMode,{children:[e(g,{}),e(f,{}),e(p,{}),e(j,{}),e(y,{})]}),document.getElementById("root"));
