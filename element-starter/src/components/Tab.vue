<template>
    
    <el-table :data="items" :show-header="false" scope="scope" style="width: 100%;" @row-click="getTopics">

        <el-table-column prop="author.avatar_url" label="头像" width="80">
            <template scope="scope">
                <img :src="scope.row.author.avatar_url" height="40">
            </template>
        </el-table-column>
        <el-table-column prop="tab" label="分类" width="80">
            <template scope="scope">
                <!-- 可以用 color 自定义标签颜色 -->
                <el-tag type="danger" v-if="scope.row.top">置顶</el-tag>
                <el-tag type="danger" v-else-if="scope.row.good">精华</el-tag>
                <el-tag type="gray" v-else-if="scope.row.tab === 'weex'">weex</el-tag>
                <el-tag type="primary" v-else-if="scope.row.tab === 'share'">分享</el-tag>
                <el-tag type="success" v-else-if="scope.row.tab === 'ask'">问答</el-tag>
                <el-tag type="warning" v-else-if="scope.row.tab === 'job'">招聘</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="标题">
            <template scope="scope">
                {{scope.row.title}}
            </template>
        </el-table-column>
        <el-table-column label="回复数量和点击数量" width="120">
            <template scope="scope">
                {{scope.row.reply_count}}/{{scope.row.visit_count}}
            </template>
        </el-table-column>

        <el-table-column prop="last_reply_at " label="时间" width="120">
            <template scope="scope">
                {{scope.row.last_reply_at | formatDate}}
            </template>
        </el-table-column>

    </el-table>

</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },
    methods: {
        getTopics(row, event, column) {
            this.$router.push({ name: 'topic', params: { Id: row.id } })
        },
    }
}
</script>