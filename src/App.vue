<template>
  <mdui-layout>
    <ProgressbarComponent v-if="loading" />
    <mdui-layout-main>
      <router-view></router-view>
    </mdui-layout-main>
    <FooterComponent />
  </mdui-layout>
</template>

<script setup>
import { ref, watch } from 'vue'

import FooterComponent from '@components/FooterComponent.vue'
import ProgressbarComponent from './components/ProgressbarComponent.vue'
import progressbar from '@scripts/progressbar'

let loading = ref(true)

watch(progressbar.loading, (val) => ((loading.value = val)))
</script>

<style scoped>
mdui-layout-main {
  min-height: 100vh;
}
</style>
