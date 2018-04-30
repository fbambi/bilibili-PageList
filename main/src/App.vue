<template>
  <div class="pl-wrap" style="position:fixed;top:0;left:0;z-index:99999">
    <List />
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    List,
  }
}
</script>

<style lang="scss">
.pl-wrap {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
