<template>
  <v-sheet height="auto" width="100%" color="#ceff06">
    <v-card
      width="100%"
      height="100%"
      color="transparent"
      elevation="0"
    >
      <div class="d-flex flex-row justify-end align-center">
        <div class="d-flex flex-column justify-space-between align-start mr-5">
          <v-card-title class="text-h3 font-weight-regular hanken-grotesk-saw text-center">
            Let's get to know each other
          </v-card-title>
          <v-card width="100%" color="transparent" elevation="0" class="my-5">
            <v-card-text style="margin: 0; padding: 0;">
              <v-list lines="one" bg-color="transparent">
                <v-list-item
                  v-for="menu in contactMenu"
                  :key="menu.title"
                  class="mb-5"
                >
                  <v-list-item-title class="text-h6 font-weight-bold mb-2">
                    {{ menu.title }}
                  </v-list-item-title>
                  <v-list-item-title class="text-h6 font-weight-light">
                    {{ menu.subtitle }}
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="text-h6 font-weight-bold mb-2">
                    SOCIAL
                  </v-list-item-title>
                  <v-list-item-subtitle class="d-flex flex-row justify-start">
                    <v-btn
                      v-for="button in socialButtons"
                      :key="button"
                      class="me-1"
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
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </div>
        <v-img
          height="100%"
          max-height="800"
          max-width="60%"
          cover
          src="http://localhost:8080/src/assets/saw-contact-us.jpg"
        ></v-img>
      </div>
    </v-card>
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
</style>