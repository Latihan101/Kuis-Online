var IMAGES = {
  // Avatar & User
  graduate: '🎓',
  user: '👤',
  profil: '👤',
  avatar: '👤',
  
  // Notifikasi
  bell: '🔔',
  notification: '🔔',
  
  // Password
  eye: '👁️',
  eyeOff: '🙈',
  
  // Navigasi
  play: '▶',
  back: '←',
  close: '×',
  prev: '◀',
  next: '▶',
  chevron: '›',
  
  // Status
  check: '✅',
  cross: '❌',
  clock: '⏳',
  warning: '⚠️',
  
  // Achievement
  star: '⭐',
  fire: '🔥',
  trophy: '🏆',
  medal: '🏅',
  rocket: '🚀',
  lightning: '⚡',
  
  // Aksi
  logout: '🚪',
  trash: '🗑️',
  reload: '🔄',
  finish: '✅',
  
  // Menu
  menu: '📋',
  daftarSoal: '📋',
  
  // Kategori
  twk: '📚',
  tiu: '🔢',
  tkp: '⭐',
  
  // Fitur
  simulasi: '⏰',
  materi: '📖',
  statistik: '📊',
  pencapaian: '🏅',
  petunjuk: '📝',
  tentang: 'ℹ️',
  
  // Navigasi Bawah
  home: '🏠',
  
  // Background
  building: '🏛️',
  
  // Quiz Cepat
  qcTwk: '📚',
  qcTiu: '🔢',
  qcTkp: '⭐',
  
  // Hasil
  resultHappy: '😅',
  resultGreat: '🏆',
  resultGood: '🎯',
  resultOk: '💪',
  
  // Matahari & Alam
  sun: '☀️',
  moon: '🌙',
  sunrise: '🌅',
  sunset: '🌇',
  cloud: '☁️',
  sparkle: '✨',
  bird: '🐦',
  flower: '🌸',
  
  // Loading
  loading: '⏳',
  
  // Sosial
  share: '📤',
  save: '💾',
  settings: '⚙️',
  info: 'ℹ️',
  help: '❓',
  
  // Tambahan
  target: '🎯',
  book: '📖',
  chart: '📊',
  lock: '🔒',
  unlock: '🔓',
  badge: '🏅',
  crown: '👑',
  thumbsup: '👍',
  thumbsdown: '👎',
  heart: '❤️',
  party: '🎉',
  think: '🤔',
  brain: '🧠',
  muscle: '💪',
  runner: '🏃',
  shield: '🛡️',
  
  // Gambar (langsung dengan tag img + style)
  alarm_fill: '<img src="images/alarm-fill.svg" style="width: 64px; height: 64px; object-fit: contain; margin: 0 auto; display: block;">',
  logo: '<img src="images/logo.svg" style="width: 100px; height: 100px;">',
};

// Auto isi semua icon yang punya data-icon
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-icon]').forEach(function(el) {
    var key = el.getAttribute('data-icon');
    var value = IMAGES[key];
    
    if (!value) return;
    
    // Deteksi: kalau mengandung <img → langsung pakai innerHTML
    if (value.includes('<img')) {
      el.innerHTML = value;
    } else {
      // Emoji / teks biasa
      el.textContent = value;
    }
  });
});
