<template>
  <v-sheet height="100vh" width="100%" color="#effff9" class="d-flex flex-row justify-space-around">
    <div class="d-flex flex-column justify-center mx-6 w-40">
      <p class="text-h3 font-weight-regular hanken-grotesk-saw mb-15" style="color: #010539;">
        Let's get to know each other
      </p>
      <v-list width="100%" lines="one" bg-color="transparent">
        <v-list-item
          v-for="menu in contactMenu"
          :key="menu.title"
          class="mb-5"
          style="padding: 0;"
        >
          <v-list-item-title class="text-h6 font-weight-bold mb-2" style="color: #010539;">
            {{ menu.title }}
          </v-list-item-title>
          <v-list-item-title class="text-h6 font-weight-normal" style="color: #010539;">
            {{ menu.subtitle }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item style="padding: 0;">
          <v-list-item-title class="text-h6 font-weight-bold mb-2" style="color: #010539;">
            SOCIAL
          </v-list-item-title>
          <v-list-item-title class="d-flex flex-row justify-start">
            <v-btn
              v-for="button in socialButtons"
              :key="button.icon"
              class="me-2"
              variant="text"
              size="large"
              active-color="#06cee1"
              :href="button.redirectUrl"
              target="_blank"
            >
              <v-icon
                color="#010539"
                :icon="button.icon"
                size="35"
              ></v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <v-img
      height="100%"
      max-height="100vh"
      class="w-60"
      cover
      src="http://localhost:8080/src/assets/saw-contact-us.jpg"
    ></v-img>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue';

  const contactMenu = ref([
    {
      subtitle: '+91 - 9823253711',
      title: 'PHONE'
    },
    {
      subtitle: 'sanchit.sg.official@gmail.com',
      title: 'EMAIL'
    },
  ]);

  const socialButtons = ref([
    {
      icon: 'fa-brands fa-github',
      redirectUrl: 'https://github.com/sanchitsg'
    },
    {
      icon: 'fa-brands fa-linkedin',
      redirectUrl: 'https://www.linkedin.com/in/sanchit-singh-aa8a53166'
    }
  ]);
</script>

<style></style>