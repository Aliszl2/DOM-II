// * [ ] `mouseover`
const destinationHover = document.querySelectorAll(".destination")[0];
console.log(destinationHover);
// console.log(destinationHover[0]);
// console.log(destinationHover[1]);
// console.log(destinationHover[2]);
destinationHover.addEventListener("mouseenter", e => {
  console.log("mouseover:sun");
  document.querySelector("#destinationImg").src = "img/sun.jpg";
  document.querySelector("#destinationImg").style.width = "600px";
  document.querySelector("#destinationImg").style.height = "200px";
});
// destinationHover[0].addEventListener("mouseleave", e => {
//   console.log("mouseleave:sun");
//   document.querySelector("#destinationImg").src = "img/destination.jpg";
//   document.querySelector("#destinationImg").style.width = "600px";
//   document.querySelector("#destinationImg").style.height = "200px";
// });

// destinationHover[1].addEventListener("mouseenter", e => {
//   console.log("mouseover:mountain");
//   document.querySelector("#destinationImg").src = "img/mountain.jpeg";
//   document.querySelector("#destinationImg").style.width = "600px";
//   document.querySelector("#destinationImg").style.height = "200px";
// });
// destinationHover[1].addEventListener("mouseleave", e => {
//   console.log("mouseleave:mountain");
//   document.querySelector("#destinationImg").src = "img/destination.jpg";
//   document.querySelector("#destinationImg").style.width = "600px";
//   document.querySelector("#destinationImg").style.height = "200px";
// });

// destinationHover[2].addEventListener("mouseenter", e => {
//   console.log("mouseover:island");
//   document.querySelector("#destinationImg").src = "img/island.jpg";
//   document.querySelector("#destinationImg").style.width = "600px";
//   document.querySelector("#destinationImg").style.height = "200px";
// });
// destinationHover[2].addEventListener("mouseenter", e => {
//   console.log("mouseleave:island");
//   document.querySelector("#destinationImg").src = "img/destination.jpg";
//   document.querySelector("#destinationImg").style.width = "600px";
//   document.querySelector("#destinationImg").style.height = "200px";
// });
// * [ ] `keydown`
// * [ ] `wheel`

let sepia = document.querySelector("img");
document.addEventListener("wheel", function() {
  sepia.style.filter = "sepia(100%)";
  sepia.style.transition = "10s";
  // sepia.style.filter = "sepia(0%)";
  // sepia.style.transition = "8s";
});
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`
let turnHeaderPink = document.querySelector(".logo-heading");
document.addEventListener("dblclick", function() {
  turnHeaderPink.style.color = "pink";
});

let changeColor = document.querySelectorAll("a");
console.log(changeColor);
