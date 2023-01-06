<template>
  <div class="flex flex-col h-full items-center py-4 mx-auto mb-20">
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
        <div
          class="w-full p-2 rounded-md text-white text-base font-normal"
          :class="this.color"
          v-if="isShowing"
        >
          {{ this.validation }}
        </div>
        <form class="flex flex-col gap-2" @submit.prevent="submit">
          <div class="flex flex-col">
            <label class="text-slate-700 font-normal text-md" for="name"
              >Full Name</label
            >
            <input
              class="border-2 border-slate-600 p-2 rounded-md"
              type="text"
              id="name"
              placeholder="Enter your full name"
              v-model="name"
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
              v-model="email"
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
              v-model="subject"
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
              v-model="message"
            ></textarea>
          </div>

          <div class="flex flex-col gap-2">
            <vue-recaptcha
              @verify="onVerify"
              sitekey="6LcEKNEjAAAAAC8qZ8YGQcmlHos88sbGgrMJwxw1"
            ></vue-recaptcha>
            <button
              class="bg-slate-700 text-white hover:bg-slate-500 p-2 rounded-md"
              id="message"
              placeholder="Write a message"
            >
              <svg
                aria-hidden="true"
                class="
                  inline
                  w-8
                  h-8
                  mr-2
                  text-gray-200
                  animate-spin
                  dark:text-gray-600
                  fill-blue-600
                "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="isLoading"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span v-else> SUBMIT</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_APIURL;
import { VueRecaptcha } from "vue-recaptcha";

export default {
  components: { VueRecaptcha },
  data() {
    return {
      name: null,
      email: null,
      subject: null,
      message: null,
      validation: null,
      isShowing: false,
      color: null,
      isLoading: false,
      robot: false,
    };
  },
  methods: {
    onVerify: function (response) {
      if (response) this.robot = true;
    },

    submit() {
      if (this.name == null) {
        this.validation = "Nama harus diisi!";
        this.color = "bg-red-500";
        this.isShowing = true;
        setTimeout(() => (this.isShowing = false), 2000);
        this.isLoading = false;
      } else if (this.email == null) {
        this.validation = "Email harus diisi!";
        this.color = "bg-red-500";
        this.isShowing = true;
        setTimeout(() => (this.isShowing = false), 2000);
        this.isLoading = false;
      } else if (this.subject == null) {
        this.validation = "Subject harus diisi!";
        this.color = "bg-red-500";
        this.isShowing = true;
        setTimeout(() => (this.isShowing = false), 2000);
        this.isLoading = false;
      } else if (this.message == null) {
        this.validation = "Anda belum memasukkan pesan!";
        this.color = "bg-red-500";
        this.isShowing = true;
        setTimeout(() => (this.isShowing = false), 2000);
        this.isLoading = false;
      } else if (this.robot == false) {
        this.validation = "Mohon centang recaptcha!";
        this.color = "bg-red-500";
        this.isShowing = true;
        setTimeout(() => (this.isShowing = false), 2000);
      } else {
        this.send();
      }
    },

    send() {
      this.isLoading = true;
      let self = this;

      axios
        .post(apiUrl + "messages", {
          fullname: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })
        .then(function (response) {
          self.isLoading = false;
          self.validation = "Berhasil mengirim pesan!";
          self.color = "bg-green-500";
          self.isShowing = true;

          self.name = null;
          self.email = null;
          self.subject = null;
          self.message = null;
          setTimeout(() => (self.isShowing = false), 2000);
          grecaptcha.reset();
        })
        .catch(function (error) {
          self.isLoading = false;
          self.validation = "Maaf terjadi kesalahan, silahkan coba lagi!";
          self.color = "bg-red-500";
          self.isShowing = true;
          setTimeout(() => (self.isShowing = false), 2000);
        });
    },
  },
  mounted() {},
};
</script>

<style>
</style>