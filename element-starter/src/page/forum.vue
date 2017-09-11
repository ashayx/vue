<template>
	<section>
		
		<el-tabs type="border-card">
			<el-tab-pane label="全部">
				
				<el-table :data="items" :show-header="false" border style="width: 100%;" >
					<el-table-column prop="author.avatar_url" label="头像" width="80">
						<template scope="scope">
							<img :src="scope.row.author.avatar_url" height="40">
						</template>
						

					</el-table-column>
					<el-table-column prop="tab" label="分类" width="80">
						<template scope="scope">
							<!-- 可以用 color 自定义标签颜色 -->
							<el-tag type="danger" v-if="scope.row.top">置顶</el-tag>
							<el-tag type="danger"  v-else-if="scope.row.good">精华</el-tag>
							<el-tag type="gray" v-else-if="scope.row.tab === 'weex'">weex</el-tag>
							<el-tag type="primary" v-else-if="scope.row.tab === 'share'">分享</el-tag>
							<el-tag type="success" v-else-if="scope.row.tab === 'ask'">问答</el-tag>
							<el-tag type="warning" v-else-if="scope.row.tab === 'job'">招聘</el-tag>
						</template>
					</el-table-column>
					<el-table-column prop="title" label="标题" style="font-weight: blod">
					</el-table-column>
					<el-table-column prop="last_reply_at " label="时间" width="180">
						<template scope="scope">
							{{scope.row.last_reply_at | formatDate}}
						</template>
					</el-table-column>
				</el-table>
				
				<!-- <el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="date" label="日期" width="180">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="180">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
				</el-table> -->


			</el-tab-pane>
			<el-tab-pane label="精华">精华</el-tab-pane>
			<el-tab-pane label="weex">weex</el-tab-pane>
			<el-tab-pane label="分享">分享</el-tab-pane>
			<el-tab-pane label="问答">问答</el-tab-pane>
			<el-tab-pane label="招聘">招聘</el-tab-pane>
		</el-tabs>

		
		
		<el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="26" layout=" prev, pager, next, jumper" :total="1260">
		</el-pagination>
	</section>

</template>

<style>
	.text {
		font-size: 14px;
	}

	.item {
		padding: 18px 0;
	}

	.box-card {
		width: 480px;
	}
</style>

<script>
import axios from "axios"

export default {
	data() {
		return {
			items: [],
			url: 'https://www.vue-js.com/api/v1/topics?tab=all',
			currentPage: 1,
			 tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	},
	created() {
		this.getItems()
	},
	methods: {
		getItems() {
			let that = this
			axios.get(this.url).then(response => {
				that.items = response.data.data
				
			})
		},
		handleCurrentChange(val) {
			let that = this
			let url = this.url + `&page= ${val}`
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
