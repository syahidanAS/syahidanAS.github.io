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
          <p class="text-base font-normal text-slate-600 mr-6">
            Hi there, i'm a front end engineer from West Java, Indonesia. also
            that I really love coffee to provide energy in carrying out
            activities ☕
          </p>
        </div>
      </div>
    </div>

    <div class="py-14 lg:py-20 w-10/12 mx-auto">
      <div
        class="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-20"
      >
        <div class="flex flex-wrap">
          <h1 class="text-2xl font-bold text-slate-700 my-4 md:hidden">
            Last project I worked on
          </h1>
          <div class="flex flex-row items-center mx-auto">
            <img
              class="w-[1000px] rounded-md"
              src="@/assets/images/tlc.png"
              alt="ava"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1
            class="
              text-4xl
              font-bold
              text-slate-700
              my-4
              invisible
              hidden
              lg:visible lg:block
            "
          >
            Last project I worked on
          </h1>
          <a
            class="text-base font-semibold text-slate-700 hover:text-sky-900"
            href="https://thebrightcourse.com"
            target="_blank"
            >The Bright Learning Center</a
          >
          <p class="text-base font-normal text-slate-600 text-justify">
            The Bright Learning Center adalah Lembaga Bimibingan Belajar dan
            Kursus Bahasa Asing yang terletak di Karawang, Jawa Barat Indonesia
          </p>
          <router-link
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
            to="/portfolio"
            >More Projects</router-link
          >
        </div>
      </div>
      
    </div>

    <h1 class="text-2xl font-bold text-slate-700 my-4 mx-auto">
      Play the song that i love
    </h1>
    <div class="flex flex-col lg:flex-row mx-auto gap-0 lg:gap-2">
      <iframe
        style="border-radius: 12px"
        class="w-full"
        src="https://open.spotify.com/embed/track/6uBhi9gBXWjanegOb2Phh0?utm_source=generator&theme=0"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        style="border-radius: 12px"
        class="w-full"
        src="https://open.spotify.com/embed/track/4Ce37cRWvM1vIGGynKcs22?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        style="border-radius: 12px"
        class="w-full"
        src="https://open.spotify.com/embed/track/4mzP5mHkRvGxdhdGdAH7EJ?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

    </div>
  </div>
</template>

<script>
</script>
