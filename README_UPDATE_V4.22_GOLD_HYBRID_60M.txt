MY FINANCIAL LIFE V4.22 — GOLD INVESTMENT TRACKING (HYBRID 60 MENIT)

Pembaruan dari V4.21:
1. Menambahkan pemeriksaan harga otomatis dengan interval 60 menit selama aplikasi aktif/terbuka. Pemeriksaan juga dilakukan saat aplikasi dibuka, kembali ke tab, atau jendela mendapat fokus jika pemeriksaan terakhir sudah berumur >=60 menit.
2. Tetap menyediakan input harga buyback manual dari Tring sebagai fallback.
3. Menyimpan waktu pemeriksaan otomatis, sumber harga, dan pesan kegagalan. Jika sumber otomatis gagal, harga terakhir yang valid tidak ditimpa.
4. Data harga otomatis hanya diterima jika endpoint mengembalikan JSON dengan buybackPrice (atau sellPrice) numerik > 0.
5. Tidak meminta login, PIN, OTP, atau kredensial Tring. Tidak membaca data akun pribadi.
6. Riwayat pembaruan harga otomatis/manual dicatat dalam riwayat investasi emas. Backup tetap menyertakan data goal karena goldTracking berada di objek goal.
7. Service worker cache dinaikkan ke mfl-v422-gold-hybrid-60m-1.

PENTING — STATUS INTEGRASI PEGADAIAN:
- Pegadaian mengonfirmasi bahwa harga Tabungan Emas dapat dipantau melalui aplikasi Tring dan diperbarui setiap hari. Pegadaian juga menampilkan grafik harga beli/jual pada rentang 7 hari, 1 bulan, 3 bulan, dan 1 tahun.
- Halaman harga publik Pegadaian yang dapat diakses tanpa login tidak mengekspos harga Tabungan Emas sebagai data terstruktur yang bisa saya verifikasi melalui pembacaan halaman. Tidak ditemukan dokumentasi API publik resmi yang menjamin endpoint harga Tabungan Emas.
- Karena itu, Worker yang disertakan mencoba membaca data terstruktur dari halaman publik dan sengaja gagal tertutup jika harga Tabungan Emas tidak dikenali. Worker TIDAK mengarang harga dan mungkin mengembalikan 503 sampai Pegadaian menampilkan data dengan struktur yang dapat dibaca.
- Dengan demikian, fitur pemeriksaan otomatis sudah disiapkan, tetapi belum dapat dijamin berhasil menarik harga Pegadaian sampai endpoint publik yang valid tersedia. Hybrid tetap berfungsi melalui input manual Tring.

AKTIVASI PEMERIKSAAN OTOMATIS (OPSIONAL):
A. Deploy cloudflare-worker-v4.22.js sebagai Cloudflare Worker:
   1. Cloudflare Dashboard > Workers & Pages > Create Worker.
   2. Tempel isi file cloudflare-worker-v4.22.js ke editor Worker.
   3. Deploy dan salin URL HTTPS Worker.
B. Di aplikasi My Financial Life > Goal > goal investasi emas > Set sumber otomatis.
C. Tempel URL Worker. Aplikasi akan memeriksa saat dibuka dan setiap 60 menit saat aplikasi aktif.
D. Tekan Cek harga otomatis untuk tes awal. Jika gagal, aplikasi menampilkan alasan dan harga manual terakhir tetap digunakan.

CATATAN INTERVAL:
- Interval 60 menit bukan berarti harga Pegadaian berubah setiap jam. Pegadaian menyatakan harga Tabungan Emas diperbarui setiap hari. Pemeriksaan berkala hanya memastikan aplikasi mengecek apakah sumber sudah berubah.
- Browser/PWA tidak dapat menjalankan pemeriksaan terjadwal ketika aplikasi benar-benar tertutup/sistem menghentikan proses. Pemeriksaan dilanjutkan ketika aplikasi dibuka/kembali aktif.

ALUR MANUAL (SELALU TERSEDIA):
1. Buka Tring > Emas > lihat menu emas lainnya > periksa harga jual/beli Tabungan Emas.
2. Di goal emas, pilih Input harga manual. Masukkan harga jual kembali/buyback per gram.
3. Nilai estimasi dihitung dari gram x harga buyback.

SUMBER PEGADAIAN:
- https://pegadaian.co.id/harga-emas
- https://pegadaian.co.id/artikel/edukasi/cek-harga-emas-terbaru-dengan-tring-by-pegadaian
- https://pegadaian.co.id/artikel/edukasi/pertanyaan-seputar-tring

PEMERIKSAAN:
- Arsip ZIP diperiksa integritasnya.
- Sintaks JavaScript aplikasi dan Cloudflare Worker diperiksa.
- Belum diuji pada browser Android pengguna, belum dideploy ke akun Cloudflare pengguna, dan belum ada verifikasi bahwa halaman publik Pegadaian memuat data Tabungan Emas terstruktur.

CARA UPDATE:
1. Ekspor backup JSON dari V4.21.
2. Ekstrak ZIP dan unggah seluruh isi ke root repository GitHub, timpa file lama.
3. Commit dan tunggu GitHub Actions selesai.
4. Buka GitHub Pages di Chrome.
5. Jangan hapus data situs atau uninstall PWA.
