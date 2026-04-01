// Initialize Lucide icons
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

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Slides content
const slidesContent = [
    {
        top: "Имате идея? Споделете я, за да намерим заедно най-доброто решение.",
        title: "Изразете<br>индивидуалност!",
        sub: "Широк спектър от качествени автомобилни кожи, Алкантара, винил и дамаски!"
    },
    {
        top: "Професионална изработка с внимание към детайла.",
        title: "Перфектен<br>интериор!",
        sub: "Превърнете автомобила си в нещо уникално с нашите услуги."
    },
    {
        top: "Качество, което се усеща при всяко докосване.",
        title: "Лукс и<br>комфорт!",
        sub: "Работим само с премиум материали за максимален резултат."
    }
];

let currentSlide = 0;
const totalSlides = 3;

const indicators = document.querySelectorAll('.slide-indicator');

function updateSlide() {
    const topText = document.getElementById("hero-top-text");
    const title = document.getElementById("hero-title");
    const sub = document.getElementById("hero-subtext");

    // ако няма hero елементи → СПРИ
    if (!topText || !title || !sub) return;

    indicators.forEach((ind, index) => {
        ind.classList.toggle('active', index === currentSlide);
    });

    topText.innerText = slidesContent[currentSlide].top;
    title.innerHTML = slidesContent[currentSlide].title;
    sub.innerText = slidesContent[currentSlide].sub;
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
    

let openGallery = null;


function toggleGallery(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const icon = el.previousElementSibling.querySelector(".arrow-icon");

    // затваряне на другата отворена категория
    if (openGallery && openGallery !== el) {
        closeGallery(openGallery);
    }

    // toggle текущата
    if (el.style.maxHeight && el.style.maxHeight !== "0px") {
        closeGallery(el);
        openGallery = null;
    } else {
        openGallery = el;
        openGalleryGallery(el);
    }

    function openGalleryGallery(element) {
        element.style.maxHeight = element.scrollHeight + "px";
        if (icon) icon.classList.add("rotate");
    }

    function closeGallery(element) {
        element.style.maxHeight = "0px";

        const prevIcon = element.previousElementSibling.querySelector(".arrow-icon");
        if (prevIcon) prevIcon.classList.remove("rotate");
    }
}


// LIGHTBOX
document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.remove("hidden");
            lightbox.classList.add("flex");

            lightboxImg.src = img.src;

            // блокира scroll
            document.body.style.overflow = "hidden";
        });
    });

    // затваряне при клик извън снимката
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.add("hidden");
            lightbox.classList.remove("flex");

            document.body.style.overflow = "auto";
        }
    });

});


