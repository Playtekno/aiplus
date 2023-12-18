// Mengompresi dan mengoptimalkan gambar
function compressImages() {
  var images = document.querySelectorAll('img');
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].src.replace(/\.(jpeg|jpg|png|gif)/i, '.webp');
    images[i].setAttribute('loading', 'lazy');
    images[i].setAttribute('decoding', 'async');
  }
}

// Menggabungkan dan mengurangi ukuran file CSS
function combineCSS() {
  var stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  var combinedCSS = '';
  for (var i = 0; i < stylesheets.length; i++) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', stylesheets[i].href, false);
    xhr.send();
    if (xhr.status === 200) {
      combinedCSS += xhr.responseText;
    }
  }
  
  var style = document.createElement('style');
  style.innerHTML = combinedCSS;
  document.head.appendChild(style);
}

// Menggabungkan dan mengurangi ukuran file JavaScript
function combineJS() {
  var scripts = document.querySelectorAll('script[src]');
  var combinedJS = '';
  for (var i = 0; i < scripts.length; i++) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', scripts[i].src, false);
    xhr.send();
    if (xhr.status === 200) {
      combinedJS += xhr.responseText;
    }
  }
  
  var script = document.createElement('script');
  script.innerHTML = combinedJS;
  document.body.appendChild(script);
}

// Memanggil fungsi untuk memperbaiki performa
window.addEventListener('load', function() {
  compressImages();
  combineCSS();
  combineJS();
});
