<template>
  <section class="AboutView Section" id="about">
    <div class="AboutView-inner View">
      <div class="AboutView-content d-flex">
        <FlippingCoin class="AboutView-coin"/>
        <div class="AboutView-about">
          <h1 class="AboutView-title">
            About
            <FlippingCoin class="AboutView-coinMobile"/>
          </h1>
          <p class="AboutView-text text-lg">{{ $t('about.paragraph1') }}</p>
          <p class="AboutView-text text-lg">{{ $t('about.paragraph2') }}</p>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
import FlippingCoin from '@/components/FlippingCoin.vue';
import ScrollAnimation from '@/mixins/ScrollAnimation.mixin';

export default {
  name: 'AboutView',

  mixins: [ScrollAnimation],

  components: {
    FlippingCoin
  },
  
  mounted() {
    this.animateBg();
  },
  
  methods: {
    animateBg() {
      const TARGET_SEL = '.AboutView';
      const TRIGGER_ELEMENT_SEL = "#about";
      const outroAnimationOptions = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
          backgroundPositionY: '20vh, 15vh, 15vh, center, center',
        },
      };

      this.timeline.to(TARGET_SEL, outroAnimationOptions);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/breakpoints';

.AboutView {
  background-color: $primary;
  background: 
    url('@/assets/images/bg-flower-1.svg') top right 100%,
    url('@/assets/images/bg-flower-2.svg') top right 100%,
    url('@/assets/images/bg-flower-3.svg') top right 100%,
    url('@/assets/images/asfalt-dark.png'),
    linear-gradient(180deg, rgba(252,255,91,1) 0%, rgba(209,174,45,1) 100%);
  background-size: 28vw, 10vw, 35vw, auto, 100%;
  background-repeat: no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-position: 60vw -5vh, 50vw -10vh, 0vw -10vh, center, center;
  
  @include sm-down {
    background-position: 60vw 5vh, 50vw 10vh, 0vw 10vh, center, center;
  }

  &-inner {
    display: flex;
  }

  &-content {
    align-items: center;

    @include sm-down {
      flex-direction: column;
      justify-content: center;
      position: relative;
    }

    div {
      flex: 1;

      @include sm-down {
        flex: unset;
      }
    }
  }

  &-title {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 24px;
  }

  &-coin {
    @include sm-down {
      display: none;
    }
  }

  &-coinMobile {
    display: none;

    @include sm-down {
      display: block;
    }
  }

  &-text {
    @include sm-down {
      font-size: 18px;
    }
  }
}

</style>