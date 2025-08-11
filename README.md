[README.md](https://github.com/user-attachments/files/21719309/README.md)
# IPM Papua Barat Daya — Static site with Netlify CMS (Eleventy)

Ini paket website statis berbasis **Eleventy (11ty)** yang sudah terintegrasi dengan **Netlify CMS**.
Tujuan: Anda bisa mengelola **Berita**, **Agenda**, dan **Galeri** lewat dashboard Netlify CMS (`/admin`) tanpa mengedit HTML langsung.

## Cara pakai (singkat)
1. Upload seluruh folder ini ke **repository GitHub** (branch `main`).
2. Di Netlify, buat site baru -> "Import from Git" -> pilih repo -> Build command: `npm run build`, Publish directory: `_site`.
3. Aktifkan **Identity** di Netlify dashboard (Identity -> enable) dan **Git Gateway** (Identity > Services > enable Git Gateway).
4. Tambahkan pengguna atau buka OAuth (Invite) untuk `rifqy.haiqal12@gmail.com` agar bisa login.
5. Buka `https://your-site.netlify.app/admin` untuk masuk ke dashboard Netlify CMS.
6. Buat / Edit Berita, Agenda, Galeri. Setelah publish, Netlify akan trigger build dan update situs.

## Struktur proyek
- `src/` — template dan halaman (index.njk)
- `src/_includes/layout.njk` — layout utama (header/footer)
- `content/` — tempat file markdown yang dikelola Netlify CMS
  - `content/news/` — file berita (.md)
  - `content/agenda/` — file agenda (.md)
  - `content/gallery/` — file galeri (.md)
- `admin/config.yml` — konfigurasi Netlify CMS
- `admin/index.html` — entry Netlify CMS
- `static/uploads/` — tempat file gambar yang diupload oleh CMS
- `_site/` — hasil build Eleventy (di-generate oleh `npm run build`)

## Catatan penting
- Netlify CMS memakai `git-gateway` backend — Anda perlu mengaktifkan Netlify Identity + Git Gateway dan mengundang user (email) untuk login.
- Jika Anda ingin domain kustom, tambahkan domain di Netlify settings.
- Saya sertakan contoh konten di `content/` supaya tampilan awal langsung muncul.

