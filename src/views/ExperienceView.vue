<template>
  <v-sheet height="100vh" width="100%" min-height="600" class="d-flex flex-column justify-space-around align-center py-5" color="#010539">
    <div class="d-flex flex-column justify-space-around align-center my-5">
      <h1 class="text-h2 font-weight-regular hanken-grotesk-saw text-center my-5" style="color: #effff9">
        Work Experience
      </h1>
      <div class="w-75 d-flex flex-row justify-center align-center my-5">
        <v-timeline
          side="end"
          line-color="#ffffff"
          line-thickness="4"
          line-inset="0"
          dot-color="#06cee1"
          fill-dot
          size="x-small"
          class="my-5"
        >
          <v-timeline-item
            v-for="work in workExData"
            :key="work.title"
            height="175"
          >
            <div class="mt-5">
              <p class="text-h5 font-weight-bold hanken-grotesk-saw" style="color: #06cee1">
                {{ work.title }}
              </p>
              <p class="text-h6 font-weight-thin hanken-grotesk-saw my-2" style="color: #effff9">
                {{ work.designation }} | {{ work.period }}
              </p>
              <p class="font-weight-normal hanken-grotesk-saw" style="color: #effff9">
                {{ work.description }}
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue';

  const workExData = ref([
    {
      title: 'TWID Rewards Global Pvt Ltd',
      designation: 'Engineering Lead',
      period: '2022-2024',
      description: 'The project involved integrating multiple brands into a payment ecosystem and enhancing the campaigns module with complex filters for various offers.',
    },
    {
      title: 'Dealer Socket (Solera Inc.)',
      designation: 'Software Engineer',
      period: '2020-2022',
      description: 'The project involved creating a tool called Precise Price to provide customers with accurate prices for automobiles in the US market.',
    },
    {
      title: 'Droom India Pvt Ltd',
      designation: 'Software Engineer',
      period: '2016-2019',
      description: 'The project involved creating a platform for buying, selling, and providing loans for used cars in India.'
    },
  ]);
</script>

<style></style>