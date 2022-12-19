let menu = document.querySelector('#menu');
let navbar = document.querySelector('.head');
let scrollBar = document.querySelector('.scroll-bar');

menu.addEventListener('click',() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('head-toggle');
});

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('head-toggle');
  scrollIndicator();
}

function scrollIndicator(){

  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  scrollBar.style.width = percentage + '%';

}