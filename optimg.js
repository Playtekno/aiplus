// Mendapatkan semua elemen dengan kelas "card"
const cards = document.querySelectorAll('.card');

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

    // Menggabungkan URL gambar asli dengan parameter "?v=tanggalbulatahun"
    const modifiedUrl = imageUrl + '?v=' + formattedDate;

    // Mengatur URL gambar yang telah dimodifikasi
    image.setAttribute('src', modifiedUrl);
  });
});
