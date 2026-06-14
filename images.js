var IMAGES = {
  graduate: '🎓',
  user: '👤',
  bell: '🔔',
  eye: '👁️',
  eyeOff: '🙈',
  play: '▶',
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
  twk: '📚',
  tiu: '🔢',
  tkp: '⭐',
  simulasi: '⏰',
  materi: '📖',
  statistik: '📊',
  pencapaian: '🏅',
  petunjuk: '📝',
  tentang: 'ℹ️',
  home: '🏠',
  profil: '👤',
  prev: '◀',
  next: '▶',
  finish: '✅',
  daftarSoal: '📋',
  building: '🏛️'
};

// Auto isi semua icon yang punya data-icon
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-icon]').forEach(function(el) {
    var key = el.getAttribute('data-icon');
    if (IMAGES[key]) {
      el.textContent = IMAGES[key];
    }
  });
});
