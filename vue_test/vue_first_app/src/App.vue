<template>
  <div id="app">
    <hello></hello>
    <world></world>
  </div>
</template>
<script>
import Hello from './components/Hello.vue'
import World from './components/world.vue'

export default {
  components: {
    Hello,
    World
  },
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
