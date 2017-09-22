<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  export default {
    name: 'main',
    components: {Sidebar}
  }
</script>
