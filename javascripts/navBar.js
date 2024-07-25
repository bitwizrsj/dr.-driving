<<<<<<< HEAD
// Toggle menu
let menu = document.querySelector('.toggle');
menu.onclick = function() {
  menu.classList.toggle('active');
}

=======
let menu = document.querySelector('.toggle');
menu.onclick = function(){
  menu.classList.toggle('active');
}


>>>>>>> a31d27fc7cbd69ab2b6c37d5ae8734d687bf8ade
function showMenu() {
  var menuBar = document.getElementById('menuBar');
  var toggle = document.querySelector('.toggle');
  
  if (menuBar.style.display === 'flex') {
      menuBar.style.display = 'none';
      toggle.classList.remove('open');
  } else {
      menuBar.style.display = 'flex';
      toggle.classList.add('open');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.toggle');
  toggle.addEventListener('click', showMenu);
});

<<<<<<< HEAD
// Get the elements
var listItems = document.querySelectorAll("#item");
const menuImg = document.getElementById("menuImg");

// MOUSEENTER
listItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    const imageURL = `url('./assets/image${index+1}.jpg')`;
    gsap.to(menuImg, {
=======



// Get the element only once
var ListItem = document.querySelectorAll("#item");
const menuImg = document.getElementById("menuImg");

// MOUSEENTER
ListItem.forEach((item , index)=> {
  item.addEventListener("mouseenter" , ()=> {

    const imageURL = `url(./image${index+1}.jpg)`;
    gsap.to(menuImg,{
>>>>>>> a31d27fc7cbd69ab2b6c37d5ae8734d687bf8ade
      duration: 0.5,
      backgroundImage: imageURL,
      ease: "circ.out",
      opacity: 1,
<<<<<<< HEAD
      scale: 1.5,
=======
      scale: 1.1,
>>>>>>> a31d27fc7cbd69ab2b6c37d5ae8734d687bf8ade
      filter: "blur(0px)",
    });

    gsap.to(item, {
      duration: 0.5,
      x: 50,
<<<<<<< HEAD
      color: "#fff",
      scale: 1.3,
      ease: "circ.out",
    });
  });
});

// MOUSELEAVE
listItems.forEach(item => {
  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      duration: 0.5,
      x: 0,
      scale: 1,
=======
      color:"#fff",
      scale:1.3,
      ease: "circ.out",
    });

  });
});


//MOUSELEAVE
ListItem.forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    gsap.to(item, {
      duration: 0.5,
      x: 0,
      scale:1,
>>>>>>> a31d27fc7cbd69ab2b6c37d5ae8734d687bf8ade
      color: "#ffffff88",
      ease: "circ.out",
    });
  });
});
<<<<<<< HEAD
=======

>>>>>>> a31d27fc7cbd69ab2b6c37d5ae8734d687bf8ade
