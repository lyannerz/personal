<template>
  <transition name="fade">
    <div class="content">
      <div class="container tight">
        <h1 class="h1">
          Nextdoor Redesign
        </h1>
        <h3 class="h3 marginTop marginBottom small">
          Kleiner Perkins Design Challenge 2019
        </h3>
        <img class="landingImg paddingTop large" :src="communityEventImg" alt="community event" />
        <div class="text-body paddingTop large">
          <h4 class="h4 marginTop paddingBottom small">
            Inspiration
          </h4>
          <p class="p marginTop small">
            I created an account on Nextdoor in 2016 to get involved within my community in Santa Clara.
            Scrolling through the social network, most of the posts illuminated nearby events or items that people
            were selling. While away during college, I would use Nextdoor to inform my family of events and warn
            them about crimes that were happening near them. With a large community using the app, I felt safe
            knowing that my neighbors were looking after each other.
          </p>
          <p class="p quote marginTop large">
            "Nextdoor is the world's largest social network for the neighborhood. Nextdoor enables truly
            local conversations that empower neighbors to build stronger and safer communities.
            <span class="bold">Building connections in the real world is a universal human need.</span>
            That truth, and the reality that neighborhoods are one of the most imporant useful communities
            in our lives have been a guiding principle for Nextdoor since it was founded in 2011."
          </p>
          <p class="p caption">
            Taken from <a class="hover" href="https://about.nextdoor.com" target="_blank">https://about.nextdoor.com</a>
          </p>
          <p class="p marginTop marginBottom large">
            Differing from most social media networks that encompass users from anywhere around the world,
            I chose to redesign Nextdoor as I admired Nextdoor's product and mission towards creating a strong
            and safe community for their users.
          </p>
          <h4 class="h4 paddingTop small">
            My Role
          </h4>
          <p class="p paddingTop paddingBottom">
            Perform user research, understand specific user needs, create mockups, produce high-fidelity
            designs, and provide a successful user experience.
          </p>
          <h4 class="h4 paddingTop large">
            Research
          </h4>
          <p class="p paddingTop">
            With the context of Nextdoor's focus on building communities, I asked a few questions to a group
            of 30 random people who use or have used Nextdoor.
          </p>
          <img class="surveyImg-age paddingTop large" :src="ageImg" alt="age demographics" />
          <p class="p caption">
            Age demographics of survey participants.
          </p>
          <p class="p paddingTop paddingBottom large">
            The survey participants consisted of people from varying age groups in order to accurately
            represent the Nextdoor user age demographics.
          </p>
          <img class="surveyImg-connect paddingTop large" :src="connectImg" alt="connect survey" />
          <p class="p caption">
            Many people do not connect with their neighbors.
          </p>
          <p class="p paddingTop paddingBottom large">
            The users of Nextdoor does not have a centralized method of connecting with their neighbors.
          </p>
          <img class="surveyImg-in-person paddingTop large" :src="inPersonImg" alt="in-person survey" />
          <p class="p caption marginTop small">
            Many people have not met their neighbors through Nextdoor.
          </p>
          <p class="p paddingTop paddingBottom large">
            Despite Nextdoor being an effective platform for neighbors to connect online, Most users of
            Nextdoor do not connect on a face-to-face basis.
          </p>
          <h4 class="h4 paddingTop small">
            Challenge
          </h4>
          <p class="p paddingTop paddingBottom">
            According to the user research, Nextdoor has opportunity for improvement in providing more
            in-person experiences. Therefore, Nextdoor's challenge is to being able to leverage their
            mission of building communities to promote in-person interactions.
          </p>
          <h4 class="h4 paddingTop">
            Proposal
          </h4>
          <p class="p paddingTop paddingBottom">
            To actively promote in-person events and community bondings within Nextdoor, for this specific
            challenge, I specifically will be talking about adding a "community event" for each neighborhood.
          </p>
          <h4 class="h4 paddingTop">
            Flowchart/User-Flow
          </h4>
          <p class="p paddingTop paddingBottom">
            To finalize my idea without running into issues while prototyping, I decied to create a flowchart.
            For both the mobile and web view, the first poll will have the goal of recording the number of interest
            in "community event" in each neighborhood.
          </p>
          <img class="flow-1" :src="flow1Img" alt="flowchart/user-flow" />
          <p class="p caption">
            Flow of introduction poll prior to introducing the "community event".
          </p>
          <p class="p paddingTop paddingBottom large">
            The introduction poll will exist prior to creating "community event" in order to gather relevant data from
            Nextdoor users and smoothly introduce the idea of "community event".
          </p>
          <img class="flow-2" :src="flow2Img" alt="flowchart/user-flow" />
          <p class="p caption">
            Flow of user interaction with "community event"
          </p>
          <p class="p paddingTop paddingBottom large">
            If the "community event" is in high demand, Nextdoor will create the special event page with suggested data.
            Nextdoor should actively promote this "community event" through its notification system, as well as occupying
            a space on the news feed page in order to emphasize the event. The event will have a poll that suggests
            the neighbors to decide on the event itself and its location.
          </p>
          <h4 class="h4 paddingTop paddingBottom">
            Wireframing + Prototyping
          </h4>
          <img class="wireframe paddingTop paddingBottom" :src="wireframeImg" alt="wireframe" />
          <h4 class="h4 paddingTop">
            UI Design
          </h4>
          <p class="p paddingTop paddingBottom">
            I made sure to coincide with the consistency of Nextdoor's UI. Normally, a "yes or no"
            poll would have this type of components:
          </p>
          <img class="yes-no" :src="yesNoImg" alt="yes or no" />
          <p class="p caption paddingBottom">
            Simple and common Yes or No selection option.
          </p>
          <p class="p center paddingTop paddingBottom small">
            Nextdoor's checkmark UI component:
          </p>
          <img class="checkmark" :src="checkmarkImg" alt="checkmark" />
          <p class="p caption paddingBottom">
            Taken from Nextdoor's privacy settings page.
          </p>
          <p class="p center paddingTop paddingBottom small">
            Testing and Iteration
          </p>
          <img class="check-gif paddingBottom large" :src="checkGifImg" alt="gif of clicking checkmark" />
          <img class="submit-gif paddingBottom paddingTop large" :src="submitGifImg" alt="gif of clicking submit" />
          <img class="mobile-gif paddingBottom paddingTop large" :src="mobileGifImg" alt="gif of mobile view" />
          <img class="flow-desktop paddingBottom paddingTop large" :src="flowDesktopImg" alt="flow on desktop view" />
          <img class="overall-flow paddingBottom paddingTop large" :src="overallFlowImg" alt="overall flow" />
          <img class="desktop-view paddingBottom paddingTop large" :src="desktopViewImg" alt="desktop full view" />
          <img class="community-event paddingBottom paddingTop large" :src="communityImg" alt="community view" />
          <img class="event-page paddingBottom paddingTop large" :src="eventImg" alt="event page" />
          <h4 class="h4 paddingTop">
            Reflection
          </h4>
          <p class="p paddingTop paddingBottom">
            I wanted to integrate an introduction poll for two reasons. First reason was to smoothly introduce
            new ideas (in this case, the "community event") to users. The poll hints the idea at the users, allowing
            the "community event" to be introduced without a surprise or confusion. Second reason was to collect
            relevant data to better execute the idea of creating a "community event" for the neighborhoods.
          </p>
          <p class="p paddingTop paddingBottom">
            I believe that the solution to Nextdoor's challenge is to actively promote community bonding, For the
            purpose of this challenge, I specifically proposed adding a "community event" that actively promotes user
            interactions through polls and that also enforces bodning by suggesting activities, location and date. While
            "community event" focuses on neighborhoods, the event should be easily scalable to other groups, such as
            interest groups.
          </p>
          <p class="p paddingTop paddingBottom">
            Nextdoor has a unique advantage of having a product that is centered around communities and neighborhood.
            With this background in mind, I believe that Nextdoor should be able to use this advantage to smoothly
            introduce user-friendly features that actively promote community bonding.
          </p>
          <div class="a-wrapper p paddingTop paddingBottom">
            <a class="a hover" href="https://www.figma.com/file/Q5xV0VNCL4n5b4YSiir2vnr3/next-door?node-id=43%3A0" target="_blank">Figma link</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ageImg from '@/assets/kleinerPerkins/age.png';
