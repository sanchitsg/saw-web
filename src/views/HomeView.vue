<template>
  <div id="welcome">
    <WelcomeView @scroll-to-element="scrollToElement" />
  </div>
  <div id="projects">
    <ProjectView />
  </div>
  <div id="experience">
    <ExperienceView />
  </div>
  <div id="contact">
    <ContactView />
  </div>
  <v-fab
    v-show="showGotoTopBtn"
    color="#fff"
    icon="fas fa-up-long"
    location="top end"
    size="64"
    app
    appear
    @click="scrollToElement('welcome', 0)"
  ></v-fab>
</template>

<script setup>
  import { ref } from 'vue';
  import WelcomeView from "./WelcomeView.vue";
  import ProjectView from "./ProjectView.vue";
  import ExperienceView from "./ExperienceView.vue";
  import ContactView from "./ContactView.vue";

  const showGotoTopBtn = ref(false);

  const scrollToElement = (elementId, offset = 0) => {
    if (elementId !== 'welcome') {
      showGotoTopBtn.value = true;
    } else {
      showGotoTopBtn.value = false;
    }

    const element = document.getElementById(elementId);
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const scrollPosition = elementRect.top - viewportHeight + elementRect.height + offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };
</script>

<style>
  div {
    padding: 0;
    margin: 0;
  }
</style>