const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})


// Scroll to the top button
let scroll = document.getElementById("scroll-btn");

// Display button when screen scrolled 30px from top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}