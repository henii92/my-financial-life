MY FINANCIAL LIFE V4.15 — FULL ENGLISH + UNIVERSAL AMOUNT PARSING + SVG

Perubahan:
1. icon.svg dibuat ulang dengan gambar dompet transparan dari login-wallet-transparent.png, bukan gambar ikon aplikasi yang memiliki latar/frame.
2. Kamus English diperluas untuk navigasi, judul menu, ringkasan, status kosong, label, tombol, prompt, alert, dan konfirmasi utama.
3. Semua prompt nominal yang sebelumnya memakai Number(prompt(...)) diubah agar dapat membaca nominal dengan titik pemisah ribuan. Nilai awal prompt juga ditampilkan dengan pemisah ribuan jika relevan.
4. Input nominal form transaksi tetap otomatis menambahkan titik pemisah ribuan ketika diketik.
Catatan: input nominal yang menggunakan prompt bawaan browser menerima format bertitik dan diproses dengan benar, tetapi dialog prompt bawaan browser tidak mendukung pemformatan langsung per ketukan. Form transaksi memiliki pemformatan langsung saat mengetik.
5. Cache service worker diperbarui.

Cara update:
- Ekspor backup JSON terlebih dahulu.
- Ekstrak ZIP dan unggah seluruh isi folder ke root repository GitHub, timpa file lama.
- Commit dan tunggu GitHub Actions selesai.
- Tutup aplikasi sepenuhnya lalu buka ulang.
Jangan hapus data browser atau uninstall aplikasi.
