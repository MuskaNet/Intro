<template>
    <mdui-bottom-app-bar class="footer">
        <p>
            Copyright © {{ nowYear }} Muska Network. All right reseved.
            <br>
            Made with <span class="❤">❤</span>.
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