import communityEventImg from '@/assets/kleinerPerkins/community_event.png';
import connectImg from '@/assets/kleinerPerkins/connect.png';
import inPersonImg from '@/assets/kleinerPerkins/in-person.png';

import flow1Img from '@/assets/kleinerPerkins/flow1.png';
import flow2Img from '@/assets/kleinerPerkins/flow2.png';
import wireframeImg from '@/assets/kleinerPerkins/wireframe.png';
import yesNoImg from '@/assets/kleinerPerkins/yesno.png';
import checkmarkImg from '@/assets/kleinerPerkins/checkmark.png';
import checkGifImg from '@/assets/kleinerPerkins/check.gif';
import submitGifImg from '@/assets/kleinerPerkins/submit.gif';
import mobileGifImg from '@/assets/kleinerPerkins/mobile.gif';
import flowDesktopImg from '@/assets/kleinerPerkins/overallFlow.png';
import overallFlowImg from '@/assets/kleinerPerkins/mobileflow.png';
import desktopViewImg from '@/assets/kleinerPerkins/desktop.png';
import communityImg from '@/assets/kleinerPerkins/community.png';
import eventImg from '@/assets/kleinerPerkins/event.png';

export default {
  data() {
    return {
      ageImg,
      communityEventImg,
      connectImg,
      inPersonImg,
      flow1Img,
      flow2Img,
      wireframeImg,
      yesNoImg,
      checkmarkImg,
      checkGifImg,
      submitGifImg,
      mobileGifImg,
      flowDesktopImg,
      overallFlowImg,
      desktopViewImg,
      communityImg,
      eventImg,
    };
  },
  methods: {
    track() {
      this.$ga.page('/portfolio/kleinerperkins');
    },
  },
  mounted() {
    this.track();
  },
}
</script>

