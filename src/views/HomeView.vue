<template>
  <img
    @load="displayImage"
    class="background-image"
    style="top: 0; left: 0; display: none"
    src="https://cdn.imlazy.ink:233/img/background/59b3a912c2f5e.jpg"
  />
  <div class="box first-screen-box">
    <h1 style="color: white">Muska Network</h1>
    <mdui-card class="links-button-card">
      <mdui-button href="https://ami.muska.zip" target="_blank">
        <mdui-icon-account-circle></mdui-icon-account-circle>
      </mdui-button>
      <mdui-button href="https://blog.muska.zip" target="_blank">
        <mdui-icon-animation></mdui-icon-animation>
      </mdui-button>
      <mdui-button href="https://blog.muska.zip/links" target="_blank">
        <mdui-icon-link></mdui-icon-link>
      </mdui-button>
    </mdui-card>
    <p style="color: white">{{ yiyan }}</p>
  </div>
  <div class="center-flex">
    <h2 style="margin: auto; color: white">Projects</h2>
    <MainProjectListComponent />
  </div>
  <div class="center-flex">
    <AboutComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import '@mdui/icons/account-circle.js'
import '@mdui/icons/animation.js'
import '@mdui/icons/link.js'

import hitokoto from '@scripts/hitokoto'
import MainProjectListComponent from '@components/MainProjectListComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

let yiyan = ref('')

hitokoto.getText().then((result) => (yiyan.value = result))

function displayImage(event) {
  event.target.style.display = ''
}
</script>

<style scoped>
.background-image {
  position: fixed;
  z-index: -1;
  filter: brightness(45%);
}

.first-screen-box {
  height: 100vh;
}

.links-button-card {
  padding: 0.6rem;
  padding-bottom: 0.4rem;
  border-radius: 100px;
}

.links-button-card mdui-button {
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  margin-inline: 1rem;
  margin-top: 3px;
}

h1 {
  font-size: 3rem;
}
</style>
