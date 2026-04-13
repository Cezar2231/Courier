
lucide.createIcons();

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Contact widget toggle
function toggleContactWidget() {
    const widget = document.getElementById('contact-widget');
    widget.classList.toggle('hidden');
}

// Close contact widget when clicking outside
document.addEventListener('click', function(event) {
    const widget = document.getElementById('contact-widget');
    const button = event.target.closest('button');
    if (!widget.classList.contains('hidden') && !button?.onclick?.toString().includes('toggleContactWidget')) {
        if (!widget.contains(event.target)) {
            widget.classList.add('hidden');
            }
        }
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scale-[0.98]", "opacity-95");
  } else {
    nav.classList.remove("scale-[0.98]", "opacity-95");
  }
});

const image = document.getElementById("hero-image");
// Slides content
const slidesContent = [
    {
        top: "Свържете се с нас за безплатна консултация.",
        title: "Винаги<br>навреме!",
        sub: "Работим в Бургас и околността!",
        img: "img/slide1.jpg"
    },
    {
        top: "Бързо и сигурно преместване",
        title: "Без<br>стрес!",
        sub: "Доверете се на професионалисти!",
        img: "img/slide2.webp"
    },
    {
        top: "Най-добрите цени",
        title: "Изгодно<br>решение!",
        sub: "Качество на достъпна цена!",
        img: "img/slide3.png"
    }
];

let currentSlide = 0;
const totalSlides = 3;

const indicators = document.querySelectorAll('.slide-indicator');

function updateSlide() {
    const topText = document.getElementById("hero-top-text");
    const title = document.getElementById("hero-title");
    const sub = document.getElementById("hero-subtext");
    const image = document.getElementById("hero-image");

    if (!topText || !title || !sub || !image) return;

    indicators.forEach((ind, index) => {
        ind.classList.toggle('active', index === currentSlide);
    });

    topText.innerText = slidesContent[currentSlide].top;
    title.innerHTML = slidesContent[currentSlide].title;
    sub.innerText = slidesContent[currentSlide].sub;

    image.src = slidesContent[currentSlide].img;
}

function nextSlide() {
    if (!document.getElementById("hero-title")) return;

    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
    animateHeroContent();
}

function prevSlide() {
    if (!document.getElementById("hero-title")) return;

    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
    animateHeroContent();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
    animateHeroContent();
}

function animateHeroContent() {
    const content = document.querySelector('.relative.z-10');

    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
        content.style.transition = 'all 0.5s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 50);
}

// Auto slide
// Auto slide само ако има hero
if (document.getElementById("hero-title")) {
    setInterval(() => {
        nextSlide();
    }, 10000);

    updateSlide();
}

// Init

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
        
    lastScroll = currentScroll;
});

function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    content.classList.toggle("hidden");

    if (content.classList.contains("hidden")) {
        icon.textContent = "+";
    } else {
        icon.textContent = "−";
    }
}




