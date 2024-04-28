<template>
  <section class="ContactView Section" id="contact">
    <div class="ContactView-inner View">
      <div class="ContactView-content d-flex">
        <div class="ContactView-contact">
          <h1 class="ContactView-title">
            {{ $t('contact.title') }}
          </h1>
          <p class="ContactView-text text-lg">
            {{ $t('contact.paragraph') }}

            <a href="mailto:ugh@primitivesponge.com" target="_blank">
              ugh@primitivesponge.com
            </a>
          </p>
        </div>
        <div class="ContactView-partners">
          <h2 class="ContactView-title">
            {{ $t('contact.partners') }}
          </h2>
          <ul class="ContactView-partnersList">
            <li v-for="partner, i in partners" :key="i" class="ContactView-partner">
              <img :title="partner.name" :alt="partner.name" class="ContactView-partnerImg" v-if="partner.img" :src="require(`@/assets/images/logos/${partner.img}`)" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView',

  components: {},

  data() {
    return {
      partners: [
        { name: 'Raydium', img: 'raydium.svg' },
        { name: 'DexScreener', img: 'dex-screener.svg' },
        { name: 'CoinMarketCap', img: 'coinmarketcap.svg' },
        { name: 'CoinGecko', img: 'coingecko.svg' },
        { name: 'PinkSale', img: 'pinksale.svg' },
        { name: 'Freshcoins', img: 'freshcoins.svg' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/breakpoints';

.ContactView {
  background-image: url('@/assets/images/asfalt-light.png');
  background-color: $gray-900;
  background-repeat: repeat;
    
  @include sm-down {
    background-position: 60vw 5vh, 50vw 10vh, 0vw 10vh, center, center;
  }

  &-inner {
    display: flex;
  }

  &-content {
    align-items: center;

    @include sm-down {
      flex-direction: column-reverse;
      justify-content: center;
      position: relative;
      gap: 40px;
    }

    div {
      flex: 1;

      @include sm-down {
        flex: unset;
      }
    }
  }

  &-title {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 24px;
    color: $primary;
  }

  &-text {
    color: $primary;

    @include sm-down {
      font-size: 18px;
    }

    a {
      color: $primary;
    }
  }

  &-partnersList {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;
    flex-wrap: wrap;
  }

  &-partner {
    // min-width: 200px;
  }

  &-partnerImg {
    max-width: 100%;
    max-height: 50px;
  }
}

</style>