<template>
  <div id="app">
    <Navbar />
    <router-view :isMobile="isMobile" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar';

export default {
  created() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  name: 'app',
  components: {
    Navbar,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 580,
    };
  },
  methods: {
    onResize: function() {
      this.isMobile = window.innerWidth <= 580;
    },
  },
}
</script>

<style>
:root {
  /*
  reference

  @custom-media --xx-small-viewport only screen and (max-width: 320px);
  @custom-media --x-small-viewport only screen and (max-width: 416px);
  @custom-media --small-viewport only screen and (min-width: 416px) and (max-width: 580px);
  @custom-media --medium-viewport only screen and (min-width: 580px) and (max-width: 864px);
  @custom-media --large-viewport only screen and (min-width: 864px) and (max-width: 1096px);
  @custom-media --x-large-viewport only screen and (min-width: 1096px);
  @custom-media --phone (--x-small-viewport), (--small-viewport);
  @custom-media --desktop (--large-viewport), (--x-large-viewport);
  */

  --light-blue-color: #DDE6F5;
  --black-color: #474747;
  --white-color: #ffffff;

  --transition-curve: cubic-bezier(0.8, 0, 0.2, 1);
  --transition-duration: 0.15s;
}

@font-face {
  font-family: "Circular Pro";
  src: url("assets/fonts/circular-pro-book.woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Circular Pro";
  src: url("assets/fonts/circular-pro-medium.woff");
  font-weight: 600;
  font-style: medium;
}

@font-face {
  font-family: "Circular Pro";
  src: url("assets/fonts/circular-pro-bold.woff");
  font-weight: 800;
  font-style: bold;
}

body,
html,
#app {
  color: var(--black-color);
  width: 100%;
}

body,
button,
h1,
h2,
h3,
h4,
h5,
h6,
html,
p {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  display: inline-block;
  text-decoration: none;
}

button {
  background-color: transparent;
}

a,
button,
input,
a:focus,
button:focus,
input:focus {
  border: none;
  outline: 0;
}

* {
  font-family: 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  outline: 0 !important;
  position: relative;
}

/* animation */
.fade-enter-active,
.fade-leave-active,
.fadeNoDelay-enter-active,
.fadeNoDelay-leave-active {
  transition: opacity var(--transition-duration) var(--transition-curve);
}

.fade-enter,
.fade-leave-to,
.fade-enter-active,
.fade-enter-leave {
  height: 100%;
  position: absolute;
  width: 100%;
}

.fade-enter-active {
  transition-delay: var(--transition-duration);
}

.fade-enter,
.fade-leave-to,
.fadeNoDelay-enter,
.fadeNoDelay-leave-to {
  opacity: 0;
}

/* reusable global classes */
.container {
  margin: auto;
  width: 90%;
}

.container.tight {
  width: 80%;
}

@media (max-width: 580px) {
  .container.tight {
    width: 90%;
  }
}

.hover {
  transition: opacity var(--transition-duration) var(--transition-curve);
  transition-delay: 0;
}

.hover:hover {
  opacity: 0.5;
}

.hover2 {
  overflow: hidden;
}

.hover2::before,
.hover3::before {
  transition: transform var(--transition-duration) var(--transition-curve);
}

.hover2::before,
.hover3::before {
  background-color: var(--light-blue-color);
  bottom: 0;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  transform: scaleY(0.5) translateX(calc(-100% - 1px));
  transform-origin: 0 100%;
  width: 100%;
  z-index: -1;
}

.hover2:hover::before,
.hover2.active::before {
  transform: scaleY(0.5) translateX(0);
}

.hover3::before {
  transform: scaleY(0.5);
}

.hover3:hover::before {
  transform: scaleY(1);
}

.hover4::before {
  background-color: var(--black-color);
  border-radius: 50px;
  content: '';
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity var(--transition-duration) var(--transition-curve);
  width: 100%;
}

.hover4:hover::before {
  opacity: 0.25;
}

/* margin */
.marginTop {
  margin-top: 40px;
}

.marginTop.small {
  margin-top: 20px;
}

.marginTop.large {
  margin-top: 60px;
}

.marginBottom {
  margin-bottom: 40px;
}

.marginBottom.small {
  margin-bottom: 20px;
}

.marginBottom.large {
  margin-bottom: 60px;
}

.marginRight {
  margin-right: 40px;
}

.marginRight.small {
  margin-right: 20px;
}

.marginRight.large {
  margin-right: 60px;
}

.marginLeft {
  margin-left: 40px;
}

.marginLeft.small {
  margin-left: 20px;
}

.marginLeft.large {
  margin-left: 60px;
}

/* padding */
.paddingTop {
  padding-top: 40px;
}

.paddingTop.small {
  padding-top: 20px;
}

.paddingTop.large {
  padding-top: 60px;
}

.paddingBottom {
  padding-bottom: 40px;
}

.paddingBottom.small {
  padding-bottom: 20px;
}

.paddingBottom.large {
  padding-bottom: 60px;
}

.paddingRight {
  padding-right: 40px;
}

.paddingRight.small {
  padding-right: 20px;
}

.paddingRight.large {
  padding-right: 60px;
}

.paddingLeft {
  padding-left: 40px;
}

.paddingLeft.small {
  padding-left: 20px;
}

.paddingLeft.large {
  padding-left: 60px;
}
</style>
