<template>
  <div>
    <div class="content-modal">
      <button class="close hover" v-on:click="onClose">x</button>
      <a href="https://www.figma.com/file/RLVOfYzJOfvNrjnbpbxlIsMc/Personal?node-id=0%3A1" target="_blank">
        <img class="wave hover" src="/personal.png" alt="personal figma" />
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
export default {
  props: {
    onClose: Function,
  },
}
</script>

<style scoped>
.content-modal {
  height: auto;
  padding: 70px 50px 40px 50px;
  text-align: center;
  width: min-content;
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
  background-color: var(--light-blue-color);
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

.link {
  border-radius: 50px;
  background-color: var(--light-blue-color);
  color: var(--black-color);
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
    width: 600px;
  }
}

@media (max-width: 580px) {
  .content-modal {
    padding: 20px 0 0 0;
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
