<template>
  <div id="app">
    <SiteHeader />    
    <div class="content">
      <HomeView />
    </div>
    
  </div>
</template>

<script>
import HomeView from '@/views/Home.view.vue'
import SiteHeader from '@/components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    HomeView
  }
}
</script>
<style lang="scss">
body {
  background-color: lightgray
}
</style>