<template>
  <transition name="fade">
    <div class="content">
      <div class="container tight">
        <div class="main">
          <img class="mainLogo" :src="mainLogo" alt="birdeye logo" />
        </div>
        <div class="text-body paddingTop large">
          <h4 class="h4 marginTop small firstLine">
            BirdEye is a customer experience software helping businesses improve and grow their online reputation.
          </h4>
          <div class="paddingTop paddingBottom small"></div>
          <p class="p center marginTop small">
            Note: I regularly update this entry with cool projects that I have been working on.
          </p>
          <div class="paddingTop paddingBottom small"></div>
          <p class="p center marginTop small">
            Updated July 2020
          </p>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop small firstLine">
            Contacts
          </h4>
          <p class="p marginTop small">
            Contacts shows leads and customers into one page and users can quickly send messages or view details for their specific contacts.
            Businesses can quickly import existing contacts and categorize them.
          </p>
          <div class="paddingTop paddingBottom small"></div>
          <div class="carousel session">
            <Carousel
              class="img"
              :src="[contacts1Img, contacts2Img, contacts3Img]"
              :alt="['contacts landing', 'import contacts', 'match contacts']"
              :width="['80%', '80%', '80%']"
            />
          </div>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Design system
          </h4>
          <p class="p marginTop small">
            In order to launch a new, better user experience for all of the products at BirdEye, one of the main projects I worked on was revamping the design system.
            The foundation would ultimately support our redesign of current and upcoming projects.
          </p>
          <div class="paddingTop paddingBottom small"></div>
          <div class="carousel session">
            <Carousel
              class="img"
              :src="[design1Img, design2Img, design3Img, design4Img, design5Img, design6Img]"
              :alt="['colors', 'buttons', 'tabs', 'dropdown selections', 'headers', 'popovers']"
              :width="['80%', '80%', '80%']"
            />
          </div>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop small firstLine">
            Interactions
          </h4>
          <p class="p marginTop marginBottom small">
            Links:
            <a class="hover hover3" href="https://birdeye.com/inbox/" target="_blank">
              Inbox
            </a>
            {{ ' & ' }}
            <a class="hover hover3" href="https://birdeye.com/mass-texting/" target="_blank">
              Mass Texting
            </a>
          </p>
          <p class="p marginTop small">
            Businesses can respond to customers directly and easily through BirdEye’s Inbox product.
            They can resolve issues easily by assigning conversation to teams or team members, and respond with pre-generated custom messages.
          </p>
          <div class="paddingTop paddingBottom small"></div>
          <div class="carousel session">
            <Carousel
              class="img"
              :src="[interactions1Img]"
              :alt="['inbox']"
              :width="['80%']"
            />
          </div>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop small firstLine">
            Reviews
          </h4>
          <p class="p marginTop small">
            BirdEye's "Reviews" product allows businesses to monitor and manage public customer feedback from multiple online sources in one page.
            Business users are able to manage their online reputation by replying instantly with preset templates and assigning team members to respond to specific reviews.
          </p>
          <div class="paddingTop paddingBottom small"></div>
          <div class="carousel session">
            <Carousel
              class="img"
              :src="[reviewImg, reviewTabletImg]"
              :alt="['review', 'review in tablet']"
              :width="['80%', '80%', '80%']"
            />
          </div>
          <div class="paddingTop paddingBottom"></div>
          <div class="paddingBottom" style="text-align: center;">
            <router-link class="link b hover marginTop small" tag="a" to="/portfolio">
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

import contacts1Img from '@/assets/birdeye/contacts1.png';
import contacts2Img from '@/assets/birdeye/contacts2.png';
import contacts3Img from '@/assets/birdeye/contacts3.png';
import design1Img from '@/assets/birdeye/design1.png';
import design2Img from '@/assets/birdeye/design2.png';
import design3Img from '@/assets/birdeye/design3.png';
import design4Img from '@/assets/birdeye/design4.png';
import design5Img from '@/assets/birdeye/design5.png';
import design6Img from '@/assets/birdeye/design6.png';
import interactions1Img from '@/assets/birdeye/interactions1.png';
import mainLogo from '@/assets/birdeye/birdeye_full.svg';
import reviewImg from '@/assets/birdeye/review.png';
import reviewTabletImg from '@/assets/birdeye/review_tablet.png';

import {BIRDEYE_PASSWORD} from '@/defs';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      contacts1Img,
      contacts2Img,
      contacts3Img,
      design1Img,
      design2Img,
      design3Img,
      design4Img,
      design5Img,
      design6Img,
      interactions1Img,
      mainLogo,
      reviewImg,
      reviewTabletImg,
    };
  },
  methods: {
    track() {
      this.$ga.page('/portfolio/birdeye');
    },
    openPasswordModal() {
      const isValidPassword = this.$props.password === atob(BIRDEYE_PASSWORD);

      if (!isValidPassword) {
        this.$router.push('/');
      }
    }
  },
  mounted() {
    this.track();
    this.openPasswordModal();
  },
  props: {
    password: {
      type: String,
      default: '',
    }
  },
}
</script>

<style scoped>
.main {
  color: var(--white-color);
  padding: 130px 200px 65px 200px;
  text-align: center;
}

.mainLogo {
  margin: auto;
  width: 50%;
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
  background-color: #1976d2;
  color: var(--white-color);
  font-weight: 400;
}

.content {
  padding-top: 100px;
  padding-bottom: 100px;
}

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

.carousel > .img {
  display: block;
  object-fit: contain;
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
  font-weight: 600;
  line-height: 2em;
  text-align: center;
}

.p {
  font-size: 18px;
  line-height: 1.5em;
}

.p > a {
  vertical-align: bottom;
}

.center {
  text-align: center;
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
