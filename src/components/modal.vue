<template>
  <div>
    <div class="bg-overlay" v-on:click="onClose"></div>
    <div class="content" ref="content" :class="[contentClass]"><slot></slot></div>
  </div>
</template>

<script>
const enterAnim = [
  {opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)'},
  {opacity: 1, transform: 'translate(-50%, -50%) scale(1)'},
];

const enterTiming = {
  delay: 200,
  duration: 200,
  easing: 'cubic-bezier(0.8, 0, 0.2, 1.5)',
  fill: 'forwards',
};

const leaveAnim = [
  {opacity: 1, transform: 'translate(-50%, -50%) scale(1)'},
  {opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)'},
];

const leaveTiming = {
  duration: 300,
  easing: 'cubic-bezier(0.8, 0, 0.2, 1.5)',
  fill: 'forwards',
};

export default {
  beforeCreate() {
    document.body.classList.add('overflow');
  },
  mounted() {
    this.$refs.content.animate(enterAnim, enterTiming);
  },
  props: {
    onClose: Function,
    contentClass: String,
  },
  beforeDestroy() {
    this.$refs.content.animate(leaveAnim, leaveTiming);
    document.body.classList.remove('overflow');
  },
};
</script>

<style>
.overflow {
  overflow: hidden;
}
</style>

<style scoped>
.bg-overlay {
  background-color: var(--black-color);
  opacity: 0.6;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
}

.content {
  background-color: var(--white-color);
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  will-change: opacity, transform;
  max-height: 90vh;
  max-width: 90vw;
  overflow: auto;
  z-index: 1000;
}
</style>
