<template>
  <mdui-bottom-app-bar class="footer">
    <p class="mdui-prose">
      Copyright © {{ nowYear }} Muska Network. All rights reseved.<br />
      Made with <span class="❤">❤</span>. | <router-link to="/brand">Brand</router-link>
    </p>
  </mdui-bottom-app-bar>
</template>

<script setup>
let nowYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-radius: 15px;
  margin: 0 !important;
}
</style>
