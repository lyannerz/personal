<template>
  <transition name="fade">
    <div v-if="show">
      <div class="container tight">
        <div class="content">
          <h1 class="header paddingBottom">
            {{'Portfolio'}}
          </h1>
          <div class="grid first">
            <div class="item">
              <h4 class="item-header">Nextdoor Redesign</h4>
              <router-link
                class="nextdoor hover hover3"
                tag="a"
                to="/portfolio/kleinerperkins"
              >
                Enter
              </router-link>
            </div>
          </div>
          <h3 class="header-3 marginTop large">Meanwhile,</h3>
          <p class="message marginBottom large">
            check out my fun projects and illustrations!
          </p>
          <div class="grid">
            <div class="item">
              <h4 class="item-header">Vinegar</h4>
              <a class="vinegar hover hover3" href="https://www.figma.com/file/MjWyfxSPRzoWxUWEcDUIu22e/cruzhacks?node-id=0%3A1" target="_blank">Figma</a>
            </div>
            <div class="item">
              <h4 class="item-header">Personal</h4>
              <a class="hover hover3" href="https://www.figma.com/file/RLVOfYzJOfvNrjnbpbxlIsMc/Personal?node-id=0%3A1" target="_blank">Figma</a>
            </div>
            <div class="item">
              <h4 class="item-header">Causeway</h4>
              <a class="causeway hover hover3" href="https://www.figma.com/file/0b9MheMHBV8CZcrqwWpCpXlQ/causeway-stuff?node-id=1%3A1254" target="_blank">Figma</a>
            </div>
            <div class="item">
              <h4 class="item-header">Spotify</h4>
              <a class="spotify hover hover3" href="https://www.figma.com/file/UJzGtjkjeTrxh12IqGwHeHGC/Spotify?node-id=0%3A1" target="_blank">Figma</a>
            </div>
            <div class="item">
              <h4 class="item-header">LinkedIn</h4>
              <a class="linkedin hover hover3" href="https://www.figma.com/file/LDesFquzxt2PGyER9LShjVBo/LinkedIn-Job-Search?node-id=0%3A1" target="_blank">Figma</a>
            </div>
            <div class="item">
              <h4 class="item-header">Patatap</h4>
              <a class="patatap hover hover3" href="/patatap/patatap.html" target="_blank">JavaScript</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      // state
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
}
</script>

<style scoped>
.content {
  padding-top: 100px;
  width: 90%;
}

.header {
  font-size: 36px;
  font-weight: 800;
}

.coming-soon {
  border: dashed 2px #ADBBD2;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 35px;
  padding: 10px 17px;
  top: 13px;
  vertical-align: top;
}

.header-3 {
  font-size: 26px;
  font-weight: 500;
}

.message {
  font-size: 20px;
  line-height: 1.7em;
  vertical-align: bottom;
}

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 660px;
}

.grid.first {
  width: 100%;
}

.grid.first .item {
  width: 33.33%;
}

.item {
  margin-bottom: 50px;
  width: 25%;
}

.item-header {
  font-size: 26px;
  font-weight: 400;
}

.item > a {
  font-size: 16px;
}

.nextdoor::before {
  background-color: #00B246 !important;
  opacity: 0.25;
}

.vinegar::before {
  background-color: #F88379 !important;
  opacity: 0.45;
}

.spotify::before {
  background-color: #1db954 !important;
  opacity: 0.35;
}

.linkedin::before {
  background-color: #0077B5 !important;
  opacity: 0.35;
}

.patatap::before {
  background-color: #f0db4f !important;
  opacity: 0.35;
}

@media (max-width: 880px) {
  .content,
  .grid {
    width: 100%;
  }
}

@media (max-width: 580px) {
  .content {
    padding-top: 50px;
  }

  .grid.first .item {
    width: 100%
  }

  .item {
    width: 50%;
  }
}

@media (max-width: 360px) {
  .coming-soon {
    display: block;
    margin: 0;
    width: max-content;
  }
}
</style>
