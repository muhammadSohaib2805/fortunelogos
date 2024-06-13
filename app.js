
// Header carousel
            $(".banner-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                items: 5,
                dots: false,
                loop: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 5
                    }
                }
            });
            $(".img-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                items: 5,
                dots: false,
                loop: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 5
                    }
                }
            });

            $("#banner-dots-link").click(function() {
                $('html, body').animate({
                    scrollTop: $("#portfolio").offset().top - 20
                }, 1000);
            });

            // script.js

            // script.js

            // Generate a random color
            // script.js

            // Generate a random color
            // function getRandomColor() {
            //     const letters = '0123456789ABCDEF';
            //     let color = '#';
            //     for (let i = 0; i < 6; i++) {
            //         color += letters[Math.floor(Math.random() * 16)];
            //     }
            //     return color;
            // }

            // let lastScrollTrigger = 0; // Track the last scroll position where color changed

            // // Change the background color at specific height intervals
            // window.addEventListener('scroll', () => {
            //     const scrollPosition = window.scrollY;
            //     const windowHeight = window.innerHeight; // Height of the viewport
            //     const foldHeight = windowHeight * 1.1; // Define the fold height (80% of viewport height)

            //     // Calculate the scroll trigger based on fold height
            //     const scrollTrigger = Math.floor(scrollPosition / foldHeight) * foldHeight;

            //     // Change color only if scrollTrigger has changed
            //     if (scrollTrigger !== lastScrollTrigger) {
            //         document.body.style.backgroundColor = getRandomColor();
            //         lastScrollTrigger = scrollTrigger; // Update the last trigger point
            //     }
            // });


           // Define an array of objects with specific heights and corresponding colors
const colorIntervals = [
    { height: 0, color: '#3F1084' },
    { height: 900, color: '#AE2883' },
    { height: 1500, color: '#FF5B51' },
    { height: 4000, color: '#FF5B51' },
    { height: 4200, color: '#6FAC29' },
    { height: 5000, color: '#00CE7D' },
    
];

let lastScrollTrigger = 0; // Track the last scroll position where color changed

// Change the background color at specific height intervals
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Find the color interval corresponding to the current scroll position
    let newColor = null;
    for (let i = colorIntervals.length - 1; i >= 0; i--) {
        if (scrollPosition >= colorIntervals[i].height) {
            newColor = colorIntervals[i].color;
            break;
        }
    }

    // Change color only if a new color is found and it's different from the last one
    if (newColor && newColor !== document.body.style.backgroundColor) {
        document.body.style.backgroundColor = newColor;
    }
});
            $(document).ready(function () {
                $(".testimonials-silder").owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
            });




            function openTab(evt, tabName) {
                var i, tabcontent, tablink, tabImages;

                // Get all elements with class="tabcontent" and hide them
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }

                // Get all elements with class="tablink" and remove the class "active"
                tablink = document.getElementsByClassName("tablink");
                for (i = 0; i < tablink.length; i++) {
                    tablink[i].classList.remove("active");
                }

                // Get all images inside the tablink elements and reset their src to inactive
                tabImages = document.querySelectorAll(".tablink img");
                for (i = 0; i < tabImages.length; i++) {
                    tabImages[i].src = tabImages[i].getAttribute("data-inactive");
                }

                // Show the current tab, and add an "active" class to the button that opened the tab
                document.getElementById(tabName).style.display = "block";
                evt.currentTarget.classList.add("active");

                // Change the image of the active tab
                var activeImg = evt.currentTarget.querySelector("img");
                activeImg.src = activeImg.getAttribute("data-active");
            }

            // By default, open the first tab
            document.addEventListener("DOMContentLoaded", function () {
                document.getElementsByClassName('tablink')[0].click(); // Open the first tab by default
            });


            function openTabPricing(evt, tabName1) {
                var i, tabcontent1, tablinks1;

                // Get all elements with class="tabcontent1" and hide them
                tabcontent1 = document.getElementsByClassName("tabcontent1");
                for (i = 0; i < tabcontent1.length; i++) {
                    tabcontent1[i].style.display = "none";
                }

                // Get all elements with class="tablinks1" and remove the class "active"
                tablinks1 = document.getElementsByClassName("tablinks1");
                for (i = 0; i < tablinks1.length; i++) {
                    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
                }

                // Show the current tab, and add an "active" class to the button that opened the tab
                document.getElementById(tabName1).style.display = "block";
                evt.currentTarget.className += " active";
            }

            // By default, open the first tab
            document.addEventListener("DOMContentLoaded", function () {
                document.getElementsByClassName('tablinks1')[0].click(); // Open the 'Website' tab by default
            });

            // Disable the Bootstrap dropdown's default click behavior
document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
});
