<template>
  <section class="TokenomicsView Section" id="tokenomics">
    <div class="TokenomicsView-inner View d-flex">
      <div class="TokenomicsView-contentWrapper">
        <h1 class="TokenomicsView-title">
          {{ $t('tokenomics.title') }}
        </h1>
        <p class="TokenomicsView-description">
          {{ $t('tokenomics.description') }}
        </p>
        <div class="TokenomicsView-content d-flex">
          <div class="TokenomicsView-infoContainer">
            <article class="TokenomicsView-info">
              <h2 class="TokenomicsView-infoTitle">
                {{ $t('tokenomics.address.title') }}
              </h2>
              <p class="TokenomicsView-infoDescription text-xl">
                {{ $t('tokenomics.address.description') }}
              </p>
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

export default {
  name: 'TokenomicsView',

  components: {
    TokenChart
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
}
</style>