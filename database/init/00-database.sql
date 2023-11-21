/**
 * ################################################################# 
 * This file is for initiating your database in container 
 * You can put your schema, function definition, permission grant, 
 * type definition, trggier, Row level security here
 * #################################################################
 **/

\connect mydb

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

CREATE TABLE fasilitas (
    id_fasilitas INT NOT NULL AUTO_INCREMENT,
    nama_fasilitas VARCHAR(255) NOT NULL,
    deskripsi_fasilitas VARCHAR(255) NOT NULL,
    kapasitas_fasilitas INT NOT NULL,
    status_fasilitas VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_fasilitas)
);

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

CREATE TABLE dosen (
    id_dosen INT NOT NULL AUTO_INCREMENT,
    nama_dosen VARCHAR(255) NOT NULL,
    nidn VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fakultas VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_dosen)
);

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

CREATE TABLE pengajuan_skripsi (
    id_pengajuan INT NOT NULL AUTO_INCREMENT,
    id_skripsi INT NOT NULL,
    status_pengajuan VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_pengajuan),
    FOREIGN KEY (id_skripsi) REFERENCES skripsi (id_skripsi)
);