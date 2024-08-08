<template>
    <mdui-top-app-bar>
        <mdui-icon-button @click="router.push('/')" class="back">
            <mdui-icon-arrow-back></mdui-icon-arrow-back>
        </mdui-icon-button>
        <mdui-top-app-bar-title>DN42 Network</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
    </mdui-top-app-bar>
    <div class="mdui-prose" style="margin: 2rem;">
        <p>ASN: AS4242423745</p>
        <h2>Routes Info</h2>
        <p>
            Route-IPv4:
        <ul>
            <li>172.23.126.128/27</li>
        </ul>
        Route-IPv6:
        <ul>
            <li>fdb5:32:ad4a::/48</li>
        </ul>
        <pre class="code">
MNTER:          MUSKA-MNT
ADMIN-C:        MUSKA-AMI-DN42
TECH-C:         MUSKA-AMI-DN42
AUTH:           pgp-fingerprint 335221E5DC90373604149C608C7736197D476704
        </pre>
        <span>For abuse report and technology support, please contact <b>ADMIN-C</b></span>
        </p>
        <h2>Contact Info</h2>
        <p>
            Email: <a href="mailto:ami@muska.zip">ami@muska.zip</a><br>
            Telegram: <a href="https://t.me/Muska_Ami">@Muska_Ami</a><br>

        </p>
    </div>
</template>

<script setup>
import '@mdui/icons/arrow-back.js';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.back {
    padding: 0.4rem;
}
</style>
