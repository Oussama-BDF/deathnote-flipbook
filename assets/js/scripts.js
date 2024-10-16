let papers = document.getElementsByClassName('paper')
let bookLength = papers.length
let duration = parseFloat(window.getComputedStyle(papers[0]).getPropertyValue('transition-duration')) * 1000;

document.getElementById('turn').addEventListener('click', function() {
    let element = document.querySelectorAll('.paper:not(.fliped)')

    if (element.length > 0) {
        element[element.length-1].classList.add('fliped')
        setTimeout(() => {
            element[element.length-1].style.zIndex = bookLength - element.length + 1;
        }, duration/2);
    }
});

document.getElementById('return').addEventListener('click', function() {
    let element = document.getElementsByClassName('fliped');

    if (element.length > 0) {
        let targetElement = element[0];
        targetElement.classList.remove('fliped');
        setTimeout(() => {
            targetElement.style.zIndex = null;
        }, duration/2);
    }
});