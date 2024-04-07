<template>
  <header class="SiteHeader">
    <h1 class="SiteHeader-title">{{ $t('header.title') }}</h1>

    <nav asia-label="Main" class="SiteHeader-nav">
      <a href="#about">{{ $t('header.about') }}</a>
      <a href="#tokenomics">{{ $t('header.tokenomics') }}</a>
      <a href="#roadmap">{{ $t('header.roadmap') }}</a>
      <a href="#whitepaper">{{ $t('header.whitepaper') }}</a>
      <a href="#buy">{{ $t('header.buy') }}</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
@import '@/styles/variables';

.SiteHeader {
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: fixed; 
  top: 0;
  width: 100%;

  &-title {
    background: url('@/assets/images/coin.png') no-repeat;
    background-size: cover;
    height: 70px;
    margin: 0;
    overflow: hidden;
    text-indent: -99999px;
    width: 70px;
  }

  &-nav {
    display: flex;
    gap: 12px;

    a {
      font-family: 'Krabby Patty', sans-serif;
      font-size: 22px;
      text-decoration: none;
      text-transform: uppercase;
      color: $white;
    }
  }
}
</style>