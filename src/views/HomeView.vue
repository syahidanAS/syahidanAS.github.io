<template>
<!-- Deploy -->
  <div class="flex flex-col">
    <div class="py-10 lg:py-10 w-10/12 mx-auto">
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex flex-wrap">
          <div
            class="
              flex flex-row
              items-center
              mx-auto
              border-8 border-slate-800
              rounded-full
              p-1
            "
          >
            <img
              class="w-28 lg:w-[400px] rounded-full overflow-hidden"
              src="@/assets/images/ava.jpg"
              alt="ava"
            />
          </div>
        </div>
        <div class="flex flex-col px-0 lg:px-10 lg:pr-40 gap-2 lg:text-justify">
          <h1
            class="
              text-2xl
              lg:text-4xl
              font-bold
              text-slate-700 text-center
              lg:text-justify
            "
          >
            Syahidan Arrizaldy Sidik
          </h1>
          <h2
            class="
              text-xl
              font-semibold
              text-slate-700 text-center
              lg:text-justify
            "
          >
            Full Stack Developer, dari Indonesia
          </h2>
          <p
            class="
              text-base
              font-normal
              text-slate-600
              mr-0
              lg:mr-6
              text-justify
            ">
            Halo, saya adalah full stack developer yang berasal dari Jawa Barat,
            Indonesia yang sudah berpengalaman selama 3 tahun. Kegiatan utama
            saya adalah mengubah secangkir kopi menjadi kumpulan baris kode
            ☕
          </p>
          <!-- <span             
          class="
              text-lg
              font-normal
              text-slate-600
              mr-0
              lg:mr-6
              text-justify
            ">
          
              Saat ini saya bekerja di <a href="https://goo.gl/maps/ZgbxAG8z5gq53nUv9" target="_blank"><b>Dinas Kesehatan Provinsi DKI Jakarta</b></a> sebagai web programmer
            </span> -->
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center gap-4 mx-auto my-6">
      <h1 class="text-2xl font-bold text-slate-700 text-center">
        Stack yang saya gunakan
      </h1>
      <div class="flex flex-wrap gap-2 justify-center">
        <a
          class="
            flex flex-row
            items-center
            gap-1
            text-md
            font-medium
            mr-2
            px-2.5
            py-0.5
            rounded
            border-2 border-red-600
            text-red-600
            hover:bg-red-200
            cursor-pointer
          "
          href="https://laravel.com/"
          target="_blank"
        >
          <img class="w-6" src="@/assets/laravel-logo.png" alt="" />
          Laravel
        </a>

        <a
          class="
            flex flex-row
            items-center
            gap-1
            text-md
            font-medium
            mr-2
            px-2.5
            py-0.5
            rounded
            border-2 border-emerald-600
            text-emerald-600
            hover:bg-emerald-200
          "
          href="https://vuejs.org/"
          target="_blank"
        >
          <img class="w-6" src="@/assets/vuejs-logo.png" alt="" />
          Vue.js
        </a>

        <a
          class="
            flex flex-row
            items-center
            gap-1
            text-md
            font-medium
            mr-2
            px-2.5
            py-0.5
            rounded
            border-2 border-red-700
            text-red-700
            hover:bg-red-200
          "
          href="https://nestjs.com/"
          target="_blank"
        >
          <img class="w-6" src="@/assets/nestjs-logo.svg" alt="" />
          Nest.js
        </a>

        <a
          class="
            flex flex-row
            items-center
            gap-1
            text-md
            font-medium
            mr-2
            px-2.5
            py-0.5
            rounded
            border-2 border-orange-600
            text-orange-600
            hover:bg-orange-200
          "
          href="https://codeigniter.com/"
          target="_blank"
        >
          <img class="w-6" src="@/assets/codeigniter-logo.svg" alt="" />
          Codeigniter
        </a>


        <a
          class="
            flex flex-row
            items-center
            gap-1
            text-md
            font-medium
            mr-2
            px-2.5
            py-0.5
            rounded
            border-2 border-emerald-600
            text-emerald-600
            hover:bg-emerald-200
          "
          href="https://nuxtjs.org/"
          target="_blank"
        >
          <img class="w-6" src="@/assets/nuxtjs-logo.png" alt="" />
          Nuxt.js
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-4 py-14 lg:py-20 w-10/12 mx-auto my-6">
      <h1 class="text-2xl font-bold text-slate-700 text-center">
       Proyek
      </h1>

      <div
        class="flex flex-col lg:flex-row-reverse gap-4 lg:gap-20"
        v-for="item in portfolio"
        :key="item.id"
      >
        <div class="flex flex-wrap">
          <div class="flex flex-row items-center mx-auto">
            <img class="w-[500px] rounded-md" :src="item.image" alt="ava" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <a
            class="text-2xl font-semibold text-slate-700 hover:text-sky-900"
            :href="item.url"
            target="_blank"
            >{{ item.title }}</a
          >
          <p
            class="
              text-base
              font-normal
              text-slate-600 text-justify
              max-w-2xl
              w-full
              lg:w-96
            "
          >
            {{ item.desc }}
          </p>
          <div class="text-sm text-slate-700 font-semibold">
            <h3>Stack:</h3>
            <div class="flex flex-wrap gap-2">
               <span class="bg-slate-300 border-slate-800 px-2 py-1 rounded-md " v-for="itemStack in item.stack" :key="itemStack.index">{{ itemStack }}</span>
            </div>
           
          </div>
          <div v-html="body"></div>
          <a
            class="
              border-2
              font-semibold
              text-slate-700
              border-slate-700
              p-2
              rounded-md
              hover:bg-slate-700 hover:text-white
              text-center
            "
            v-if="item.isClicked"
            :href="item.url"
            target="_blank"
            >{{ item.buttonStatus }}</a>

            <a
            class="
              border-2
              font-semibold
              text-slate-700
              bg-slate-300
              p-2
              rounded-md
              text-center
            "
            v-else
            disabled
            >Tidak Tersedia</a>

            
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full py-10 gap-2">
      <h1 class="text-2xl font-bold text-slate-700 my-4 mx-auto">
        Video Youtube
      </h1>
      <iframe
        class="mx-auto w-full h-60 lg:w-[560px] lg:h-[316px]"
        src="https://www.youtube.com/embed/kbgdptfdZlk?controls=0&amp;start=12"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h1 class="text-2xl font-bold text-slate-700 my-[40px] mx-auto">
      Mainkan lagu favorit saya
    </h1>
    <div class="flex flex-col lg:flex-row mx-auto lg:gap-2 mb-7">
      <iframe
        style="border-radius: 12px"
        class="w-full aspect-video"
        src="https://open.spotify.com/embed/track/6uBhi9gBXWjanegOb2Phh0?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        style="border-radius: 12px"
        class="w-full aspect-video"
        src="https://open.spotify.com/embed/track/4Ce37cRWvM1vIGGynKcs22?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        style="border-radius: 12px"
        class="w-full aspect-video"
        src="https://open.spotify.com/embed/track/4mzP5mHkRvGxdhdGdAH7EJ?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import tlc from "../assets/images/tlc.png";
