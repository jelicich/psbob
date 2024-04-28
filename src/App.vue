<template>
  <div id="app">
    <template v-if="true">
      <SoonView />
    </template>
    <template v-else>
      <SiteHeader />    
      <div class="content">
        <HomeView />
        <AboutView />
        <TokenomicsView />
        <RoadmapView />
        <ContactView />
      </div>
    </template>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import HomeView from '@/views/Home.view.vue';
import AboutView from '@/views/About.view.vue';
import TokenomicsView from '@/views/Tokenomics.view.vue';
import RoadmapView from '@/views/Roadmap.view.vue';
import ContactView from '@/views/Contact.view.vue';
import SoonView from '@/views/Soon.view.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    HomeView,
    AboutView,
    TokenomicsView,
    RoadmapView,
    ContactView,
    SoonView
  }
}
</script>
<style lang="scss">

</style>