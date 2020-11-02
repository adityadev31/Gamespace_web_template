/* ====== NAVBAR ====== */

let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('._navbar');
let nav_link1 = document.querySelector('.nav_link_1');
let nav_link2 = document.querySelector('.nav_link_2');
let nav_link3 = document.querySelector('.nav_link_3');
let nav_link4 = document.querySelector('.nav_link_4');
let nav_link5 = document.querySelector('.nav_link_5');
let nav_link6 = document.querySelector('.nav_link_6');

hamburger.addEventListener('click', () => {
   navbar.classList.toggle('active');
});
nav_link1.addEventListener('click', () => {
   navbar.classList.toggle('active');
});
nav_link2.addEventListener('click', () => {
   navbar.classList.toggle('active');
});
nav_link3.addEventListener('click', () => {
   navbar.classList.toggle('active');
});
nav_link4.addEventListener('click', () => {
   navbar.classList.toggle('active');
});
nav_link5.addEventListener('click', () => {
   navbar.classList.toggle('active');
});
nav_link6.addEventListener('click', () => {
   navbar.classList.toggle('active');
});