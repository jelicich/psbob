<template>
  <div id="app">
    <SiteHeader />    
    <div class="content">
      <HomeView />
      <AboutView />
      <TokenomicsView />
    </div>
    
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import HomeView from '@/views/Home.view.vue';
import AboutView from '@/views/About.view.vue';
import TokenomicsView from '@/views/Tokenomics.view.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    HomeView,
    AboutView,
    TokenomicsView
  }
}
</script>
<style lang="scss">

</style>