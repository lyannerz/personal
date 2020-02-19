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
              <h4 class="item-header">BirdEye</h4>
              <button
                class="birdeye hover hover3"
                v-on:click="onClickBirdeye"
              >
                Enter
              </button>
            </div>
            <div class="item">
              <h4 class="item-header">Vinegar</h4>
              <router-link
                class="vinegar hover hover3"
                tag="a"
                to="/portfolio/vinegar"
              >
                Enter
              </router-link>
            </div>
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
            <div class="item">
              <h4 class="item-header">TutorHub</h4>
              <router-link
                class="tutorhub hover hover3"
                tag="a"
                to="/portfolio/tutorhub"
              >
                Enter
              </router-link>
            </div>
            <div class="item">
              <h4 class="item-header">Causeway</h4>
              <a class="causeway hover hover3" href="https://www.figma.com/file/0b9MheMHBV8CZcrqwWpCpXlQ/causeway-stuff?node-id=0%3A1" target="_blank">Figma</a>
            </div>
          </div>
        </div>
      </div>
      <transition name="fadeNoDelay">
        <Modal v-if="isModalOpen" :onClose="closeModal">
          <component
            :is="currentModal.entry"
            :isMobile="isMobile"
            :onClose="closeModal"
          />
        </Modal>
      </transition>
    </div>
  </transition>
</template>

<script>
import birdeye from '@/views/entry/birdeyePassword';
import Modal from '@/components/modal';

import {ALL_ENTRIES} from '@/defs';

export default {
  components: {
    birdeye,
    Modal,
  },
  data() {
    return {
      // state
      show: false,
      isModalOpen: false,
      currentModal: ALL_ENTRIES.find((item) =>
        item.entry === this.$route.hash.slice(1)),
    };
  },
  mounted() {
    this.show = true;
    this.track();
  },
  methods: {
    track() {
      this.$ga.page('/portfolio');
    },
    onClickBirdeye() {
      this.isModalOpen = true;
      this.currentModal = { entry: 'birdeye' };
      window.location.hash = 'birdeye';
    },
    closeModal: function() {
      this.isModalOpen = false;
      this.currentModal = null;
      history.pushState(null, null, ' ');
    },
  },
  props: {
    isMobile: Boolean,
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
  width: 100%;
}

.grid.first {
  justify-content: unset;
}

.grid.first .item {
  min-width: 50%;
  width: fit-content;
}

.item {
  margin-bottom: 50px;
  width: 25%;
}

.item-header {
  font-size: 26px;
  font-weight: 400;
}

.item > a,
.item > button {
  cursor: pointer;
  font-size: 16px;
}

.causeway::before {
  background-color: #728ffd !important;
  opacity: 0.35;
}

.nextdoor::before {
  background-color: #00B246 !important;
  opacity: 0.25;
}

.tutorhub::before {
  background-color: #6F82A5 !important;
  opacity: 0.4;
}

.vinegar::before {
  background-color: #F88379 !important;
  opacity: 0.6;
}

.birdeye::before {
  background-color: var(--light-blue-color) !important;
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
