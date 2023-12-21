// Optimize website

// Auto add image size width that fits with the div class
const divClass = document.querySelector('.div-class');
const image = document.createElement('img');
image.src = 'image.jpg';
image.onload = function() {
  const width = image.width;
  divClass.style.width = `${width}px`;
};

// Minimize payload size and number of requests
// Combine and minify CSS and JavaScript files
// Use CSS sprites for multiple small images

// Set appropriate data-src attributes for the lazy images and add CSS class 'lazy'
const lazyImages = document.querySelectorAll('img.lazy');
lazyImages.forEach((lazyImage) => {
  const imageSrc = lazyImage.getAttribute('src');
  const imageExtension = imageSrc.substr(imageSrc.lastIndexOf('.') + 1).toLowerCase();
  const supportedFormats = ['png', 'jpg', 'jpeg'];

  if (supportedFormats.includes(imageExtension)) {
    const webpImageSrc = imageSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    lazyImage.dataset.src = webpImageSrc;
    lazyImage.classList.add('lazy');
  } else {
    lazyImage.dataset.src = imageSrc;
    lazyImage.classList.add('lazy');
  }
});

// Lazy load non-critical assets
const lazyLoadImages = () => {
  const lazyImages = document.querySelectorAll('.lazy');
  lazyImages.forEach((lazyImage) => {
    if (lazyImage.offsetTop < window.innerHeight + window.pageYOffset) {
      const imageSrc = lazyImage.dataset.src;
      const imageExtension = imageSrc.substr(imageSrc.lastIndexOf('.') + 1).toLowerCase();
      const supportedFormats = ['png', 'jpg', 'jpeg'];

      if (supportedFormats.includes(imageExtension)) {
        const webpImageSrc = imageSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        lazyImage.src = webpImageSrc;
        lazyImage.classList.add('webp');
      } else {
        lazyImage.src = imageSrc;
      }

      lazyImage.classList.remove('lazy');
    }
  });
};

window.addEventListener('scroll', lazyLoadImages);
window.addEventListener('resize', lazyLoadImages);
window.addEventListener('orientationchange', lazyLoadImages);

// Handle changes efficiently
// Use event delegation for dynamic elements

// Use modern browser features
// Utilize Intersection Observer API for lazy loading

// Example of handling changes efficiently using event delegation
document.addEventListener('click', function(event) {
  if (event.target.matches('.dynamic-element')) {
    // Handle dynamic element click
  }
});

// Auto add alt and title from page title to the image
const pageTitle = document.title;
const lazyImages = document.querySelectorAll('.lazy');
lazyImages.forEach((lazyImage) => {
  lazyImage.alt = pageTitle;
  lazyImage.title = pageTitle;
});
