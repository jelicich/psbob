<template>
  <section class="HomeView Section" id="home">
    <div class="HomeView-overlay"></div>
    <div class="HomeView-inner View">
      <div class="HomeView-content d-flex">
        <div class="HomeView-contentCol my-auto">
          <h1 class="HomeView-title">
            <img alt="Primitive SpongeBob" src="@/assets/images/title.png"/>
          </h1>
          <p class="HomeView-description">
            The token you were waiting for, to go from Bikini Bottom to the moon. Hold your bags, let the jeets out, relax, and enjoy the most erratic journey to success with us.
          </p>

          <div class="HomeView-actions">
            <!-- TODO add icon -->
            <ActionButton>Buy on Raydium</ActionButton>
            <!-- TODO add icon -->
            <ActionButton>T</ActionButton>
            <!-- TODO add icon -->
            <ActionButton>X</ActionButton>
          </div>
        </div>
        <div class="HomeView-contentCol d-flex">
          <img class="HomeView-mainImg" alt="Primitive SpongeBob" src="@/assets/images/primitive-sb.webp"/>
        </div>
      </div>
    </div>
    <img class="HomeView-misc HomeView-misc--1" src="@/assets/images/plant-1.png" />
    <img class="HomeView-misc HomeView-misc--2" src="@/assets/images/plant-2.png" />
    <img class="HomeView-misc HomeView-misc--3" src="@/assets/images/plant-3.png" />
  </section>
</template>
<script>
import ActionButton from '@/components/ActionButton.vue';
import ScrollAnimation from '@/mixins/ScrollAnimation.mixin';

export default {
  name: 'HomeView',

  mixins: [ScrollAnimation],

  components: {
    ActionButton
  },
  
  mounted() {
    this.animateMain();
    this.animateMisc();
  },
  
  methods: {
    animateMain() {
      const TARGET_SEL = '.HomeView-mainImg';
      const TRIGGER_ELEMENT_SEL = "#about";
      const outroAnimationOptions = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: "top bottom",
            end: "top top",
          },
          x: this.helpers.vh(5),
        },
      };

      this.timeline.to(TARGET_SEL, outroAnimationOptions);
    },

    animateMisc() {
      const TARGET_SEL_1 = ".HomeView-misc--1, .HomeView-misc--3";
      const TARGET_SEL_2 = ".HomeView-misc--2";
      const TRIGGER_ELEMENT_SEL = "#about";

      const outroAnimationOptions1 = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: "top bottom",
            end: "top top",
          },
          y: -this.helpers.vh(15),
          scale: 1.05,
        },
      };

      const outroAnimationOptions2 = {
        runInMobile: false,
        gsapOptions: {
          ...outroAnimationOptions1.gsapOptions,
          y: -this.helpers.vh(5)
        },
      };

      this.timeline.to(TARGET_SEL_1, outroAnimationOptions1);
      this.timeline.to(TARGET_SEL_2, outroAnimationOptions2);
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables';

.HomeView {
  background-image: url('@/assets/images/bg-simple.png');
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;

  &-overlay {
    background-color: rgba(0,0,0, 0.7);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &-inner {
    display: flex;
    height: calc(100% - $header-height);
    padding-top: $header-height;
    position: relative;
    z-index: 1;
  }

  &-content {
    margin: auto 0;
    gap: 5vw;
    width: 100%;
  }

  &-contentCol {
    width: 50%;
  }

  &-title {
    margin: 0;
  }

  &-description {
    color: $white;
    font-size: 18px;
  }

  &-mainImg {
    width: 100%;
    max-width: 700px;
    margin-left: auto;
  }

  &-misc {
    filter: brightness(50%) blur(3px);
    position: absolute;
    bottom: -15vh;
    z-index: 2;
    max-width: 500px;
    width: 25vw;

    &--1 {
      left: 20px;
    }

    &--2 {
      left: 30%;
      bottom: -5vh;
      max-width: 250px;
    }

    &--3 {
      right: 20px;
    }
  }
}
</style>
