// Main Interactivity for FieldCam Website

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 3. QA Form Submission Mockup
    const qaForm = document.getElementById('qaForm');
    const formFeedback = document.getElementById('formFeedback');
    if (qaForm) {
        qaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            qaForm.style.opacity = '0.5';
            qaForm.style.pointerEvents = 'none';
            setTimeout(() => {
                qaForm.reset();
                qaForm.style.opacity = '1';
                qaForm.style.pointerEvents = 'all';
                formFeedback.style.display = 'block';
                setTimeout(() => {
                    formFeedback.style.display = 'none';
                }, 5000);
            }, 1000);
        });
    }

    // 4. Mobile Menu Placeholder (if needed in future)
    // You can add a hamburger menu toggle here
});
