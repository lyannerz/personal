<template>
  <transition name="fade">
    <div class="content">
      <div class="container tight">
        <div class="main">
          <h1 class="h1">
            Optimal Note Taking
          </h1>
          <p class="p paddingTop">
            How students can alleviate the fear of missing vital information during lectures.
          </p>
          <a class="link hover marginTop" href="https://www.figma.com/file/MjWyfxSPRzoWxUWEcDUIu22e/vinegar" target="_blank">
            Figma Link
          </a>
        </div>
        <div class="text-body paddingTop large">
          <h4 class="h4 marginTop paddingBottom small">
            Introduction
          </h4>
          <p class="p marginTop small">
            Vinegar is a collaborative note-taking web application where students are
            assigned an allocated period of time to take notes. In the meantime, others in the
            session are free to do other activities.
          </p>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Inspiration
          </h4>
          <div class="float marginTop small">
            <div>
              <p class="p">
                Starting off as a random idea for Cruzhacks (a hackathon
                hosted in Santa Cruz, California), I wanted to design a user-friendly
                and modern application to entice our targeted college
                student demographic.
              </p>
              <p class="p marginTop">
                The name of our project derived from a nearby chip bag flavored "salt and vinegar".
                Sticking with the name jokingly, we worked on the project thinking a new name would come
                up in the process. However, we concluded our product is a silly idea and this name is uniquely
                humorous.
              </p>
            </div>
            <img class="inspirationImg" :src="inspirationImg" alt="inspiration" />
          </div>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Research
          </h4>
          <p class="p marginTop small">
            Initially being a project for the hackathon, there wasn't much time to conduct user research.
            Looking through designs that would appeal to our intended demographics of college students, the top results
            I found were that they looked for these certain qualities in design:
          </p>
          <div class="list paddingTop">
            <div class="list-item marginBottom small">
              <img class="list1Img" :src="list1Img" alt="list 1" />
              <p class="p">Speed, ease and efficiency</p>
            </div>
            <div class="list-item marginBottom small">
              <img class="list2Img" :src="list2Img" alt="list 2" />
              <p class="p">Clear, effective visuals</p>
            </div>
            <div class="list-item marginBottom small">
              <img class="list3Img" :src="list3Img" alt="list 3" />
              <p class="p">Minimalism, vibrant colors, and unique styles</p>
            </div>
          </div>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Wireframes
          </h4>
          <img class="wireframeImg" :src="wireframeImg" alt="wireframe" />
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Execution
          </h4>
          <p class="p marginTop small">
            Based off the results of my research, I aspired to create a design that would first
            check off the goal of minimalism and vibrant colors. To achieve minimalism, the
            wirefreames indicate there would be three pages that the user will browse through:
          </p>
          <p class="p quote marginTop marginBottom">
            Landing, Create/Join, and an In-Session page.
          </p>
          <p class="p">
            I looked into colors that would appeal to a large majority of modern consumers.
            Inspired by Pantone announcing <span style="color: #f88379; font-weight: 500;">Coral</span>
            as its color of the year, I wanted this color to be the main call-to-action color.
          </p>
          <div class="p quote marginTop marginBottom" style="text-align: left;">
            <p class="label" style="font-style: normal;">
              Color Palette
            </p>
            <img class="paletteImg" :src="paletteImg" alt="color palette" />
          </div>
          <p class="p paddingBottom large">
            The rest of the colors would be a <span style="font-weight: 500;">lighter black</span>
            that would fluctuate in opacity depending on the context.
          </p>
          <div class="componentImg paddingTop paddingBottom large">
            <p class="label" style="margin-bottom: 25px;">
              Components used in the Landing Page
            </p>
            <img class="img" :src="componentImg" alt="Components used in the landing page" />
          </div>
          <div class="landingImg paddingTop paddingBottom large">
            <p class="label">
              Landing Page
            </p>
            <img class="img" :src="landingImg" alt="screenshot of landing page" />
          </div>
          <div class="carousel session paddingTop paddingBottom large">
            <Carousel
              class="img"
              label="Create/Join Session"
              :src="[createOrJoinImg, joinImg, createImg]"
              :alt="['create or join page', 'join page', 'create page']"
              :width="['80%', '80%', '80%']"
            />
          </div>
          <div class="inSessionImg paddingTop paddingBottom large">
            <p class="label">
              In-Session
            </p>
            <img class="img" :src="inSessionImg" alt="in-session page" />
          </div>
          <div class="carousel modal paddingTop paddingBottom large">
            <Carousel
              class="img"
              label="Modals"
              :src="[welcomeImg, helpImg, passwordImg]"
              :alt="['welcome modal', 'help modal', 'password-protected modal']"
              :width="['40%', '40%', '40%']"
            />
          </div>
          <div class="carousel error paddingTop paddingBottom large">
            <Carousel
              class="img"
              label="Error Handling"
              :src="[snackbarImg, mobileErrImg, desktopErrImg]"
              :alt="['snackbar screenshot', 'mobile error screenshot', 'desktop error screenshot']"
              :width="['40%', '40%', '80%']"
            />
          </div>
          <div class="paddingTop" style="text-align: center;">
            <a class="link b hover marginTop" href="https://www.figma.com/file/MjWyfxSPRzoWxUWEcDUIu22e/vinegar" target="_blank">
              Figma Link
            </a>
          </div>
          <div class="paddingBottom" style="text-align: center;">
            <router-link class="hover marginTop small" to="/portfolio">
              Return to Portfolio
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Carousel from '@/components/carousel';

