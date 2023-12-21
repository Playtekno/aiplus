// Mendapatkan semua elemen dengan kelas "card"
const cards = document.querySelectorAll('.card');

// URL yang akan ditambahkan sebelum URL gambar
const urlPrefix = 'https://res.cloudinary.com/practicaldev/image/fetch/s--BlMrNwoZ--/c_limit,f_webp,fl_progressive,q_80,h_200,w_348/';

// Loop melalui setiap elemen dengan kelas "card"
cards.forEach((card) => {
  // Mendapatkan semua elemen gambar di dalam elemen card
  const images = card.querySelectorAll('img');

  // Loop melalui setiap elemen gambar
  images.forEach((image) => {
    // Mendapatkan URL gambar asli
    const imageUrl = image.getAttribute('src');

    // Mengecek apakah URL gambar berformat .avif
    const isAvif = imageUrl.endsWith('?format=.webp');

    // Mengubah format gambar menjadi .avif jika belum .avif
    const formattedUrl = isAvif ? imageUrl : imageUrl.replace(/\.[^/.]+$/, '?format=.webp');

    // Menggabungkan URL prefix dengan URL gambar
    const modifiedUrl = urlPrefix + formattedUrl;

    // Mengatur URL gambar yang telah dimodifikasi
    image.setAttribute('src', modifiedUrl);
  });
});
