<template>
  <v-sheet height="auto" width="100%" min-height="600">
    <div class="d-flex flex-column justify-space-around align-center my-5">
      <h1 class="text-h2 font-weight-regular hanken-grotesk-saw text-center my-5" style="color: #1b392c">
        My Work
      </h1>
      <div class="w-100 d-flex flex-row justify-center align-center my-5">
        <v-card
          width="400"
          height="350"
          color="#1b392c"
          elevation="0"
          class="mx-6 pt-5"
          v-for="project in projectData"
          :key="project.title"
        >
          <v-card-title class="text-h5 font-weight-bold hanken-grotesk-saw text-center pt-5" style="color: #ceff06">
            {{ project.title }}
          </v-card-title>
          <v-card-text class="text-h6 font-weight-light hanken-grotesk-saw text-center pt-5">
            {{ project.description }}
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue';

  const projectData = ref([
    {
      title: 'POS SYSTEM',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quam eum tempore. Quod atque quo fugit rerum distinctio a commodi earum dicta, ipsa eos fuga quibusdam perferendis nam ab sapiente?'
    },
    {
      title: 'INVENTORY MANAGEMENT',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quam eum tempore. Quod atque quo fugit rerum distinctio a commodi earum dicta, ipsa eos fuga quibusdam perferendis nam ab sapiente?'
    },
    {
      title: 'PROJECT 3',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quam eum tempore. Quod atque quo fugit rerum distinctio a commodi earum dicta, ipsa eos fuga quibusdam perferendis nam ab sapiente?'
    },
  ]);
</script>

<style></style>