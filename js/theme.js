let theme = document.querySelector('.themes');
let change_theme = document.querySelector('.section_right');
let change_theme_body = document.querySelector('.body');

function changes(){
  change_theme.classList.toggle('changed');
}
theme.addEventListener('click',changes);


function changes2(){
  change_theme_body.classList.toggle('changed');
}
theme.addEventListener('click',changes2);