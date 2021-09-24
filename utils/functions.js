export function scrollToPosition(target, offset) {
    const element = document.getElementById(target);
    const headerOffset = offset || 70;
    const elementPosition = element.getBoundingClientRect().top + document.documentElement.scrollTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}