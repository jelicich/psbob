<template>
  <section class="RoadmapView Section" id="roadmap">
    <div class="RoadmapView-inner View">
      <h1 class="RoadmapView-title">Roadmap</h1>
      <div class="RoadmapView-content">
        <article class="RoadmapView-info">
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step1") }}
            <i class="check-icon" v-if="showCheckIcon.step1"></i>
          </p>
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step2") }}
            <i class="check-icon" v-if="showCheckIcon.step2"></i>
          </p>
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step3") }}
            <i class="check-icon" v-if="showCheckIcon.step3"></i>
          </p>
        </article>

        <article class="RoadmapView-info">
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step4") }}
            <i class="check-icon" v-if="showCheckIcon.step4"></i>
          </p>
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step5") }}
            <i class="check-icon" v-if="showCheckIcon.step5"></i>
          </p>
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step6") }}
            <i class="check-icon" v-if="showCheckIcon.step6"></i>
          </p>
        </article>
        
        <article class="RoadmapView-info">
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step7") }}
            <i class="check-icon" v-if="showCheckIcon.step7"></i>
          </p>
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step8") }}
            <i class="check-icon" v-if="showCheckIcon.step8"></i>
          </p>
          <p class="RoadmapView-infoDescription text-xl">
            {{ $t("roadmap.step9") }}
            <i class="check-icon" v-if="showCheckIcon.step9"></i>
          </p>
        </article>

      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: "RoadmapView",
  data() {
    return {
      showCheckIcon: {
        step1: true,
        step2: true,
        step3: true,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        step8: false,
        step9: false,
      },
    };
  },
};
</script>
  
  <style lang="scss">
@import "@/styles/variables";

.RoadmapView {
  background:
  url('@/assets/images/bg-flower-5.svg') top right 100%,
  url('@/assets/images/bg-flower-4.svg') top right 100%,
  url('@/assets/images/bg-flower-6.svg') top right 100%;
  background-color: rgb(209,174,45);
  background-size: 30vw, 10vw, 35vw, auto, 100%;
  background-repeat: no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-position: 70vw -5vh, 30vw 0vh, 0vw -5vh, center, center;

  &-content {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 100px;

    div {
      flex: 1;
    }
  }
  &-info {
    background:url('@/assets/images/asfalt-dark.png');
    background-color: $primary;
    border-radius: 12px;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.5);
    margin-bottom: 12px;
    padding: 18px;
    mask-image: url('@/assets/images/tokenomics-mask.svg');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }
  .check-icon::before {
    content: "\2713";
    color: green;
  }
}

</style>