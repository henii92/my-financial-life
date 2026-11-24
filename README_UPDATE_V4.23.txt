MY FINANCIAL LIFE V4.23 — MULTI-ASSET GOAL TRACKING

FITUR
1. Profil aset per Goal: deposito, tabungan, nilai pasar, atau manual.
2. Memisahkan total modal/setoran (ledger kontribusi Goal) dari nilai aset terkini.
3. Snapshot nilai: saldo/nilai saat ini, akumulasi bunga/bonus, pajak, biaya, penalti pencairan, dan estimasi nilai pencairan bersih.
4. Riwayat snapshot dan rekonsiliasi terhadap nilai menurut lembaga; selisih baru diterapkan setelah konfirmasi.
5. Impor CSV sederhana untuk mengambil saldo dari kolom saldo/balance/nilai/currentvalue/nilai_saldo pada baris terakhir.
6. Dana Darurat baru diberi profil awal Deposito Bank Jago. Goal dengan nama mengandung “Umroh” diberi profil awal Deposito BPR. Data ini dapat diubah.
7. Backup JSON tetap membawa seluruh data Goal, profil aset, snapshot, dan rekonsiliasi.
8. Service worker cache dinaikkan ke V4.23.

BATASAN PENTING
- Tidak ada koneksi langsung ke rekening Bank Jago atau BPR. Pembaruan hybrid berarti input manual + impor CSV yang disediakan pengguna.
- Format CSV lembaga dapat berbeda-beda. Impor ini membaca kolom saldo yang dikenali pada baris terakhir; periksa kembali hasilnya.
- Nilai pencairan bersih dihitung sebagai nilai saat ini dikurangi pajak, biaya, dan penalti yang diinput. Pastikan nilai yang dimasukkan konsisten dan tidak mengurangi komponen dua kali.
- Goal yang ditautkan ke akun adalah rincian alokasi, bukan aset tambahan dalam net worth. Jangan memasukkan saldo deposito yang sama sebagai aset lain secara terpisah.
- Perubahan ini mempertahankan KEY localStorage mfl_v40_data dan key keamanan yang ada. Jangan hapus data situs.

CARA UPDATE
1. Ekspor backup JSON dari aplikasi V4.22 terlebih dahulu.
2. Ekstrak ZIP ini.
3. Upload seluruh isi folder ke root repository GitHub dan overwrite file lama.
4. Commit/push, tunggu GitHub Actions selesai.
5. Buka URL Pages di Chrome. Jika PWA masih menampilkan versi lama, tutup lalu buka kembali setelah service worker baru aktif.

VALIDASI
- JavaScript syntax check: lulus.
- Paket ZIP: dibuat dari file aplikasi V4.22 yang diberikan.
- Belum diuji pada Android/Chrome runtime dan belum diverifikasi dengan CSV asli Bank Jago/BPR.
