My Financial Life V4.7 — Revisi tampilan ikon dan input nominal

Perubahan:
1. Ikon aplikasi dompet menggunakan artwork dompet yang sama tanpa frame emas kotak tambahan. Pengunci H emas pada dompet tetap dipertahankan.
2. Ikon PIN dan biometrik diperkecil lagi 25% dari ukuran sebelumnya.
3. Ikon mata untuk menyembunyikan/menampilkan estimasi kekayaan bersih dibuat lebih jelas, menggunakan ikon mata dan mata dicoret tanpa bingkai kotak emas.
4. Input nominal transaksi memakai pemisah ribuan titik secara langsung saat mengetik, dengan posisi kursor dijaga.
5. Data lokal tetap memakai key yang sama: mfl_v40_data dan mfl_v41_security.

Catatan: Input nominal transaksi pada formulir transaksi diformat langsung saat mengetik. Sejumlah fungsi lama seperti tambah/ubah tujuan atau akun masih menggunakan kotak prompt bawaan browser, yang tidak mendukung pemformatan langsung saat mengetik.

PENTING: Ekspor backup JSON sebelum update. Ekstrak ZIP dan unggah seluruh isi folder ini ke root repository GitHub (bukan folder pembungkus), timpa file lama, lalu commit. Tunggu GitHub Actions selesai. Jangan hapus data browser atau uninstall aplikasi sebelum memastikan backup aman.
