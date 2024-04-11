<template>
  <section class="AboutView Section" id="about">
    <div class="AboutView-inner View">
      <div class="AboutView-content d-flex">
        <FlippingCoin />
        <div class="AboutView-about">
          <h1 class="AboutView-title">About</h1>
          <p class="text-lg">{{ $t('about.paragraph1') }}</p>
          <p class="text-lg">{{ $t('about.paragraph2') }}</p>
        </div>
      </div>
      
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
  // background: rgb(252,255,91);
  background: linear-gradient(180deg, rgba(252,255,91,1) 0%, rgba(252,255,91,1) 15%, rgba(209,174,45,1) 100%);

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