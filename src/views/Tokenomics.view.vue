<template>
  <section class="TokenomicsView Section" id="tokenomics">
    <div class="TokenomicsView-inner View d-flex">
      <div class="TokenomicsView-contentWrapper">
        <h1 class="TokenomicsView-title">
          {{ $t('tokenomics.title') }}
        </h1>
        <div class="TokenomicsView-content d-flex">
          <div class="TokenomicsView-infoContainer">
            <article class="TokenomicsView-info">
              <h2 class="TokenomicsView-infoTitle">
                {{ $t('tokenomics.address.title') }}
              </h2>
              <p class="TokenomicsView-infoDescription text-xl">
                {{ $t('tokenomics.address.description') }}
              </p>
                <ActionButton 
                  size="xs" 
                  variant="secondary"
                  :title="$t('tokenomics.address.copy')" 
                  class="TokenomicsView-copyButton"
                  @click="copyToClipboard()"
                  >
                  <SvgIcon name="copy" size="xl" />
                  <!-- TODO make component -->
                  <transition name="fade">
                    <div class="tooltip" v-if="showTooltip">Copied!</div>
                  </transition>
                </ActionButton>
            </article>

            <article class="TokenomicsView-info">
              <h2 class="TokenomicsView-infoTitle">
                {{ $t('tokenomics.supply.title') }}
              </h2>
              <p class="TokenomicsView-infoDescription text-xl">
                {{ $t('tokenomics.supply.description') }}
              </p>
            </article>

            <article class="TokenomicsView-info">
              <h2 class="TokenomicsView-infoTitle">
                {{ $t('tokenomics.tax.title') }}
              </h2>
              <p class="TokenomicsView-infoDescription text-xl">
                {{ $t('tokenomics.tax.description') }}
              </p>
            </article>
          </div>
          <div class="TokenomicsView-chartContainer">
            <TokenChart />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TokenChart from '@/components/TokenChart.vue';
import ActionButton from '@/components/ActionButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'TokenomicsView',
  data() {
    return {
      address: 'KZSGpxRZH4qFsGBgMg3Z7dD6953PnGMkn9TVyboWKWK',
      showTooltip: false,
    }
  },

  components: {
    TokenChart,
    ActionButton,
    SvgIcon
  },

  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.address)
      this.showTooltip = true;
      setTimeout(() => {
        this.showTooltip = false;
      }, 2000);
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';

.TokenomicsView {
  background: rgb(209,174,45);
  background: linear-gradient(180deg, rgba(209,174,45,1) 0%, rgba(61,0,37,1) 100%);

  &-contentWrapper {
    margin: auto;
    width: 100%;
  }

  &-title,
  &-description {
    color: $primary;
  }
  
  &-info {
    background: $primary;
    border-radius: 12px;
    // box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.5);
    margin-bottom: 12px;
    padding: 18px;
    mask-image: url('@/assets/images/tokenomics-mask.svg');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;

    &:first-child {
      position: relative;
    }
  }

  &-infoTitle {
    margin: 0 0 12px 0;
  }

  &-infoDescription {
    margin: 0;
  }

  &-content {
    > div {
      flex: 1;
    }
  }

  &-chartContainer {
    display: flex;
    justify-content: center;
  }

  &-copyButton {
    position: absolute;
    right: 18px;
    top: 18px;
  }

  // TODO: move when component created
  .tooltip {
    position: absolute;
    background: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
    left: -9px;
    bottom: -20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>