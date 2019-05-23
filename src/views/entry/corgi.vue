<template>
  <div class="content-modal">
    <button class="close hover" v-on:click="onClose">x</button>
    <img class="corgi" :src="isMobile ? CorgiGroupMobile : CorgiGroupDesktop" alt="corgi group" />
    <a class="link hover marginTop" href="https://store.line.me/stickershop/product/3907989" target="_blank">
      Open in LINE Store
    </a>
  </div>
</template>

<script>
import CorgiGroupDesktop from '@/assets/corgi_group_desktop.png';
import CorgiGroupMobile from '@/assets/corgi_group_mobile.png';

export default {
  data() {
    return {
      // assets
      CorgiGroupDesktop,
      CorgiGroupMobile,
    };
  },
  props: {
    isMobile: Boolean,
    onClose: Function,
  },
}
</script>

<style scoped>
.content-modal {
  height: auto;
  padding: 45px 40px;
  text-align: center;
  width: min-content;
}

.close {
  border-top-right-radius: 10px;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 17px;
  font-weight: 300;
  line-height: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
}

.corgi {
  height: auto;
  object-fit: contain;
  width: 586px;
}

.link {
  border-radius: 50px;
  background-color: #FCEFDB;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 15px;
  width: max-content;
}

@media (max-width: 880px) {
  .corgi {
    width: 400px;
  }
}

@media (max-width: 580px) {
  .corgi {
    width: 182px;
  }
}
</style>
