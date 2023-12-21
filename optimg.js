// Mendapatkan semua elemen dengan kelas "card"
const cards = document.querySelectorAll('.card');

// URL yang akan ditambahkan sebelum URL gambar
const urlPrefix = 'https://res.cloudinary.com/practicaldev/image/fetch/s--BlMrNwoZ--/c_limit,f_avif,fl_progressive,q_80,h_200,w_348/';

// Mendapatkan tanggal, bulan, dan tahun saat ini
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString();

// Format tgl, bln, thn menjadi ddmmyyyy
const formattedDate = day + month + year;

// Loop melalui setiap elemen dengan kelas "card"
cards.forEach((card) => {
  // Mendapatkan semua elemen gambar di dalam elemen card
  const images = card.querySelectorAll('img');

  // Loop melalui setiap elemen gambar
  images.forEach((image) => {
    // Mendapatkan URL gambar asli
    const imageUrl = image.getAttribute('src');

    // Menggabungkan URL prefix dengan URL gambar asli
    const modifiedUrl = urlPrefix + imageUrl + '?v=' + formattedDate;

    // Mengatur URL gambar yang telah dimodifikasi
    image.setAttribute('src', modifiedUrl);
  });
});
