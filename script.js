  document.addEventListener('DOMContentLoaded', () => {
            const navbarToggler = document.getElementById('navbarToggler');
            const navbarResponsive = document.getElementById('navbarResponsive');
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            const faqQuestions = document.querySelectorAll('.faq-question');
            const backToTopBtn = document.getElementById('backToTopBtn');

            let currentIndex = 0;
            const totalSlides = 0;
            let autoSlideInterval;

            // Toggle mobile navigation
            navbarToggler.addEventListener('click', () => {
                navbarResponsive.classList.toggle('active');
            });

            // Close mobile nav when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                if (navbarResponsive.classList.contains('active')) {
                    navbarResponsive.classList.remove('active');
                }
                });
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // FAQ Accordion functionality
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const isActive = question.classList.contains('active');

                    // Close all other open answers
                    faqQuestions.forEach(q => {
                        if (q !== question && q.classList.contains('active')) {
                            q.classList.remove('active');
                            q.nextElementSibling.style.display = 'none';
                        }
                    });

                    // Toggle current answer
                    if (isActive) {
                        question.classList.remove('active');
                        answer.style.display = 'none';
                    } else {
                        question.classList.add('active');
                        answer.style.display = 'block';
                    }
                });
            });

            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    backToTopBtn.style.display = "block";
                } else {
                    backToTopBtn.style.display = "none";
                }
            }

            // When the user clicks on the button, scroll to the top of the document
            window.topFunction = function() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }

            // Animaciones al hacer scroll
            const animateOnScrollElements = document.querySelectorAll('.feature-item, .essence-card, .pricing-card, .team-member-card, .app-screenshot');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                        entry.target.style.opacity = '1';
                        observer.unobserve(entry.target); // Detener la observación una vez animado
                    }
                });
            }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

            animateOnScrollElements.forEach(element => {
                element.style.opacity = '0'; // Ocultar elementos inicialmente
                observer.observe(element);
            });
        });