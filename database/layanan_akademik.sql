CREATE TABLE mahasiswa (
    id_mahasiswa INT NOT NULL AUTO_INCREMENT,
    nama_mahasiswa VARCHAR(255) NOT NULL,
    nim VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fakultas VARCHAR(255) NOT NULL,
    jurusan VARCHAR(255) NOT NULL,
    angkatan INT NOT NULL,
    PRIMARY KEY (id_mahasiswa)
);

INSERT INTO mahasiswa (nama_mahasiswa, nim, email, fakultas, jurusan, angkatan) VALUES 
('Agus Setiawan', '1234567890', 'agus.setiawan@gmail.com', 'Teknik Informatika', 'Sistem Informasi', 2022),
('Budi Santoso', '9876543210', 'budi.santoso@gmail.com', 'Ilmu Komputer', 'Sistem Komputer', 2023),
('Citra Lestari', '2345678901', 'citra.lestari@gmail.com', 'Ilmu Komputer', 'Sistem Informasi', 2022);

CREATE TABLE fasilitas (
    id_fasilitas INT NOT NULL AUTO_INCREMENT,
    nama_fasilitas VARCHAR(255) NOT NULL,
    deskripsi_fasilitas VARCHAR(255) NOT NULL,
    kapasitas_fasilitas INT NOT NULL,
    status_fasilitas VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_fasilitas)
);

INSERT INTO fasilitas (nama_fasilitas, deskripsi_fasilitas, kapasitas_fasilitas, status_fasilitas) VALUES 
('Ruangan Lab Komputer', 'Ruangan yang dilengkapi dengan komputer dan perangkat pendukungnya', 20, 'Tersedia'),
('Ruangan Perpustakaan', 'Ruangan yang menyimpan koleksi buku dan jurnal ilmiah', 100, 'Tersedia'),
('Ruangan Auditorium', 'Ruangan yang digunakan untuk acara-acara besar', 500, 'Tersedia');

CREATE TABLE peminjaman_fasilitas (
    id_peminjaman INT NOT NULL AUTO_INCREMENT,
    id_mahasiswa INT NOT NULL,
    id_fasilitas INT NOT NULL,
    tanggal_peminjaman DATE NOT NULL,
    tanggal_pengembalian DATE NOT NULL,
    status_peminjaman VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_peminjaman),
    FOREIGN KEY (id_mahasiswa) REFERENCES mahasiswa (id_mahasiswa),
    FOREIGN KEY (id_fasilitas) REFERENCES fasilitas (id_fasilitas)
);

INSERT INTO peminjaman_fasilitas (id_mahasiswa, id_fasilitas, tanggal_peminjaman, tanggal_pengembalian, status_peminjaman) VALUES 
(1, 1, '2023-10-25', '2023-10-28', 'Pending');

CREATE TABLE dosen (
    id_dosen INT NOT NULL AUTO_INCREMENT,
    nama_dosen VARCHAR(255) NOT NULL,
    nidn VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fakultas VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_dosen)
);

INSERT INTO dosen (nama_dosen, nidn, email, fakultas) VALUES 
('Dr. Ahmad Junaidi', '1234567890', 'ahmad.junaidi@gmail.com', 'Teknik Informatika'),
('Prof. Dr. Budi Santoso', '9876543210', 'budi.santoso@gmail.com', 'Ilmu Komputer'),
('Dr. Ir. Joko Widodo', '3210987654', 'joko.widodo@gmail.com', 'Teknik Sipil');

CREATE TABLE skripsi (
    id_skripsi INT NOT NULL AUTO_INCREMENT,
    id_mahasiswa INT NOT NULL,
    id_dosen INT NOT NULL,
    judul_skripsi VARCHAR(255) NOT NULL,
    status_skripsi VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_skripsi),
    FOREIGN KEY (id_mahasiswa) REFERENCES mahasiswa (id_mahasiswa),
    FOREIGN KEY (id_dosen) REFERENCES dosen (id_dosen)
);

INSERT INTO skripsi (id_mahasiswa, id_dosen, judul_skripsi, status_skripsi) VALUES 
(1, 2, 'Pengembangan Aplikasi Sistem Informasi Perpustakaan Berbasis Cloud', 'Selesai'),
(2, 1, 'Analisis dan Perancangan Sistem Informasi Akademik Berbasis Web', 'Belum Selesai');

CREATE TABLE pengajuan_skripsi (
    id_pengajuan INT NOT NULL AUTO_INCREMENT,
    id_skripsi INT NOT NULL,
    status_pengajuan VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_pengajuan),
    FOREIGN KEY (id_skripsi) REFERENCES skripsi (id_skripsi)
);

INSERT INTO pengajuan_skripsi (id_skripsi, status_pengajuan) VALUES
(3, 'Pending');
