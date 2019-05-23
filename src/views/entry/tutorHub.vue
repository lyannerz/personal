<template>
  <transition name="fade">
    <div class="content">
      <div class="container tight">
        <div class="main">
          <h1 class="h1">
            TutorHub
          </h1>
          <p class="p paddingTop">
            Creating a convenient solution for college students seeking help.
          </p>
          <a class="link hover marginTop" href="https://github.com/StevenSuh/TutorHub" target="_blank">
            GitHub Repo
          </a>
        </div>
        <div class="text-body paddingTop large">
          <h4 class="h4 showOnMobile marginTop paddingBottom">
            Prototype
          </h4>  
          <iframe ref="prototype" class="iframe marginBottom large" style="border: none; max-width: 100vw;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQgzacPd5z7j5gHscnZSNjonv%2FTutor-Hub%3Fnode-id%3D1%253A2%26viewport%3D57%252C220%252C0.3664567768573761%26scaling%3Dscale-down" allowfullscreen></iframe>
          <h4 class="h4 marginTop paddingBottom small">
            Introduction
          </h4>
          <div class="divider paddingTop marginBottom small">
            <p class="p">
                In the student community of the University of California, Santa Cruz, there is a problem where students look for help in their courseloads, but face schedule conflictions. My team and I hope to solve this problem by creating a “hub” where students can offer/receive aid in their studies.
            </p>
            <img class="plantsAndBooksImg" :src="plantsAndBooksImg" alt="plants and books" />
          </div>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Research
          </h4>
          <p class="p marginTop small">
            Performing an expert user interview, we were able to gain insights and create objectives for our project. I chose this expert based on their outstanding qualifications, high anonymous ratings, and their knowledge in becoming a tutor for our school.
          </p>
          <img class="researchImg paddingTop marginBottom large" :src="researchImg" alt="research" />
          <p class="p marginTop small">
            A sample of the feelings we learned from our expert user research:
          </p>
          <p class="p tab">
            + Rewarding, appreciative, networking opportunity, etc.
          </p>
          <p class="p tab">
            - Frustrations with application process, scheduling/location conflicts, etc.
          </p>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Requirements
          </h4>
          <div class="divider paddingTop marginBottom small">
            <div class="divide-large">
                <p class="p bold">
                    High Priority
                </p>
                <p class="p paddingTop small">
                    System will allow tutors to post themselves in order to let tutees reach out to tutors.
                </p>
                <p class="p paddingTop small">
                    System should allow smooth communication between tutors and tutees in order to form chatting and scheduling.
                </p>
                <p class="p bold paddingTop medium">
                    Medium Priority
                </p>
                <p class="p paddingTop small">
                    System shall allow both parties (tutors and tutees) to have autonomy and control over their actions within the application.
                </p>
                <p class="p bold paddingTop medium">
                    Low Priority
                </p>
                <p class="p paddingTop small">
                    System should allow new users to fully eperience the product/solution of TutorHub.
                </p>
            </div>
            <img class="usersImg smaller-divide" :src="usersImg" alt="users" />
          </div>
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Wireframes
          </h4>
          <img class="wireframeImg paddingTop marginBottom small" :src="wireframeImg" alt="wireframe" />
          <p class="p paddingTop paddingBottom small">
            Using a hand-drawn wireframe consisting frames similar to the ones above, we were able to simulate our design flow with multiple potential users. With their feedback and suggestions, I recreated the finalized frames on Figma.
          </p>
          <img class="figmaWireframeImg paddingTop marginBottom large" :src="figmaWireframeImg" alt="figma wireframe" />
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            High Fidelity
          </h4>
          <img class="designSystemImg paddingTop marginBottom small" :src="designSystemImg" alt="design system" />
          <p class="p center paddingTop paddingBottom small">
            Adding colors and text styles, I created components for our design system.
          </p>
          <img class="highFidelityImg paddingTop marginBottom large" :src="highFidelityImg" alt="high fidelity" />
          <div class="paddingTop paddingBottom"></div>
          <h4 class="h4 marginTop paddingBottom small">
            Analysis
          </h4>
          <p class="p paddingTop small">
            If given more time to complete the project, I would have wanted to conduct more research with expert users and design simulations. Having only a week, I reached out to a few tutors and students who used tutoring services.
          </p>
          <p class="p paddingTop">
            Additionally, I would have liked to take more consideration of how our expert user wished for a more complex interview process to select better tutors. However, since we would need to develop our project into working web/mobile application, we faced constraints in our application features.
          </p>
          <p class="p paddingTop">
            Overall, I really enjoyed the design process trying to solve a problem for students like myself. If this were to be hosted and officially implemented, I would love to have it benefit other students in all college communities.
          </p>
          <div class="paddingTop large" style="text-align: center;">
            <a class="link b hover marginTop marginRight small" href="https://www.figma.com/file/QgzacPd5z7j5gHscnZSNjonv/TutorHub" target="_blank">
              Figma Link
            </a>
            <a class="link c hover marginTop marginLeft small" href="https://github.com/StevenSuh/TutorHub" target="_blank">
              GitHub Repo
            </a>
          </div>
          <div class="paddingBottom" style="text-align: center;">
            <router-link class="hover paddingTop" to="/portfolio">
              Return to Portfolio
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import plantsAndBooksImg from '@/assets/tutorHub/Plant_and_books.png';
import researchImg from '@/assets/tutorHub/research.png';
import usersImg from '@/assets/tutorHub/users.png';
import wireframeImg from '@/assets/tutorHub/wireframe.png';
import figmaWireframeImg from '@/assets/tutorHub/figma-wireframe.png';
import designSystemImg from '@/assets/tutorHub/design-system.png';
import highFidelityImg from '@/assets/tutorHub/high-fidelity.png';

