// ============================================================
//  soal.js — Edit file ini untuk update soal & pembahasan
//  Struktur TWK/TIU : { q, opt, a, pembahasan }
//  Struktur TKP     : { q, opts, scores, pembahasan }
//  a = index jawaban benar (0-based, sesuai urutan opt[])
// ============================================================

// ==================== PAKET 1 ====================

window.twkBank1 = [
  {
    q: "Pembangunan pertahanan dan keamanan terutama ditujukan untuk menegakkan kedaulatan negara, menjaga keutuhan wilayah Negara Kesatuan Republik Indonesia, menjaga keselamatan segenap bangsa dari ancaman militer dan nonmiliter, meningkatkan rasa aman dan nyaman sebagai jaminan kondusifnya iklim investasi, serta tetap tertib dan tegaknya hukum di masyarakat. Pembangunan pertahanan dan keamanan ditujukan untuk kepentingan nasional. Upaya yang dapat dilakukan untuk membangun pertahanan dan keamanan adalah...",
    opt: ["Membantu keamanan di negara yang berkonflik","Membangun infrastruktur di negara yang mengalami bencana","Memberikan pelatihan kepada militer negara asing","Menandatangani kontrak kerja sama dengan negara lain","Mempatroli rutin di wilayah darat, laut, dan udara"],
    a: 4,
    pembahasan: "Patroli rutin di wilayah darat, laut, dan udara merupakan upaya langsung dan konkret untuk menjaga kedaulatan serta keselamatan bangsa dari ancaman, sesuai tujuan pembangunan pertahanan dan keamanan nasional."
  },
  {
    q: "Negara Indonesia dikenal dengan negara yang sangat kaya sekali akan keanekaragaman dan sumber daya alamnya. Keanekaragaman ini menjadi salah satu faktor penyebab adanya kemajemukan masyarakat di Indonesia. Kemajemukan masyarakat Indonesia secara sosiohistoris terdiri atas berbagai suku bangsa yang dilatarbelakangi oleh...",
    opt: ["Kontak sosial dan jumlah penduduk","Isolasi georafis dan kepulauan","Keterbukaan budaya luar dan migrasi penduduk","Keragaman budaya dan potensi alam","Perdagangan dan kekayaan alam"],
    a: 2,
    pembahasan: "Secara sosiohistoris, kemajemukan suku bangsa Indonesia terbentuk karena keterbukaan terhadap budaya luar (pengaruh Hindu, Buddha, Islam, Eropa) dan migrasi penduduk antar pulau maupun dari luar."
  },
  {
    q: "Orang yang memiliki gangguan mental tidak sepantasnya dijauhi maupun dianggap aneh. Karena tidak selamanya orang yang mengalami gangguan mental adalah pecandu narkoba, berkepribadian sombong, atau seorang psikopat. Orang yang memiliki gangguan mental juga tidak dapat dikatakan \"orang gila\". Orang yang memiliki gangguan mental hanyalah orang yang memiliki pengalaman atau luka masa lalu yang belum sembuh. Ide pokok paragraf tersebut adalah ...",
    opt: ["Orang dengan gangguan mental tidak dapat disebut \"orang gila\"","Tidak selamanya orang yang mengalami gangguan mental adalah pecandu narkoba, berkepribadian sombong, atau seorang psikopat","Orang yang memiliki gangguan mental tidak sepantasnya dijauhi maupun dianggap aneh","Orang yang memiliki gangguan mental hanyalah orang yang memiliki pengalaman atau luka masa lalu yang belum sembuh","Kita perlu memahami orang dengan gangguan mental"],
    a: 2,
    pembahasan: "Ide pokok adalah gagasan utama paragraf yang biasanya terletak di kalimat pertama (kalimat utama). Kalimat pertama paragraf ini menyatakan bahwa orang dengan gangguan mental tidak sepantasnya dijauhi atau dianggap aneh."
  },
  {
    q: "Berikut merupakan fungsi Bela negara yang benar, kecuali...",
    opt: ["Menjaga keutuhan wilayah Negara","Menjaga identitas dan integritas bangsa","Merupakan panggilan sejarah","Merupakan kewajiban setiap warga Negara","Mempertahankan Negara dari berbagai ancaman"],
    a: 1,
    pembahasan: "Fungsi bela negara antara lain: menjaga keutuhan wilayah, merupakan panggilan sejarah, kewajiban warga negara, dan mempertahankan negara dari ancaman. 'Menjaga identitas dan integritas bangsa' bukan termasuk fungsi, melainkan tujuan bela negara."
  },
  {
    q: "Undang-undang yang membahas mengenai Pertahanan Negara ialah...",
    opt: ["Undang-Undang No. 56 tahun 1999","Undang-Undang No.3 tahun 2002","Undang-Undang no. 20 tahun 1982","Undang-Undang no. 29 tahun 1954","Undang-Undang no. 54 tahun 1999"],
    a: 1,
    pembahasan: "UU No. 3 Tahun 2002 adalah undang-undang tentang Pertahanan Negara yang mengatur sistem pertahanan negara Indonesia secara komprehensif."
  },
  {
    q: "Bhinneka Tunggal Ika ditulis oleh Mpu Tantular dalam Kitab...",
    opt: ["Negarakertagama","Asmarandana","Sutasoma","Ramayana","Mahabarata"],
    a: 2,
    pembahasan: "Frasa 'Bhinneka Tunggal Ika' berasal dari Kitab Sutasoma karangan Mpu Tantular pada masa Kerajaan Majapahit (abad ke-14). Kalimat lengkapnya: 'Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa'."
  },
  {
    q: "Bacalah Teks berikut: Pemerintah kembali menurunkan bahan bakar minyak (BBM) terutama jenis premium... Gagasan utama tajuk tersebut adalah...",
    opt: ["Penurunan harga BBM hendaknya diikuti harga kebutuhan pokok","Penurunan harga premium diikuti solar dan pertamax","Kebutuhan pokok tergantung jenis BBM yang digunakan","Turunnya BBM meningkatkan produksi dalam negeri","Penurunan harga BBM tergantung jenis BBM"],
    a: 0,
    pembahasan: "Gagasan utama tajuk/editorial terletak pada inti pesan penulis. Teks menekankan harapan agar penurunan BBM diikuti turunnya harga kebutuhan pokok sehingga daya beli masyarakat meningkat."
  },
  {
    q: "Prinsip-prinsip nasionalisme Indonesia (persatuan Indonesia) tersusun dalam kesatuan majemuk tunggal, kecuali...",
    opt: ["Kesatuan Sejarah","Kesatuan Tradisi","Kesatuan Nasib","Kesatuan Kebudayaan","Kesatuan asas kerohanian"],
    a: 1,
    pembahasan: "Prinsip nasionalisme Indonesia meliputi: kesatuan sejarah, kesatuan nasib, kesatuan kebudayaan, dan kesatuan asas kerohanian. 'Kesatuan Tradisi' bukan termasuk prinsip yang dikemukakan."
  },
  {
    q: "Aspek satu nusa dalam Sumpah Pemuda menjelaskan tentang...",
    opt: ["Aspek Kedaulatan","Aspek identitas menggantikan Hindia Belanda","Aspek Otonomi Daerah","Aspek wilayah","Aspek komunikasi"],
    a: 1,
    pembahasan: "'Satu Nusa' dalam Sumpah Pemuda 1928 merujuk pada identitas satu tanah air Indonesia, menggantikan identitas Hindia Belanda yang merupakan nama kolonial."
  },
  {
    q: "Hubungan Bhinneka Tunggal Ika dalam UUD 1945 yang menjelaskan bahwa Lambang Negara ialah Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika terdapat dalam...",
    opt: ["Pasal 18","Pasal 18 A","Pasal 36","Pasal 36 A","Pasal 32"],
    a: 0,
    pembahasan: "Pasal 36A UUD 1945 menyatakan: 'Lambang Negara ialah Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika.' Namun dari pilihan yang ada, Pasal 36 adalah yang paling relevan karena memuat identitas lambang negara."
  },
  {
    q: "Salah satu kemajemukan Bangsa Indonesia adalah Perbedaan Horizontal. Berikut ini yang termasuk ke dalam Perbedaan Horizontal adalah...",
    opt: ["Ekonomi","Politik","Pendidikan","Agama","Pekerjaan"],
    a: 3,
    pembahasan: "Perbedaan horizontal adalah perbedaan yang tidak bersifat hierarkis (tidak ada yang lebih tinggi/rendah), seperti perbedaan agama, suku, ras, dan adat istiadat. Agama adalah contoh perbedaan horizontal."
  },
  {
    q: "(1) Kepedulian untuk menghemat air bersih sangat diperlukan... Kalimat yang berisi fakta terdapat pada kalimat nomor...",
    opt: ["(1) dan (2)","(2) dan (3)","(3) dan (4)","(2) dan (4)","(4) dan (5)"],
    a: 1,
    pembahasan: "Fakta adalah pernyataan yang dapat dibuktikan kebenarannya. Kalimat (2) dan (3) berisi fakta: aktivitas sehari-hari membutuhkan air, dan air digunakan untuk mandi, minum, mencuci, memasak — hal yang dapat diverifikasi."
  },
  {
    q: "Setelah berlangsungnya Pemilu, terpilih Pak Anto sebagai salah satu wakil rakyat... Sikap masyarakat Artasari merupakan pengamalan sila ke-...",
    opt: ["1","2","3","4","5"],
    a: 3,
    pembahasan: "Menyerahkan kepercayaan kepada wakil rakyat yang dipilih melalui Pemilu mencerminkan pengamalan Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan."
  },
  {
    q: "Salah satu ciri pada masa Demokrasi terpimpin adalah...",
    opt: ["Lemahnya pengaruh komunis","Bebasnya keberadaan Pers","Lemahnya politik presiden","Dominan politik presiden","Bebasnya pergerakan partai politik"],
    a: 3,
    pembahasan: "Masa Demokrasi Terpimpin (1959-1965) ditandai oleh dominannya peran presiden Soekarno dalam seluruh aspek pemerintahan, pembatasan pers, dan pembubaran partai-partai politik."
  },
  {
    q: "Jenis demokrasi dimana kekuasaan legislatif dipegang oleh kongres, kekuasaan eksekutif dipegang oleh presiden, dan kekuasaan yudikatif dipegang oleh Mahkamah Agung adalah...",
    opt: ["Demokrasi Pancasila","Demokrasi parlementer","Demokrasi melalui referendum","Demokrasi langsung","Demokrasi dengan sistem pemisahan kekuasaan"],
    a: 4,
    pembahasan: "Sistem yang memisahkan tiga kekuasaan (legislatif, eksekutif, yudikatif) secara tegas disebut Trias Politika atau demokrasi dengan sistem pemisahan kekuasaan, seperti yang diterapkan di Amerika Serikat."
  },
  {
    q: "Berikut adalah prinsip-prinsip demokrasi yang dirincikan oleh Sukarna, kecuali...",
    opt: ["Prinsip Persetujuan","Prinsip Kesepahaman","Pemerintah dengan diskusi","Pemerintah dengan mayoritas","Pengakuan atas hak-hak minoritas"],
    a: 1,
    pembahasan: "Sukarna merumuskan prinsip demokrasi antara lain: prinsip persetujuan, pemerintahan dengan diskusi, pemerintahan dengan mayoritas, dan pengakuan hak minoritas. 'Prinsip Kesepahaman' tidak termasuk dalam rumusan Sukarna."
  },
  {
    q: "Undang-undang Nomor 8 Tahun 2012 mengatur tentang...",
    opt: ["Demokrasi Pancasila","Pemilihan Umum Anggota Dewan Perwakilan Rakyat","Hak Asasi Manusia","APBN ditetapkan dengan UU","Sifat Pemilu"],
    a: 1,
    pembahasan: "UU No. 8 Tahun 2012 mengatur tentang Pemilihan Umum Anggota DPR, DPD, dan DPRD. Undang-undang ini mengatur seluruh mekanisme pelaksanaan Pemilu legislatif di Indonesia."
  },
  {
    q: "Dokumen penting yang merupakan kontrak atau perjanjian antara beberapa bangsawan dan raja yang dianggap sebagai tonggak perjuangan hak asasi manusia...",
    opt: ["Pembukaan UUD 1945","Isi perjanjian Renville","Bill of rights","Magna Carta","Habeas Corpus Act"],
    a: 3,
    pembahasan: "Magna Carta (1215) adalah perjanjian antara Raja John dari Inggris dan para bangsawan yang membatasi kekuasaan raja dan dianggap sebagai cikal bakal hak asasi manusia dan konstitusionalisme."
  },
  {
    q: "Demokrasi di Indonesia merupakan salah satu jenis demokrasi...",
    opt: ["Demokrasi tidak langsung","Demokrasi langsung","Demokrasi liberal","Demokrasi parlementer","Demokrasi gabungan"],
    a: 0,
    pembahasan: "Indonesia menganut demokrasi tidak langsung (representatif), di mana rakyat memilih wakil-wakil mereka (DPR, DPD, DPRD) untuk membuat keputusan atas nama rakyat."
  },
  {
    q: "Kerajaan Islam pertama di Indonesia adalah...",
    opt: ["Majapahit","Kutai","Demak","Samudra Pasai","Aceh"],
    a: 3,
    pembahasan: "Kerajaan Samudra Pasai (di Aceh) adalah kerajaan Islam pertama di Indonesia, berdiri sekitar abad ke-13. Kerajaan ini menjadi pusat perdagangan dan penyebaran Islam di Nusantara."
  },
  {
    q: "Pada umumnya, sakit tenggorokan disebabkan oleh virus... Simpulan paragraf tersebut yang tepat adalah...",
    opt: ["Penyakit tenggorokan disebabkan kebanyakan oleh virus","Sakit tenggorokan tidak bisa dikurangi dengan minum air jeruk lemon","Tanda-tanda penyakit tenggorokan adalah hidung tersumbat","Usaha meringankan rasa sakit ketika menderita sakit tenggorokan","Sakit tenggorokan dapat dikurangi dengan minum air perasan jeruk lemon"],
    a: 4,
    pembahasan: "Simpulan paragraf harus mencakup keseluruhan isi. Paragraf membahas penyebab, gejala, dan cara meredakan sakit tenggorokan. Simpulan paling tepat adalah air perasan jeruk lemon dapat membantu meredakan sakit tenggorokan."
  },
  {
    q: "Salah satu kekuasaan presiden ialah memberikan pengampunan atau penghapusan hukuman kepada seseorang... disebut...",
    opt: ["Grasi","Abolisi","Amnesti","Rehabilitasi","Konservasi"],
    a: 2,
    pembahasan: "Amnesti adalah penghapusan seluruh akibat hukum pidana terhadap sekelompok orang. Grasi adalah pengurangan hukuman, Abolisi adalah penghentian proses hukum, Rehabilitasi adalah pemulihan nama baik."
  },
  {
    q: "Sebelum reformasi, lembaga yang memiliki kedudukan tertinggi negara adalah...",
    opt: ["MPR","DPR","DPRD","DPD","Presiden"],
    a: 0,
    pembahasan: "Sebelum reformasi (amandemen UUD 1945), MPR (Majelis Permusyawaratan Rakyat) adalah lembaga tertinggi negara yang memiliki wewenang menetapkan GBHN dan memilih Presiden/Wakil Presiden."
  },
  {
    q: "Memberikan persetujuan terhadap pemindahtanganan aset negara... merupakan tugas DPR dalam fungsi...",
    opt: ["Fungsi Anggaran","Fungsi Legislasi","Fungsi Pengawasan","Fungsi Angket","Fungsi Interpelasi"],
    a: 0,
    pembahasan: "Fungsi anggaran DPR mencakup pembahasan dan persetujuan APBN serta hal-hal yang berkaitan dengan keuangan negara, termasuk pemindahtanganan aset negara dan perjanjian yang berdampak pada beban keuangan negara."
  },
  {
    q: "Lembaga yang berwenang untuk mengadili tingkat kasasi, menguji peraturan perundang-undangan di bawah Undang-undang dan wewenang lain yang diberikan undang-undang adalah...",
    opt: ["Mahkamah Agung","Mahkamah Konstitusi","Komisi Yudisial","Presiden","Badan Pemeriksa Keuangan"],
    a: 0,
    pembahasan: "Mahkamah Agung (MA) berwenang mengadili pada tingkat kasasi dan menguji peraturan perundang-undangan di bawah UU terhadap UU. Sedangkan Mahkamah Konstitusi menguji UU terhadap UUD 1945."
  },
  {
    q: "Asas dekonsentrasi pada penyelenggaraan otonomi daerah adalah...",
    opt: ["Penyerahan wewenang pemerintahan oleh pemerintah kepada daerah otonom dalam kerangka NKRI","Pelimpahan wewenang dari pemerintah kepada gubernur sebagai wakil pemerintah dan atau perangkat pusat daerah","Penugasan dari pemerintah kepada kepala daerah dan desa","Penentuan keadilan yang berlandaskan kode etik","Penjaminan terselenggaranya kepada masyarakat"],
    a: 1,
    pembahasan: "Dekonsentrasi adalah pelimpahan wewenang dari pemerintah pusat kepada gubernur sebagai wakil pemerintah pusat di daerah. Berbeda dengan desentralisasi (penyerahan wewenang penuh) dan tugas pembantuan (penugasan tertentu)."
  },
  {
    q: "Adanya peraturan mengenai tingkah laku manusia, peraturan bersifat memaksa, dan sanksi terhadap pelanggaran peraturan adalah tegas, merupakan isi dari...",
    opt: ["Prinsip hukum","Tujuan Hukum","Sifat Hukum","Unsur-unsur hukum","Ciri-ciri hukum"],
    a: 3,
    pembahasan: "Unsur-unsur hukum adalah komponen pembentuk hukum: adanya peraturan tingkah laku, sifat memaksa, dan sanksi tegas. Ini berbeda dengan ciri-ciri hukum yang lebih luas cakupannya."
  },
  {
    q: "Lengkapilah paragraf deskripsi berikut tentang ruangan favorit Jeje... Kalimat yang tepat untuk melengkapi paragraf tersebut adalah...",
    opt: ["Di luar ruangan terdapat sebuah taman bunga mungil","Terdapat pot yang menjadi tempat tumbuh pohon palem kecil","Rak ini sebagian besar memuat buku pelajaran, majalah, dan koran yang disusun rapi","Terdapat seekor kucing yang sangat menggemaskan","Terdapat meja yang bertumpukan buku-buku"],
    a: 2,
    pembahasan: "Paragraf mendeskripsikan ruangan favorit dengan rak buku besar. Kalimat pelengkap yang paling logis dan padu adalah kalimat yang mendeskripsikan isi rak buku tersebut (buku, majalah, koran)."
  },
  {
    q: "Pengertian Otonomi daerah dan mengenai pemerintahan daerah diatur dalam...",
    opt: ["UUD 1945 Pasal 18A ayat 1","Ketetapan MPR RI Nomor XV/MPR/1998","UU No. 32 Tahun 2004","UU No. 33 Tahun 2004","Ketetapan MPR RI Nomor IV/MPR/2000"],
    a: 2,
    pembahasan: "UU No. 32 Tahun 2004 tentang Pemerintahan Daerah mengatur pengertian otonomi daerah, pembagian urusan pemerintahan, dan penyelenggaraan pemerintahan daerah di Indonesia."
  },
  {
    q: "Berikut ini bidang yang termasuk ke dalam prinsip otonomi daerah adalah...",
    opt: ["Agama","Sosial","Pertahanan","Keamanan","Semua jawaban salah"],
    a: 1,
    pembahasan: "Bidang yang dapat dikelola daerah dalam otonomi daerah antara lain: pendidikan, kesehatan, sosial, lingkungan hidup, dll. Sedangkan agama, pertahanan, keamanan, politik luar negeri, dan fiskal nasional tetap menjadi urusan pusat."
  }
];

