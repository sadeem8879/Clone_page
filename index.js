// setInterval(() => {
//     var carousel = new bootstrap.Carousel(document.getElementById('cardCarousel'));
//     carousel.next();
//   }, 2000);
// const carousel = document.getElementById('cardCarousel');
// const bootstrapCarousel = new bootstrap.Carousel(carousel, {
//   interval: false,
// });

// const nextButton = document.querySelector('.carousel-control-next');
// const prevButton = document.querySelector('.carousel-control-prev');

// nextButton.addEventListener('click', () => {
//   bootstrapCarousel.next();
// });

// prevButton.addEventListener('click', () => {
//   bootstrapCarousel.prev();
// });

// setInterval(() => {
//   if (bootstrapCarousel._activeElement === document.querySelector('.carousel-item.active')) {
//     bootstrapCarousel.next();
//   }
// }, 2000);
// const carousel = document.getElementById('cardCarousel');
// const bootstrapCarousel = new bootstrap.Carousel(carousel, {
//   interval: false, // Prevent automatic sliding
// });

// // Add event listeners for the controls
// const nextButton = document.querySelector('.carousel-control-next');
// const prevButton = document.querySelector('.carousel-control-prev');

// nextButton.addEventListener('click', () => {
//   bootstrapCarousel.next();
// });

// prevButton.addEventListener('click', () => {
//   bootstrapCarousel.prev();
// });

// Optional: Automatically slide every 2 seconds
// setInterval(() => {
//   bootstrapCarousel.next();
// }, 2000);
// var myCarousel = document.querySelector('#cardCarousel');
// var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 2000, // change to desired interval
//     wrap: true
// });
// const carouselElement = document.getElementById('cardCarousel');
// const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
//     interval: false, // Prevent automatic sliding
// });

// // Add event listeners for the controls
// const nextButton = document.querySelector('.carousel-control-next');
// const prevButton = document.querySelector('.carousel-control-prev');

// nextButton.addEventListener('click', () => {
//     bootstrapCarousel.next();
// });

// prevButton.addEventListener('click', () => {
//     bootstrapCarousel.prev();
// });

// // Optional: Automatically slide every 2 seconds
// setInterval(() => {
//     bootstrapCarousel.next();
// }, 2000);
// const carouselElement = document.getElementById('cardCarousel');
// const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
//     interval: false, // Prevent automatic sliding
// });

// // Add event listeners for the controls
// const nextButton = document.querySelector('.carousel-control-next');
// const prevButton = document.querySelector('.carousel-control-prev');

// nextButton.addEventListener('click', () => {
//     bootstrapCarousel.next();
// });

// prevButton.addEventListener('click', () => {
//     bootstrapCarousel.prev();
// });

// // Automatically slide every 2 seconds
// setInterval(() => {
//     bootstrapCarousel.next();
// }, 2000);
// const carouselElement = document.getElementById('cardCarousel');
//     const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
//         interval: false, // Prevent automatic sliding
//     });

//     // Automatically scroll right every 4 seconds, then back to show cards 1-4
//     setInterval(() => {
//         bootstrapCarousel.next(); // Show card 5
//         setTimeout(() => {
//             bootstrapCarousel.prev(); // Return to show cards 1-4
//         }, 2000); // Show card 5 for 2 seconds
//     }, 4000); // Total time interval (4 seconds)
// const carouselElement = document.getElementById('cardCarousel');
// const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
//     interval: false, // Prevent automatic sliding
// });

// // Function to automatically scroll to the next item
// setInterval(() => {
//     bootstrapCarousel.next(); // Scroll to the next card
//     setTimeout(() => {
//         bootstrapCarousel.to(0); // Return to the initial 4 cards after 2 seconds
//     }, 2000); // Duration to show the last card
// }, 4000); // Total interval for scrolling
// const carouselElement = document.getElementById('serviceCarousel');
// const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
//     interval: false, // Prevent automatic sliding
// });

// // Automatically scroll every 4 seconds
// setInterval(() => {
//     bootstrapCarousel.next();
// }, 4000);
// const carouselElement = document.getElementById('serviceCarousel');
//     const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
//         interval: false, // Prevent automatic sliding
//     });

//     // Automatically scroll every 4 seconds
//     setInterval(() => {
//         bootstrapCarousel.next();
//     }, 4000);
document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.getElementById('serviceCarousel');
    const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
        interval: false, // Prevent automatic sliding
    });

    // Automatically scroll every 4 seconds
    setInterval(() => {
        bootstrapCarousel.next();
    }, 4000);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
