<template>
  <section class="RoadmapView Section" id="about">
    <div class="RoadmapView-inner View">
      <h1 class="RoadmapView-title">Roadmap</h1>
      <div class="RoadmapView-content d-flex">
        <RoadmapCard />
      </div>
    </div>
  </section>
</template>
  
<script>
import RoadmapCard from '@/components/RoadmapCard.vue';
export default {
  name: "RoadmapView",
  components: {
    RoadmapCard,
  },
};
</script>
  
  <style lang="scss">
@import "@/styles/variables";

.RoadmapView {
  background-color: $primary;
  // background: rgb(252,255,91);
  background: linear-gradient(
    180deg,
    rgba(252, 255, 91, 1) 0%,
    rgba(252, 255, 91, 1) 15%,
    rgba(209, 174, 45, 1) 100%
  );

  &-inner {
    display: flex;
  }

  &-content {
    align-items: center;

    div {
      flex: 1;
    }
  }
}
</style>