export default {
  data() {
    return {
      plantsAndBooksImg,
      researchImg,
      usersImg,
      wireframeImg,
      figmaWireframeImg,
      designSystemImg,
      highFidelityImg,
    };
  },
  methods: {
    track() {
      this.$ga.page('/portfolio/tutorHub');
    },
  },
  mounted() {
    this.track();

    if (window.innerWidth <= 580) {
        this.$refs.prototype.clientHeight = (window.innerWidth * 0.8) * (667/375);
    }
  },
}
</script>

<style scoped>
* {
  font-family: 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
}

.main {
  background-color: #6F82A5;
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

.tab {
    margin-left: 20px;
}

.iframe {
  left: 50%;
  transform: translateX(-50%);
}

.link {
  border-radius: 50px;
  background-color: var(--white-color);
  color: #6F82A5;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 40px;
}

.link.b {
  background-color: #6F82A5;
  color: var(--white-color);
  font-weight: 400;
}

.link.c {
    background-color: #E2E6ED;
    color: #6F82A5;
    font-weight: 500;
}

.content {
  padding-top: 100px;
  padding-bottom: 100px;
}

.divider {
    display: flex;
    align-items: center;
}

.divider > * {
    width: 50%;
}

.divide-large {
    width: 70%;
}

.divide-small {
    width: 30%;
}

.plantsAndBooksImg,
.usersImg,
.researchImg,
.wireframeImg,
.figmaWireframeImg,
.designSystemImg,
.highFidelityImg {
  display: block;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

.plantsAndBooksImg {
    padding-left: 50px;
    width: 50%;
}

.usersImg {
    padding-left: 50px;
    width: 40%;
}

.highFidelityImg,
.designSystemImg,
.wireframeImg,
.figmaWireframeImg {
  width: 100%;
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
  color: #6F82A5;
  font-weight: 600;
}

.center {
  text-align: center;
}

.showOnMobile {
    display: none;
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

  .divider {
    display: block;
  }

  .divider > * {
    width: 100%;
  }

  .showOnMobile {
    display: block;
  }

  .hideOnMobile {
      display: none;
  }

  .plantsAndBooksImg {
    padding: 0;
    padding-top: 60px;
    width: 60%;
  }

  .usersImg {
    padding: 0;
    padding-top: 60px;
    width: 70%;
  }

  .iframe {
    width: 80vw;
    height: 80vh;
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
