<template>
  <div>
    <div class="content-modal">
      <button class="close hover" v-on:click="onClose">x</button>
      <a href="https://www.figma.com/file/RLVOfYzJOfvNrjnbpbxlIsMc/Personal?node-id=0%3A1" target="_blank">
        <img class="wave hover" :src="PersonalImg" alt="personal figma" />
      </a>
    </div>
    <div class="textAlign paddingBottom">
      <a class="link hover" href="https://www.figma.com/file/RLVOfYzJOfvNrjnbpbxlIsMc/Personal?node-id=0%3A1" target="_blank">
        Open in Figma
      </a>
    </div>
  </div>
</template>

<script>
import PersonalImg from '@/assets/personal.png';

export default {
  data() {
    return {
      // assets
      PersonalImg,
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
  height: auto;
  object-fit: cover;
  width: 450px;
  vertical-align: top;
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
}

@media (max-width: 880px) {
  .content-modal {
    padding: 60px 40px 40px 40px;
  }

  .wave {
    width: 400px;
  }
}

@media (max-width: 580px) {
  .content-modal {
    padding: 20px 0 0 0;
  }

  .wave {
    width: 300px;
  }
}
</style>
