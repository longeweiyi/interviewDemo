<template>
    <div id="main">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">面试者列表</h3>
            </div>
            <div class="panel-body">
                <ul class="list-inline listUl">
                    <li v-for="(iv,i) in ivs" :key="i" :class="{active:iv_chk.id==iv.id,pass:pass_ivs_idstr.indexOf(','+iv.id+',')>-1}" @click="set_iv_chk(iv)" >{{iv.username}}</li>
                </ul>
                <hr>
                <div v-if="iv_chk.id">
                    <div class="media">
                        <div class="media-left">
                            <img :src="'./static/images/'+iv_chk.img" alt="" class="media-object img">
                        </div>
                        <div class="media-body">
                            <p>姓名：{{iv_chk.username}}</p>
                            <p>
                                性别：{{iv_chk.sex?'男':'女'}}
                                年龄：{{iv_chk.age}}
                            </p>
                            <p>简介：{{iv_chk.intro}}</p>
                        </div>
                    </div>
                    <p class="text-center">
                        <button class="btn btn-primary" @click="pass_ivs_add_2(iv_chk)" v-if="pass_ivs_idstr.indexOf(','+iv_chk.id+',')==-1">标为合适</button>
                        <button class="btn btn-warning" @click="pass_ivs_del(iv_chk)" v-else>标为不合适</button>
                    </p>
                </div>
                <p v-else>点击查看面试者详情</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'

export default {
    data () {
        return {
            ivs: []
        }
    },
    computed: {
        ...mapState(['iv_chk']),
        ...mapGetters(['pass_ivs_idstr'])
    },
    methods: {
        ...mapMutations(['set_iv_chk','pass_ivs_add','pass_ivs_del']),
        pass_ivs_add_2 (iv) {
            iv.path = this.$route.path;
            this.pass_ivs_add(iv)
        },
        setData (apiName) {
            axios.get ('./api/'+apiName)
                .then(res => {
                    if(res.data.status) {
                        this.ivs = res.data.data;
                    }
                })
                .catch ((err) => {
                    console.log('main-err', err)
                })
        }
    },
    watch: {
        $route (to,from) {
            var apiName = to.path.slice(1);
            this.setData(apiName)
        }
    },
    created () {
        var apiName = this.$route.path.slice(1);
        this.setData(apiName)
    }
}
</script>

<style scoped>
img.img{width: 150px;}
ul.listUl li.pass{color: #f00;}
.text-center{margin: 15px 0 0;}
</style>


