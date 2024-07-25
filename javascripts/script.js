


function showSection(section) {
    document.querySelector('.default').classList.remove('active');
    document.querySelector('.fuel').classList.remove('active');
    document.querySelector('.parking').classList.remove('active');
    document.querySelector('.' + section).classList.add('active');
}