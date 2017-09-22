<template>

  <div class="sidebar" data-color="purple" data-image="../../../assets/img/sidebar-5.jpg">

    <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" -->

    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text">
          运维平台
        </a>
      </div>

      <ul class="nav">
        <li  v-for="menu in menus" v-on:click="active(menu.id)"  v-bind:class="{ active: menu.active }">
          <router-link :to="menu.link">
            <i :class="menu.clazz"></i>
            <p :sid="menu.id">{{ menu.title }}</p>
          </router-link>
        </li>

        <li class="active-pro">
          <a href="upgrade.html">
            <i class="pe-7s-rocket"></i>
            <p>帮助手册</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data () {
      return {
        menus: [
          { id: 1, link: '/customer-case', clazz: 'pe-7s-graph', title: '客户案例', active: true },
          { id: 2, link: '/', clazz: 'pe-7s-user', title: '线下活动', active: false },
          { id: 3, link: '/', clazz: 'pe-7s-note2', title: '企业动态', active: false },
          { id: 4, link: '/', clazz: 'pe-7s-news-paper', title: '升级公告', active: false },
          { id: 5, link: '/', clazz: 'pe-7s-science', title: '主站轮播', active: false },
          { id: 6, link: '/', clazz: 'pe-7s-graph', title: '实名认证', active: false }
        ],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      active: function (id) {
        this.menus.forEach(function (n) {
          n.active = false
        })
        this.menus.filter(function (item) {
          return item.id === id
        }).forEach(function (n) {
          n.active = true
        })
      }
    }
  }

</script>

<style scoped>

</style>
