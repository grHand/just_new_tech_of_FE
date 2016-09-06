<template>
  <div id="app">
    <hello></hello>
    <!--<world></world>-->
    <list></list>
  </div>
</template>
<script>
import Hello from './components/Hello.vue'
//import World from './components/world.vue'
import List from './components/List.vue'

export default {
  components: {
    Hello,
    List
  },
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
