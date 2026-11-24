MY FINANCIAL LIFE V4.21 — GOLD INVESTMENT TRACKING

Fokus pembaruan:
1. Menambahkan pelacakan Tabungan Emas Pegadaian (Tring) langsung pada goal yang dipilih melalui tombol “Aktifkan tracking emas”.
2. Memisahkan modal pembelian, kepemilikan gram, harga buyback per gram, estimasi nilai saat ini, serta keuntungan/kerugian belum direalisasi.
3. Mendukung dua metode yang diminta:
   - Pencatatan transaksi pembelian dan penjualan emas satu per satu.
   - Sinkronisasi/snapshot saldo gram terbaru dari Tring beserta koreksi total modal bila diperlukan.
4. Riwayat emas menyimpan pembelian, penjualan, sinkronisasi saldo, dan pembaruan harga.
5. Estimasi nilai dihitung dari gram x harga buyback per gram. Harga buyback harus dimasukkan dari Tring/Pegadaian.
6. Menyediakan tautan ke halaman harga emas resmi Pegadaian.
7. Data goldTracking tersimpan di objek goal sehingga ikut dalam backup/restore yang sudah ada. Data goal lama tidak dihapus atau diubah.
8. Service worker cache dinaikkan ke mfl-v421-gold-tracking-1.

PENTING TENTANG HARGA:
- V4.21 belum mengambil harga otomatis dari API Tring/Pegadaian. Tidak ditemukan dokumentasi API publik resmi yang dapat dipakai dengan aman dan stabil untuk sinkronisasi langsung.
- Karena itu, pengguna memasukkan harga buyback per gram secara manual dari Tring atau kanal resmi Pegadaian. Aplikasi menampilkan waktu pembaruan agar harga yang sudah lama dapat dikenali.
- Estimasi bukan kuotasi jual final. Harga dan hasil pencairan aktual harus dikonfirmasi di Tring ketika transaksi dilakukan.
- Halaman harga resmi: https://pegadaian.co.id/harga-emas

ALUR YANG DISARANKAN:
A. Aktifkan tracking pada goal Investasi Emas.
B. Untuk catatan historis, input transaksi pembelian (gram dan rupiah) satu per satu.
C. Sesekali pilih “Sinkron gram Tring” dan masukkan saldo gram aktual dari Tring. Masukkan total modal kumulatif bila ingin merekonsiliasi modal.
D. Perbarui harga buyback per gram setelah mengecek Tring/Pegadaian.
E. Catat penjualan melalui tombol “Jual emas” menggunakan gram terjual dan hasil penjualan bersih.

CATATAN AKUNTANSI:
- Pelacakan emas merupakan catatan aset investasi. Tombol pembelian/penjualan di modul ini tidak membuat transaksi kas/transfer pada akun secara otomatis agar tidak menimbulkan pencatatan ganda.
- Jika ingin saldo akun bank ikut berubah, catat pembayaran/pencairannya secara terpisah pada menu transaksi/transfer.
- Ketika memakai sinkronisasi gram, total modal kumulatif dapat disesuaikan secara manual. Jangan menginput pembelian yang sama berulang kali setelah sinkronisasi tanpa memeriksa riwayat.

PEMERIKSAAN:
- Arsip ZIP dan sintaks JavaScript diperiksa.
- Belum diuji langsung di Chrome Android atau dengan akun Tring pengguna.
