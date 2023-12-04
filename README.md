# API_Layanan_Akademik
Pembuatan API Layanan Akademik untuk Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta demi memenuhi keperluan Projek UAS mata kuliah Pembangunan Perangkat Lunak Berorientasi Service tahun 2023

## Framework

Pada projek ini, kami membuat sistem REST API dengan menggunakan PostgreSQL untuk database server dan untuk frameworknya, kami mengimplementasikannya dengan Javascript sebagai bahasa pemrograman utama menggunakan Node Package Manager

## Swagger generated server

Server yang kami gunakan dibuat dengan menggunakan [swagger-codegen](https://github.com/swagger-api/swagger-codegen).  Dengan menggunakan spesifikasi dari [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) , server kami digenerasikan secara otomatis.

## Setup

#### 1. Database

Untuk setup database, dapat diunduh terlebih dahulu untuk PostgreSQL dan DBeaver sesuai dengan link yang telah disediakan. PostgreSQL kami gunakan sebagai server database, sementara DBeaver digunakan sebagai Database Management Tools. Setelah diunduh, perlu diimport terlebih dahulu file yang terdapat di direktori database setelah server database PostgreSQL dijalankan.

[DBeaver](https://dbeaver.io/download/) | [PostgreSQL Server](https://www.postgresql.org/download/)

#### 2. Node.js

Install seluruh package yang ada pada package.json dengan perintah seperti berikut:

```
npm install
```

#### 3. Menjalankan server

Untuk menjalankan server, dapat digunakan perintah berikut:

```
npm start
```

Untuk melihat antarmuka Swagger UI, dapat menggunakan link berikut:

```
http://localhost:8000/docs 
```
