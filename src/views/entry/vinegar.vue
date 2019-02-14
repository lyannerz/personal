<template>
  <div>
    <div class="content-modal">
      <button class="close hover" v-on:click="onClose">x</button>
      <router-link to="/portfolio/vinegar">
        <img class="wave" :src="WaveImg" alt="vinegar" />
      </router-link>
    </div>
    <div class="textAlign paddingBottom">
      <router-link class="link" to="/portfolio/vinegar">
        View Portfolio
      </router-link>
    </div>
  </div>
</template>

<script>
import WaveImg from '@/assets/wave.png';

export default {
  data() {
    return {
      // assets
      WaveImg,
    };
  },
  props: {
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

.wave {
  cursor: pointer;
  height: 450px;
  object-fit: cover;
  object-position: left;
  width: 450px;
  vertical-align: top;
}

.wave:hover {
  object-position: right;
}

.p {
  font-size: 18px;
  text-align: center;
}

.close {
  background-color: var(--black-color);
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
  transition: background-color var(--transition-duration) var(--transition-curve);
  will-change: background-color, opacity;
}

.link:hover {
  background-color: #F88379;
  opacity: 1;
}

@media (max-width: 880px) {
  .content-modal {
    padding: 60px 40px 40px 40px;
  }

  .wave {
    height: 400px;
    width: 400px;
  }
}

@media (max-width: 580px) {
  .content-modal {
    padding: 20px 0 0 0;
  }

  .wave {
    height: 300px;
    width: 300px;
  }
}
</style>
