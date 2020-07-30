<template>
  <div>
    <img
      :class="[classes]"
      :alt="alt"
      :src="src"
      v-on:load="onLoad"
      @click="openModal"
    />
    <transition name="fadeNoDelay">
      <Modal v-if="isModalOpen" :onClose="closeModal" contentClass="modal-content">
        <img
          class="modal-img"
          :src="src"
          :alt="alt"
          v-on:click="closeModal"
        />
      </Modal>
    </transition>
  </div>
</template>

<script>
import Modal from '@/components/modal';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      // state
      isModalOpen: false,
    };
  },
  props: {
    alt: String,
    src: String,
    classes: Array,
    onLoad: Function,
  },
  methods: {
    openModal: function() {
      this.isModalOpen = true;
    },
    closeModal: function() {
      this.isModalOpen = false;
    },
  },
}
</script>

<style scoped>
.modal-img {
  border-radius: 10px;
  height: auto;
  cursor: pointer;
  width: 100%;
  vertical-align: top;
}

img {
  object-fit: contain;
  user-select: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

</style>

<style>
.modal-content {
  max-height: 80vh !important;
  max-width: 70vw !important;
  width: 100%;
}

@media (max-width: 880px) {
  .modal-content {
    max-width: 80vw !important;
  }
}

@media (max-width: 400px) {
  .modal-content {
    max-height: 95vh !important;
    max-width: 95vw !important;
  }
}
</style>
