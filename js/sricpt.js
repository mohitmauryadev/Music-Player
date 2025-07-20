let burgger = document.querySelector("#burgger");
let left_section = document.querySelector(".section_left");

// function togglefun(){
//     left_section.classList.toggle('se_left2')
// }

burgger.addEventListener('click', () => {
  left_section.classList.toggle('se_left2');
})

let brand_name = document.querySelectorAll('#logo_brand_name');


function changeBrandColor() {
  let a = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let c = parseInt(Math.random() * 255);
  return `rgb(${a}, ${b}, ${c})`;
}

// function funChange(){
//   for (let i =0 ; i < brand_name.length ; i++){
//     brand_name[i].style.Color =`changeBrandColor()`;
//   }
// }

setInterval(() => {
  for (let i = 0; i < brand_name.length; i++) {
    brand_name[i].style.color = changeBrandColor()
  }



  inner[0].style.backgroundColor = getrandomcolor();

}, 300);