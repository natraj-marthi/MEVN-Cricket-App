<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'
export default {
  components: {
    AppHeader
  }
}
</script>


<style lang="scss">
$charset: 'utf-8';

@import '~bootstrap/scss/bootstrap.scss';
</style>
