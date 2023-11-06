$(document).ready(function() {
  $('#carouselExampleCaptions').on('slid.bs.carousel', function () {

    var currentIndex = $('#carouselExampleCaptions .carousel-item.active').index() + 1;

    console.log(currentIndex);
    if (currentIndex === 1){
      document.getElementById('bioImage').src = "/src/img/Actor1/imgActor.jpg"

      document.getElementById('bioText').innerText = '- Nama lengkap : Song joong-ki \n - Kelahiran : 19 September 1985 \n - Tempat Lahir : Daejon, Korea Selatan \n - Kewarganegaraan : Korea Selatan \n - Tinggi Badan: 178 cm \n - Berat Badan: 65 kg \n - Golongan Darah: A \n'

      document.getElementById('bioStory').innerText = 'Song Joong-ki adalah seorang aktor, model, dan pembawa acara dari Korea Selatan. Dia mulai terkenal saat membintangi drama bersejarah Sungkyunkwan Scandal dan acara varietas Running Man sebagai salah satu anggota pemain awal ketika dimulai pada tahun 2010'

      document.getElementById('img1').src = "/src/img/Actor1/movie1.jpg"
      document.getElementById('img2').src = "/src/img/Actor1/movie2.jpg"
      document.getElementById('img3').src = "/src/img/Actor1/movie3.jpg"
      document.getElementById('img4').src = "/src/img/Actor1/movie4.jpg"

    }
    console.log(currentIndex);
    if (currentIndex === 2){
      document.getElementById('bioImage').src = "/src/img/Actor2/imgActor.jpg"

      document.getElementById('bioText').innerText = ' \n - Nama lengkap : Song Hye-kyo \n - Kelahiran : 22 November 1981 \n- Tempat Lahir : Daegu, Korea Selatan \n- Kewarganegaraan : Korea Selatan \n- Zodiak: Sagitarius \n- Tinggi Badan: 161 cm \n- Berat Badan: 45 kg \n- Golongan Darah: A \n'

      document.getElementById('bioStory').innerText = 'Song Hye-kyo adalah aktris dan model asal Korea Selatan. Ia memperoleh kesuksesannya melalui serial televisi Autumn in My Heart, All In, Full House, That Winter, The Wind Blows, dan drama sukses Descendants of the Sun.'

      document.getElementById('img1').src = "/src/img/Actor2/movie1.jpg"
      document.getElementById('img2').src = "/src/img/Actor2/movie2.jpg"
      document.getElementById('img3').src = "/src/img/Actor2/movie3.jpg"
      document.getElementById('img4').src = "/src/img/Actor2/movie4.jpg"

    }
    console.log(currentIndex);
    if (currentIndex === 3){
      document.getElementById('bioImage').src = "/src/img/Actor3/imgActor.jpg"

      document.getElementById('bioText').innerText ='Nama lengkap : Song Kang - Kelahiran : 23 April 1994 \n- Tempat Lahir : Suwon, Korea Selatan \n- Kewarganegaraan : Korea Selatan \n- Zodiak: Taurus \n- Tinggi Badan: 186 cm \n- Golongan Darah: A \n'

      document.getElementById('bioStory').innerText = 'Song Kang memulai debut aktingnya di 2017, Song Kang sudah menuai banyak popularitas. Ia memulai debut aktingnya lewat drama The Liar and His Lover.Ia kemudian bermain dalam beberapa drama seperti Man Who Sets The Table (2017) dan film Beautiful Vampire (2018). Selanjutnya ia bermain sebagai pemeran pendukung untuk drama bergenre fantasi When The Devil Calls Your Name (2019). Nama Song semakin populer sejak ia berperan sebagai Hwang Sun Oh dalam serial drama Netflix, Love Alarm (2019).'
      
      document.getElementById('img1').src = "/src/img/Actor3/movie1.jpg"
      document.getElementById('img2').src = "/src/img/Actor3/movie2.jpg"
      document.getElementById('img3').src = "/src/img/Actor3/movie3.jpg"
      document.getElementById('img4').src = "/src/img/Actor3/movie4.jpg"

    }
    console.log(currentIndex);
    if (currentIndex === 4){
      document.getElementById('bioImage').src = "/src/img/Actor4/imgActor.jpg"

      document.getElementById('bioStory').innerText ='Kim Seon Ho merupakan seorang aktor asal Korea Selatan yang populer setelah membintangi drama Start Up (2020).Walaupun begitu, sebenarnya ia sudah melakukan debut akting melalui sebuah drama berjudul New Boing Boing (2009).Pada tahun 2017, ia melakukan debut lainnya sebagai aktor pendukung dalam drama garapan KBS2 yang berjudul Good Manager.Sementara untuk perannya sebagai karakter utama dilakukan melalui sebuah drama berjudul Two Cups (2017).Selain berkarir di dunia akting, ia juga pernah ditunjuk sebagai pembawa acara untuk MBC Gayo Daejejeon pada tahun 2020.'

      document.getElementById('bioText').innerText = 'Nama lengkap : Kim Seoh-ho \n- Kelahiran : 8 Mei 1986\n- Tempat Lahir : Seongbuk-dong, Seoul, Korea Selatan\n- Kewarganegaraan : Korea Selatan\n- Zodiak: Taurus\n- Tinggi Badan: 183 cm\n- Berat Badan: 75 kg\n- Golongan Darah: A\n'

      document.getElementById('img1').src = "/src/img/Actor4/movie1.jpg"
      document.getElementById('img2').src = "/src/img/Actor4/movie2.jpg"
      document.getElementById('img3').src = "/src/img/Actor4/movie3.jpg"
      document.getElementById('img4').src = "/src/img/Actor4/movie4.jpg"

    }

    console.log(currentIndex);
    if (currentIndex === 5){
      document.getElementById('bioImage').src = "/src/img/Actor5/imgActor.jpg"

      document.getElementById('bioText').innerText ='nama Park Shin Hye berhasil naik daun berkat membintangi drama komedi musikal You"re Beautiful. Semenjak membintangi drama tersebut, sosok Shin Hye tak pernah absen dalam berbagai drama setiap tahunnya. Salah satu judul yang cukup memikat para penggemar drama Korea adalah The Heirs yang dibintangi Park Shin Hye dan Lee Min Ho pada tahun 2013. Ada pula drama Pinocchio yang menyandingkan Park Shin Hye dengan aktor Lee Jong Suk sebagai dua sejoli. Berkat perannya dalam judul tersebut, popularitas Park Shin Hye seakan tak pernah meredup.'

      document.getElementById('bioStory').innerText = 'Nama lengkap : Park Shin-hye \n -Kelahiran : 18 Februari 1990 \n-Tempat Lahir : Nam-gu, Gwangju, Korea Selatan \n-Kewarganegaraan : Korea Selatan \n-Zodiak: Aquarius \n-Tinggi Badan: 168 cm \n-Golongan Darah: A \n'

      document.getElementById('img1').src = "/src/img/Actor5/movie1.jpg"
      document.getElementById('img2').src = "/src/img/Actor5/movie2.jpg"
      document.getElementById('img3').src = "/src/img/Actor5/movie3.jpg"
      document.getElementById('img4').src = "/src/img/Actor5/movie4.jpg"

    }


    //code enxt for autocepticon background image, mkay?
  });
});