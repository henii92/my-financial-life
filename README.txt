# My Financial Life V4.0 — PWA

## Isi paket
- `index.html`: aplikasi keuangan mobile-first
- `manifest.webmanifest`: metadata instalasi PWA
- `sw.js`: cache aplikasi untuk penggunaan offline setelah kunjungan pertama
- `icon.svg`: ikon aplikasi

## Fitur yang tersedia
- Dashboard: pemasukan, pengeluaran, saldo akun, estimasi kekayaan bersih
- Catat, edit, dan hapus transaksi
- Banyak akun: tunai, bank, e-wallet, dan akun tambahan
- Kategori pemasukan/pengeluaran
- Tujuan tabungan dan progres
- Aset dan kewajiban
- Anggaran pengeluaran bulanan
- Ekspor/impor backup JSON
- Penyimpanan lokal pada browser

## Cara mencoba sekarang
1. Ekstrak ZIP.
2. Buka `index.html` dengan Chrome. Aplikasi bisa langsung dicoba dan menyimpan data di browser/perangkat tersebut.
3. Untuk penggunaan offline, buka pertama kali ketika online melalui alamat hosting HTTPS agar service worker dapat memasang cache.

## Cara memasang sebagai aplikasi PWA
PWA yang benar-benar dapat diinstal membutuhkan alamat HTTPS (atau localhost saat pengembangan).
1. Unggah seluruh isi folder ini ke hosting statis HTTPS (misalnya layanan static hosting).
2. Buka URL tersebut di Chrome Android.
3. Pilih menu ⋮ > `Tambahkan ke layar utama` / `Install app`.

## Batasan penting
- Data disimpan di browser/perangkat ini. Hapus data situs/browser dapat menghapus data aplikasi; ekspor backup secara berkala.
- Belum ada login email/Google, sinkronisasi cloud antarperangkat, PIN/biometrik dalam aplikasi, enkripsi database khusus, atau integrasi bank otomatis.
- Tidak ada transaksi transfer antar-akun otomatis; catat sebagai transaksi sesuai kebutuhan.
- Saldo akun dihitung dari saldo awal dan transaksi yang dicatat. Aset/kewajiban terpisah dari saldo akun.
- Aplikasi ini alat pencatatan, bukan nasihat investasi atau layanan perbankan.
