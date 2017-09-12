<template>
    <div class="topic" >
        <!-- 内容区 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height:2.1rem;font-size:1.8rem;font-weight: bolder;">{{topic.title}}</span>

                <el-button style="float: right;" type="primary">加入收藏</el-button>
                <span >发布于:{{topic.last_reply_at | formatDate}}</span>
                <div style="margin-top:10px;">
                    <!-- <span>作者 {{topic.author.loginname}} </span>  -->
                    <span>{{topic.visit_count}}次浏览</span>
                </div>
            </div>
            <section v-html="topic.content"></section>
        </el-card>
        <!-- 评论区 -->
        
        <el-row>
            <el-col :span="24" v-for="(o, index) in topic.replies" :key="o.id">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="o.author.avatar_url" class="image">
                    <div style="padding: 14px;">
                        <span v-html="o.content"></span>
                        <div class="bottom clearfix">
                            <time class="time">{{ o.create_at | formatDate }}</time>
                            <i class="el-icon-share"></i>
                            <el-button type="primary" icon="star-off"></el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        
    </div>
</template>

<script>
import axios from "axios"

export default {

    data() {
        return {
            topic: [],
            content: [],
            url: 'https://www.vue-js.com/api/v1/topic/' ,
        }
    },
    created() {
        this.getTopic()
    },
    methods: {
        getTopic() {
            this.url = this.url + `${this.$route.params.Id}`
            let that = this
            console.log(this.url )
            axios.get(this.url).then(response => {
                that.topic = response.data.data
                that.content = response.data.data.content
                console.log(this.topic)
            })
        },
        initElement() {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
