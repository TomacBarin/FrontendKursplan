window.addEventListener('scroll', () => {
  const containers = document.querySelectorAll('.container-fullwidth');
  containers.forEach(container => {
    const speed = 0.08; // justera hur snabbt bakgrunden rör sig
    const offset = window.scrollY * speed;
    container.style.backgroundPositionY = `${-offset}px`;
  });
});
