<template>
  <section class="AboutView Section" id="about">
    <div class="AboutView-inner View">
      <h1>About</h1>
      <FlippingCoin />
    </div>
  </section>
</template>

<script>
import FlippingCoin from '@/components/FlippingCoin.vue';

export default {
  name: 'AboutView',
  components: {
    FlippingCoin
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';

.AboutView {
  background-color: $primary;
}

</style>