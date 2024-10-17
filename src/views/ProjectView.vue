<template>
  <v-sheet height="100vh" width="100%" min-height="600" class="d-flex flex-column justify-center align-center py-3" color="#effff9">
    <h1 class="text-h2 hanken-grotesk-saw text-center my-15" style="color: #06cee1">
      My Work
    </h1>
    <div class="w-100 d-flex flex-row justify-center align-center">
      <v-card
        width="550"
        height="450"
        color="#010539"
        elevation="0"
        class="me-6"
        v-for="project in projectData"
        :key="project.title"
      >
        <div class="d-flex flex-column justify-space-between h-100">
          <v-card-title class="text-h5 font-weight-bold hanken-grotesk-saw pt-10 text-center h-25" style="color: #06cee1">
            {{ project.title }}
          </v-card-title>
          <v-card-text class="text-h6 font-weight-normal hanken-grotesk-saw text-center pt-5 h-50" style="color: #effff9;">
            {{ project.description }}
          </v-card-text>
          <a :href="project.redirectUrl" target="_blank" class="h-25 mx-auto">
            <v-btn
              variant="outlined"
              color="#effff9"
              size="70"
              min-width="400"
              style="border-width: 3px;"
              class="project-card-action"
            >
              <template v-slot:prepend>
                <v-icon class="me-5" icon="fas fa-spinner" color="#06cee1" size="30"></v-icon>
                <span class='text-h6' style="color: #06cee1;">COMING SOON</span>
              </template>
            </v-btn>
          </a>
        </div>
      </v-card>
    </div>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue';

  const projectData = ref([
    {
      title: 'INVENTORY MANAGEMENT',
      description: 'A web-based inventory management system designed to be adaptable to a wide range of businesses, regardless of their specific industry or size. This system offers a flexible framework that can be customized to meet the unique requirements of individual businesses.',
      redirectUrl: 'http://localhost:8090/'
    },
    {
      title: 'POS SYSTEM',
      description: 'A web-based POS system designed to streamline sales transactions and integrate seamlessly with the aforementioned business agnostic inventory management system. This system provides a user-friendly interface for cashiers to process sales, manage payments, and generate sales reports.',
      redirectUrl: 'http://localhost:8090/account/profile'
    },
  ]);
</script>

<style>
  .project-card-action a {
    text-decoration: none;
  }
</style>