/**
 * #################################################################
 * This file is for initiating some data in the database
 * You can insert some data for testing or initiating
 * #################################################################
 **/

\connect mydb

INSERT INTO mahasiswa (nama_mahasiswa, nim, email, fakultas, jurusan, angkatan) VALUES 
('Agus Setiawan', '1234567890', 'agus.setiawan@gmail.com', 'Teknik Informatika', 'Sistem Informasi', 2022),
('Budi Santoso', '9876543210', 'budi.santoso@gmail.com', 'Ilmu Komputer', 'Sistem Komputer', 2023),
('Citra Lestari', '2345678901', 'citra.lestari@gmail.com', 'Ilmu Komputer', 'Sistem Informasi', 2022);

INSERT INTO fasilitas (nama_fasilitas, deskripsi_fasilitas, kapasitas_fasilitas, status_fasilitas) VALUES 
('Ruangan Lab Komputer', 'Ruangan yang dilengkapi dengan komputer dan perangkat pendukungnya', 20, 'Tersedia'),
('Ruangan Perpustakaan', 'Ruangan yang menyimpan koleksi buku dan jurnal ilmiah', 100, 'Tersedia'),
('Ruangan Auditorium', 'Ruangan yang digunakan untuk acara-acara besar', 500, 'Tersedia');

INSERT INTO peminjaman_fasilitas (id_mahasiswa, id_fasilitas, tanggal_peminjaman, tanggal_pengembalian, status_peminjaman) VALUES 
(1, 1, '2023-10-25', '2023-10-28', 'Pending');

INSERT INTO dosen (nama_dosen, nidn, email, fakultas) VALUES 
('Dr. Ahmad Junaidi', '1234567890', 'ahmad.junaidi@gmail.com', 'Teknik Informatika'),
('Prof. Dr. Budi Santoso', '9876543210', 'budi.santoso@gmail.com', 'Ilmu Komputer'),
('Dr. Ir. Joko Widodo', '3210987654', 'joko.widodo@gmail.com', 'Teknik Sipil');

INSERT INTO skripsi (id_mahasiswa, id_dosen, judul_skripsi, status_skripsi) VALUES 
(1, 2, 'Pengembangan Aplikasi Sistem Informasi Perpustakaan Berbasis Cloud', 'Selesai'),
(2, 1, 'Analisis dan Perancangan Sistem Informasi Akademik Berbasis Web', 'Belum Selesai');

INSERT INTO pengajuan_skripsi (id_skripsi, status_pengajuan) VALUES
(2, 'Pending');