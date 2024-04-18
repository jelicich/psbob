<template>
  <section class="RoadmapView Section" id="roadmap">
    <div class="RoadmapView-inner View">
      <div class="RoadmapView-contentWrapper">
        <h1 class="RoadmapView-title">Roadmap</h1>
        <div class="RoadmapView-content">
          <article
            class="RoadmapView-info"
            v-for="phase, i in data"
            :key="i"
          >
            <h2 class="RoadmapView-infoTitle">{{ $t(`roadmap.phase.${i}.title`) }}</h2>
            <p
              class="RoadmapView-infoDescription text-xl"
              v-for="step, j in phase"
              :key="j"
            >
              {{ $t(`roadmap.phase.${i}.step.${step.step}`) }}
              <i class="check-icon" v-if="step.completed"></i>
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import ScrollAnimation from '@/mixins/ScrollAnimation.mixin';

export default {
  name: "RoadmapView",

  mixins: [ScrollAnimation],

  data() {
    return {
      data: [
        [
          { step: 'community', completed: true },
          { step: 'website', completed: true },
          { step: 'presale', completed: true }
        ],
        [
          { step: 'launch', completed: false },
          { step: 'listing', completed: false },
          { step: 'marketing', completed: false }
        ],
        [
          { step: 'hodl', completed: false },
          { step: 'cex', completed: false },
          { step: 'moon', completed: false }
        ],
      ]
    };
  },

  mounted() {
    this.animateBg();
  },

  methods: {
    animateBg() {
      const TARGET_SEL = '.RoadmapView';
      const TRIGGER_ELEMENT_SEL = "#roadmap";
      const outroAnimationOptions = {
        runInMobile: false,
        gsapOptions: {
          scrollTrigger: {
            trigger: TRIGGER_ELEMENT_SEL,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
          //: 70vw -5vh, 30vw 0vh, 0vw -5vh, center;
          backgroundPositionY: '70vh, 20vh, 30vh, 20vh, center, center',
        },
      };

      this.timeline.to(TARGET_SEL, outroAnimationOptions);
    },
  }
};
</script>
  
<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/breakpoints";

.RoadmapView {
  background:
    url('@/assets/images/bg-roadmap-dark.png'),
    url('@/assets/images/bg-flower-7.svg') top right 100%,
    url('@/assets/images/bg-flower-8.svg') top right 100%,
    url('@/assets/images/bg-flower-9.svg') top right 100%,
    url('@/assets/images/asfalt-dark.png'),
    linear-gradient(180deg, rgba(61,0,37,1) 0%, rgb(0, 18, 98) 100%);
    background-size: 100%, 20vw, 22vw, 35vw, auto, 100%;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
    background-position: center 110vh, 80vw -5vh, 0vw 5vh, 40vw -5vh, center, center;

  @include sm-down {
    background-position: center bottom, 80vw 5vh, 0vw 15vh, 40vw 5vh, center, center;
  }

  &-inner {
    display: flex;
  }
  
  &-contentWrapper {
    margin: auto;
    width: 100%;
  }
  
  &-content {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    @include sm-down {
      flex-direction: column;
      gap: 8px;
    }
  }

  &-title {
    color: $primary;
    text-align: center;

    @include sm-down {
      text-align: left;
    }
  }

  &-info {
    background-color: $primary;
    border-radius: 12px;
    margin-bottom: 12px;
    padding: 18px;
    mask-image: url('@/assets/images/tokenomics-mask.svg');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
    flex: 1;
  }

  &-infoTitle {
    font-size: 20px;

    @include sm-down {
      margin: 0 0 8px;
    }
  }

  &-infoDescription {
    font-size: 18px;
    
    @include sm-down {
      margin: 0;
    }
  }

  .check-icon::before {
    content: "\2713";
    color: green;
  }
}

</style>