import bpr from "../assets/images/bpr.png";
import attendance from "../assets/images/attendance.png";
import weather from "../assets/images/weather.png";
import piutang from "../assets/images/piutang.png";

export default {
  data() {
    return {
      portfolio: [
        {
          id: 1,
          title: "The Bright Learning Center",
          desc: "Proyek website company profile yang dilengkapi dengan Content Management System (CMS), juga pada proyek ini dilengkapi dengan sistem informasi back office dengan beberapa fitur utama antara lain pendaftaran siswa baru, absensi siswa dan tutor, billing siswa, dan payroll untuk tutor serta staff.",
          url: "https://thebrightcourse.com/",
          image: tlc,
          buttonStatus: "Kunjungi Website",
          stack:[
            'Nuxt.js',
            'Laravel',
            'Mysql'
          ],
          isClicked: true
        },
        {
          id: 2,
          title: "TK Bintang Pertiwi",
          desc: "Proyek website company profile yang dilengkapi dengan Content Management System (CMS), selain itu proyek ini memiliki aplikasi web yang memungkinkan setiap guru dapat membuat laporan pembelajaran siswa dan nantinya dapat dilihat oleh orang tua siswa.",
          url: "https://tkbintangpertiwi.com/",
          image: bpr,
          buttonStatus: "Kunjungi Website",
          stack:[
            'Nuxt.js',
            'Vue.js',
            'Codeigniter',
            'Postgresql'
          ],
          isClicked: true
        },
        {
          id: 3,
          title: "Sistem Absensi",
          desc: "Sistem absensi pegawai dengan mekanisme pegawai melakukan tapping pada perangkat RFID dan hasil tapping tersebut akan ditransmisikan melalui wifi ke dalam server untuk proses pengolahan data secara lokal sehingga akhir laporan absensi tersebut dapat digunakan oleh HRD. Sistem ini diterapkan di PT Teknologi Cakra Internasional, yang berlokasi di Jl. Batununggal Indah IV No.45, Mengger, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40267 ",
          url: "https://drive.google.com/file/d/1-eHDWFkRD6FZQQHY6IUQ-QlqSlz3NfxF/view?usp=sharing",
          image: attendance,
          buttonStatus: "Demonstrasi Perangkat",
          stack:[
            'Codeigniter',
            'Mysql',
            'NodeMCU ESP8266',
            'RFID'
          ],
          isClicked: true
        },
        {
          id: 4,
          title: "Aplikasi Ramalan Cuaca",
          desc: "Aplikasi web yang dapat menampilkan perkiraan cuaca dan cuaca saat ini di lokasi pada saat aplikasi tersebut dibuka ataupun lokasi manapun pada kolom pencarian menggunakan kombinasi teknik Reverse dan Forward Geocoding dan beberapa public api yang memungkinan pencarian perkiraan cuaca dan cuaca saat ini pada lokasi yang diinginkan",
          url: "https://arzweather.netlify.app/",
          image: weather,
          buttonStatus: "Kunjungi Website",
          stack:[
            'Vue.js',
          ],
          isClicked: true
        },
        {
          id: 5,
          title: "Sistem Pengendalian Piutang RS",
          desc: "Fungsi utama sistem ini adalah membantu bagian keuangan Rumah Sakit Khusus Paru Karawang dalam mengelola dan mengendalikan piutang rumah sakit. Sistem ini dapat menghasilkan beberapa lembar laporan diantaranya surat penagihan piutang, invoice, kwitansi pembayaran, laporan umur piutang, rekapitulasi piutang, kwitansi pembayaran, dan jurnal",
          url: "#",
          image: piutang,
          buttonStatus: "Tidak tersedia",
          stack:[
            'Laravel',
            'Mysql',
          ],
          isClicked: false
        },
      ],
    };
  },
};
</script>