import inspirationImg from '@/assets/vinegar/inspiration.png';
import list1Img from '@/assets/vinegar/list1.png';
import list2Img from '@/assets/vinegar/list2.png';
import list3Img from '@/assets/vinegar/list3.png';
import wireframeImg from '@/assets/vinegar/wireframe.png';
import paletteImg from '@/assets/vinegar/palette.png';
import componentImg from '@/assets/vinegar/component.png';
import landingImg from '@/assets/vinegar/landing.png';
import createOrJoinImg from '@/assets/vinegar/createOrJoin.png';
import joinImg from '@/assets/vinegar/join.png';
import createImg from '@/assets/vinegar/create.png';
import inSessionImg from '@/assets/vinegar/inSession.png';
import welcomeImg from '@/assets/vinegar/welcome.png';
import helpImg from '@/assets/vinegar/help.png';
import passwordImg from '@/assets/vinegar/password.png';
import snackbarImg from '@/assets/vinegar/snackbar.png';
import mobileErrImg from '@/assets/vinegar/mobileErr.png';
import desktopErrImg from '@/assets/vinegar/desktopErr.png';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      inspirationImg,
      list1Img,
      list2Img,
      list3Img,
      wireframeImg,
      paletteImg,
      componentImg,
      landingImg,
      createOrJoinImg,
      joinImg,
      createImg,
      inSessionImg,
      welcomeImg,
      helpImg,
      passwordImg,
      snackbarImg,
      mobileErrImg,
      desktopErrImg,
    };
  },
  methods: {
    track() {
      this.$ga.page('/portfolio/vinegar');
    },
  },
  mounted() {
    this.track();
  },
}
</script>

<style scoped>
* {
  font-family: 'Rubik', 'Avenir', Helvetica, Arial, sans-serif;
}

.main {
  background-color: #f88379;
  color: var(--white-color);
  padding: 130px 200px;
  text-align: center;
}

.h1 {
  font-size: 80px;
  font-weight: 500;
  text-align: center;
}

.main > .p {
  font-size: 24px;
  line-height: 1.5em;
  margin: auto;
  width: 80%;
}

.link {
  border-radius: 50px;
  background-color: var(--white-color);
  color: #f88379;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 40px;
}

.link.b {
  background-color: #f88379;
  color: var(--white-color);
  font-weight: 400;
}

.content {
  padding-top: 100px;
  padding-bottom: 100px;
}

.float {
  display: flex;
  align-items: flex-start;
}

.inspirationImg,
.list1Img,
.list2Img,
.list3Img,
.wireframeImg,
.paletteImg,
.componentImg,
.landingImg,
.createOrJoinImg,
.joinImg,
.createImg,
.inSessionImg,
.welcomeImg,
.helpImg,
.passwordImg,
.snackbarImg,
.mobileErrImg,
.desktopErrImg,
.carousel {
  display: block;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

.carousel {
  width: 100%;
}

.inspirationImg > .img,
.list1Img > .img,
.list2Img > .img,
.list3Img > .img,
.wireframeImg > .img,
.paletteImg > .img,
.componentImg > .img,
.landingImg > .img,
.createOrJoinImg > .img,
.joinImg > .img,
.createImg > .img,
.inSessionImg > .img,
.welcomeImg > .img,
.helpImg > .img,
.passwordImg > .img,
.snackbarImg > .img,
.mobileErrImg > .img,
.desktopErrImg > .img,
.carousel > .img {
  display: block;
  object-fit: contain;
  width: 100%;
}

.inspirationImg {
  margin-top: -60px;
  width: 30%;
}

.list1Img,
.list2Img,
.list3Img {
  margin: 0;
  margin-right: 10px;
  width: 70px;
}

.wireframeImg,
.paletteImg {
  width: 100%;
}

.list {
  margin: auto;
  width: fit-content;
}

.list-item {
  display: flex;
  align-items: center;
}

.a-wrapper {
  text-align: center;
}

.a {
  border-radius: 50px;
  background-color: #00B246;
  color: #fff;
  padding: 10px 30px;
}

.h3 {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}

.h4 {
  font-size: 28px;
  font-weight: 500;
  line-height: 2em;
  text-align: center;
}

.p {
  font-size: 18px;
  line-height: 1.5em;
}

.label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.text-body {
  margin: auto;
  width: 70%;
}

.bold {
  font-weight: 600;
}

.center {
  text-align: center;
}

.quote {
  font-style: italic;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 90%;
}

.caption {
  font-size: 16px;
  opacity: 0.5;
  margin-top: 10px;
  text-align: center;
}

.caption > a {
  text-decoration: underline;
}

@media (max-width: 880px) {
  .main {
    padding: 65px 80px;
  }

  .h1 {
    font-size: 40px;
  }

  .main > .p {
    font-size: 18px;
    padding-top: 20px;
    width: 100%;
  }

  .link {
    font-size: 14px;
    padding: 12px 25px;
  }

  .text-body {
    width: 100%;
  }
}

@media (max-width: 580px) {
  .main {
    padding: 50px 20px;
  }

  .content {
    padding-top: 50px;
  }

  .carousel.error {
    height: 90vw;
  }
}

@media (max-width: 400px) {
  .h1 {
    font-size: 36px;
  }

  .h3 {
    font-size: 20px;
  }

  .h4 {
    font-size: 24px;
  }

  .p {
    font-size: 16px;
  }
 
  .label {
    font-size: 14px;
  }

  .caption {
    font-size: 14px;
  }

  .paddingTop {
    padding-top: 20px;
  }

  .paddingBottom {
    padding-bottom: 20px;
  }
}
</style>
