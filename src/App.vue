<template>
  <div id="app" v-cloak>
    <div class="container">
      <v-head></v-head>
    </div>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHead from '@/components/header/v-header'
import VFooter from '@/components/footer/v-footer'

export default {
  components: {
    VHead,
    VFooter
  }
}
</script>

<style>
[v-cloak]{display: none;}
ul.listUl li{margin: 5px;}
ul.listUl li.active{background: #5cb85c;color: #ffffff;}
</style>



