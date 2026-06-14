// ========== IMAGES & ICONS DATABASE ==========
// File ini menyimpan semua icon dan gambar yang digunakan di aplikasi
// Cara pakai: panggil IMAGES.nama_icon di kode Anda

const IMAGES = {
  // ========== ICON UMUM ==========
  graduate: '🎓',
  user: '👤',
  bell: '🔔',
  eye: '👁️',
  eyeOff: '🙈',
  play: '▶',
  chevron: '›',
  building: '🏛️',
  back: '←',
  close: '×',
  check: '✅',
  cross: '❌',
  clock: '⏳',
  star: '⭐',
  fire: '🔥',
  trophy: '🏆',
  medal: '🏅',
  rocket: '🚀',
  lightning: '⚡',
  warning: '⚠️',
  logout: '🚪',
  trash: '🗑️',
  reload: '🔄',
  menu: '📋',
  
  // ========== KATEGORI ==========
  category: {
    twk: '📚',
    tiu: '🔢',
    tkp: '⭐',
    simulasi: '⏰',
    kuisCepat: '⚡',
    materi: '📖',
    statistik: '📊',
    pencapaian: '🏅',
    petunjuk: '📝',
    tentang: 'ℹ️'
  },
  
  // ========== MENU ICONS ==========
  menuIcons: {
    home: '🏠',
    latihan: '📚',
    statistik: '📊',
    profil: '👤',
    latihanDesc: 'Kerjakan soal berdasarkan kategori',
    simulasiDesc: 'Pengalaman seperti ujian asli',
    kuisCepatDesc: 'Latihan singkat 5 menit',
    materiDesc: 'Ringkasan TWK, TIU, dan TKP',
    pencapaianDesc: 'Lihat medali dan badge',
    statistikDesc: 'Pantau perkembangan belajar',
    petunjukDesc: 'Panduan penggunaan aplikasi',
    tentangDesc: 'Informasi tentang aplikasi'
  },
  
  // ========== STATS ==========
  stats: {
    totalLatihan: '📚',
    totalSoal: '📝',
    skorTertinggi: '⭐'
  },
  
  // ========== QUIZ CEPAT ==========
  quizCepat: {
    twk: { icon: '📚', name: 'TWK', fullName: 'Tes Wawasan Kebangsaan' },
    tiu: { icon: '🔢', name: 'TIU', fullName: 'Tes Intelegensi Umum' },
    tkp: { icon: '⭐', name: 'TKP', fullName: 'Tes Karakteristik Pribadi' }
  },
  
  // ========== NAVIGASI ==========
  nav: {
    prev: '◀ Prev',
    next: 'Next ▶',
    finish: '✅ Selesai',
    daftarSoal: '📋 Daftar Soal',
    lanjutBelajar: 'Lanjut Belajar',
    mulaiSimulasi: '🚀 MULAI SIMULASI UJIAN',
    mulaiKuis: '🚀 Mulai Kuis!'
  },
  
  // ========== STATUS ==========
  status: {
    selesai: '✅ Selesai',
    belum: '⏳ Belum',
    benar: '✅ BENAR',
    salah: '❌ SALAH',
    belumJawab: '⏳ BELUM',
    timerOn: '⏱️ ON',
    timerOff: '⏸️ OFF',
    timerSimulasi: '⏱️ Simulasi',
    timerLabel: '⏱️ Timer ON',
    timerOffLabel: '⏸️ Timer OFF'
  },
  
  // ========== LOGIN ==========
  login: {
    title: 'Latihan SKD CPNS',
    subtitle: 'Masuk untuk mulai belajar',
    masukBtn: 'Masuk',
    errorIcon: '⚠️',
    errorMsg: '⚠️ Username atau password salah!'
  },
  
  // ========== RESULT ==========
  result: {
    lulus: '🎉 SELAMAT! Anda LULUS Passing Grade SKD!',
    gagal: '⚠️ Belum lulus passing grade. Terus semangat berlatih!',
    ulangi: '🔄 Ulangi',
    evaluasi: '📋 Evaluasi',
    tutup: '✖ Tutup Evaluasi'
  },
  
  // ========== BADGE TIERS ==========
  badgeTiers: {
    tier1: { label: '🎗️ Tier 1 — Pemula' },
    tier2: { label: '🌿 Tier 2 — Pemula Lanjut' },
    tier3: { label: '🔵 Tier 3 — Menengah' },
    tier4: { label: '🟣 Tier 4 — Mahir' },
    tier5: { label: '🥇 Tier 5 — Ahli' },
    tier6: { label: '🔶 Tier 6 — Master' },
    tier7: { label: '💎 Tier 7 — Legendaris' }
  },
  
  // ========== MODAL ==========
  modal: {
    logoutTitle: 'Yakin Ingin Logout?',
    logoutMsg: 'Kamu akan keluar dari akun ini dan kembali ke halaman login.',
    logoutYes: 'Ya, Logout',
    logoutCancel: 'Batal',
    resetTitle: 'Reset Progress',
    resetMsg: 'Yakin ingin mereset semua skor latihan? Tindakan ini tidak dapat dibatalkan!',
    resetYes: 'Ya, Reset',
    resetCancel: 'Batal'
  },
  
  // ========== AKUN ==========
  akun: {
    title: '👤 Profil Saya',
    aktif: '✅ Akun Aktif',
    username: '👤 Username',
    skorTerbaik: '🏆 Skor Terbaik',
    paketSelesai: '📝 Paket Selesai',
    totalLulus: '🎯 Total Lulus PG',
    qcSesi: '⚡ Sesi Quiz Cepat',
    soundLabel: '🔊 Efek Suara'
  },
  
  // ========== MISC ==========
  misc: {
    progressLabel: '📚 Progress Belajar',
    streakLabel: 'Hari',
    streakSub: 'Beruntun',
    sectionMenu: 'Menu Utama',
    donutLabel: 'Selesai',
    levelBadge: 'Level',
    selamatPagi: 'Selamat pagi',
    selamatSiang: 'Selamat siang',
    selamatSore: 'Selamat sore',
    selamatMalam: 'Selamat malam',
    selamatSubuh: 'Selamat subuh',
    motto: 'Tetap semangat, raih masa depanmu! 👋',
    newBest: '🎉 Rekor Baru!',
    quizSelesai: 'Quiz Selesai!',
    recordBaru: '🎉 Pencapaian Baru!',
    belumAda: 'Belum ada'
  }
};

// Export jika menggunakan module (opsional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IMAGES;
}
