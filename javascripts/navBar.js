// Toggle menu
let menu = document.querySelector('.toggle');
menu.onclick = function() {
  menu.classList.toggle('active');
}

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

// Get the elements
var listItems = document.querySelectorAll("#item");
const menuImg = document.getElementById("menuImg");

// MOUSEENTER
listItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    const imageURL = `url('./assets/image${index+1}.jpg')`;
    gsap.to(menuImg, {
      duration: 0.5,
      backgroundImage: imageURL,
      ease: "circ.out",
      opacity: 1,
      scale: 1.5,
      filter: "blur(0px)",
    });

    gsap.to(item, {
      duration: 0.5,
      x: 50,
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
      color: "#ffffff88",
      ease: "circ.out",
    });
  });
});
