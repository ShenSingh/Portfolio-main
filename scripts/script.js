document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.slide');

    if (slides.length > 1) {
        slides[1].classList.add('active');
    }

    for (let slide of slides) {
        slide.addEventListener('click', () => {
            allSliderClassRemove('active');
            slide.classList.add('active');
        });
    }

    function allSliderClassRemove(className) {
        slides.forEach(slide => {
            slide.classList.remove(className);
        });
    }
});

const tiltSettings = {
    max: 100,
    perspective: 1500,
    scale: 1.2
};

const cards = document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => mouseMove(e, card));
    card.addEventListener("mouseleave", (e) => mouseLeave(e, card));
});

function mouseMove(event, card) {
    const cardWidth = card.getBoundingClientRect().width;
    const cardHeight = card.getBoundingClientRect().height;
    const centerX = card.getBoundingClientRect().left + cardWidth / 2;
    const centerY = card.getBoundingClientRect().top + cardHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateX = (mouseY / cardHeight / 2) * tiltSettings.max;
    const rotateY = (mouseX / cardWidth / 2) * tiltSettings.max * -1;

    console.log(centerX, centerY);

    card.style.transform = `perspective(${tiltSettings.perspective}px)
                            rotatex(${rotateX}deg)
                            rotatey(${rotateY}deg)
                            scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
}

function mouseLeave(event, card) {
    card.style.transform = "";
}

function toggleMenu() {
    const nav = document.querySelector('.navigation');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

