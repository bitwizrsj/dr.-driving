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

    // Animation for moving the car
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

    let typeSplit = new SplitType('[animate]', {
        types: 'lines, words, chars',
        tagName: 'span'
    });

    gsap.from('[animate] .word', {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '[animate]',
            start: 'top center',
            scroller: ".main" // Ensure ScrollTrigger uses the Locomotive Scroll container
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    init();
});