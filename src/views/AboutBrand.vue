<template>
  <mdui-top-app-bar>
    <mdui-icon-button @click="router.push('/')" class="back">
      <mdui-icon-arrow-back></mdui-icon-arrow-back>
    </mdui-icon-button>
    <mdui-top-app-bar-title>Band</mdui-top-app-bar-title>
    <div style="flex-grow: 1"></div>
  </mdui-top-app-bar>
  <div class="mdui-prose logo-list" style="margin: 2rem">
    <h3>宽Logo</h3>
    <img
      class="wide-logo"
      src="https://apac-cloudflare-r2-img.1l1.icu/2024/08/07/66b3487d466ed.webp"
    />
    <h3>方正Logo</h3>
    <h4>WebP</h4>
    <img
      style="max-width: 200px"
      src="https://apac-cloudflare-r2-img.1l1.icu/2024/08/08/66b43f7f3cfb6.webp"
    />
    <img
      style="max-width: 200px"
      src="https://apac-cloudflare-r2-img.1l1.icu/2024/08/08/66b4478c6cad2.webp"
    />
    <h4>SVG</h4>
    <img style="max-width: 200px" src="/svg/logo.svg" /><br />
    All these designs are copyright of Muska Network, all rights reserved.<br />
    Logo designed by Muska Ami.
  </div>
</template>

<script setup>
import '@mdui/icons/arrow-back.js'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.back {
  padding: 0.4rem;
}
.logo-list img {
  margin: 1rem;
}

.wide-logo {
  min-width: 200px;
  max-width: 600px;
}
@media screen and (max-width: 770px) {
  .wide-logo {
    max-width: 100%;
  }
}
</style>
