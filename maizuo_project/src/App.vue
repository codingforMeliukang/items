<template>
  <div id="app">

    <app-header></app-header>
    
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <app-nav></app-nav>

  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'
import AppNav from '@/components/common/AppNav'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav
  }
}
</script>

<style>

</style>
