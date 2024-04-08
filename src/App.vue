<template>
  <div id="app">
    <SiteHeader />    
    <div class="content">
      <HomeView />
      <AboutView />
    </div>
    
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import HomeView from '@/views/Home.view.vue';
import AboutView from '@/views/About.view.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    HomeView,
    AboutView,
  }
}
</script>
<style lang="scss">
body {
  background-color: lightgray
}
</style>