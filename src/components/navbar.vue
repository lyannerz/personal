<template>
  <nav class="container navbar">
    <router-link class="navbar-home hover" tag="a" to="/">
      <img class="navbar-img" :src="IdenticonImg" alt="identicon" />
    </router-link>
    <span class="navbar-span">
      <router-link
        class="marginRight hover hover2"
        :class="this.$route.path === '/about' && 'active'"
        tag="a"
        to="/about"
      >
        About
      </router-link>
      <router-link
        class="marginRight hover hover2"
        :class="this.$route.path === '/portfolio' && 'active'"
        tag="a"
        to="/portfolio"
      >
        Portfolio
      </router-link>
      <a class="hover hover2" href="https://www.linkedin.com/in/lyanna-ho/" target="_blank">
        LinkedIn
      </a>
    </span>
  </nav>
</template>

<script>
import IdenticonImg from '@/assets/identicon.png';


export default {
  data() {
    return {
      // assets
      IdenticonImg,
    };
  },
}
</script>

<style scoped>
.navbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 4vw;
}

a {
  font-size: 20px;
  padding: 0 5px;
}

.navbar-home {
  height: 35px;
  width: 43px;
}

.navbar-img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

@media (max-width: 580px) {
  a {
    font-size: 16px;
  }

  .navbar-span > a.marginRight {
    margin-right: 12px;
  }
}
</style>
