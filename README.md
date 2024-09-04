# Hotelify

**Hotelify** adalah aplikasi manajemen pemesanan hotel yang dibangun dengan menggunakan Java Spring Boot di sisi backend dan React di sisi frontend. Aplikasi ini dirancang untuk memberikan pengalaman pemesanan hotel yang efisien dan modern, baik bagi pelanggan maupun administrator hotel.
# ERD
![ERD-hotelify](https://github.com/user-attachments/assets/327577c5-9f05-4cb6-84aa-bb557843b62d)

## Fitur Utama

- **Manajemen Pengguna:**
  - Pelanggan dapat mendaftar, login, dan mengelola profil mereka.
  - Administrator dapat mengelola data pelanggan, kamar, dan pemesanan.

- **Pencarian dan Pemesanan Kamar:**
  - Pengguna dapat mencari kamar berdasarkan berbagai kriteria seperti tanggal check-in, dan type kamar.
  - Pengguna dapat melihat detail kamar, termasuk gambar, deskripsi, price.

- **Manajemen Hotel dan Kamar:**
  - Administrator dapat menambah, mengedit, dan menghapus informasi kamar.
  - Administrator juga dapat mengelola status ketersediaan kamar.

## Teknologi yang Digunakan

- **Backend:** Java Spring Boot
  - **Database:** PostgreSQL
  - **Keamanan:** Spring Security dengan JWT untuk autentikasi dan otorisasi.
  - **Penyimpanan Gambar:** Gambar disimpan di direktori `static` dalam proyek Spring Boot dan diakses melalui URL.

- **Frontend:** React
  - **Styling:** Tailwind CSS & CSS manual untuk tampilan yang responsif dan modern.
  - **Routing:** Menggunakan `react-router-dom` untuk navigasi antara halaman.

