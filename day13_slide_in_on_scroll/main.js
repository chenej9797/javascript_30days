
const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    const slideBottom = window.scrollY + window.innerHeight;
    const imageBottom = sliderImage.offsetTop + sliderImage.height /2;
    const imageMiddle = sliderImage.offsetTop + sliderImage.height /2;

    const isHalfShown = slideBottom > imageMiddle;
    const isNotScrollPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrollPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
    console.log(slideBottom+', '+imageBottom);
  });
}

window.addEventListener('scroll', debounce(checkSlide));

