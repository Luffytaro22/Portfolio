// Function to check if the element is in the window view.
const isElementInViewport = (element) => {
  if (!element) return;
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

export default isElementInViewport;
