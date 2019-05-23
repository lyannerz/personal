<template>
  <div>
    <div class="content-modal">
      <button class="close hover" v-on:click="onClose">x</button>
      <img class="santacruz" :src="isMobile ? SantaCruzMobileImg : SantaCruzImg" alt="Santa Cruz" />
    </div>
    <div class="textAlign paddingBottom">
      <a class="link hover" v-on:click="onClose">
        Close
      </a>
    </div>
  </div>
</template>

<script>
import SantaCruzImg from '@/assets/santacruz_pics.jpg';
import SantaCruzMobileImg from '@/assets/santacruz_pics_mobile.jpg';

export default {
  data() {
    return {
      // assets
      SantaCruzImg,
      SantaCruzMobileImg,
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
  padding: 70px 100px 40px 100px;
  text-align: center;
  width: min-content;
}

.santacruz {
  border-radius: 3px;
  cursor: pointer;
  height: auto;
  object-fit: cover;
  object-position: left;
  width: 465px;
}

.wave:hover {
  object-position: right;
}

.p {
  font-size: 18px;
  text-align: center;
}

.close {
  color: var(--white-color);
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

.textAlign {
  text-align: center;
}

.link {
  border-radius: 50px;
  background-color: var(--black-color);
  color: var(--white-color);
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 25px;
}

@media (max-width: 880px) {
  .content-modal {
    padding: 80px 60px 40px 60px;
  }

  .santacruz {
    width: 400px;
  }
}

@media (max-width: 580px) {
  .content-modal {
    padding: 50px 40px 30px 40px;
  }

  .santacruz {
    width: 200px;
  }
}
</style>
