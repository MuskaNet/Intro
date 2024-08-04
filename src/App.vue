<template>
  <mdui-layout>
    <mdui-layout-main>
      <RouterView />
    </mdui-layout-main>
    <FooterComponent />
  </mdui-layout>
</template>

<script setup>
import FooterComponent from '@components/FooterComponent.vue'
</script>
