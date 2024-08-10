<template>
  <mdui-top-app-bar>
    <mdui-icon-button @click="router.push('/')" class="back">
      <mdui-icon-arrow-back></mdui-icon-arrow-back>
    </mdui-icon-button>
    <mdui-top-app-bar-title>DN42 Network</mdui-top-app-bar-title>
    <div style="flex-grow: 1"></div>
  </mdui-top-app-bar>
  <div class="mdui-prose" style="margin: 2rem">
    <p>ASN: AS4242423745</p>
    <h2>Routes Info</h2>
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
    <p>For abuse report and technology support, please contact <b>ADMIN-C</b></p>
    <div style="width: 100%; overflow-y: scroll">
      <table style="min-width: 1000px">
        <thead>
          <tr>
            <th>Type</th>
            <th>Location</th>
            <th>Bandwidth (Mbps)</th>
            <th>Network Stack</th>
            <th>Accept peering</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BACKBONE</td>
            <td>Japan, Tokyo</td>
            <td>500M Upload / 500M Dload</td>
            <td>IPv4 + IPv6</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>BACKBONE</td>
            <td>Hongkong</td>
            <td>5000M Upload / 5000M Dload</td>
            <td>IPv4 + IPv6</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>BACKBONE</td>
            <td>中国, 广西-贺州</td>
            <td>50M Upload / 500M Dload</td>
            <td>IPv6</td>
            <td>No for target not on China</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      For those who want to peer with us: We're only supported using Wireguard and Link-Local IPv6
      for peering.
    </p>
    <h2>Contact Info</h2>
    <p>
      Email: <a href="mailto:ami@muska.zip">ami@muska.zip</a><br />
      Telegram: <a href="https://t.me/Muska_Ami">@Muska_Ami</a><br />
    </p>
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
</style>
