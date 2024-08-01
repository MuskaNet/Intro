<template>
    <div class="box page works">
        <mdui-card class="work-single">
            <h2>Muska Ami Network</h2>
            <p>私人VPN网络，用于学习交流。</p>
            <mdui-button href="https://blog.muska.zip/extras/private-network/" target="_blank" class="more-button"
                variant="text">More →</mdui-button>
        </mdui-card>
        <mdui-card class="work-single">
            <h2>DN42</h2>
            <p>Muska Network，位于 DN42 上的信息。</p>
            <mdui-button href="https://blog.muska.zip/extras/dn42/" target="_blank" class="more-button"
                variant="text">More →</mdui-button>
        </mdui-card>
        <mdui-card class="work-single">
            <h2>Public Network</h2>
            <p>Muska Network 全球公共网络信息。</p>
            <mdui-button href="https://blog.muska.zip/extras/subnets/" target="_blank" class="more-button"
                variant="text">More →</mdui-button>
        </mdui-card>
    </div>
</template>

<style scoped>
@import url('@assets/page.css');

.works {
    align-items: start !important;
    flex-direction: row !important;
    margin: 2em;
}

.work-single {
    width: 500px;
    margin: 0.75rem;
}

.work-single h2 {
    margin: 1.5rem;
}

.work-single p {
    margin: 1.5rem;
}

@media screen and (max-width: 770px) {
    .works {
        margin: 0;
    }
}

.more-button {
    float: right;
    margin: 1rem;
}
</style>
