export function handleOnclickScroll(section) {
  var element = document.getElementById(section);
  var headerOffset = 74;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
