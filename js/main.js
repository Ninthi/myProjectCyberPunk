const container = document.querySelector('.main__image-map');
const image = container.querySelector('img');

const zoom = 2;
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();


    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const containerWidth = rect.width;
    const containerHeight = rect.height;


    const scaledWidth = containerWidth * zoom;
    const scaledHeight = containerHeight * zoom;

    const maxMoveX = scaledWidth - containerWidth;
    const maxMoveY = scaledHeight - containerHeight;
    // перемещение карты мышкой
    const xPercent = mouseX / containerWidth;
    const yPercent = mouseY / containerHeight;
    // двигается за мышкой 
    const moveX = maxMoveX * xPercent;
    const moveY = maxMoveY * yPercent;

    image.style.transform = `scale(${zoom}) translate3d(${-moveX}px, ${-moveY}px, 0)`;
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1) translate3d(0, 0, 0)';
});
