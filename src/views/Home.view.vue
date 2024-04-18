<template>
  <section class="HomeView Section" id="home">
    <div class="HomeView-overlay"></div>
    <div class="HomeView-inner View">
      <div class="HomeView-content d-flex">
        <div class="HomeView-contentCol my-auto">
          <h1 class="HomeView-title">
            <span>
              <img class="HomeView-titleImg" alt="Primitive SpongeBob" src="@/assets/images/title.png"/>
            </span>
            <span>
              <img class="HomeView-mainImgMobile" alt="Primitive SpongeBob" src="@/assets/images/primitive-sb.webp"/>
            </span>
          </h1>
          <p class="HomeView-description text-xl">
            {{ $t('home.description') }}
          </p>

          <div class="HomeView-actions">
            
            <ActionButton size="xl" class="HomeView-cta">
              {{ $t('home.actions.buy') }}
              <SvgIcon name="pinksale-dark" size="xl" />
            </ActionButton>
            
            <ActionButton
              size="xl"
              :title="$t('home.actions.telegram')" 
              @click="openLink('https://t.me/+wKEdNPCjDuhlMmY8')"
              >
              <SvgIcon name="telegram" size="xl" />
            </ActionButton>
            
            <ActionButton 
              size="xl" 
              :title="$t('home.actions.x')"
              @click="openLink('https://twitter.com/PSBOB_Solana')"
              >
              <SvgIcon name="x" size="xl" />
            </ActionButton>
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
    <img class="HomeView-misc HomeView-misc--4" src="@/assets/images/smoke-1.webp" />
    <img class="HomeView-misc HomeView-misc--5" src="@/assets/images/smoke-2.webp" />
    <img class="HomeView-misc HomeView-misc--6" src="@/assets/images/smoke-2.webp" />
  </section>
</template>
<script>
import ActionButton from '@/components/ActionButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import ScrollAnimation from '@/mixins/ScrollAnimation.mixin';

export default {
  name: 'HomeView',

  mixins: [ScrollAnimation],

  components: {
    ActionButton,
    SvgIcon
  },
  
  mounted() {
    this.animateMain();
    this.animatePlants();
    this.animateSmoke();
  },
  
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
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

    animatePlants() {
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
    },

    animateSmoke() {
      const TARGET_SEL_1 = ".HomeView-misc--4";
      const TARGET_SEL_2 = ".HomeView-misc--5";
      const TARGET_SEL_3 = ".HomeView-misc--6";
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
          x: -this.helpers.vh(25),
          scale: 1.8,
          opacity: 1
        },
      };

      const outroAnimationOptions2 = {
        runInMobile: false,
        gsapOptions: {
          ...outroAnimationOptions1.gsapOptions,
          x: this.helpers.vh(35),
          scale: 1.5
        },
      };

      const outroAnimationOptions3 = {
        runInMobile: false,
        gsapOptions: {
          ...outroAnimationOptions1.gsapOptions,
          x: this.helpers.vh(15),
          scale: 1.05
        },
      };

      this.timeline.to(TARGET_SEL_1, outroAnimationOptions1);
      this.timeline.to(TARGET_SEL_2, outroAnimationOptions2);
      this.timeline.to(TARGET_SEL_3, outroAnimationOptions3);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/animations';
@import '@/styles/breakpoints';

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

    animation-name: dark;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  &-inner {
    display: flex;
    position: relative;
    z-index: 1;
  }

  &-content {
    margin: auto 0;
    gap: 5vw;
    width: 100%;

    @include sm-down {
      flex-direction: column-reverse;
    }
  }

  &-contentCol {
    width: 50%;

    @include sm-down {
      width: 100%;
    }

    &:first-child {
      position: relative;
      z-index: 2;
    }

    &:last-child {
      @include sm-down {
        display: none;
      }
    }
  }

  &-title {
    margin: 0;

    @include sm-down {
      display: flex;
      gap: 28px;
      justify-content: space-between;
    }
  }

  &-titleImg {
    max-width: 100%;
  }

  &-description {
    color: $white;
  }

  &-mainImg {
    width: 100%;
    max-width: 700px;
    margin-block: auto;
    margin-left: auto;
    pointer-events: none;
  }

  &-mainImgMobile {
    display: none;
    max-width: 300px;
    width: 100%;
    
    @include sm-down {
      display: block;
    }
  }

  &-misc {
    filter: brightness(50%) blur(3px);
    position: absolute;
    bottom: -15vh;
    z-index: 0;
    max-width: 500px;
    width: 25vw;
    pointer-events: none;

    @include sm-down {
      display: none;
    }

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
      z-index: 2;
    }

    &--4 {
      bottom: 15vh;
      left: 3vw;
      opacity: 0.7;
      transform: rotate(180deg);
    }

    &--5 {
      bottom: 30vh;
      left: 40vw;
      scale: 2;
      z-index: 2;
    }

    &--6 {
      bottom: 22px;
      left: 80vw;
      z-index: 2;
    }
  }

  &-actions {
    display: flex;
    gap: 18px;
  }

  &-cta {
    .SvgIcon {
      width: 40px;
      height: 40px;
      margin: -8px;
    }
  }
}
</style>
