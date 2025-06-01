const diseaseEducation = [
  {
    // Nama penyakit
    diseaseName: 'Tungro',

    // Ciri-ciri
    characteristics:
      'Daun menguning dari ujung ke bawah, tanaman kerdil, anakan sedikit, pertumbuhan tidak merata.',

    // Gejala
    symptoms:
      'Tanaman yang terserang penyakit tungro biasanya tumbuh kerdil dan jumlah anakan berkurang. Daunnya berubah warna menjadi kuning atau oranye-kuning, terutama dari ujung hingga ke bawah daun. Terkadang, daun juga memiliki bercak-bercak cokelat kecil yang tidak merata. Jika tanaman masih muda, bisa terlihat warna kekuningan di antara tulang daun (klorosis). Pada infeksi ringan, tanaman tampak sedikit kerdil dan tidak menunjukkan daun menguning. Gejala ini kadang mirip dengan kekurangan kalium, tetapi bedanya: tungro hanya muncul di beberapa petak sawah, sedangkan kekurangan kalium biasanya terjadi merata di seluruh lahan.',

    // Penyebab
    cause:
      'Penyakit tungro disebabkan oleh dua virus, yaitu RTBV (Rice Tungro Bacilliform Virus) dan RTSV (Rice Tungro Spherical Virus). Virus ini menyebar melalui serangga kecil bernama wereng hijau. Wereng hijau menjadi pembawa virus setelah mengisap cairan dari tanaman padi yang terinfeksi. Ketika serangga ini berpindah ke tanaman lain dan mengisapnya, virus pun ikut menyebar. Penyakit ini lebih mudah menyebar jika banyak wereng di sawah, terutama saat musim tanam padi secara serempak tidak dilakukan.',

    // Pencegahan
    prevention: [
      'Gunakan benih sehat dan tahan penyakit',
      'Tanam serempak di suatu wilayah',
      'Bersihkan sisa tanaman padi atau rumput liar yang bisa menjadi tempat tinggal wereng sebelum tanam',
      'Periksa lahan secara berkala untuk mendeteksi keberadaan wereng lebih awal',
      'Pasang perangkap untuk menarik dan mengurangi populasi wereng hijau',
      'Lestarikan laba-laba dan capung yang bisa membantu mengontrol populasi wereng',
      'Semprot insektisida hanya saat diperlukan dan sesuai anjuran, agar wereng tidak menjadi kebal',
    ],

    // Penanganan
    treatment: {
      biological:
        'Perangkap cahaya bisa digunakan untuk menarik dan mengurangi jumlah wereng hijau yang menyebarkan penyakit. Di pagi hari, wereng yang tertarik dan hinggap di dekat perangkap perlu segera ditangkap dan dibuang, atau dibunuh dengan cara disemprot atau ditabur insektisida. Langkah ini sebaiknya dilakukan setiap hari untuk hasil yang maksimal.',
      chemical:
        'Sebaiknya pengendalian hama dilakukan secara terpadu, yaitu dengan cara alami (hayati) dan kimiawi jika memungkinkan. Penyemprotan dengan insektisida berbahan aktif buprofezin atau pimetrozin antara hari ke-15 sampai ke-30 setelah tanam bisa efektif, asalkan dilakukan tepat waktu. Namun, karena serangga bisa menyebar ke area lain dengan cepat, penting juga untuk menyemprot tumbuhan di sekitar lahan. Hindari penggunaan insektisida berbahan klorpirifos, lamda sihalotrin, atau pyrethroid sintetis lainnya karena wereng sudah mulai kebal terhadap bahan-bahan tersebut.',
    },

    // Sematkan Video
    videoEmbed: `https://www.youtube.com/embed/S_S4oHe1d6g?si=cZ2sGP_P0PApiI-3`,
  },
];

module.exports = diseaseEducation;
