<template>
    <div class="box first-screen-box">
        <h1 style="color: white;">Muska Network</h1>
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
        <p style="color: white;">{{ yiyan }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import '@mdui/icons/account-circle.js';
import '@mdui/icons/animation.js';
import '@mdui/icons/link.js';

import hitokoto from '@scripts/hitokoto';

let yiyan = ref('');

hitokoto.getText()
    .then((result) => yiyan.value = result)
</script>

<style scoped>
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
}

h1 {
    font-size: 3rem;
}
</style>
