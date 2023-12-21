// Mendapatkan semua elemen dengan kelas "card"
const cards = document.querySelectorAll('.card');

// URL yang akan ditambahkan sebelum URL gambar asli
const urlPrefix = 'https://res.cloudinary.com/practicaldev/image/fetch/s--BlMrNwoZ--/c_limit,f_avif,fl_progressive,q_80,h_200,w_348/';

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

    // Menggabungkan URL prefix dengan URL gambar asli
    const modifiedUrl = urlPrefix + imageUrl + '?format=.avif';

    // Mengatur URL gambar yang telah dimodifikasi
    image.setAttribute('src', modifiedUrl);
  });
});
