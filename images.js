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
  building: '🏛️',
  donut: '📊',
  strek: '🔥',
  quote: '💬'
};

// Auto isi semua icon di HTML
document.addEventListener('DOMContentLoaded', function() {
  // Login
  document.querySelector('.big-icon').textContent = IMAGES.graduate;
  
  // Home
  document.querySelector('.avatar').innerHTML = IMAGES.user;
  document.querySelector('.notif-btn').innerHTML = IMAGES.bell + '<span class="notif-dot"></span>';
  document.querySelector('.building-img').textContent = IMAGES.building;
  document.querySelector('.btn-lanjut .play-icon').innerHTML = IMAGES.play;
  document.querySelector('.fire').textContent = IMAGES.fire;
  
  // Stats
  document.querySelector('.s-icon.blue').textContent = IMAGES.twk;
  document.querySelector('.s-icon.green').textContent = IMAGES.statistik;
  document.querySelector('.s-icon.yellow').textContent = IMAGES.star;
  
  // Menu (otomatis loop)
  var menus = document.querySelectorAll('.menu-icon-wrap');
  var icons = [IMAGES.twk, IMAGES.simulasi, IMAGES.lightning, IMAGES.materi, IMAGES.pencapaian, IMAGES.statistik, IMAGES.petunjuk, IMAGES.tentang];
  menus.forEach(function(el, i) {
    if (icons[i]) el.textContent = icons[i];
  });
  
  // Bottom nav
  document.querySelector('#navHome .nav-icon').textContent = IMAGES.home;
  document.querySelector('#navLatihan .nav-icon').textContent = IMAGES.twk;
  document.querySelector('#navStat .nav-icon').textContent = IMAGES.statistik;
  document.querySelector('#navProfil .nav-icon').textContent = IMAGES.user;
  
  // Back button
  document.querySelectorAll('.btn-back').forEach(function(el) {
    el.textContent = IMAGES.back;
  });
  
  // Akun
  document.querySelector('.akun-avatar-big').textContent = IMAGES.user;
});
