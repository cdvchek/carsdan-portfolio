// ========================================================
// Scroll Animations
// ========================================================

const animatedElements =
    document.querySelectorAll(".scroll-animation");


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("show");

            // Animate each element only once.
            observer.unobserve(entry.target);
        });

    },
    {
        threshold: 0.15,

        // Begin the animation slightly before the element
        // gets deep into the viewport.
        rootMargin: "0px 0px -40px 0px"
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


// ========================================================
// Header Navigation
// ========================================================

// Add/remove a subtle class when the page has been scrolled.
// This gives us room to add additional header effects later
// without needing another scroll listener.

const header = document.querySelector("header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    },
    {
        passive: true
    }
);