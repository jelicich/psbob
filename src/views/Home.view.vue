<template>
  <section class="HomeView">
    <div class="HomeView-inner">
      <h1>Hello</h1>
      <img src="@/assets/images/plant-1.png" />
      <img src="@/assets/images/plant-2.png" />
      <img src="@/assets/images/plant-3.png" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeView',
}
</script>
<style lang="scss">
@import '@/styles/variables';

.HomeView {
  background-image: url('@/assets/images/bg-simple.png');
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  &-inner {
    background-color: rgba(0,0,0, 0.7);
    height: 100%;
  }

  h1 {
    margin: 0;
  }

  img {
    filter: brightness(50%);
  }
  
}
</style>
