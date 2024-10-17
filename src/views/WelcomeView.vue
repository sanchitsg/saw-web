<template>
  <v-sheet height="100vh" width="100%" color="#010539" class="d-flex flex-row justify-space-around">
    <div class="d-flex flex-column justify-space-around mx-6 py-25" style="width: 40%; flex: 1 0 auto;">
      <p class="text-h2 font-weight-regular hanken-grotesk-saw">
        Hi, I'm Sanchit
      </p>
      <div class="text-h4 font-weight-light hanken-grotesk-saw">
        <p>A <span id="typed" style="color: #06cee1"></span> wizard conjuring up code</p>
        <p>from front to back!</p>
      </div>
      <v-list width="100%" lines="one" bg-color="transparent">
        <v-list-item
          v-for="menu in headerMenu"
          :key="menu.text"
          style="padding: 0;"
        >
          <v-list-item-title class="text-h6 font-weight-normal hanken-grotesk-saw line-before-text" @click="$emit('scrollToElement', menu.identifier, menu.offset)">
            {{ menu.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="d-flex flex-row justify-center">
        <v-btn
          v-for="button in socialButtons"
          :key="button.icon"
          class="me-2"
          variant="text"
          size="large"
          active-color="#000000"
          :href="button.redirectUrl"
          target="_blank"
        >
          <v-icon
            color="#ffffff"
            :icon="button.icon"
            size="50"
          ></v-icon>
        </v-btn>
      </div>
    </div>
    <v-img
      max-height="100vh"
      class="w-60"
      cover
      src="http://localhost:8080/src/assets/saw-welcome.jpg"
      style="width: 60%;"
    ></v-img>
  </v-sheet>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import Typed from 'typed.js';

  const typedText = ref(['FULL-STACK', 'full-stack', 'Full-Stack']);

  onMounted(() => {
    const typed = new Typed('#typed', {
      strings: typedText.value,
      showCursor: false,
      typeSpeed: 150, // Adjust speed as desired (characters per second)
      backSpeed: 0, // Set to 0 to disable backspace animation
      onComplete: () => {
        setTimeout(() => {
          typed.reset(); // Reset the typing machine
          typed.start(); // Start a new typing animation
        }, 2000);
      }
    });
  });

  const headerMenu = ref([
    {
      text: 'MY WORK',
      identifier: 'projects',
      offset: 0
    },
    {
      text: 'WORK EXPERIENCE',
      identifier: 'experience',
      offset: 0
    },
    {
      text: 'CONTACT ME',
      identifier: 'contact',
      offset: 0
    },
  ]);

  const socialButtons = ref([
    {
      icon: 'fa-brands fa-github',
      redirectUrl: 'https://github.com/sanchitsg'
    },
    {
      icon: 'fa-brands fa-linkedin',
      redirectUrl: 'https://github.com/sanchitsg'
    }
  ]);
</script>

<style>
  .line-before-text::before {
    display: inline-block;
    content: "";
    border-top: .2rem solid #ffffff;
    width: 5rem;
    margin: -0.6rem 2rem -0.6rem 0;
    transform: translateY(-1rem);
  }
  .line-before-text:hover {
    font-weight: bolder;
    cursor: pointer;
  }
</style>