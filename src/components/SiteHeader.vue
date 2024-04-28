<template>
  <header class="SiteHeader">
    <div class="SiteHeader-inner">
      <h1 class="SiteHeader-title">
        <a class="SiteHeader-titleLink" href="#home">{{ $t('header.title') }}</a>
      </h1>

      <nav aria-label="Main" class="SiteHeader-nav">
        <ActionButton
          class="SiteHeader-cta"
          variant="secondary"
          size="lg"
        >
          {{ $t('header.buy') }}
          <SvgIcon name="pinksale" size="xl" />
        </ActionButton>
        <template v-if="!helpers.isMobile()">
          <a href="#about">{{ $t('header.about') }}</a>
          <a href="#tokenomics">{{ $t('header.tokenomics') }}</a>
          <a href="#roadmap">{{ $t('header.roadmap') }}</a>
          <a href="#contact">{{ $t('header.contact') }}</a>
        </template>
        
        <ActionButton class="SiteHeader-hamburger" @click="toggleNav"/>
      </nav>
    </div>
    <div class="SiteHeader-hamburgerNav" v-if="isNavOpen">
      <ActionButton
        class="SiteHeader-closeMobileNav"
        size="xl"
        @click="toggleNav"
      >
        X
      </ActionButton>
      <nav class="SiteHeader-mobileNav">
        <a href="#about" @click="toggleNav">{{ $t('header.about') }}</a>
        <a href="#tokenomics" @click="toggleNav">{{ $t('header.tokenomics') }}</a>
        <a href="#roadmap" @click="toggleNav">{{ $t('header.roadmap') }}</a>
        <a href="#contact" @click="toggleNav">{{ $t('header.contact') }}</a>
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
  
  data() {
    return {
      isNavOpen: false,
    }
  },

  mounted() {
    this.setSmoothScroll();
    this.animateLogo();
    this.animateBgColor();
    this.animateTextColor();
    this.animateBuyButton();
    this.helpers.isMobile() && this.animateHamburger();
  },
  
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },

    setSmoothScroll() {
      const LINKS_SELECTOR = '.SiteHeader-nav a, .SiteHeader-titleLink, .SiteHeader-mobileNav a';
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
        runInMobile: true,
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
        runInMobile: true,
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

    animateHamburger() {
      const TARGET_SEL = '.SiteHeader-hamburger';
      const TRIGGER_ELEMENT_SEL = '#about';
      const outroAnimationOptions = {
        runInMobile: true,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: 'top 75%',
            end: 'top top',
          },
          backgroundColor: '#000000',
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
@import '@/styles/breakpoints';

.SiteHeader {
  left: 0;
  position: fixed; 
  top: 0;
  width: 100%;
  z-index: 100;

  @include sm-down {
    padding-block: 5px;
  }
  
  &-inner {
    max-width: 100%;
    margin: 0 auto;
    padding-inline: 60px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    @include sm-down {
      padding-inline: 20px;
      gap: 8px;
    }
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

    @include sm-down {
      height: 50px;
      width: 50px;
    }
  }

  &-nav {
    align-items: center;
    display: flex;
    gap: 12px;
    
    @include sm-down {
      gap: 8px;
    }

    a {
      font-family: 'Krabby Patty', sans-serif;
      font-size: 22px;
      text-decoration: none;
      text-transform: uppercase;
      color: $white;

      @include sm-down {
        display: none;
      }
    }
  }

  &-cta {
    @include sm-down {
      font-size: 18px;
      gap: 10px;
      padding: 8px 16px;
    }

    .SvgIcon {
      width: 36px;
      height: 36px;
      margin: -6px;
    }
  }

  &-hamburger {
    display: none;
    padding: 0;
    background-color: transparent;
    border-color: transparent;
    mask-image: url('@/assets/images/icons/hamburger.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: $white;
    width: 40px;
    height: 40px;

    @include sm-down {
      display: block;
    }
  }

  &-hamburgerNav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: $primary;
    padding-top: 30px;
  }

  &-mobileNav {
    padding: 20px;
    display: flex;
    flex-direction: column;

    a {
      font-family: 'Krabby Patty', sans-serif;
      font-size: 30px;
      text-decoration: none;
      text-transform: uppercase;
      color: $black;
      padding: 8px 0;
    }
  }

  &-closeMobileNav {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>