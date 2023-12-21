// Mendapatkan semua elemen dengan kelas "card"
const cards = document.querySelectorAll('.card');

// Loop melalui setiap elemen dengan kelas "card"
cards.forEach((card) => {
  // Mendapatkan semua elemen gambar di dalam elemen card
  const images = card.querySelectorAll('img');

  // Loop melalui setiap elemen gambar
  images.forEach((image) => {
    // Mendapatkan URL gambar asli
    const imageUrl = image.getAttribute('src');

    // Mendapatkan format gambar
    const imageFormat = imageUrl.substring(imageUrl.lastIndexOf('.') + 1);

    // Menggabungkan URL gambar asli dengan prefix "?format=.avif"
    const modifiedUrl = imageUrl + '?format=.avif';

    // Mengatur URL gambar yang telah dimodifikasi
    image.setAttribute('src', modifiedUrl);
  });
});
