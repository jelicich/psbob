<template>
  <article class="SoonView">
    <div class="SoonView-content">
      <FlippingCoin class="SoonView-coin"/>
      <h1 class="SoonView-title">Coming soon...</h1>
      <div class="SoonView-actions">
        <h2 class="SoonView-subtitle">Stay tuned:</h2>
        <ActionButton
          size="xl"
          :title="$t('home.actions.telegram')" 
          variant="secondary"
          @click="openLink('https://t.me/+wKEdNPCjDuhlMmY8')"
          >
          <SvgIcon name="telegram" size="xl" />
        </ActionButton>
        
        <ActionButton 
          size="xl" 
          :title="$t('home.actions.x')"
          variant="secondary"
          @click="openLink('https://twitter.com/PSBOB_Solana')"
          >
          <SvgIcon name="x" size="xl" />
        </ActionButton>
      </div>
    </div>
  </article>
</template>
<script>
import FlippingCoin from '@/components/FlippingCoin.vue';
import ActionButton from '@/components/ActionButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'SoonView',
  components: {
    FlippingCoin,
    ActionButton,
    SvgIcon
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/breakpoints';

.SoonView {
  background-color: $primary;
  background-image: url('@/assets/images/asfalt-dark.png');
  display: flex;
  height: 100vh;
  width: 100vw;

  &-content {
    margin: auto;
    text-align: center;
  }

  &-title {
    text-transform: uppercase;
  }

  &-coin {
    margin-bottom: 100px;

    @include sm-down {
      margin-bottom: 50px;
    }
  }

  &-subtitle {
    margin: 0;
  }

  &-actions {
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: center;
  }
}
</style>
