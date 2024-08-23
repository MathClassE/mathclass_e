// script

// script for --M E M B E R--
//Data
const members = [
    {
      name: 'AJIE FAUZAN MADANI',
      description: 'Saya sangat suka berolahraga',
      origin: 'Ciamis, Jawa Barat',
      image: 'assets/photos/aji.jpg',
      instagram: 'https://www.instagram.com/ajifauzanmadani',
      modalId: 'profileModal1'
    },
    {
      name: 'ANJANI SRI SUANDARI SUDRAJAT',
      description: 'Saya orangnya pecinta milo garis keras hehe',
      origin: 'Garut, Jawa Barat',
      image: 'assets/photos/anjani.jpg',
      instagram: 'https://www.instagram.com/anjannnss',
      modalId: 'profileModal2'
    },
    {
      name: 'ARNI SITI ROHANI',
      description: '-',
      origin: 'Garut, Jawa Barat',
      image: 'assets/photos/arni.jpg',
      instagram: 'https://www.instagram.com/arnii.s.r',
      modalId: 'profileModal3'
    },
    {
      name: 'AURA ANASYA PRIMADINA',
      description: 'Halo! Aku Aura. Aku suka hal yang unik dan selalu penasaran tentang sesuatu. The unknown ending, that\'s why my life is even more beautiful.',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/aura.jpg',
      instagram: 'https://www.instagram.com/auuura_____',
      modalId: 'profileModal4'
    },
    {
      name: 'DILA MAULIDA',
      description: '-',
      origin: 'Tasikmalaya, Jawa Barat',
      image: 'assets/photos/dila.png',
      instagram: 'https://www.instagram.com/dlmaulida',
      modalId: 'profileModal5'
    }, 
    {
      name: 'DIMAS SULTHAN NAJMI FAUZI',
      description: 'Saya lulusan MA yang suka menghitung, pantang menyerah, dan mau menghadapi tantangan. Saat ini aktif sebagai mahasiswa dari jurusan Pendidikan Matematika di Universitas Islam Negeri Sunan Gunung Djati Bandung.',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/dimas.jpg' ,
      instagram: 'https://www.instagram.com/dimassulthn_?igsh=ODBrc3Z2OTJtZnV6',
      modalId: 'profileModal6'
    },
    // {
    //   name: 'DZIA ULHAQ',
    //   description: 'Hai! Saya Dzia, seorang yang tertarik dengan teknologi yang berhubungan dengan desain, selalu mencoba hal baru dan ingin menjadi spesialis generalis.' ,
    //   origin: Bandung, Jawa Barat',
    //   image: 'assets/photos/dzia.jpg' ,
    //   instagram: 'https://www.instagram.com/dzia_ul.32/',
    //   modalId: 'profileModal7'
    // },
    {
      name: 'ERLITA AMELIA',
      description: 'Suka makan ayam geprek dbesto, ke kampus pp naik kereta',
      origin: 'Bandung Barat, Jawa Barat',
      image: 'assets/photos/erlita.jpg' ,
      instagram: 'https://www.instagram.com/erlitaal?igsh=cTFlY2lzdmN6Ym5m',
      modalId: 'profileModal8'
    },
    {
      name: 'FAIZAL RIZKI YUDITIA PANE',
      description: '-',
      origin: 'Pekanbaru, Riau',
      image: 'assets/photos/yuda.jpg' ,
      instagram: 'https://www.instagram.com/yud4xxz__?igsh=MW4zcWcxM2I4Yjl5aA==',
      modalId: 'profileModal9'
    },
    {
      name: 'IIS MASRIAH',
      description: '-',
      origin: 'Kuningan, Jawa Barat',
      image: 'assets/photos/iis.jpg' ,
      instagram: 'https://www.instagram.com/iismasriah22?igsh=eWtpNHE5YXc2cXBp',
      modalId: 'profileModal10'
    },
    // {
    //   name: 'M NABIL NURSYAHBANI',
    //   description: '-',
    //   origin: 'Subang, Jawa Barat',
    //   image: 'assets/photos/nabil.jpg' ,
    //   instagram: 'https://www.instagram.com/nrsyhbn_nbl?igsh=enc3MGx0Z3Q5d2Vp',
    //   modalId: 'profileModal11'
    // },
    {
      name: 'M FEBRIANSAYAH',
      description: 'Ak baik, imut, lucu, menawan dan tampan rupawan hehe',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/febri.jpg' ,
      instagram: 'https://www.instagram.com/apolombimm_?igsh=OGZvMWxzM2xkb3Bp',
      modalId: 'profileModal12'
    },
    {
      name: 'MUHAMMAD NAUVAL ALAWI HIDAYAT',
      description: '',
      origin: 'Majalengka, Jawa Barat',
      image: 'assets/photos/noval.jpg' ,
      instagram: 'https://www.instagram.com/aallwy11?igsh=dmFsamNleW10OTJ6 ',
      modalId: 'profileModal13'
    },
    {
      name: 'NAZLA AULYA LADIANSYAH',
      description: '-',
      origin: 'Padalarang, Jawa Barat',
      image: 'assets/photos/nazla.jpg' ,
      instagram: 'https://www.instagram.com/nazlaaulyaa?igsh=ZGNlc2x0NTd5eDIw',
      modalId: 'profileModal14'
    },
    {
      name: 'NISRINA HASNA KAMIL',
      description: 'Aku adalah gadis berkacamata yang hobi menonton film',
      origin: 'Karawang, Jawa Barat',
      image: 'assets/photos/nisrina.jpg' ,
      instagram: 'https://www.instagram.com/https.nsrnaa?igsh=MW5lcnJ1azhpODRhcQ==',
      modalId: 'profileModal15'
    },
    {
      name: 'NOVY NUR FAUZIAH',
      description: 'Nama aku Novy Nur Fauziah. Aku lahir dan besar di Bandung. Aku adalah lulusan dari MAN 2 Kota Bandung angkatan 2022.',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/novy.jpg' ,
      instagram: 'https://www.instagram.com/novfziah?igsh=MXh1NzJibGFyMHVmYg==',
      modalId: 'profileModal16'
    },
    {
      name: 'NUR `AINI MARDHIYAH',
      description: 'Pecinta mpus, nak seni (masih pemula kok:>), husbunya banyak, punya sifat aneh. Tenang,aku gak nyeremin kok',
      origin: 'Purwakarta, Jawa Barat',
      image: 'assets/photos/aini.jpg' ,
      instagram: 'https://www.instagram.com/ni.ainii_/(ni.aini_)',
      modalId: 'profileModal17'
    },
    {
      name: 'PUTRI AGHNIYA FEBRIYANTI',
      description: '-',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/putri-a.jpg' ,
      instagram: '#',
      modalId: 'profileModal18'
    },
    {
      name: 'PUTRI FITRIANAN',
      description: 'Ga ekstrovert, tapi ga intovert juga. Sedikit perfeksionis. Bisa berbaur sama siapa aja yang penting orangnya enak diajak kerjasama.',
      origin: '-',
      image: 'assets/photos/putri-f.jpg' ,
      instagram: 'https://www.instagram.com/putriftriaaa_?igsh=NGp5bDFjM3UyYjBo',
      modalId: 'profileModal19'
    },
    {
      name: 'RAFFA AZIZ MAULANA MUHAMMAD',
      description: 'Aku normal. (ceunah)',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/raffa.jpg' ,
      instagram: '#',
      modalId: 'profileModal20'
    },
    {
      name: 'RAHMA ADELIA KHALIFAH',
      description: 'Halo semua! Kenalin nama aku Rahma Adelia Khalifah. Kalian boleh panggil aku Rahma atau Ama sih biasanya. Asal aku dari Bandung. Saat ini aku berkuliah di UIN Sunan Gunung Djati Bandung prodi Pendidikan Matematika.',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/rahma.jpg' ,
      instagram: 'instagram.com/rahmadeliyf_',
      modalId: 'profileModal21'
    },
    {
      name: 'RIDHO DARMAWAN',
      description: '-',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/ridho.jpg' ,
      instagram: 'https://www.instagram.com/dhooftlalatina_?igsh=cjl0bXJmZjQ4dGI5',
      modalId: 'profileModal22'
    },
    {
      name: 'RIFQI AZMI RAMADHAN',
      description: 'Bukan pewaris apalagi perintis, this is Azmi yang paling manis. WELLL',
      origin: 'BRAGA',
      image: 'assets/photos/azmi.jpg' ,
      instagram: 'https://www.instagram.com/azzmidhn?igsh=cGg4MzIyMW5tdXl1',
      modalId: 'profileModal23'
    },
    {
      name: 'SALMA NURZAYINI',
      description: '-',
      origin: 'Cililin, Jawa Barat',
      image: 'assets/photos/salma.jpg' ,
      instagram: 'https://www.instagram.com/slmnrzyyni?igsh=cHd1bjlwNG5yeG04',
      modalId: 'profileModal24'
    },
    {
      name: 'SANIA SALSADILA',
      description: 'Saya adalah seorang perempuan yang sering merasa tidak percaya diri dan lebih suka menghabiskan waktu membaca buku. Saya manusia yang labil dan sangat peka terhadap kata-kata. Saya adalah seseorang yang introvert dan berharap hidup tenang menikmati secangkir teh.',
      origin: 'Garut, Jawa Barat',
      image: 'assets/photos/sania.jpg' ,
      instagram: 'https://www.instagram.com/sn_slsdl/',
      modalId: 'profileModal25'
    },
    {
      name: 'SARAH FAUZIAH AZZAHRA',
      description: 'Ceria :)',
      origin: 'Cianjur, Jawa Barat',
      image: 'assets/photos/sarah.jpg' ,
      instagram: 'https://www.instagram.com/zhrrasrah_?igsh=YjJidjh6bHlrbnRt',
      modalId: 'profileModal26'
    },
    {
      name: 'SHOFA FAJRIANI FARHAH',
      description: 'Aku lucu dari lahir haha',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/shofa.jpg' ,
      instagram: 'https://www.instagram.com/_shofajzriani?igsh=MXFqczZrdjVvNnV1ag==',
      modalId: 'profileModal27'
    },
    {
      name: 'SITI KHOTIMAH',
      description: 'seseorang yang mempunyai impian yang harus di gapai',
      origin: '-',
      image: 'assets/photos/khotim.jpg' ,
      instagram: 'https://www.instagram.com/stkhotimah24?igsh=MWdzend2dnprdDJ3bQ==',
      modalId: 'profileModal28'
    },
    {
      name: 'TAZKIATUNNAFSIAH AZZAHRA',
      description: 'I`m an introvert, can`t make small talk, but I`m also a easy going person',
      origin: 'Bandung, jawa Barat',
      image: 'assets/photos/tazkia.jpg' ,
      instagram: 'https://www.instagram.com/tazkiatunnafsiahazzahra?igsh=MWw4eTNnYTN2dnNwNg==',
      modalId: 'profileModal29'
    },
    {
      name: 'TSANIA RIKZA TIMTIAZ',
      description: 'Tim ngekost padahal rumah 12 km dari kampus yang sebenernya masih bisa PP tapi takut begal wkwk. Pulang ke rumah pun cukup 2 Minggu atau 1 bulan sekali karena kalo udah di rumah males balik ke kost. Suka mam pedes manis. lebih suka ayam penyet daripada ayam geprek 😍. Kalo kata orang si aku ambivert.',
      origin: 'Bandung, Jawa Barat',
      image: 'assets/photos/tsania.jpg' ,
      instagram: 'https://www.instagram.com/tsaanrkz?igsh=dXQ2OXBxd2pnajhs',
      modalId: 'profileModal30'
    },
    {
      name: 'YOGA PRATAMA',
      description: 'Halo semuanya perkenalkan nama saya Yoga, saya berasal dari Nganjuk Jawa Timur. Namun saya sering dianggap sebagai orang Bandung, hobby saya adalah mencoba hal baru.',
      origin: 'Nganjuk, Jawa Timur',
      image: 'assets/photos/yoga.jpg' ,
      instagram: 'https://www.instagram.com/yoga.prtamaa?igsh=MTdoamZ2dGJtaTMyZg==',
      modalId: 'profileModal31'
    },
    {
      name: 'ZAHRA NURMAULIDA',
      description: '-',
      origin: '-',
      image: 'assets/photos/zahra.jpg' ,
      instagram: '#',
      modalId: 'profileModal32'
    }
  ];
  
  const profileContainer = document.querySelector('.for-members');
  const template = document.getElementById('profile-template');
  
  members.forEach(member => {
    const clone = document.importNode(template.content, true);
    
    clone.querySelector('.profile-img').src = member.image;
    clone.querySelector('.profile-name').textContent = member.name;
    clone.querySelector('.profile-desc').textContent = member.description;
    clone.querySelector('.profile-origin').textContent = member.origin;
    clone.querySelector('.profile-instagram').href = member.instagram;
    
    const modal = clone.querySelector('.modal');
    const button = clone.querySelector('button');
    
    modal.id = member.modalId;
    button.dataset.bsTarget = `#${member.modalId}`;
    button.dataset.bsToggle = "modal";
    
    profileContainer.appendChild(clone);
  });
