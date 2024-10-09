<template>
  <v-sheet height="auto" width="100%" min-height="600" color="#1b392c">
    <div class="d-flex flex-column justify-space-around align-center my-5">
      <h1 class="text-h2 font-weight-regular hanken-grotesk-saw text-center my-5" style="color: #ffffff">
        Work Experience
      </h1>
      <div class="w-75 d-flex flex-row justify-center align-center my-5">
        <v-timeline
          side="end"
          line-color="#ffffff"
          line-thickness="4"
          line-inset="0"
          dot-color="#ceff06"
          size="x-small"
          fill-dot=false
          class="my-5"
        >
          <v-timeline-item
            v-for="work in workExData"
            :key="work.title"
            height="175"
          >
            <div>
              <p class="text-h5 font-weight-bold hanken-grotesk-saw" style="color: #ceff06">
                {{ work.title }}
              </p>
              <p class="font-weight-light hanken-grotesk-saw">
                {{ work.period }}
              </p>
              <p class="font-weight-normal hanken-grotesk-saw" style="color: #ffffff">
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
      period: '2022-2024',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quam eum tempore. Quod atque quo fugit rerum distinctio a commodi earum dicta, ipsa eos fuga quibusdam perferendis nam ab sapiente?',
    },
    {
      title: 'Dealer Socket (Solera Inc.)',
      period: '2020-2022',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quam eum tempore. Quod atque quo fugit rerum distinctio a commodi earum dicta, ipsa eos fuga quibusdam perferendis nam ab sapiente?',
    },
    {
      title: 'Droom India Pvt Ltd',
      period: '2016-2019',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quam eum tempore. Quod atque quo fugit rerum distinctio a commodi earum dicta, ipsa eos fuga quibusdam perferendis nam ab sapiente?'
    },
  ]);
</script>

<style></style>