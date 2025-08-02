const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 4000);


const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav-menu');

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const navMenuItems = document.querySelectorAll('.nav-menu-item');

navMenuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = item.nextElementSibling;
    if (submenu.classList.contains('nav-submenu')) {
      submenu.classList.toggle('show');
    }
  });
});




const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () =>{
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block'? 'none' : 'block' 
  });
});



function scrollToRight() {
  document.getElementById('collection-inner').scrollBy({
    left: 300,
    behavior: 'smooth'
  });
   
};

function scrollToLeft() {
  document.getElementById('collection-inner').scrollBy({
    left: -300,
    behavior: 'smooth',
    
  });

};


