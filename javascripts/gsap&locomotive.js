function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector(".main").style.transform
            ? "transform"
            : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Animation for moving the car horizontally
    gsap.to("#car1", {
        x: "100vw",
        duration: 8,
        repeat: -1,
        repeatDelay: 1,
    });
    gsap.to("#car2", {
        x: -window.innerWidth,
        duration: 6,
        repeat: -1,
        repeatDelay: 1,
    });

    // Timeline for the default section
    gsap.timeline({
        scrollTrigger: {
            trigger: ".default",
            scroller: ".main",
            start: "top center",
            toggleActions: "play none none reverse"
        }
    })
    .fromTo(".default", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    .fromTo(".default .text h2", { x: -50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power2.out" });

    // Timeline for the fuel section
    gsap.timeline({
        scrollTrigger: {
            trigger: ".fuel",
            scroller: ".main",
            start: "top center",
            toggleActions: "play none none reverse"
        }
    })
    .fromTo(".fuel", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    .fromTo(".fuel .text h2", { x: -50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power2.out" });

    // Timeline for the parking section
    gsap.timeline({
        scrollTrigger: {
            trigger: ".parking",
            scroller: ".main",
            start: "top center",
            toggleActions: "play none none reverse"
        }
    })
    .fromTo(".parking", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    .fromTo(".parking .text h2", { x: -50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power2.out" });

    // Animation timelines for text in .page2
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start: "top top-50%",
            scrub: 3,
        }
    });

    tl1.fromTo(".page2 #line1", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
       .fromTo(".page2 #line2", { x: -50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power2.out" })
       .fromTo(".page2 #line3", { x: -50, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power2.out" });

    // Car movement with scroll, including U-turn on scroll up
    let lastScrollTop = 0;

    ScrollTrigger.create({
        trigger: ".road2",
        scroller: ".main",
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => {
            let currentScrollTop = self.scroll();

            // Check if scrolling up
            if (currentScrollTop < lastScrollTop) {
                gsap.to("#car3", {
                    y: self.progress * 180 + "vh", // Adjust as needed
                    x: "-45px",
                    rotate: 270,
                    ease: "none",
                });
            } else {
                gsap.to("#car3", {
                    y: self.progress * 180 + "vh", // Adjust as needed
                    x: "0px",
                    rotate: 90,
                    ease: "none",
                });
            }

            lastScrollTop = currentScrollTop;
        },
        scrub: true,
    });
}

// Add event listener for DOMContentLoaded to initialize GSAP animations
document.addEventListener("DOMContentLoaded", function() {
    init();
});
