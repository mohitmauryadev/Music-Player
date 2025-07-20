let sign_form = document.querySelector('#login_form');
let SignBut = document.querySelector('#Sign'); 
let body = document.querySelector('.body');
let left_body_section = document.querySelector('.section_left');
let right_body_section = document.querySelector('.songslist1');
let login_form = document.querySelector('#log');
let login_form_cont = document.querySelector('.login_form')
function signformtoggle() {

    sign_form.classList.toggle('hidden');
    left_body_section.classList.toggle('left_hidden');
    right_body_section.classList.toggle('right_hidden');
}
SignBut.addEventListener('click', signformtoggle);

function loginformtoggle() {

   login_form_cont.classList.toggle('hidden_login');
    left_body_section.classList.toggle('left_hidden');
    right_body_section.classList.toggle('right_hidden');
}
login_form.addEventListener('click', loginformtoggle);