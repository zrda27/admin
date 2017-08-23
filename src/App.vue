<template>
  <div id="app" class="md-background">
    <SideNav :title="appTitle"></SideNav>
    <router-view></router-view>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav'

export default {
  name: 'app',
  data () {
    return {
      appTitle: 'appTitle'
    }
  },
  components: {
    SideNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
