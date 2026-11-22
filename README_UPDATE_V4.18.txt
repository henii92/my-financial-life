MY FINANCIAL LIFE V4.18 — SMART CATEGORY BUDGET & CHANGE HISTORY

Fitur:
1. Saat transaksi pengeluaran disimpan dengan kategori yang belum memiliki anggaran kategori, kategori otomatis ditambahkan ke daftar Anggaran per Kategori dengan status "Perlu atur batas". Riwayat transaksi tidak diubah.
2. Monthly budget tetap menjadi batas keseluruhan pengeluaran bulanan. Alokasi kategori ditampilkan sebagai total dari batas kategori dan sisa dana yang belum dialokasikan.
3. Jika batas kategori baru membuat total alokasi melebihi monthly budget, aplikasi memberi peringatan dan meminta konfirmasi.
4. Jika monthly budget diturunkan hingga di bawah total alokasi kategori, aplikasi menawarkan penyesuaian proporsional. Penyesuaian hanya dilakukan setelah konfirmasi.
5. Riwayat perubahan menyimpan waktu, jenis perubahan, detail, nilai sebelum, dan nilai sesudah untuk pembuatan otomatis kategori, perubahan/pembuatan/penghapusan budget kategori, perubahan monthly budget, dan penyesuaian otomatis. Maksimal 250 catatan terbaru.
6. Backup dan restore menyertakan budgetHistory; data lama tetap dimigrasikan otomatis dengan riwayat kosong.

Catatan desain:
- Kategori baru otomatis muncul, tetapi batasnya tidak ditebak. Pengguna menentukan nominal batasnya agar aplikasi tidak mengalokasikan uang secara keliru.
- Monthly budget adalah plafon total; budget kategori adalah sub-alokasi dan tidak menggantikan plafon total.
- Peringatan saat transaksi melewati plafon tidak memblokir transaksi; pengguna dapat memilih tetap menyimpan.

Update:
1. Ekspor backup JSON terbaru terlebih dahulu.
2. Ekstrak ZIP dan unggah semua file ke root repository GitHub, timpa file lama.
3. Commit dan tunggu GitHub Actions hijau.
4. Buka ulang Chrome agar cache V4.18 terbarui.
Jangan hapus data situs atau uninstall sebelum backup aman.
