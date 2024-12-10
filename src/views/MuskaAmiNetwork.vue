<template>
  <mdui-top-app-bar>
    <mdui-icon-button @click="router.push('/')" class="back">
      <mdui-icon-arrow-back></mdui-icon-arrow-back>
    </mdui-icon-button>
    <mdui-top-app-bar-title>Muska Ami Network</mdui-top-app-bar-title>
    <div style="flex-grow: 1"></div>
  </mdui-top-app-bar>
  <div class="mdui-prose" style="margin: 2rem">
    <h2>Routes Info</h2>
    <p>
      Route-IPv4: 100.64.0.0/10<br />
      Route-IPv6: fd7a:115c:a1e0::/96<br />
      <br />
      For more info about IP assignment, please reference:
      <a href="https://tailscale.com/kb/1033/ip-and-dns-addresses" target="_blank">
        How Tailscale assigns IP addresses
      </a>
    </p>
    <h2>Allocated IPs</h2>
    <h3>IPv4</h3>
    <ul>
      <li>10.0.0.0/24 - by Muska-Ami@github</li>
      <li>10.10.0.0/16 - by Muska-Ami@github</li>
      <li>10.11.0.0/16 - by 114514-homo-lab@github</li>
    </ul>
    <h3>IPv6</h3>
    <p>Have no any route yet</p>
    <h2>Relay Server List</h2>
    <div style="width: 100%; overflow-y: scroll">
      <table style="min-width: 1000px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Bandwidth (bit per second)</th>
            <th>Network Stack</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>900</td>
            <td>中国, 浙江-宁波</td>
            <td>800M Upload / 800M Dload</td>
            <td>IPv4 + IPv6</td>
            <td></td>
          </tr>
          <tr>
            <td>901</td>
            <td>-</td>
            <td>- / -</td>
            <td>-</td>
            <td>[Removed]</td>
          </tr>
          <tr>
            <td>902</td>
            <td>中国香港 Hongkong</td>
            <td>30M Upload / 30M Dload</td>
            <td>IPv4</td>
            <td></td>
          </tr>
          <tr>
            <td>903</td>
            <td>Unite States, Las Vegas, Nevada</td>
            <td>10G Upload / 10G Dload</td>
            <td>IPv4 + IPv6</td>
            <td></td>
          </tr>
          <tr>
            <td>904</td>
            <td>中国, 湖北-崇阳</td>
            <td>100M Upload / 1G Dload</td>
            <td>IPv4</td>
            <td></td>
          </tr>
          <tr>
            <td>905</td>
            <td>中国, 湖南-娄底</td>
            <td>100M Upload / 100M Dload</td>
            <td>IPv4</td>
            <td></td>
          </tr>
          <tr>
            <td>906</td>
            <td>中国, 浙江-杭州</td>
            <td>30M Upload / 30M Dload</td>
            <td>IPv4 + IPv6</td>
            <td></td>
          </tr>
          <tr>
            <td>907</td>
            <td>Japan, Tokyo</td>
            <td>1G Upload / 1G Dload</td>
            <td>IPv4 + IPv6</td>
            <td></td>
          </tr>
          <tr>
            <td>908</td>
            <td>中国, 重庆</td>
            <td>130M Upload / 130M Dload (IPv4) | 300M Upload / 300M Dload (IPv6)</td>
            <td>IPv4 + IPv6</td>
            <td></td>
          </tr>
          <tr>
            <td>909</td>
            <td>Singapore</td>
            <td>1G Upload / 1G Dload</td>
            <td>IPv4 + IPv6</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>Technology Stack</h2>
    <ul>
      <li>
        <a href="https://tailscale.com" target="_blank"> Tailscale </a>
      </li>
      <li>
        <a
          href="https://tailscale.com/blog/how-tailscale-works#encrypted-tcp-relays-derp"
          target="_blank"
        >
          Designated Encrypted Relay for Packets
        </a>
      </li>
    </ul>
    For networking details, please see
    <a href="https://tailscale.com/blog/how-tailscale-works" target="_blank">
      How Tailscale works </a
    ><br />
    <img src="https://apac-cloudflare-r2.img.1l1.icu/2024/07/30/66a8795576bb5.webp" />
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
