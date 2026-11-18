MY FINANCIAL LIFE V4.1 — PANDUAN PEMBARUAN

ISI PAKET
- index.html: aplikasi versi 4.1
- sw.js: service worker dengan cache baru
- manifest.webmanifest dan icon.svg: dipertahankan dari V4.0 (jangan diganti)

FITUR BARU
- Analisis arus kas, rasio tabungan, kategori pengeluaran terbesar, dan tren 6 bulan
- Anggaran pengeluaran per kategori dan peringatan 80%/terlampaui
- Transfer internal antar rekening (tidak dihitung sebagai pemasukan/pengeluaran)
- Target dana darurat dan tujuan tabungan
- Jadwal tagihan/transaksi rutin (pengingat/jadwal manual, belum otomatis mendebit akun)
- Pencatatan utang, sisa cicilan, dan pembayaran
- Pencarian/filter transaksi
- Ekspor dan pemulihan backup JSON
- PIN PBKDF2 dan opsi biometrik platform jika browser/perangkat mendukung

PENTING TENTANG DATA
- Aplikasi menggunakan localStorage key lama: mfl_v40_data. Data V4.0 yang tersimpan pada origin yang sama akan dimuat dan dimigrasikan dengan menambahkan koleksi baru yang kosong.
- Jangan hapus data situs/browser, jangan uninstall aplikasi, dan jangan ubah domain sebelum backup.
- Sebelum memperbarui, buka V4.0 > Data > Ekspor backup.
- Backup JSON berisi data finansial sensitif. Simpan di lokasi privat; jangan commit ke GitHub.
- PIN adalah pengunci antarmuka lokal, bukan enkripsi database. Pengguna yang dapat mengakses developer tools/penyimpanan browser dapat melewatinya. Biometrik memakai WebAuthn platform authenticator dan bisa tidak tersedia di browser tertentu.
- Jadwal rutin saat ini adalah daftar jadwal manual; aplikasi tidak mengirim notifikasi dan tidak membuat transaksi otomatis.
- Pembayaran utang dicatat sebagai pengeluaran kategori Cicilan dari akun pertama.

CARA UPDATE GITHUB PAGES
1. Pada aplikasi yang terpasang, lakukan Data > Ekspor backup dan simpan file dengan aman.
2. Ekstrak ZIP pembaruan.
3. Di repository henii92/my-financial-life, unggah index.html dan sw.js ke root repository, pilih overwrite.
4. Jangan unggah file backup JSON. Jangan perlu mengganti manifest.webmanifest atau icon.svg.
5. Commit changes dan tunggu GitHub Pages selesai deploy.
6. Tutup aplikasi MyFinance sepenuhnya lalu buka lagi. Bila versi lama masih terlihat, buka situs di Chrome dan refresh; pastikan data situs tidak dihapus.
7. Periksa saldo akun dan transaksi. Jika tidak sesuai, jangan reset data; pulihkan backup melalui menu Data.
