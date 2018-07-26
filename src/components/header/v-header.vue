<template>
    <div id="header">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">职位类别</h3>
            </div>
            <div class="panel-body">
                <ul class="list-inline listUl">
                    <li v-for="(nav,i) in navs" :class="{active:nav.path==$route.path}" :key="i" @click="changeNav(nav.path)">{{nav.text}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data () {
        return {
            navs: [
                {text: '技术类',path: '/technology'},
                {text: '产品类',path: '/product'},
                {text: '设计类',path: '/design'},
                {text: '广告类',path: '/advertising'},
            ]
        }
    },
    methods: {
        ...mapMutations(['set_iv_chk']),
        changeNav (path) {
            this.set_iv_chk({})
            this.jump(path)
        }
    }
}
</script>

<style scoped>

</style>


