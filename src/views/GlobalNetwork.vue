<template>
    <mdui-top-app-bar>
        <mdui-icon-button @click="router.push('/')" class="back">
            <mdui-icon-arrow-back></mdui-icon-arrow-back>
        </mdui-icon-button>
        <mdui-top-app-bar-title>Public Network</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
    </mdui-top-app-bar>
    <div class="mdui-prose" style="margin: 2rem;">
        <p>ASN: AS151673</p>
        <b>Note here: The ASN was provided by <a href="https://net.aehxy.com">MirrorEdge Education and Research Network(镜缘教育科研网)</a>, we're not the owner. It's allocated by UPSTREAM Network LLC.</b><br>
        <b>The ASN was registered on APNIC, but the route inetnum6 was allocated by RIPE NCC.</b>
        <h2>Routes Info</h2>
        <p>
        Route-IPv6:
        <ul>
            <li>2a0f:7803:fd12::/48</li>
        </ul>
        <pre class="code">
inet6num:        2a0f:7803:fd12::/48
netname:         Muska-Network
country:         AQ
remarks:         ==============================
org:             ORG-MN195-RIPE
mnt-lower:       MUSKA-MNT
mnt-routes:      MUSKA-MNT
mnt-domains:     MUSKA-MNT
remarks:         ==============================
admin-c:         AA43245-RIPE
tech-c:          AA43245-RIPE
abuse-c:         AA43245-RIPE
status:          ALLOCATED-BY-LIR
remarks:         ==============================
remarks:         Allocated By Hangzhou Yingyun Network Technology Co., Ltd.
remarks:         ==============================
remarks:         To report network abuse, please contact abuse-c
remarks:         For troubleshooting, please contact tech-c or admin-c
remarks:         ==============================
mnt-by:          LOCYAN-MNT
mnt-by:          CN-LOCYAN-MNT
created:         2024-05-13T15:02:36Z
last-modified:   2024-05-13T15:02:36Z
source:          RIPE
        </pre>
        <span>For technology support, please contact <b>tech-c</b></span><br>
        <span>For abuse report, please contact <b>abuse-c</b></span>
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
