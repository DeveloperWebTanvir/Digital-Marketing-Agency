document.addEventListener("DOMContentLoaded", function() {
    // Navbar and dropdown
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');

    // Get URL
    const currentUrl = window.location.href;

    // add function
    function setActiveLink(link) {
        link.classList.add('active');
        if (link.closest('.dropdown-menu')) {
            // make active parent menu
            const parentNav = link.closest('.dropdown').querySelector('.nav-link');
            parentNav.classList.add('active');
        }
    }

    // check navbar item
    navLinks.forEach(link => {
        // Url current page
        if (link.href === currentUrl) {
            setActiveLink(link);
        } else {
            link.classList.remove('active'); // remove unmatch class
        }
    });

    // check dropdown
    dropdownItems.forEach(link => {
        if (link.href === currentUrl) {
            setActiveLink(link);
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     // check item navbar
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

//     // Get URL
//     const currentUrl = window.location.href;

//     navLinks.forEach(link => {
//         // If URL current page
//         if (link.href === currentUrl) {
//             // add active class
//             link.classList.add('active');
//         } else {
//             // remove unmatch class
//             link.classList.remove('active');
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const currentUrl = window.location.href;

//     // get navbar n dropdown
//     const navLinks = document.querySelectorAll('.nav-link');
//     const dropdownItems = document.querySelectorAll('.dropdown-item');

//     // check url and navlink
//     navLinks.forEach(link => {
//         if (currentUrl.includes(link.getAttribute('href'))) {
//             link.classList.add('active');
//         }
//     });

//     // check dropdown item
//     dropdownItems.forEach(item => {
//         if (currentUrl.includes(item.getAttribute('href'))) {
//             item.classList.add('active');
//             const parentDropdown = item.closest('.dropdown'); // get dropdown parent
//             if (parentDropdown) {
//                 const parentLink = parentDropdown.querySelector('.nav-link'); // find nav-link parent 
//                 if (parentLink) {
//                     parentLink.classList.add('active');
//                 }
//             }
//         }
//     });
// });