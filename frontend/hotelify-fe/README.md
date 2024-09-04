# Hotelify

**Hotelify** adalah aplikasi manajemen pemesanan hotel yang dibangun dengan menggunakan Java Spring Boot di sisi backend dan React di sisi frontend. Aplikasi ini dirancang untuk memberikan pengalaman pemesanan hotel yang efisien dan modern, baik bagi pelanggan maupun administrator hotel.

## Fitur Utama

- **Manajemen Pengguna:**
  - Pelanggan dapat mendaftar, login, dan mengelola profil mereka.
  - Administrator dapat mengelola data pelanggan, hotel, kamar, dan pemesanan.

- **Pencarian dan Pemesanan Kamar:**
  - Pengguna dapat mencari kamar berdasarkan berbagai kriteria seperti lokasi, tanggal check-in, harga, dan fasilitas.
  - Pengguna dapat melihat detail kamar, termasuk gambar, deskripsi, dan ulasan sebelum melakukan pemesanan.

- **Manajemen Hotel dan Kamar:**
  - Administrator dapat menambah, mengedit, dan menghapus informasi hotel dan kamar.
  - Administrator juga dapat mengelola status ketersediaan kamar.

- **Proses Pembayaran:**
  - Integrasi dengan sistem pembayaran untuk memproses pemesanan dan pembayaran secara aman.

- **Dashboard Admin:**
  - Menyediakan laporan dan analitik seperti total pendapatan, pemesanan per hotel, dan pendapatan berdasarkan paket.

## Teknologi yang Digunakan

- **Backend:** Java Spring Boot
  - **Database:** PostgreSQL
  - **Keamanan:** Spring Security dengan JWT untuk autentikasi dan otorisasi.
  - **Penyimpanan Gambar:** Gambar disimpan di direktori `static` dalam proyek Spring Boot dan diakses melalui URL.

- **Frontend:** React
  - **Styling:** Tailwind CSS untuk tampilan yang responsif dan modern.
  - **Routing:** Menggunakan `react-router-dom` untuk navigasi antara halaman.

- **Swagger:** Digunakan untuk mendokumentasikan dan menguji API.

