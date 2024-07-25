function showSection(section) {
    document.querySelector('.default').classList.remove('active');
    document.querySelector('.fuel').classList.remove('active');
    document.querySelector('.parking').classList.remove('active');
    document.querySelector('.brokenBrake').classList.remove('active');
    document.querySelector('.truck').classList.remove('active');
    document.querySelector('.lane').classList.remove('active');
    document.querySelector('.highway').classList.remove('active');
    document.querySelector('.' + section).classList.add('active');
}

window.addEventListener("wheel", function(e) {
    if (e.deltaY !== 0) {
        document.querySelector('.page5').scrollLeft += e.deltaY;
        e.preventDefault(); // Prevent default vertical scroll behavior
    }
});

