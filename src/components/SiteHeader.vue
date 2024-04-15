<template>
  <header class="SiteHeader">
    <div class="SiteHeader-inner">
      <h1 class="SiteHeader-title">
        <a class="SiteHeader-titleLink" href="#home">{{ $t('header.title') }}</a>
      </h1>

      <nav asia-label="Main" class="SiteHeader-nav">
        <ActionButton
          class="SiteHeader-cta"
          variant="secondary"
          size="lg"
        >
          {{ $t('header.buy') }}
          <SvgIcon name="pinksale" size="xl" />
        </ActionButton>
        <a href="#about">{{ $t('header.about') }}</a>
        <a href="#tokenomics">{{ $t('header.tokenomics') }}</a>
        <a href="#roadmap">{{ $t('header.roadmap') }}</a>
        <a href="#whitepaper">{{ $t('header.whitepaper') }}</a>
      </nav>
    </div>
  </header>
</template>

<script>
import ScrollAnimation from '@/mixins/ScrollAnimation.mixin';
import ActionButton from '@/components/ActionButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'SiteHeader',

  mixins: [ScrollAnimation],

  components: {
    ActionButton,
    SvgIcon
  },
  
  mounted() {
    this.setSmoothScroll();
    this.animateLogo();
    this.animateBgColor();
    this.animateTextColor();
    this.animateBuyButton();
  },
  
  methods: {
    setSmoothScroll() {
      const LINKS_SELECTOR = '.SiteHeader-nav a, .SiteHeader-titleLink';
      const links = document.querySelectorAll(LINKS_SELECTOR);
      links.forEach((link) => {
        link.onclick = (e) => {
          e.preventDefault();
          const target = e?.currentTarget?.getAttribute('href');
          const scrollTo =
            target && document?.querySelector(target).offsetTop;

          const gsapOptions = {
            duration: 1.5,
            scrollTo: scrollTo,
            ease: 'power2.inOut',
          };

          this.gsap.to(window, gsapOptions);
        };
      });
    },

    animateLogo() {
      const TARGET_SEL = '.SiteHeader-titleLink';
      const TRIGGER_ELEMENT_SEL = '.HomeView-title';
      const outroAnimationOptions = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: 'top top',
            end: 'bottom top',
          },
          // x: -this.helpers.vw(25),
          scale: 0
        },
      };

      this.timeline.from(TARGET_SEL, outroAnimationOptions);
    },
    
    animateBgColor() {
      const TARGET_SEL = '.SiteHeader';
      const TRIGGER_ELEMENT_SEL = '#about';
      const outroAnimationOptions = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: 'top 75%',
            end: 'top top',
          },
          backgroundColor: '#fcff5b',
        },
      };

      this.timeline.to(TARGET_SEL, outroAnimationOptions);
    },

    animateTextColor() {
      const TARGET_SEL = '.SiteHeader-nav a';
      const TRIGGER_ELEMENT_SEL = '#about';
      const outroAnimationOptions = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: 'top 75%',
            end: 'top top',
          },
          color: '#000000',
        },
      };

      this.timeline.to(TARGET_SEL, outroAnimationOptions);
    },

    animateBuyButton() {
      const TARGET_SEL = '.SiteHeader-cta';
      const TRIGGER_ELEMENT_SEL = '.HomeView-actions';

      const outroAnimationOptions = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: 'top top',
            end: 'bottom -200px',
          },
          scale: 0,
        },
      };

      this.timeline.from(TARGET_SEL, outroAnimationOptions);
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';

.SiteHeader {
  left: 0;
  position: fixed; 
  top: 0;
  width: 100%;
  z-index: 100;
  
  &-inner {
    max-width: 100%;
    margin: 0 auto;
    padding-inline: 60px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &-title {
    margin: 0;
    display: flex;
  }

  &-titleLink {
    background: url('@/assets/images/coin.svg') no-repeat;
    background-size: cover;
    display: inline-block;
    height: 70px;
    overflow: hidden;
    text-indent: -99999px;
    width: 70px;
  }

  &-nav {
    align-items: center;
    display: flex;
    gap: 12px;

    a {
      font-family: 'Krabby Patty', sans-serif;
      font-size: 22px;
      text-decoration: none;
      text-transform: uppercase;
      color: $white;
    }
  }

  &-cta {
    .SvgIcon {
      width: 36px;
      height: 36px;
      margin: -6px;
    }
  }
}
</style>