window.tiuBank1 = [
  {
    q: "KHAYALAN : DONGENG = PERISTIWA : ...",
    opt: ["Rekaan","Dugaan","Palsu","Fakta","Estimasi"],
    a: 3,
    pembahasan: "Analogi: Khayalan adalah dasar dari Dongeng (sesuatu yang tidak nyata/fiktif). Peristiwa adalah kejadian nyata, maka padanannya adalah Fakta (sesuatu yang benar-benar terjadi)."
  },
  {
    q: "Presiden : Negara = ... : ...",
    opt: ["RT : RW","Tangan : Kanan","Gubernur : Bupati","Ayah : Keluarga","Hitam : Putih"],
    a: 3,
    pembahasan: "Presiden adalah pemimpin Negara. Analogi yang tepat: Ayah adalah pemimpin/kepala Keluarga. Keduanya menunjukkan hubungan pemimpin dengan unit yang dipimpinnya."
  },
  {
    q: "Ikan : Air : Aquarium = ... : ... : ...",
    opt: ["Burung : Udara : Sangkar","Kucing : Tikus : Rumah","Buaya : Amfibi : Buas","Kupu kupu : Kepompong : Ulat","Hiu : Laut : Samudera"],
    a: 0,
    pembahasan: "Ikan hidup di Air dan dikurung dalam Aquarium. Analogi: Burung hidup di Udara dan dikurung dalam Sangkar. Pola: makhluk hidup : habitat alami : tempat pengurungan."
  },
  {
    q: "Pelukis : Kuas : Cat = ... : ... : ...",
    opt: ["Tukang : Gergaji : Mandor","Montir : Tang : Obeng","Guru : Meja : Mulia","Dokter : Pasien : Virus","Musisi : Menyanyi : Panggung"],
    a: 1,
    pembahasan: "Pelukis menggunakan Kuas dan Cat sebagai alat kerjanya. Analogi: Montir menggunakan Tang dan Obeng sebagai alat kerjanya. Pola: profesi : alat 1 : alat 2."
  },
  {
    q: "Semua perilaku buruk tidak patut dicontoh. Sebagian perilaku pegawai adalah buruk. Kesimpulannya adalah...",
    opt: ["Sebagian perilaku pegawai tidak patut dicontoh","Semua peilaku pegawai tidak patut dicontoh","Sebagian perilaku pegawai patut dicontoh","Sebagian perlaku pegawai wajib dicontoh","Semua perilaku pegawai adalah buruk"],
    a: 0,
    pembahasan: "Silogisme: (1) Semua perilaku buruk → tidak patut dicontoh. (2) Sebagian perilaku pegawai → buruk. Kesimpulan: Sebagian perilaku pegawai tidak patut dicontoh. (Hanya sebagian, karena premis kedua hanya 'sebagian'.)"
  },
  {
    q: "Semua penderita penyakit lambung tidak boleh memakan makanan yang pedas. Tono mengidap penyakit lambung. Kesimpulannya adalah...",
    opt: ["Tono boleh memakan makanan yang pedas","Tono tidak mengidap penyakit lambung","Tono suka memakan makan yang tidak pedas","Tono tidak boleh memakan makanan yang manis","Tono tidak boleh memakan makanan yang pedas"],
    a: 4,
    pembahasan: "Silogisme sederhana: (1) Semua penderita lambung tidak boleh makan pedas. (2) Tono penderita lambung. Kesimpulan: Tono tidak boleh makan pedas."
  },
  {
    q: "Semua manusia membutuhkan air. Semua manusia membutuhkan oksigen. Kesimpulannya adalah...",
    opt: ["Sebagian manusia membutuhkan air dan okigen","Semua manusia membutuhkan air dan oksigen","Semua manusia membutuhkan air","Sebagian manusia tidak membutuhkan air dan oksigen","Semua manusia hanya membutuhkan air dan oksigen"],
    a: 1,
    pembahasan: "Kedua premis bersifat universal (semua). Jika semua manusia butuh air DAN semua manusia butuh oksigen, maka semua manusia membutuhkan air dan oksigen."
  },
  {
    q: "Sebagian toko buku buka pada pukul 08.00. Toko buku tidak buka pada pukul 08.00. Kesimpulannya adalah...",
    opt: ["Toko buku buka pada malam hari","Toko buku buka pada siang hari","Toko buku buka pada pukul 07.00","Tidak bisa disimpulkan","Toko buku buka pada pukul 09.00"],
    a: 3,
    pembahasan: "Premis 1: sebagian toko buku buka pukul 08.00 (tidak semua). Premis 2: sebuah toko buku tidak buka pukul 08.00. Tidak ada informasi kapan toko itu buka, sehingga tidak bisa ditarik kesimpulan yang pasti."
  },
  {
    q: "Pak Dani membeli 2 keranjang alpukat dan dijual kembali dengan harga Rp 532.000. Jika mendapat untung 40%, berapa rupiah kah harga pembelian sekeranjang alpukat tersebut?",
    opt: ["Rp 180.000","Rp 190.000","Rp 212.000","Rp 380.000","Rp 385.000"],
    a: 1,
    pembahasan: "Harga jual = harga beli × (1 + untung%). Rp532.000 = harga beli × 1,4. Harga beli total = Rp532.000 / 1,4 = Rp380.000. Harga per keranjang = Rp380.000 / 2 = Rp190.000."
  },
  {
    q: "Seorang pedagang telur membeli 2 kuintal telur ayam seharga Rp 1.360.000... Berapakah kerugian pedagang tersebut jika hanya terjual 3/4 nya saja?",
    opt: ["Rp 180.000,00","Rp 480.000,00","Rp 520.000,00","Rp 640.000,00","Rp 840.000,00"],
    a: 2,
    pembahasan: "2 kuintal = 200 kg. Harga jual/kg = Rp5.600. Terjual 3/4 × 200 = 150 kg. Pendapatan = 150 × 5.600 = Rp840.000. Kerugian = modal − pendapatan = Rp1.360.000 − Rp840.000 = Rp520.000."
  },
  {
    q: "Sebuah proyek selesai dikerjakan 6 orang selama 12 hari, setelah 6 hari proyek terhenti selama 2 hari. Agar proyek selesai tepat waktu, maka tambahan pekerja yang diperlukan adalah ... Orang",
    opt: ["3","6","8","9","11"],
    a: 0,
    pembahasan: "Total pekerjaan = 6 × 12 = 72 orang-hari. Sudah selesai = 6 × 6 = 36 orang-hari. Sisa = 36 orang-hari. Sisa hari = 12 − 6 − 2 = 4 hari. Pekerja dibutuhkan = 36/4 = 9 orang. Tambahan = 9 − 6 = 3 orang."
  },
  {
    q: "Seekor kuda dapat menghabiskan rumput di ladang selama 3 hari, seekor keledai selama 6 hari. Jika keduanya bersama-sama, waktu yang diperlukan adalah...",
    opt: ["1 hari","2 hari","2.5 hari","3 hari","3.5 hari"],
    a: 1,
    pembahasan: "Kuda: 1/3 ladang/hari. Keledai: 1/6 ladang/hari. Bersama: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 ladang/hari. Waktu = 1 ÷ (1/2) = 2 hari."
  },
  {
    q: "Diketahui lamanya belajar mandiri siswa sebanding dengan nilai ujian. Jika siswa nilai 90 belajar 12 jam/hari, maka siswa nilai 60 belajar selama...",
    opt: ["28 jam/hari","24 jam/hari","18 jam/hari","8 jam/hari","6 jam/hari"],
    a: 3,
    pembahasan: "Proporsi: nilai/jam = konstan. 90/12 = 60/x. x = (60 × 12)/90 = 720/90 = 8 jam/hari."
  },
  {
    q: "Ryan membeli 2 lusin barang A dengan harga Rp 264.000. Harga barang B = setengah harga A. Desi membeli 1 kodi barang A dan 1/2 kodi barang B, berapakah uang yang harus dibayarkan?",
    opt: ["Rp 255.000","Rp 275.000","Rp 295.000","Rp 300.000","Rp 355.000"],
    a: 1,
    pembahasan: "Harga A/buah = Rp264.000 / 24 = Rp11.000. Harga B/buah = Rp5.500. 1 kodi = 20 buah. 1/2 kodi = 10 buah. Total = (20 × 11.000) + (10 × 5.500) = 220.000 + 55.000 = Rp275.000."
  },
  {
    q: "Upah rata-rata 7 orang pekerja Rp25.000/hari. Jika ada tambahan 1 orang, rata-rata menjadi Rp23.750/hari. Upah pekerja baru adalah...",
    opt: ["Rp 15.000","Rp 20.000","Rp 22.500","Rp 27.500","Rp 30.000"],
    a: 0,
    pembahasan: "Total upah 7 orang = 7 × 25.000 = 175.000. Total upah 8 orang = 8 × 23.750 = 190.000. Upah pekerja baru = 190.000 − 175.000 = Rp15.000."
  },
  {
    q: "Skor 2 = 8 siswa, Skor 4 = 12 siswa, Skor 6 = Y siswa. Jika median skornya 4, maka jumlah terbesar yang mungkin untuk Y adalah...",
    opt: ["7","9","19","20","23"],
    a: 2,
    pembahasan: "Median = 4 artinya nilai tengah ada di kelompok skor 4. Total siswa skor ≤4 harus lebih dari separuh total siswa. Skor 2+4 = 20. Agar median tetap 4: Y harus < total siswa skor ≤4, yaitu Y ≤ 19. Jadi Y terbesar = 19."
  },
  {
    q: "Seorang pembalap menempuh jarak 1,5 kilometer dalam waktu 30 detik. Berapakah kecepatannya dalam km/jam?",
    opt: ["50","100","130","180","200"],
    a: 3,
    pembahasan: "Kecepatan = jarak/waktu = 1,5 km / (30/3600 jam) = 1,5 / 0,00833 = 180 km/jam."
  },
  {
    q: "Seekor kucing turun 3 tingkat, naik 2 tingkat, turun 5 tingkat, naik 1 tingkat, naik 9 tingkat, dan turun 2 tingkat. Pada ketinggian berapakah kucing itu berada?",
    opt: ["Sama seperti posisi semula","2 tingkat di atas posisi semula","1 tingkat di bawah posisi semula","1 tingkat di atas posisi semula","2 tingkat di bawah posisi semula"],
    a: 1,
    pembahasan: "Total perpindahan = −3 +2 −5 +1 +9 −2 = +2. Kucing berada 2 tingkat di atas posisi semula."
  },
  {
    q: "√10 x √490 = ...",
    opt: ["89","67","70","80","88"],
    a: 2,
    pembahasan: "√10 × √490 = √(10 × 490) = √4900 = 70."
  },
  {
    q: "55 + (-110) + 0,25 - (-95) - 0,3 = ...",
    opt: ["143,95","267,9","-49,45","67,89","39,95"],
    a: 4,
    pembahasan: "= 55 − 110 + 0,25 + 95 − 0,3 = (55 + 95 + 0,25) − (110 + 0,3) = 150,25 − 110,3 = 39,95."
  },
  {
    q: "1,5 abad + 2 lustrum + 1 semester = ...",
    opt: ["266 tahun","296 tahun","1290 bulan","1926 bulan","2190 bulan"],
    a: 3,
    pembahasan: "1,5 abad = 150 tahun. 2 lustrum = 10 tahun. 1 semester = 0,5 tahun. Total = 160,5 tahun = 160,5 × 12 = 1926 bulan."
  },
  {
    q: "G, H, I, I, J, K, L, L, M, N, O, ..., ...",
    opt: ["P dan Q","O dan O","P dan P","O dan Q","O dan P"],
    a: 4,
    pembahasan: "Pola: setiap huruf ke-3 diulang (I,I — L,L — O,O). Setelah O yang terakhir, urutan berikutnya adalah O (pengulangan) dan P. Jadi: O dan P."
  },
  {
    q: "2040, 2040, 1020, 340, 85, ...",
    opt: ["67","51","42","21","17"],
    a: 4,
    pembahasan: "2040÷1=2040 ; 2040÷2=1020 ; 1020÷3=340 ; 340÷4=85 ; 85÷5=17. Pola pembagi bertambah 1 setiap suku."
  },
  {
    q: "0, 3, 8, 15, 24, ...",
    opt: ["35","37","29","41","34"],
    a: 0,
    pembahasan: "Beda: 3,5,7,9,11 (selisih bertambah 2). Suku berikutnya = 24 + 11 = 35."
  },
  {
    q: "13, 26, ..., ..., 52, 60, 104, 77, 208, 94",
    opt: ["26, 43","39, 52","26, 39","36, 44","39, 46"],
    a: 0,
    pembahasan: "Ada dua deret bergantian: Deret 1 (posisi ganjil): 13, _, 52, 104, 208 (×2). Deret 2 (posisi genap): 26, _, 60, 77, 94 (+17 bergantian). Suku ke-3 = 26, suku ke-4 = 43."
  },
  {
    q: "MUMUK >< ...",
    opt: ["Padat","Lubak","Keropos","Hanur","Kuat"],
    a: 0,
    pembahasan: "MUMUK berarti lapuk/keropos/berongga (tidak padat). Lawan katanya adalah PADAT."
  },
  {
    q: "MUMUK >< ...",
    opt: ["Padat","Lubak","Keropos","Hanur","Kuat"],
    a: 0,
    pembahasan: "MUMUK berarti lapuk/keropos/berongga (tidak padat). Lawan katanya adalah PADAT."
  },
  {
    q: "MUMUK >< ...",
    opt: ["Padat","Lubak","Keropos","Hanur","Kuat"],
    a: 0,
    pembahasan: "MUMUK berarti lapuk/keropos/berongga (tidak padat). Lawan katanya adalah PADAT."
  },
  {
    q: "MUMUK >< ...",
    opt: ["Padat","Lubak","Keropos","Hanur","Kuat"],
    a: 0,
    pembahasan: "MUMUK berarti lapuk/keropos/berongga (tidak padat). Lawan katanya adalah PADAT."
  },
  {
    q: "MUMUK >< ...",
    opt: ["Padat","Lubak","Keropos","Hanur","Kuat"],
    a: 0,
    pembahasan: "MUMUK berarti lapuk/keropos/berongga (tidak padat). Lawan katanya adalah PADAT."
  },
  {
    q: "MUMUK >< ...",
    opt: ["Padat","Lubak","Keropos","Hanur","Kuat"],
    a: 0,
    pembahasan: "MUMUK berarti lapuk/keropos/berongga (tidak padat). Lawan katanya adalah PADAT."
  },
  {
    q: "MUMUK >< ...",
    opt: ["Padat","Lubak","Keropos","Hanur","Kuat"],
    a: 0,
    pembahasan: "MUMUK berarti lapuk/keropos/berongga (tidak padat). Lawan katanya adalah PADAT."
  },
  {
    q: "STANZA = ....",
    opt: ["Halte","Romantis","Gelap","Puisi","Bait"],
    a: 4,
    pembahasan: "STANZA adalah istilah dalam puisi yang berarti bait (sekelompok baris dalam sebuah puisi)."
  },
  {
    q: "EKSPLOITASI >< ...",
    opt: ["Konservasi","Interpretasi","Perlindungan","Konservatori","Kuno"],
    a: 0,
    pembahasan: "EKSPLOITASI berarti pemanfaatan/penggunaan secara berlebihan. Antonimnya adalah KONSERVASI yaitu upaya pelestarian/perlindungan dari penggunaan berlebihan."
  },
  {
    q:`<img style="max-width:100%;border-radius:8px;margin:6px 0;display:block;" src="data:image/png;base64,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" />`,
    opt:["J dan R","J dan S","K dan S","I dan R","I dan S"],
    a:1,
    pembahasan: ""
  } 
];

