<template>
  <div>
    <div class="content-modal">
      <button class="close hover" v-on:click="onClose">x</button>
      <div class="link-wrapper">
        <a
          class="link hover"
          href="https://dribbble.com/lyannaho"
          target="_blank"
          v-html="Dribbble"
        />
        <a
          class="link hover"
          href="https://www.linkedin.com/in/lyanna-ho/"
          target="_blank"
          v-html="LinkedIn"
        />
        <a
          class="link hover"
          href="https://www.instagram.com/lyannerz.github.io/"
          target="_blank"
          v-html="Instagram"
        />
        <a
          class="link hover"
          href="https://vsco.co/lyannaho/images"
          target="_blank"
          v-html="Vsco"
        />
        </div>
    </div>
  </div>
</template>

<script>
import Dribbble from '!raw-loader!@/assets/dribbble.svg';
import LinkedIn from '!raw-loader!@/assets/linkedin.svg';
import Instagram from '!raw-loader!@/assets/instagram.svg';
import Vsco from '!raw-loader!@/assets/vsco.svg';

export default {
  data() {
    return {
        // assets
        Dribbble,
        LinkedIn,
        Instagram,
        Vsco,
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
  padding: 70px;
  text-align: center;
  width: 60vw;
}

.wave {
  height: auto;
  object-fit: cover;
  width: 900px;
  vertical-align: top;
}

.p {
  font-size: 18px;
  text-align: center;
}

.close {
  color: var(--black-color);
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
  z-index: 1;
}

.textAlign {
  text-align: center;
}

.link-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px 0;
}

.link {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

@media (max-width: 880px) {
  .content-modal {
    padding: 60px;
  }

  .wave {
    width: 600px;
  }
}

@media (max-width: 580px) {
  .content-modal {
    padding: 40px;
    width: 80vw;
  }

  .wave {
    width: 400px;
  }
}

@media (max-width: 400px) {
  .wave {
    width: 360px;
  }
}
</style>

<style>
.link > svg {
  width: 40px;
  height: 40px;
}
</style>

