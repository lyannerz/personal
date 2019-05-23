<template>
  <div>
    <div class="content-modal">
      <button class="close hover" v-on:click="onClose">x</button>
      <p class="p">Working with Professor David Lee</p>
      <a class="tech-link hover marginBottom" href="https://www.figma.com/file/0b9MheMHBV8CZcrqwWpCpXlQ/causeway-stuff?node-id=0%3A1" target="_blank">Causeway</a>
      <a href="https://tech4good.soe.ucsc.edu" target="_blank">
        <img class="smile" :src="SmileImg" alt="tech for good" />
      </a>
    </div>
    <div class="textAlign paddingBottom">
      <a class="link hover marginTop" v-on:click="onClose">
        Close
      </a>
    </div>
  </div>
</template>

<script>
import SmileImg from '@/assets/smile.png';

export default {
  data() {
    return {
      // assets
      SmileImg,
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
  padding: 140px 180px 60px 180px;
  text-align: center;
  width: min-content;
}

.smile {
  height: 180px;
  object-fit: contain;
  width: 180px;
}

.p {
  font-size: 15px;
  width: max-content;
}

.tech-link {
  color: #6877F2;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 700;
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

.in-progress {
  border: dashed 2px #ADBBD2;
  border-radius: 6px;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 28px;
}

@media (max-width: 880px) {
  .content-modal {
    padding: 80px 80px 40px 80px;
  }
}

@media (max-width: 580px) {
  .content-modal {
    padding: 40px 30px 20px 30px;
  }
}
</style>