<style scoped>
.content {
  padding-top: 100px;
  padding-bottom: 100px;
}

.flow-1,
.flow-2,
.wireframe,
.yes-no,
.checkmark,
.check-gif,
.submit-gif,
.mobile-gif,
.flow-desktop,
.overall-flow,
.desktop-view,
.community-event,
.event-page,
.surveyImg-age,
.surveyImg-connect,
.surveyImg-in-person {
  display: block;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.check-gif {
  width: 40%;
}

.mobile-gif {
  width: 50%;
}

.submit-gif {
  width: 60%;
}

.wireframe,
.flow-desktop,
.overall-flow,
.desktop-view,
.community-event,
.event-page {
  width: 100%;
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

.flow-1 {
  width: 55%;
}

.flow-2 {
  width: 15%;
}

.surveyImg-in-person {
  width: 50%;
}

.surveyImg-in-person + .caption {
  margin-top: 20px;
}

.h1 {
  font-size: 36px;
  text-align: center;
}

.h3 {
  font-size: 24px;
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
  line-height: 2em;
}

.landingImg {
  display: block;
  margin: auto;
  width: 80%;
  max-width: 800px;
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
  .text-body {
    width: 100%;
  }
}

@media (max-width: 580px) {
  .content {
    padding-top: 50px;
  }
}

@media (max-width: 400px) {
  .h1 {
    font-size: 30px;
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
