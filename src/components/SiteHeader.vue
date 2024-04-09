<template>
  <header class="SiteHeader">
    <div class="SiteHeader-inner View">
      <h1 class="SiteHeader-title">
        <a class="SiteHeader-titleLink" href="#home">{{ $t('header.title') }}</a>
      </h1>

      <nav asia-label="Main" class="SiteHeader-nav">
        <a href="#about">{{ $t('header.about') }}</a>
        <a href="#tokenomics">{{ $t('header.tokenomics') }}</a>
        <a href="#roadmap">{{ $t('header.roadmap') }}</a>
        <a href="#whitepaper">{{ $t('header.whitepaper') }}</a>
        <a href="#buy">{{ $t('header.buy') }}</a>
      </nav>
    </div>
  </header>
</template>

<script>
import ScrollAnimation from '@/mixins/ScrollAnimation.mixin';

export default {
  name: 'SiteHeader',

  mixins: [ScrollAnimation],
  
  mounted() {
    this.setSmoothScroll();
    this.animateLogo();
    this.setBgColor();
    this.setTextColor();
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
    
    setBgColor() {
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

    setTextColor() {
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
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &-title {
    margin: 0;  
  }

  &-titleLink {
    background: url('@/assets/images/coin.png') no-repeat;
    background-size: cover;
    display: inline-block;
    height: 70px;
    overflow: hidden;
    text-indent: -99999px;
    width: 70px;
  }

  &-nav {
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
}
</style>