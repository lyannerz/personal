<template>
  <transition name="fade">
    <div v-if="show">
      <div class="container tight">
        <div class="content">
          <h1 class="header marginBottom">Hi! My name is Lyanna.</h1>
          <p class="message marginBottom large">
            {{'Currently a student at the University of California, '}}
            <a class="special message hover hover3" v-on:click="changeModal(SPECIAL_ENTRIES.santacruz)">
              Santa Cruz
            </a>
            {{'.'}}
            <br />
            {{'I love creating illustrations, designing, and building products.'}}
          </p>
          <div class="grid">
            <a
              class="item hover"
              v-on:click="changeModal(item)"
              v-for="(item, index) in PORTFOLIO_ENTRIES"
              :key="index"
            >
              <img class="item-img" :class="item.class" :src="item.imgSrc" :alt="item.entry" />
            </a>
          </div>
        </div>
      </div>
      <transition name="fadeNoDelay">
        <Modal v-if="isModalOpen" :onClose="closeModal">
          <component
            :is="currentEntry.entry"
            :isMobile="isMobile"
            :onClose="closeModal"
          />
        </Modal>
      </transition>
    </div>
  </transition>
</template>

<script>
import corgi from '@/views/entry/corgi';
import lyanna from '@/views/entry/lyanna';
import santacruz from '@/views/entry/santacruz';
import techforgood from '@/views/entry/techforgood';
import vinegar from '@/views/entry/vinegar';

import Modal from '@/components/modal';

import {ALL_ENTRIES, PORTFOLIO_ENTRIES, SPECIAL_ENTRIES} from '@/defs';

export default {
  components: {
    corgi,
    lyanna,
    santacruz,
    techforgood,
    vinegar,
    Modal,
  },
  data() {
    return {
      // state
      show: false,
      isModalOpen: false,
      currentEntry: ALL_ENTRIES.find((item) =>
        item.entry === this.$route.hash.slice(1)),

      // assets
      PORTFOLIO_ENTRIES,
      SPECIAL_ENTRIES,
    };
  },
  methods: {
    changeModal: function(item) {
      this.isModalOpen = true;
      this.currentEntry = item;
      window.location.hash = item.entry;
    },
    closeModal: function() {
      this.isModalOpen = false;
      this.currentEntry = null;
      history.pushState(null, null, ' ');
    },
  },
  mounted() {
    this.show = true;

    if (this.currentEntry) {
      this.isModalOpen = true;
    }
  },
  beforeRouteUpdate({ hash }, from, next) {
    if (hash) {
      this.currentEntry = ALL_ENTRIES.find(item =>
        item.entry === hash.slice(1));
      this.isModalOpen = true;
    } else {
      this.currentEntry = null;
      this.isModalOpen = false;
    }
    next();
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

.message {
  font-size: 20px;
  line-height: 1.7em;
  vertical-align: bottom;
}

.message.special {
  cursor: pointer;
}

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
}

.grid > a {
  display: inline-block;
  margin-bottom: 5%;
  width: 22.5%;
}

.item {
  cursor: pointer;
}

.item-img {
  border-radius: 5px;
  height: 100%;
  object-fit: contain;
  vertical-align: top;
  width: 100%;
}

.item-img.smile {
  height: 90%;
  left: 5%;
  margin: auto;
  top: 5%;
  width: 90%;
}

@media (max-width: 880px) {
  .content,
  .grid {
    width: 100%;
  }

  .grid > a {
    width: 30%;
  }
}

@media (max-width: 580px) {
  .content {
    padding-top: 50px;
  }

  .grid > a {
    width: 45%;
  }
}
</style>
