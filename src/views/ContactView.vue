<template>
  <div class="flex flex-col h-full items-center py-20">
    <h1 class="text-2xl lg:text-4xl font-bold text-slate-700">CONTACT ME</h1>
    <div
      class="
        flex flex-col
        lg:flex-row
        items-center
        gap-4
        lg:gap-4
        w-full
        lg:px-40
        py-10
      "
    >
      <div class="flex flex-col lg:flex-row lg:w-1/2">
        <div class="flex flex-col gap-6">
          <p class="text-slate-700 font-normal text-base">
            <i
              >If you looking for a website developer or other business, please
              contact me</i
            >
          </p>
          <h2 class="text-base font-semibold text-slate-700">
            Phone: +62-822-4629-7995 (Syahidan)
            <br />
            Email: syahidan139@gmail.com
          </h2>
        </div>
      </div>
      <div class="flex flex-col gap-2 w-full lg:w-1/2">
        <div class="flex flex-col">
          <label class="text-slate-700 font-normal text-md" for="name"
            >Full Name</label
          >
          <input
            class="border-2 border-slate-600 p-2 rounded-md"
            type="text"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-slate-700 font-normal text-md" for="email"
            >Email</label
          >
          <input
            class="border-2 border-slate-600 p-2 rounded-md"
            type="text"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-slate-700 font-normal text-md" for="subject"
            >Subject</label
          >
          <input
            class="border-2 border-slate-600 p-2 rounded-md"
            type="text"
            id="subject"
            placeholder="Enter subject"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-slate-700 font-normal text-md" for="message"
            >Message</label
          >
          <textarea
            class="border-2 border-slate-600 p-2 rounded-md"
            id="message"
            placeholder="Write a message"
          ></textarea>
        </div>
        <div class="flex flex-col">
          <button
            class="bg-slate-700 text-white hover:bg-slate-500 p-2 rounded-md"
            id="message"
            placeholder="Write a message"
            @click="maintain()"
          >SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    maintain(){
      alert("sorry this feature doesn't work yet :(");
    }
  }
};
</script>

<style>
</style>