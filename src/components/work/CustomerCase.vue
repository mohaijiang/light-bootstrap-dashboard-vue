<template>

  <div class="main-panel">
    <s-header title="主站运维"></s-header>
    <router-view></router-view>
    <s-footer></s-footer>
  </div>
</template>

<script>
  import SHeader from '../common/Header.vue'
  import SFooter from '../common/Footer.vue'

  export default {
    name: 'CustomerCase',
    components: {
      SHeader,
      SFooter
    }
  }
</script>
