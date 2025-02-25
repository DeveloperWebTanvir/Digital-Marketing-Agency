AOS.init({
    once: true,
    duration: 1200,
});

document.addEventListener('DOMContentLoaded', function() {
    // Javascript to handle Sidebar in Responsive Mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.offcanvas-menu');
    const offcanvasBackground = document.querySelector('.offcanvas-background');
    const closeButton = document.querySelector('.btn-close');

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
        offcanvasBackground.classList.toggle('show');
    });

    closeButton.addEventListener('click', function() {
        navbarMenu.classList.remove('show');
        offcanvasBackground.classList.remove('show');
    });

    offcanvasBackground.addEventListener('click', function() {
        navbarMenu.classList.remove('show');
        offcanvasBackground.classList.remove('show');
    });

    // Select all transition when load finish
    const elementsRU = document.querySelectorAll('.transition-fade-left, .transition-fade-right, .transition-fade-up');

    // class 'active' to activate animation after page load
    elementsRU.forEach(element => {
        element.classList.add('active');
    });

    const header = document.querySelector(".transition-fade-down");
    if (header) {
        header.classList.add("show");

        // Event listener to detect end transition
        header.addEventListener('transitionend', function() {
            header.classList.remove('transition-fade-down');
        }, {
            once: true
        }); // remove event listener after run once
    }

    // Animation to start Counter 
    const counterElement = document.getElementById('counter');
    let count = 0;
    const target = 2.5;
    const duration = 1000; // Duration of the animation in milliseconds
    const stepTime = Math.abs(Math.floor(duration / (target * 100)));

    function updateCounter() {
        count += 0.01; // Increment by 0.01 for smooth animation
        if (count >= target) {
            counterElement.innerText = target.toFixed(1);
        } else {
            counterElement.innerText = count.toFixed(1);
            setTimeout(updateCounter, stepTime);
        }
    }

    updateCounter();

    // Animation to start Counter 
    const counterElements = document.getElementById('counter-projek');
    let counts = 0;
    const targets = 2.5;
    const durations = 2000; // Duration of the animation in milliseconds
    const stepTimes = Math.abs(Math.floor(durations / (targets * 100)));

    function updateCounters() {
        count += 0.01; // Increment by 0.01 for smooth animation
        if (count >= target) {
            counterElements.innerText = targets.toFixed(1);
        } else {
            counterElements.innerText = counts.toFixed(1);
            setTimeout(updateCounters, stepTimes);
        }
    }

    updateCounters();

    // Animation to start Counter 
    function animateCounter(element, endValue, duration) {
        let startValue = 0;
        let range = endValue - startValue;
        let increment = endValue > startValue ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            startValue += increment;
            element.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // run counter animation
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = {};

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const id = element.id;
                if (!countersAnimated[id]) {
                    countersAnimated[id] = true;
                    let endValue;
                    switch (id) {
                        case 'counterClient':
                            endValue = 726;
                            break;
                        case 'counterCountries':
                            endValue = 32;
                            break;
                        case 'counterCreatives':
                            endValue = 24;
                            break;
                        default:
                            endValue = 0;
                    }
                    const duration = 2000; // Animation duration in milliseconds
                    animateCounter(element, endValue, duration);
                }
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Get all items and paragraphs
const items = document.querySelectorAll('.clickable-item');
const paragraphs = document.querySelectorAll('.content-paragraph');

items.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        items.forEach(i => i.classList.remove('active-item'));
        // Hide all paragraphs
        paragraphs.forEach(p => p.style.display = 'none');

        // Add active class to the clicked item
        item.classList.add('active-item');

        // Show the corresponding paragraph
        const targetId = 'paragraph-' + item.id.split('-')[1];
        document.getElementById(targetId).style.display = 'block';
    });
});


// handle indicator animation
window.addEventListener('scroll', function() {
    var scrollIndicator = document.getElementById('scroll-indicator');
    var progressCircle = document.getElementById('progress-circle');

    // Show the scroll indicator when scrolling down
    if (window.scrollY > 100) {
        scrollIndicator.style.display = 'flex';
    } else {
        scrollIndicator.style.display = 'none';
    }

    // Calculate the scroll percentage
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / docHeight) * 100;

    // Update the stroke-dashoffset based on the scroll percentage
    var strokeDashoffset = 283 - (scrollPercent / 100) * 283;
    progressCircle.style.strokeDashoffset = strokeDashoffset;
});

// scroll to top function
document.getElementById('scroll-indicator').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});