MY FINANCIAL LIFE V4.19 — FINANCIAL ALLOCATION

Pembaruan:
1. Ringkasan category budget tetap menunjukkan total alokasi dan sisa monthly budget. Tombol "Atur ulang alokasi" memungkinkan pengguna mengisi ulang batas setiap kategori satu per satu secara manual, dengan konfirmasi jika total melampaui monthly budget.
2. Tombol "Tambah kategori utama" menambahkan Keluarga, Dana Darurat, Investasi, dan Tabungan ke category budget jika belum ada. Batas awal 0 agar tidak mengarang nominal.
3. Modul "Alokasi dana & tujuan" mendukung dua mode per dana:
   - Rekening terpisah: saldo ditautkan ke akun keuangan yang dipilih. Penambahan/penggunaan dilakukan sebagai transfer antar akun, bukan income/expense, agar total kekayaan tidak terhitung ganda.
   - Alokasi virtual: dana diberi label pada saldo akun yang sudah ada; penambahan/penggunaan mengubah saldo alokasi saja, bukan saldo akun. Saldo virtual adalah penanda internal dan tidak boleh dijumlahkan lagi ke net worth.
4. Riwayat alokasi dana mencatat pembuatan dana, perubahan target, penambahan dan penggunaan/penarikan.
5. Data lama tetap dimigrasikan; backup/restore menyertakan funds dan allocationHistory.

Batasan yang perlu diketahui:
- Untuk mode rekening terpisah, pilih akun tujuan yang sudah ada; aplikasi tidak membuat rekening bank nyata.
- Untuk mode virtual, aplikasi mencatat nilai alokasi tetapi tidak mengunci saldo di bank; pengguna perlu memastikan saldo akun aktual tetap cukup.
- Aset jual/pakai belum diubah dalam V4.19 ini; itu memerlukan alur transaksi aset tersendiri agar keuntungan/kerugian dan penerimaan uang tercatat akurat.

Update:
1. Ekspor backup JSON terlebih dahulu.
2. Ekstrak ZIP dan unggah semua file ke root repository GitHub, timpa file lama.
3. Commit dan tunggu Actions hijau.
4. Buka ulang Chrome.
Jangan hapus data situs atau uninstall sebelum backup aman.
