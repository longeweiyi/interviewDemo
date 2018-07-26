<template>
    <div id="footer">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">合适人选</h3>
            </div>
            <div class="panel-body">
                <ul class="list-inline listUl" v-if="pass_ivs.length">
                    <li v-for="(iv,i) in pass_ivs" :key="i" :class="{active:iv_chk.id==iv.id}">
                        <span @click="set_iv_chk_2(iv)">{{iv.username}}</span>
                        <sup class="delete" @click="pass_ivs_del_2(iv)">x</sup>
                    </li>
                </ul>
                <p v-else>暂未选择</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
    computed: {
        ...mapState(['iv_chk','pass_ivs']),
    },
    methods: {
        ...mapMutations(['pass_ivs_del','set_iv_chk']),
        pass_ivs_del_2 (iv) {
            if(!confirm('确定删除？')) return
            this.pass_ivs_del(iv)
        },
        set_iv_chk_2 (iv) {
            this.set_iv_chk(iv)
            this.jump(iv.path)
        }
    }
}
</script>

<style scoped>
ul.listUl li{position: relative;}
.delete{color: #f00;border: 1px solid #ff4444;border-radius: 50%;width: 12px;height: 12px;display: inline-block;padding: 3px 2px 2px;position: absolute;top: -4px;right: -4px;}
.active{margin: 0;height: 25px;line-height: 25px;padding: 1px 6px}
</style>


