<template>
  <mdui-layout>
    <img @load="displayImage" class="background-image" style="top: 0;left: 0;display: none;"
      src="https://cdn.imlazy.ink:233/img/background/59b3a912c2f5e.jpg">
    <mdui-layout-main>
      <MainComponent></MainComponent>
      <AComponent></AComponent>
    </mdui-layout-main>
    <FooterComponent></FooterComponent>
  </mdui-layout>
</template>

<script setup>
import MainComponent from '@components/MainComponent.vue';
import FooterComponent from '@components/FooterComponent.vue';
import AComponent from '@components/pages/AComponent.vue';

function displayImage(event) {
  event.target.style.display = '';

}
</script>

<style scoped>
.background-image {
  position: fixed;
  z-index: -1;
  filter: brightness(60%);
}
</style>
