// Your code goes here
// [ x] `mouseover`
// (Mouse enter and mouse leave destination sections- updates pick your dest picture)
const hoverSunPic = document.querySelectorAll(".destination .btn")[0];

hoverSunPic.addEventListener("mouseover", event => {
  document.querySelector("#destinationImg").src = "img/sun.jpeg";
  document.querySelector("#destinationImg").style.width = "600px";
  document.querySelector("#destinationImg").style.height = "200px";
  event.stopPropagation();
});

const hoverIslandPic = document.querySelectorAll(".destination .btn")[2];

hoverIslandPic.addEventListener("mouseover", event => {
  document.querySelector("#destinationImg").src = "img/island.jpg";
  document.querySelector("#destinationImg").style.width = "600px";
  document.querySelector("#destinationImg").style.height = "200px";
  event.stopPropagation();
});
hoverIslandPic.addEventListener("mouseleave", event => {
  document.querySelector("#destinationImg").src = "img/destination.jpg";
  document.querySelector("#destinationImg").style.width = "600px";
  document.querySelector("#destinationImg").style.height = "200px";
  event.stopPropagation();
});

const hoverMountainPic = document.querySelectorAll(".destination .btn")[1];

hoverMountainPic.addEventListener("mouseover", event => {
  document.querySelector("#destinationImg").src = "img/mountain.jpeg";
  document.querySelector("#destinationImg").style.width = "600px";
  document.querySelector("#destinationImg").style.height = "200px";
  event.stopPropagation();
});
hoverMountainPic.addEventListener("mouseleave", event => {
  document.querySelector("#destinationImg").src = "img/destination.jpg";
  document.querySelector("#destinationImg").style.width = "600px";
  document.querySelector("#destinationImg").style.height = "200px";

  event.stopPropagation();
});

//[ x] `keydown`
const lastNameInput = document.getElementsByName("lname")[0];

lastNameInput.addEventListener("keydown", event => {
  console.log(`User first name entered: ${event.key}`);
});
const firstNameInput = document.getElementsByName("fname")[0];

firstNameInput.addEventListener("keydown", event => {
  console.log(`User last name entered: ${event.key}`);
});
// [ ] `wheel`. Increase decreases size of bottom picture on mouse wheel

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("#destinationImg");
const wheel = document.querySelector("div");
el.onwheel = zoom;

wheel.addEventListener("wheel", zoom);

// [ ] `drag / drop`

const beachball = document.querySelector("#beachball");

beachball.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text", event.target.id);
});
beachball.addEventListener("dragover", function(event) {
  event.preventDefault();
});

beachball.addEventListener("drop", function(event) {
  event.preventDefault();
  console.log(event);
  if (event.target.className == "droptarget") {
       var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
});
const parasol = document.querySelector("#parasol");
//parasol.addEventListener("drop", myScript);
const coconut = document.querySelector("#coconut");
//coconut.addEventListener("drop", myScript);

//[ ] `load`

// [ ] `focus`

// [ ] `resize`

// [x ] `scroll`
const scroll = document.querySelector(".container");
document.addEventListener("scroll", event => {
  turnHeaderPink.style.color = "red";
});

// [ ] `select`

//[ x] `dblclick`
let turnHeaderPink = document.querySelector(".logo-heading");
document.addEventListener("dblclick", function() {
  turnHeaderPink.style.color = "pink";
});

// Input into hidden form on selecting register or log in
const register = document.querySelectorAll(".nav-link")[2];

register.addEventListener("click", event => {
  document.querySelector(".hidden-form").style.display = "flex";
  // document.querySelector('.hidden-form').style.justifycontent = 'center';
  document.querySelector(".hidden-form").style.backgroundColor = "yellow";
  document.querySelector("#email").style.display = "block";
  document.querySelector("#password2").style.display = "block";
  event.stopPropagation();

  console.log("unhide registration form");
  console.log(event);
  // event.stopImmediatePropagation();
});
const signIn = document.querySelectorAll(".nav-link")[3];
signIn.addEventListener("click", event => {
  document.querySelector(".hidden-form").style.display = "block";
  document.querySelector(".hidden-form").style.backgroundColor = "turquoise";
  document.querySelector("#email").style.display = "none";
  document.querySelector("#password2").style.display = "none";
  event.stopPropagation();

  console.log("unhide sign in form");
  console.log(event);
});

// Blur/ focus - if passwords not the same or if email is not valid box goes red

const blur = document.querySelector('input[name="email"]');
blur.addEventListener("blur", event => {
  if (document.querySelector("#email").value.includes("@")) {
    document.querySelector("#email").style.backgroundColor = "green";

    //     document.querySelector('input[name="email"]').focus();
  } else {
    document.querySelector("#email").focus();
    console.log(`not a valid email`);
    event.target.style.backgroundColor = "red";
  }
});

// input.onblur = function () {
//     if (!this.value.includes('@')) { // not email
//         // show the error
//         this.input.add("error");
//         // ...and put the focus back
//         input.focus();
//     } else {
//         this.input.remove("error");
//     }
// };
// var blur = document.querySelector('input[type="text"]');
// blur.addEventListener('onfocus', runEvent);
// // blur.addEventListener('blur', runEvent);

// Submit
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  console.log("Form: Detected Submit Event!");
  console.log("First Name", event.target[0].value);
  console.log("Last Name", event.target[1].value);
  console.log("Password", event.target[2].value);
  event.preventDefault();
  document.querySelector(".hidden-form").style.display = "none";

  console.log(`form hidden again`);

  // Clear text from fields
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("password2").value = "";
  //   document.querySelector('.hidden-form').input.reset();
});

// wheel

let sepia = document.querySelector("img");
document.addEventListener("wheel", function() {
  sepia.style.filter = "sepia(100%)";
  sepia.style.transition = "1s";
});
