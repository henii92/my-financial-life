MY FINANCIAL LIFE V4.20 — GOAL & ACCOUNT INTEGRATION

Pembaruan utama:
1. Modul “Alokasi dana & tujuan” dan “Riwayat alokasi dana” di menu Planning dihapus. Planning kembali fokus pada anggaran kategori, anggaran bulanan, jadwal, utang, dan aset/kewajiban.
2. Menu Goal/Tujuan menjadi pusat pencatatan tabungan. Saat membuat goal, pengguna memilih akun tempat dana disimpan.
3. Saat menambah tabungan, pengguna memilih akun untuk pencatatan setoran. Riwayat menyimpan nama goal, nominal, tanggal/waktu, akun, dan catatan.
4. Saldo tabungan goal bertambah dan riwayat tercatat. Saldo akun tidak dikurangi lagi, karena setoran ini diperlakukan sebagai penandaan/alokasi atas uang yang sudah tercatat di akun. Ini mencegah saldo/net worth terhitung ganda.
5. Goal lama dari V4.19 dipertahankan. Jika belum punya akun, tampil sebagai “Belum dihubungkan” dan dapat dihubungkan melalui tombol Ubah. Jika ada saldo tersimpan tetapi belum punya riwayat, dibuat satu catatan saldo awal migrasi.
6. Backup/restore kini menyertakan goalHistory. Data funds/allocationHistory lama tidak lagi digunakan oleh antarmuka V4.20.
7. Service worker cache dinaikkan ke mfl-v420-goal-account-1 agar browser mengambil versi baru.

Catatan pencatatan:
- Pilih akun yang benar-benar menyimpan uang goal. Jika uang dipindahkan dari satu rekening ke rekening lain, catat juga melalui menu Transfer antar rekening. Riwayat goal hanya menandai kepemilikan/alokasi tabungan dan tidak menggantikan transfer bank.
- Saat ini riwayat goal mencatat setoran/penambahan. Fitur penarikan/penggunaan tabungan per goal dapat ditambahkan berikutnya dengan alur yang menjaga saldo akun dan riwayat tetap konsisten.

Pemeriksaan:
- Sintaks JavaScript diperiksa dengan node --check.
- Arsip ZIP diperiksa integritasnya.
- Belum diuji langsung di Chrome Android/perangkat pengguna.

Cara update:
1. Ekspor backup JSON dari aplikasi sebelum update.
2. Ekstrak ZIP dan unggah seluruh isi ke root repository GitHub, timpa file lama.
3. Commit perubahan dan tunggu GitHub Actions selesai.
4. Buka URL GitHub Pages di Chrome dan pastikan versi terbaru termuat.
5. Jangan hapus data situs atau uninstall PWA. Data V4.19 disimpan di localStorage dengan key yang sama.
