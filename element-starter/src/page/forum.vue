<template>
	<section>
		
		<el-tabs type="border-card" :active-name="activeName" @tab-click="handleTabChange">
			<el-tab-pane label="全部" name="all">
			</el-tab-pane>
			<el-tab-pane label="精华" name="good">
			</el-tab-pane>
			<el-tab-pane label="weex" name="weex">
			</el-tab-pane>
			<el-tab-pane label="分享" name="share">
			</el-tab-pane>
			<el-tab-pane label="问答" name="ask">
			</el-tab-pane>
			<el-tab-pane label="招聘" name="job">
			</el-tab-pane>
		</el-tabs>
		
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

		
		
		<el-pagination 
			@current-change="handleCurrentChange" 
			:current-page="currentPage" 
			:page-size="26" 
			layout=" prev, pager, next, jumper" 
			:total="780">
		</el-pagination>
	</section>

</template>


<script>
import axios from "axios"


export default {
	data() {
		return {
			activeName: 'all',
			activeTab: 'all',
			items: [],
			url: 'https://www.vue-js.com/api/v1/topics?tab=',
			currentPage: 1,
		}
	},
	created() {
		this.getItems()
	},
	methods: {
		getTopics(row){
			this.$router.push({ name: 'topic', params: { Id: row.id } })
		},
		getItems() {
			let that = this
			let url = this.url + this.activeName
			axios.get(url).then(response => {
				that.items = response.data.data
			})
		},
		handleTabChange(val) { // tab切换
			this.currentPage = 1
			console.log(this.currentPage)

			this.activeTab = val.name
			let url = this.url + this.activeTab + `&page= 1`
			
			let self = this
			axios.get(url).then(response => {
				self.items = response.data.data
			})
		},
		handleCurrentChange(val) {  // 翻页
			this.currentPage = val
			
			let that = this
			let url = this.url + this.activeTab + `&page=${val}`
			console.log(url)
			axios.get(url).then(response => {
				that.items = response.data.data
				
			})
		},

	}
}

</script>

<style scoped>
	
</style>
