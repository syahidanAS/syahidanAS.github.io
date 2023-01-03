<template>
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
        <div
          class="flex flex-col px-10 lg:pr-40 gap-2 text-center lg:text-justify"
        >
          <h1 class="text-2xl lg:text-4xl font-bold text-slate-700">
            Syahidan Arrizaldy Sidik
          </h1>
          <h2 class="text-xl font-semibold text-slate-700">
            Front End Engineer From Indonesia
          </h2>
          <p class="text-base font-normal text-slate-600 mr-0 lg:mr-6">
            Hi there, i'm a front end engineer from West Java, Indonesia with 3
            years of experience, another skill of mine is converting a cup of
            coffee into a bunch of code ☕
          </p>
          <div class="flex flex-col lg:flex-row items-center gap-2">
            <h2 class="text-slate-700 font-semibold text-base">
              Tech stack that I use:
            </h2>
            <div class="flex flex-wrap gap-2 justify-center">
                          <span
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
              "
            >
              <img class="w-6" src="@/assets/laravel-logo.png" alt="" />
              Laravel
            </span>

            <span
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
              "
            >
              <img class="w-6" src="@/assets/vuejs-logo.png" alt="" />
              Vue.js
            </span>

            <span
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
              "
            >
              <img class="w-6" src="@/assets/codeigniter-logo.svg" alt="" />
              Codeigniter
            </span>

            
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 py-14 lg:py-20 w-10/12 mx-auto">
      <h1 class="text-2xl font-bold text-slate-700 text-center my-8">
        Recent Projects
      </h1>

      <!-- The Bright -->
      <div
        class="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-20"
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
            :href="item.url"
            target="_blank"
            >{{ item.buttonStatus }}</a
          >
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full py-10 gap-2">
      <h1 class="text-2xl font-bold text-slate-700 my-4 mx-auto">
        Recent Youtube Video
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
      Play the song that i love
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

export default {
  data() {
    return {
      portfolio: [
        {
          id: 1,
          title: "The Bright Learning Center",
          desc: "The company Profile website is equipped with a Content Management System (CMS), and also has a back office web app with several features including new student registration, student and tutor attendance, student billing, and payroll for tutor.",
          url: "https://thebrightcourse.com/",
          image: tlc,
          buttonStatus: "Visit Site",
        },
        {
          id: 2,
          title: "Bintang Pertiwi School",
          desc: "The company Profile website is equipped with a Content Management System (CMS), and also quipped with a back office web app with several main features, namely student learning reports that can be used directly by parents of students",
          url: "https://tkbintangpertiwi.com/",
          image: bpr,
          buttonStatus: "Visit Site",
        },
        {
          id: 3,
          title: "Attendance System",
          desc: "An attendance system that combines web application technology with the Internet of Things (IoT), combined with Radio-Frequency Identification (RFID) technology with a local network. this project used by PT Teknologi Cakra Internasional company",
          url: "https://drive.google.com/file/d/1-eHDWFkRD6FZQQHY6IUQ-QlqSlz3NfxF/view?usp=sharing",
          image: attendance,
          buttonStatus: "Device Demonstration",
        },
      ],
    };
  },
};
</script>
