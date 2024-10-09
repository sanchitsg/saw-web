<template>
  <v-sheet height="auto" width="100%" color="#1b392c">
    <div class="d-flex flex-row justify-space-between">
      <div class="d-flex flex-column justify-space-around mx-6 py-15">
        <p class="text-h2 font-weight-regular hanken-grotesk-saw">
          Hi, I'm Sanchit Singh
        </p>
        <div class="text-h4 font-weight-light hanken-grotesk-saw">
          <p>A <span style="color: #ceff06">full-stack</span> wizard conjuring up code</p>
          <p>from front to back!</p>
        </div>
        <v-list width="100%" lines="one" bg-color="transparent">
          <v-list-item
            v-for="menu in headerMenu"
            :key="menu.text"
            style="padding: 0;"
          >
            <v-list-item-title class="text-h6 font-weight-normal hanken-grotesk-saw line-before-text">
              {{ menu.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <div class="d-flex flex-row justify-start">
          <v-btn
            v-for="button in socialButtons"
            :key="button"
            class="me-2"
            variant="text"
            size="x-large"
            active-color="#ffffff"
          >
            <v-icon
              color="#000000"
              :icon="button"
              size="40"
            ></v-icon>
          </v-btn>
        </div>
      </div>
      <v-img
        height="100%"
        max-height="800"
        max-width="60%"
        cover
        src="http://localhost:8080/src/assets/saw-welcome.jpg"
      ></v-img>
    </div>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue';

  const headerMenu = ref([
    {
      text: 'ABOUT',
      redirectUrl: 'http://localhost:8080/about',
    },
    {
      text: 'MY WORK',
      redirectUrl: 'http://localhost:8080/projects',
    },
    {
      text: 'WORK EXPERIENCE',
      redirectUrl: 'http://localhost:8080/pastWork',
    },
  ]);

  const socialButtons = ref([
    'fa-brands fa-github',
    'fa-brands fa-linkedin',
    'fa-brands fa-google',
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
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 2s ease;
  }
</style>