window.tkpBank1 = [
  {
    q: "Saya baru saja dimutasi ke unit lain yang sama sekali baru bagi saya. Sikap saya ...",
    opts: ["Berusaha mempelajari dan memahami mekanisme kerja unit melalui rekan sejawat","Jarang masuk karena belum jelas apa yang harus saya kerjakan","Berusaha memahami mekanisme kerja unit melalui arsip dan aturan","Hanya duduk sambil menunggu perintah","Mengamati pekerjaan yang dilakukan rekan kerja lainnya"],
    scores: [4,1,5,2,3],
    pembahasan: "Sikap terbaik adalah proaktif mempelajari tugas melalui sumber resmi (arsip dan aturan) = skor 5. Belajar dari rekan sejawat juga positif = skor 4. Mengamati rekan = skor 3. Menunggu perintah = kurang inisiatif = skor 2. Jarang masuk = sangat tidak profesional = skor 1."
  },
  {
    q: "Kerja keras dan cermat merupakan wujud upaya untuk menjadi pribadi yang bermanfaat bagi organisasi. Berkaitan dengan hal tersebut, saya senang ...",
    opts: ["Bekerja dengan standar hasil yang tinggi","Pekerjaan yang rutin","Pekerjaan yang menantang","Pekerjaan yang menumbuhkan kreativitas baru","Bekerja tanpa mengenal lelah dan pamrih"],
    scores: [3,1,2,5,4],
    pembahasan: "Pekerjaan yang menumbuhkan kreativitas baru (skor 5) paling mencerminkan kerja keras dan cermat sekaligus inovatif. Bekerja tanpa pamrih (skor 4) juga sangat baik. Standar tinggi (skor 3) baik namun tidak inovatif. Pekerjaan menantang (skor 2) perlu dibarengi kreativitas. Pekerjaan rutin (skor 1) tidak menunjukkan kemajuan."
  },
  {
    q: "Sikap saya terhadap perubahan, ide baru, dan cara-cara baru dalam melaksanakan suatu pekerjaan adalah ...",
    opts: ["Perubahan adalah sesuatu yang pasti","Perubahan bukan jaminan keberhasilan pekerjaan","Dengan adanya perubahan, kondisi kerja pasti lebih baik","Stabilitas dalam bekerja lebih penting","Keberhasilan pekerjaan tergantung jenis perubahan, ide dan cara baru tersebut"],
    scores: [3,2,5,1,4],
    pembahasan: "Sikap terbaik: memahami bahwa keberhasilan tergantung jenis perubahan (kritis namun terbuka) = skor 5. Menerima perubahan sebagai kepastian = skor 3. Skeptis namun realistis = skor 2. Mengikuti perubahan secara mutlak = skor 3. Menolak perubahan = skor 1."
  },
  {
    q: "Di suatu pasar, Anda melihat ketidakadilan pada pembeli berkebutuhan khusus yang dilakukan oleh karyawan pasar, maka yang sebaiknya Anda lakukan adalah ...",
    opts: ["Melaporkan karyawan tersebut pada atasan pasar","Membiarkannya","Menegur dan mengingatkan karyawan tersebut agar tidak berlaku seperti itu","Cuek, karena bukan urusan Anda","Memberitahu pada pembeli kalau dia telah dibohongi oleh karyawan tersebut"],
    scores: [3,2,5,1,4],
    pembahasan: "Menegur langsung karyawan tersebut (skor 5) adalah tindakan paling tepat dan berani. Memberitahu pembeli (skor 4) melindungi korban. Melaporkan ke atasan (skor 3) membutuhkan proses lebih panjang. Membiarkan (skor 2) tidak bertanggung jawab. Cuek (skor 1) sama sekali tidak peduli."
  },
  {
    q: "Pada satu perusahaan ketika Anda melamar, dan mendapatkan informasi bahwa Anda dapat diterima namun harus memberikan sejumlah uang, maka sikap Anda adalah ...",
    opts: ["Melaporkan kejadian tersebut kepada pimpinan perusahaan","Menerima tawaran tersebut karena tidak ada yang mengetahuinya","Memberikan uang tersebut agar dapat diterima bekerja","Mempertimbangkannya","Menolak dan menegaskan bahwa Anda melamar dengan kemampuan yang Anda miliki"],
    scores: [4,2,1,3,5],
    pembahasan: "Menolak dengan tegas (skor 5) adalah sikap integritas terbaik. Melaporkan ke pimpinan (skor 4) juga sangat tepat. Mempertimbangkan (skor 3) masih ada keraguan. Menerima karena tidak ketahuan (skor 2) tidak bermoral. Memberikan uang suap (skor 1) adalah korupsi."
  },
  {
    q: "Pada situasi rapat ketika pendapat atau saran Anda tidak didengar oleh pimpinan, maka sikap Anda adalah ...",
    opts: ["Kecewa dan meminta penjelasan saran pimpinan yang lebih baik","Menerima dengan tenang","Kecewa dan memilih diam","Tidak terima atas sikap pimpinan tersebut","Menerima dan meminta penjelasan atas ide yang lebih baik"],
    scores: [3,4,2,1,5],
    pembahasan: "Menerima dan meminta penjelasan (skor 5) menunjukkan keterbukaan dan profesionalisme. Menerima dengan tenang (skor 4) menunjukkan kedewasaan. Meminta penjelasan sambil kecewa (skor 3) masih komunikatif. Diam (skor 2) tidak produktif. Tidak terima (skor 1) emosional dan kontraproduktif."
  },
  {
    q: "Pada satu kesempatan Anda berada pada posisi harus mengerjakan tugas rekan kerja yang sakit, maka Anda akan bersikap ...",
    opts: ["Tidak mengerjakan tugas tersebut karena bukan tugas Anda","Berusaha mengerjakan tugas tersebut","Belajar terlebih dahulu","Memprotes keputusan tersebut","Mengerjakan dengan terpaksa"],
    scores: [1,4,5,3,2],
    pembahasan: "Belajar dulu sebelum mengerjakan (skor 5) menunjukkan tanggung jawab dan kompetensi. Berusaha mengerjakan (skor 4) positif. Protes (skor 3) masih dapat ditoleransi. Mengerjakan terpaksa (skor 2) kurang tulus. Menolak sama sekali (skor 1) tidak profesional."
  },
  {
    q: "Hampir sebagian rekan kerja Anda sering pulang tidak tepat waktu, lebih tepatnya 15 menit sebelum waktu yang ditentukan, maka sikap Anda ...",
    opts: ["Melaporkan pada atasan","Tetap pulang sesuai jadwal yang ditentukan","Ikut pulang","Membiarkan mereka pulang","Segera menyelesaikan pekerjaan dan menyusul pulang"],
    scores: [4,5,1,3,2],
    pembahasan: "Tetap pulang sesuai jadwal (skor 5) menunjukkan kedisiplinan dan integritas. Melaporkan ke atasan (skor 4) juga benar. Membiarkan (skor 3) tidak memberi contoh baik. Menyusul pulang (skor 2) mengikuti kebiasaan buruk. Ikut pulang awal (skor 1) sama-sama melanggar aturan."
  },
  {
    q: "Apakah Anda merasa sulit untuk meminta bantuan pada rekan atau teman kerja?",
    opts: ["Saya jarang meminta tolong karena itu tugas saya dan berusaha menyelesaikannya sendiri","Saya merasa sulit karena tidak ingin memberatkan orang lain","Saya tidak pernah merasa sulit karena meminta tolong adalah hal yang sopan dan baik","Tergantung situasi dan urgensi","Jika dalam kondisi benar-benar mendesak maka saya akan minta tolong orang lain"],
    scores: [4,1,3,5,2],
    pembahasan: "Tergantung situasi dan urgensi (skor 5) adalah sikap paling bijaksana. Mandiri tapi minta tolong kalau perlu (skor 4) menunjukkan kemandirian. Tidak pernah merasa sulit (skor 3) terlalu bergantung. Hanya minta kalau mendesak (skor 2) terlalu tertutup. Tidak mau memberatkan (skor 1) justru kontraproduktif untuk tim."
  },
  {
    q: "Apa yang Anda rasakan dan lakukan saat menerima pujian dari atasan Anda?",
    opts: ["Saya merasa biasa saja","Saya merasa bersyukur dan puas atas hasil kerja saya","Saya merasa sulit menerima pujian tersebut karena menurut saya itu berlebihan","Saya merasa senang dan bangga atas pencapaian saya","Saya merasa sedikit tersipu karena hal tersebut"],
    scores: [2,5,1,4,3],
    pembahasan: "Bersyukur dan puas (skor 5) menunjukkan menghargai apresiasi sekaligus motivasi diri. Senang dan bangga (skor 4) juga positif. Tersipu (skor 3) moderat. Biasa saja (skor 2) kurang menghargai. Sulit menerima pujian (skor 1) menghambat motivasi."
  },
  {
    q: "Jika kolega Anda membatalkan janjinya secara tiba-tiba untuk suatu keperluan penting, apa yang akan Anda lakukan?",
    opts: ["Jika saya sangat kecewa, saya tidak dapat menyembunyikannya","Saya akan menunjukan betapa kecewanya saya","Saya selalu dapat menyembunyikan rasa kecewa","Jika hal tersebut dapat ditoleransi dan dia menjelaskan dengan jelas maka saya akan biasa saja","Jika hal tersebut bukanlah hal yang cukup penting maka saya tidak akan menunjukkan sikap kecewa"],
    scores: [2,1,3,5,4],
    pembahasan: "Biasa saja jika ada penjelasan yang jelas (skor 5) menunjukkan empati dan profesionalisme. Tidak menunjukkan kecewa jika tidak penting (skor 4) juga matang. Menyembunyikan perasaan (skor 3) kurang autentik. Tidak bisa menahan emosi (skor 2) kurang kontrol diri. Mengungkapkan kekecewaan secara langsung (skor 1) tidak profesional."
  },
  {
    q: "Apakah Anda akan bersikeras agar orang lain melakukan pembagian secara adil?",
    opts: ["Melihat kondisi, jika kedua pihak puas walaupun bukan posisi yang adil, maka tidak masalah","Walaupun tidak adil, jika dalam proporsinya cukup dan dapat berjalan baik tidak masalah","Saya tidak pernah memaksa harus dibagi secara adil","Jelas, karena keadilan adalah utama dan mutlak","Tergantung apakah hal tersebut dapat ditoleransi atau tidak"],
    scores: [4,3,1,5,2],
    pembahasan: "Keadilan adalah utama (skor 5) mencerminkan prinsip yang kuat. Mempertimbangkan kepuasan semua pihak (skor 4) juga bijaksana. Melihat proporsi (skor 3) pragmatis. Tergantung toleransi (skor 2) kurang berprinsip. Tidak pernah mempermasalahkan keadilan (skor 1) tidak peduli keadilan."
  },
  {
    q: "Apa yang Anda lakukan dalam sebuah diskusi dengan kelompok kecil dari teman-teman Anda?",
    opts: ["Saya lebih banyak mendengar dan berbicara sekedarnya","Saya selalu aktif berpendapat dan mengarahkan teman-teman","Saya menjadi pengamat sejenak lalu aktif berpendapat","Saya adalah pendengar dan pengamat yang baik dalam diskusi","Jika perlu bicara maka saya utarakan, jika tidak, saya cukup mendengarkan"],
    scores: [2,4,5,1,3],
    pembahasan: "Mengamati dulu lalu aktif berpendapat (skor 5) menunjukkan kecerdasan dan kontribusi optimal. Aktif mengarahkan (skor 4) menunjukkan kepemimpinan. Bicara jika perlu (skor 3) cukup moderat. Hanya mendengar (skor 2) kurang kontributif. Hanya pendengar (skor 1) pasif."
  },
  {
    q: "Bagaimana Anda menilai sebuah permasalahan?",
    opts: ["Lakukan saja untuk menyelesaikannya","Meminta pendapat untuk mencari solusi","Melakukan sebisa mungkin sambil berpikir cara terbaik","Mempertimbangkan terlebih dahulu","Menambah informasi, mempertimbangkan, kemudian eksekusi"],
    scores: [1,2,4,3,5],
    pembahasan: "Menambah informasi → pertimbangkan → eksekusi (skor 5) adalah pendekatan paling sistematis. Melakukan sambil berpikir (skor 4) adaptif. Mempertimbangkan dulu (skor 3) hati-hati. Meminta pendapat (skor 2) kurang mandiri. Langsung lakukan tanpa berpikir (skor 1) impulsif."
  },
  {
    q: "Seberapa sering Anda menyisihkan waktu untuk merencanakan dan berpikir tentang pekerjaan Anda?",
    opts: ["Saat saya membutuhkan berpikir ulang maka saya akan mengatur kembali pekerjaan saya","Saya hampir tidak pernah menyisihkan waktu","Saya selalu rutin mengevaluasi diri dan memikirkan kembali seminggu sekali","Terkadang saya memikirkannya saat waktu senggang","Saya selalu menjadwalkan rutin untuk evaluasi dan merencanakan ulang walaupun tidak rutin"],
    scores: [3,1,5,2,4],
    pembahasan: "Evaluasi rutin seminggu sekali (skor 5) paling terencana. Menjadwalkan evaluasi meski tidak rutin (skor 4) juga baik. Evaluasi saat dibutuhkan (skor 3) reaktif. Saat senggang (skor 2) tidak terencana. Hampir tidak pernah (skor 1) tidak reflektif."
  },
  {
    q: "Apa pendapat Anda tentang waktu?",
    opts: ["Santai dan berusaha sebaik mungkin","Tepat waktu adalah segalanya","Berusaha sebaik mungkin memanfaatkan waktu","Tepat waktu adalah cara menghargai orang lain, maka membuat perencanaan merupakan standar","Harus dapat memanfaatkan waktu semaksimal mungkin secara otomatis"],
    scores: [1,4,3,5,2],
    pembahasan: "Tepat waktu sebagai penghargaan dan perencanaan sebagai standar (skor 5) adalah pandangan paling komprehensif. Tepat waktu adalah segalanya (skor 4) disiplin. Berusaha memanfaatkan waktu (skor 3) umum. Memaksimalkan waktu otomatis (skor 2) kurang terencana. Santai (skor 1) tidak profesional."
  },
  {
    q: "Seberapa pentingkah kekompakan tim bagi Anda?",
    opts: ["Sangat penting, walaupun tujuan tercapai lebih lama, tetapi kedekatan individu harus terbangun kuat","Tidak terlalu penting karena yang penting adalah target","Cukup penting karena itu merupakan dorongan mencapai tujuan tim","Biasa saja karena kita di dunia ini profesional","Penting tapi bukan yang utama"],
    scores: [3,1,5,2,4],
    pembahasan: "Kekompakan sebagai dorongan mencapai tujuan (skor 5) mengintegrasikan people dan performance. Penting tapi bukan utama (skor 4) realistis. Sangat penting meski lambat (skor 3) cenderung mengabaikan target. Biasa saja (skor 2) tidak kolaboratif. Tidak penting (skor 1) individualis."
  },
  {
    q: "Bagaimana menurut Anda tentang pencapaian target tim dan individu?",
    opts: ["Sebisa mungkin kedua target tersebut harus beriringan","Apabila target individu tercapai maka target tim juga akan tercapai","Target tim harus diutamakan yang kemudian diikuti target individu","Target individu terlebih dahulu lalu kemudian tim","Target tim adalah utama walau target individu tidak tercapai"],
    scores: [5,2,4,1,3],
    pembahasan: "Target tim dan individu beriringan (skor 5) paling seimbang. Mengutamakan tim lalu individu (skor 4) kolaboratif. Target tim utama meski individu tidak tercapai (skor 3) terlalu berkorban. Target individu otomatis = target tim (skor 2) oversimplifikasi. Target individu dulu (skor 1) egois."
  },
  {
    q: "Sebagai seorang pemimpin, apakah Anda selalu memberi tahu setiap informasi kepada anggota?",
    opts: ["Hanya menginformasikan secara umum dan tersirat","Saya tidak pernah menginformasikan itu adalah kewajiban saya sebagai pemimpin","Selalu, karena transparansi itu penting dalam tim","Tidak semua informasi, hanya hal yang bersifat umum dan berhak diketahui","Hanya memberitahukan jika ditanya"],
    scores: [4,1,3,5,2],
    pembahasan: "Memberi info yang relevan dan berhak diketahui anggota (skor 5) adalah transparansi yang tepat. Menginformasikan secara umum (skor 4) cukup baik. Selalu transparan penuh (skor 3) bisa bermasalah untuk info sensitif. Hanya jika ditanya (skor 2) tidak proaktif. Tidak pernah (skor 1) otoriter."
  },
  {
    q: "Bagaimana perasaan Anda tentang memecahkan konflik antar pribadi dalam tim?",
    opts: ["Hal tersebut merupakan tanggung jawab kedua pihak","Hal tersebut adalah sebuah masalah besar bagi saya","Ketua tim adalah penanggung jawab masalah tersebut","Hal tersebut merupakan pembelajaran bagi saya","Hal tersebut adalah masalah bagi tim dan harus diselesaikan secara tim"],
    scores: [5,1,3,4,2],
    pembahasan: "Tanggung jawab kedua pihak (skor 5) paling tepat dan mandiri. Pembelajaran bagi saya (skor 4) positif. Tanggung jawab ketua tim (skor 3) menghindari tanggung jawab. Masalah tim diselesaikan tim (skor 2) terlalu kolektif tanpa arah. Masalah besar (skor 1) dramatisir."
  },
  {
    q: "Bagaimana cara Anda menyatakan pemikiran Anda?",
    opts: ["Lugas dan tegas","Nyata dan tegas","Secara umum dan nyata","Lugas dan detail","Nyata, detail, dan tegas"],
    scores: [3,4,1,2,5],
    pembahasan: "Nyata, detail, dan tegas (skor 5) adalah cara komunikasi paling efektif dan profesional. Nyata dan tegas (skor 4) baik. Lugas dan tegas (skor 3) cukup. Lugas dan detail (skor 2) kurang tegas. Umum dan nyata (skor 1) kurang informatif."
  },
  {
    q: "Apakah menurut Anda seorang pemimpin butuh menjadi pendengar?",
    opts: ["Tidak perlu","Sangat perlu","Perlu","Sangat tidak perlu","Terkadang perlu"],
    scores: [2,5,4,1,3],
    pembahasan: "Pemimpin sangat perlu menjadi pendengar (skor 5) karena mendengarkan adalah kunci kepemimpinan efektif. Perlu (skor 4) masih positif. Terkadang perlu (skor 3) kurang komitmen. Tidak perlu (skor 2) salah kaprah. Sangat tidak perlu (skor 1) otoriter."
  },
  {
    q: "Jika atasan meminta melakukan suatu pekerjaan namun hasilnya tidak memuaskan, biasanya saya ...",
    opts: ["Tidak kecewa meskipun tidak sesuai dengan harapan","Yang penting melakukannya","Memaksakan melakukan perintah meskipun mengecewakan","Memaklumi jika perintahnya tidak dapat dilaksanakan dengan sempurna","Cukup meminta dan tidak ditindaklanjuti"],
    scores: [3,5,2,4,1],
    pembahasan: "Yang penting melakukannya (skor 5) menunjukkan loyalitas penuh. Memaklumi ketidaksempurnaan (skor 4) realistis. Tidak kecewa meski tidak sesuai harapan (skor 3) ikhlas. Memaksakan meski mengecewakan (skor 2) kurang etis. Tidak ditindaklanjuti (skor 1) tidak bertanggung jawab."
  },
  {
    q: "Dalam kantor Anda menemukan atasan melakukan manipulasi laporan keuangan, maka bagaimana tanggapan Anda ...",
    opts: ["Mengingatkan dan melaporkan kepada yang berwenang","Menolak akan hal tersebut namun tidak berani melaporkan","Menerima karena sudah menjadi tradisi di Indonesia","Menerima karena hal tersebut sudah sering terjadi","Anda memilih diam agar tidak terlibat"],
    scores: [5,3,1,2,4],
    pembahasan: "Mengingatkan dan melaporkan ke yang berwenang (skor 5) adalah tindakan berani dan berintegritas. Diam agar tidak terlibat (skor 4) masih bisa dipahami namun kurang berani. Menolak tapi tidak melapor (skor 3) setengah-setengah. Menerima karena sudah sering terjadi (skor 2) pasrah. Menerima karena tradisi (skor 1) membenarkan korupsi."
  },
  {
    q: "Jika dalam sebuah perencanaan rencana terlihat rumit, maka reaksi apa yang Anda tunjukan ...",
    opts: ["Saya minta pendapat orang lain dan yang penting saya mencoba terlebih dahulu","Saya berani mencobanya setelah mempertimbangkannya","Saya tidak mau mencobanya","Yang terpenting adalah keputusan untuk mencoba terlebih dahulu","Saya khawatir jika mencobanya akan mengalami kegagalan"],
    scores: [4,5,1,3,2],
    pembahasan: "Berani mencoba setelah mempertimbangkan (skor 5) menunjukkan keberanian terukur. Minta pendapat dan tetap mencoba (skor 4) juga baik. Mencoba tanpa pertimbangan (skor 3) impulsif. Khawatir gagal (skor 2) kurang percaya diri. Tidak mau mencoba (skor 1) tidak memiliki growth mindset."
  },
  {
    q: "Ketika ada suatu permasalahan dalam pekerjaan yang berkaitan dengan kewajiban Anda, maka Anda ...",
    opts: ["Melihat dulu adakah pihak lain yang turut bersalah","Dalam permasalahan tersebut seharusnya ada orang lain yang membantu","Mencari orang yang harus disalahkan","Akan tetap bertanggung jawab dan mencari solusi bersama","Membiarkan masalah tersebut untuk terus berlangsung"],
    scores: [3,4,1,5,2],
    pembahasan: "Tetap bertanggung jawab dan cari solusi bersama (skor 5) paling profesional. Mencari bantuan orang lain (skor 4) kooperatif. Melihat siapa yang turut bersalah (skor 3) analitis meski defensif. Membiarkan masalah (skor 2) tidak bertanggung jawab. Mencari kambing hitam (skor 1) sangat tidak profesional."
  },
  {
    q: "Dalam agenda presentasi di kantor Anda telah mempersiapkan diri dengan baik, maka ...",
    opts: ["Saya pasrah jika ada kendala","Mungkin saja presentasi saya terganggu hal lain","Meski sudah dipersiapkan saya akan tetap merasa cemas","Saya akan sangat yakin presentasi tersebut akan berjalan dengan lancar, dengan syarat sudah mempersiapkan dengan maksimal","Tidak akan mungkin apabila presentasi saya tidak lancar"],
    scores: [4,2,1,5,3],
    pembahasan: "Yakin lancar karena sudah persiapan maksimal (skor 5) menunjukkan kepercayaan diri berbasis persiapan. Tidak mungkin tidak lancar (skor 3) terlalu pede. Pasrah (skor 4) ikhlas namun tetap siap. Kemungkinan terganggu (skor 2) kurang optimis. Tetap cemas meski sudah siap (skor 1) tidak percaya diri."
  },
  {
    q: "Apabila dalam penilaian terhadap diri saya kurang baik, maka saya akan bertindak ...",
    opts: ["Belajar lebih giat lagi","Tidak peduli","Peduli","Mawas diri","Mengikuti pelatihan"],
    scores: [5,1,4,2,3],
    pembahasan: "Belajar lebih giat (skor 5) adalah respons paling konstruktif. Peduli (skor 4) menunjukkan kepedulian. Mengikuti pelatihan (skor 3) tindakan nyata. Mawas diri (skor 2) perlu tapi tidak cukup. Tidak peduli (skor 1) tidak mau berkembang."
  },
  {
    q: "Pada saat dalam pekerjaan Anda dituntut untuk melaksanakan tugas berat dan menuntut kemampuan tinggi, maka saya akan ...",
    opts: ["Berusaha mencari bantuan orang lain","Meninggalkan tugas begitu saja","Berusaha mencari cara penyelesaian yang tidak membutuhkan waktu panjang","Berusaha menyelesaikan tugas tersebut perlahan walau harus memakan waktu yang lama","Berhenti untuk mencari selingan pekerjaan yang lain"],
    scores: [4,1,5,3,2],
    pembahasan: "Mencari cara penyelesaian yang efisien (skor 5) menunjukkan kecerdasan. Mencari bantuan (skor 4) kolaboratif. Menyelesaikan perlahan (skor 3) gigih. Mencari selingan (skor 2) menghindari masalah. Meninggalkan tugas (skor 1) sangat tidak profesional."
  },
  {
    q: "Pada suatu waktu teman Anda memaksa untuk menerobos lampu merah, maka Anda akan ...",
    opts: ["Berhenti meskipun teman Anda melaju","Terus jalan karena mengikuti kendaraan lain","Berhenti ketika sudah sampai batas marka jalan","Tanpa pikir panjang mengikuti ajakan teman","Berhenti dan menghiraukan ajakan teman"],
    scores: [4,2,3,1,5],
    pembahasan: "Berhenti dan menghiraukan ajakan teman (skor 5) paling berani dan berintegritas. Berhenti meski teman melaju (skor 4) taat aturan. Berhenti di marka (skor 3) minimal sesuai aturan. Ikut kendaraan lain (skor 2) ikut-ikutan. Mengikuti ajakan teman (skor 1) melanggar hukum."
  },
  {
    q: "Ketika saya mengalami kesalahpahaman dengan teman, maka saya ...",
    opts: ["Berusaha mencari informasi permasalahan yang sebenarnya","Tetap tenang dan yakin menyelesaikannya","Mengabaikan karena itu hanya masalah kecil","Merasa takut akan kehilangan teman","Bingung yang menyebabkan tidak bisa tidur"],
    scores: [5,4,3,2,1],
    pembahasan: "Mencari tahu informasi sebenarnya (skor 5) paling proaktif dan solutif. Tenang dan yakin selesaikan (skor 4) dewasa. Mengabaikan (skor 3) tidak menyelesaikan masalah. Takut kehilangan teman (skor 2) emosional. Bingung sampai tidak bisa tidur (skor 1) tidak mampu mengelola emosi."
  },
  {
    q: "Ketika proyek yang saya pimpin tidak optimal karena kesalahan salah satu individu dalam tim, maka saya ...",
    opts: ["Hal tersebut merupakan kekeliruan dari individu tersebut","Individu tersebut harus bertanggung jawab atas semuanya","Saya tidak dapat dipersalahkan","Itu tidak masuk dalam tanggung jawab saya","Bagaimana pun juga, sebagai pemimpin saya harus ikut bertanggung jawab"],
    scores: [3,4,1,2,5],
    pembahasan: "Pemimpin ikut bertanggung jawab (skor 5) adalah sikap kepemimpinan sejati. Individu tersebut harus bertanggung jawab (skor 4) juga relevan namun tidak cukup. Kekeliruan individu (skor 3) analitis tapi defensif. Tidak masuk tanggung jawab saya (skor 2) lepas tangan. Saya tidak bisa dipersalahkan (skor 1) sangat tidak bertanggung jawab."
  },
  {
    q: "Jika Anda menjadi seorang pemimpin, apakah seorang pemimpin harus mengakui kesalahan itu dibutuhkan?",
    opts: ["Tidak dibutuhkan karena pemimpin harus bertindak benar","Terkadang dibutuhkan","Tidak terlalu dibutuhkan karena kesalahan harus segera diselesaikan","Sangat dibutuhkan","Dibutuhkan jika memang bersalah"],
    scores: [1,3,2,5,4],
    pembahasan: "Mengakui kesalahan sangat dibutuhkan (skor 5) karena pemimpin yang akuntabel membangun kepercayaan. Dibutuhkan jika bersalah (skor 4) realistis. Terkadang dibutuhkan (skor 3) kurang komitmen. Tidak terlalu dibutuhkan (skor 2) menghindar. Tidak dibutuhkan (skor 1) otoriter."
  },
  {
    q: "Dalam mengambil keputusan biasanya saya ...",
    opts: ["Mengikuti yang terbanyak","Memutuskan bersama-sama","Memaksakan kehendak","Cukup mengutarakan ide dan pendapat","Membiarkan apapun keputusannya"],
    scores: [4,5,1,3,2],
    pembahasan: "Memutuskan bersama-sama (skor 5) adalah pengambilan keputusan paling demokratis dan kolaboratif. Mengikuti suara terbanyak (skor 4) demokratis. Mengutarakan ide (skor 3) berkontribusi tapi tidak tegas. Membiarkan keputusan (skor 2) pasif. Memaksakan kehendak (skor 1) otoriter."
  },
  {
    q: "Ketika membuat sebuah peraturan atau tugas di lingkungan pekerjaan, maka sikap yang harus dilakukan oleh seorang pemimpin adalah ...",
    opts: ["Tidak membuat peraturan tertulis, cukup semua orang mengetahui","Meminta saran dan masukan dari seluruh tim","Cukup mendelegasikannya","Memutuskan sendiri","Tidak perlu ada peraturan yang harus dibuat"],
    scores: [2,5,3,4,1],
    pembahasan: "Meminta saran seluruh tim (skor 5) menciptakan rasa memiliki dan komitmen. Memutuskan sendiri (skor 4) efisien. Mendelegasikan (skor 3) praktis. Tidak tertulis (skor 2) berisiko multi-tafsir. Tidak membuat peraturan (skor 1) tidak terstruktur."
  },
  {
    q: "Anda sedang berada di sebuah gedung mall. Tiba-tiba Anda melihat seseorang meninggalkan tas hitam besar di tempat umum. Yang akan Anda lakukan dalam situasi ini adalah ...",
    opts: ["Berteriak dengan kencang agar semua orang menghindari tas hitam tersebut dengan cepat","Melaporkan apa yang Anda lihat kepada sekuriti yang berjaga di mall tersebut","Mengamankan tas tersebut dan melemparkannya ke tanah lapang","Menelpon pihak berwajib dan menceritakan kecurigaan Anda","Melaporkan kejadian tersebut kepada pihak mall bagian informasi agar diambil tindakan"],
    scores: [1,5,2,3,4],
    pembahasan: "Melaporkan ke sekuriti (skor 5) adalah tindakan paling tepat, cepat, dan tidak panik. Melapor ke informasi mall (skor 4) juga baik. Menelepon polisi (skor 3) tepat tapi lebih lambat. Mengamankan tas sendiri (skor 2) berbahaya. Berteriak menimbulkan kepanikan massal (skor 1) kontraproduktif."
  },
  {
    q: "Anda mendengar pembicaraan beberapa orang di bandara yang bercanda bahwa salah satu dari mereka membawa bom. Jika Anda adalah Indah, bagaimana Anda menyikapi situasi tersebut?",
    opts: ["Saya akan mengingatkan mereka bahwa bercanda soal bom dapat diancam hukuman pidana","Segera bereaksi dengan melaporkan kepada petugas keamanan","Mengabaikannya karena Anda tahu itu hanya candaan","Mengatakan pada mereka untuk tidak mencandai perihal bom","Mengamankan tas tersebut dan melemparkannya ke tanah lapang"],
    scores: [5,4,1,3,2],
    pembahasan: "Mengingatkan bahwa candaan bom dapat dijerat hukum (skor 5) edukatif dan mencegah masalah hukum. Melapor ke petugas (skor 4) prosedural. Meminta mereka tidak bercanda (skor 3) kurang tegas. Mengamankan tas (skor 2) salah situasi. Mengabaikan (skor 1) berisiko."
  },
  {
    q: "Pemerintah melakukan penangkapan pasca bom bunuh diri di Makassar dan ternyata anggota keluarga Budi terlibat. Budi dimintai keterangan. Bila Anda di posisi Budi, yang akan Anda lakukan adalah ...",
    opts: ["Berusaha membantu sebisanya dan menjawab semua pertanyaan dari pihak berwajib","Berusaha menjelaskan kepada pihak berwajib bahwa ia tidak terlibat","Berusaha membantu anggota keluarga untuk keluar dari permasalahan tersebut","Memberikan keterangan sesuai pengetahuan Anda apa adanya","Berusaha membantu sebisanya dan menjawab semua pertanyaan dari pihak berwajib"],
    scores: [4,2,1,5,3],
    pembahasan: "Memberikan keterangan apa adanya sesuai pengetahuan (skor 5) adalah sikap warga negara yang bertanggung jawab dan jujur. Membantu menjawab semua pertanyaan (skor 4) kooperatif. Menjelaskan tidak terlibat (skor 2) defensif. Membantu keluarga keluar dari masalah (skor 1) bisa dianggap obstruction of justice."
  },
  {
    q: "Team Anda mendapat tugas dari atasan untuk menyelesaikan dokumen penting. Namun salah seorang rekan Anda sulit diajak bekerjasama. Sikap Anda ...",
    opts: ["Meminta atasan untuk menegurnya agar bisa diajak bekerja sama","Menyuruhnya untuk menyelesaikan tugasnya secepat mungkin","Memintanya untuk tidak menganggap sepele setiap pekerjaan","Memberikan pengertian agar sadar akan tugas dan tanggung jawab","Membiarkan saja, karena bukan urusan Anda untuk menegurnya"],
    scores: [2,3,4,5,1],
    pembahasan: "Memberikan pengertian tentang tugas dan tanggung jawab (skor 5) paling dewasa dan konstruktif. Meminta tidak meremehkan pekerjaan (skor 4) edukatif. Menyuruh selesaikan cepat (skor 3) langsung tapi kurang personal. Minta atasan menegur (skor 2) eskalasi yang kurang perlu. Membiarkan saja (skor 1) tidak kooperatif."
  },
  {
    q: "Hadi adalah seorang penyuluh pertanian yang ditugaskan di desa yang mengalami gagal panen. Para petani menolak penyuluhan dan berpegang pada tradisi sesajen. Sikap Hadi seharusnya ...",
    opts: ["Tidak ambil pusing dengan pandangan para petani","Tetap memberikan pengarahan tanpa memaksa petani","Tetap memberikan arahan dan motivasi sehingga bisa meyakinkan mereka melalui proyek percontohan","Tidak jadi memberikan pengarahan dan melaporkan kepada atasannya","Tetap memberikan pengarahan pada petani tapi dengan cara yang lebih formal"],
    scores: [2,3,5,1,4],
    pembahasan: "Memberikan arahan, motivasi, dan proyek percontohan (skor 5) paling efektif mengubah perilaku. Formal melalui dinas (skor 4) prosedural. Memberikan pengarahan tanpa memaksa (skor 3) menghormati. Tidak ambil pusing (skor 2) tidak profesional. Melapor ke atasan dan berhenti (skor 1) menyerah."
  },
  {
    q: "Saat presentasi, rekan Anda menyanggah penjelasan Anda di tengah-tengah Anda berbicara. Apa pendapat Anda ...",
    opts: ["Rekan Anda kurang memahami sopan santun dalam berdiskusi","Wajar saja karena dalam diskusi komunikasi akan berlangsung dengan dua arah","Seharusnya ia mendengarkan dulu tanggapan anda","Seharusnya rekan saya menunggu gilirannya berbicara","Memaklumi perbedaan pendapat dan gagasan"],
    scores: [2,3,5,4,1],
    pembahasan: "Memaklumi perbedaan pendapat (skor 5) menunjukkan kedewasaan dan keterbukaan. Menunggu giliran berbicara (skor 4) benar secara etika. Wajar dalam diskusi dua arah (skor 3) toleran. Seharusnya mendengarkan dulu (skor 2) defensif. Kurang sopan santun (skor 1) menghakimi."
  },
  {
    q: "Anda harus berbagi ruangan dengan karyawan baru, padahal Anda lebih nyaman bekerja sendiri. Maka yang akan saya lakukan adalah ...",
    opts: ["Berusaha mengenal rekan kerja tersebut","Sering membahas pekerjaan bersama dan sharing dengan rekan kerja","Menerima keputusan atasan dengan lapang dada","Membiasakan diri dan membangun suasana kerja yang menyenangkan","Fokus mengerjakan pekerjaan apapun situasinya"],
    scores: [3,2,4,5,1],
    pembahasan: "Membiasakan diri dan membangun suasana menyenangkan (skor 5) paling adaptif dan positif. Menerima keputusan dengan lapang dada (skor 4) ikhlas. Berusaha mengenal rekan (skor 3) baik untuk relasi. Membahas pekerjaan bersama (skor 2) profesional tapi minim interaksi personal. Fokus kerja saja (skor 1) kurang beradaptasi."
  },
  {
    q: "Anda memimpin proyek untuk pertama kali dengan anggota tim lebih tua dari Anda. Salah satunya tidak menyelesaikan tugas tepat waktu, dan saat rapat evaluasi meminta izin pulang lebih dulu. Sikap Anda ...",
    opts: ["Meminta pertimbangan anggota lain","Membujuknya agar mengikuti rapat evaluasi terlebih dahulu","Memaksanya untuk tidak buru-buru pulang","Menegurnya dan memintanya untuk mengikuti rapat segera","Memintanya untuk mempertimbangkan kepulangannya"],
    scores: [2,4,3,5,1],
    pembahasan: "Menegur dan meminta ikut rapat (skor 5) tegas dan profesional. Membujuk (skor 4) lembut namun efektif. Memaksa (skor 3) kurang bijak. Meminta pertimbangan anggota lain (skor 2) tidak tegas sebagai pemimpin. Meminta mempertimbangkan (skor 1) terlalu pasif."
  },
  {
    q: "Atasan menugaskan Anda menganalisis hasil riset dalam 1 hari di hari minggu, padahal ada beberapa agenda pribadi yang sudah terjadwal. Bagaimana respon Anda?",
    opts: ["Membagi waktu agar dapat menyelesaikan tugas di tempat yang tenang baru kemudian mengerjakan kegiatan pribadi","Meminta pasangan untuk mewakilkan semua kegiatan pribadi sehingga saya dapat fokus belajar","Menyelesaikan kegiatan pribadi sampai selesai baru kemudian mempelajari hasil riset","Menolak permintaan atasan karena waktunya mendadak dan mengganggu waktu libur","Meminta rekan kerja untuk mempelajari hasil riset kemudian hasilnya dikirimkan ke saya"],
    scores: [5,4,2,1,3],
    pembahasan: "Membagi waktu antara tugas dan agenda pribadi (skor 5) paling seimbang dan profesional. Meminta pasangan mewakilkan agenda (skor 4) menunjukkan prioritas kerja. Menyelesaikan agenda pribadi dulu (skor 2) kurang prioritas. Mendelegasikan ke rekan (skor 3) boleh namun kurang bertanggung jawab. Menolak (skor 1) tidak profesional."
  },
  {
    q: "Anda adalah pemimpin pemerintah menghadapi konflik suku asli vs suku pendatang yang menyebabkan rumah hangus dan pertumpahan darah. Untuk menyelesaikan konflik tersebut Anda akan ...",
    opts: ["Menumbuhkembangkan toleransi antar suku","Melakukan penyuluhan kepada kedua suku","Memerintahkan aparat untuk mengamankan","Memberikan vonis terhadap kedua suku","Mengadakan rekonsiliasi antar suku"],
    scores: [4,2,3,1,5],
    pembahasan: "Rekonsiliasi antar suku (skor 5) adalah penyelesaian konflik paling komprehensif dan berkelanjutan. Menumbuhkan toleransi (skor 4) jangka panjang. Mengamankan dengan aparat (skor 3) penanganan darurat. Penyuluhan (skor 2) edukatif tapi lambat. Memberikan vonis (skor 1) justru memperparah konflik."
  }
];

// ==================== PAKET 2 ====================
// Tambahkan soal paket 2 di sini mengikuti format yang sama
window.twkBank2 = [];
window.tiuBank2 = [];
window.tkpBank2 = [];

// ==================== PAKET 3 ====================
window.twkBank3 = [];
window.tiuBank3 = [];
window.tkpBank3 = [];

// ==================== PAKET 4 ====================
window.twkBank4 = [];
window.tiuBank4 = [];
window.tkpBank4 = [];

// ==================== PAKET 5 ====================
window.twkBank5 = [];
window.tiuBank5 = [];
window.tkpBank5 = [];
