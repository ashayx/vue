<template>
	<section>

		<el-card class="box-card">
			<div v-for="(item, index) in items" class="text item">
				{{index + 1}} --{{item.title }}
				<hr>
			</div>
		</el-card>
		
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
			items: '',
			url: 'https://www.vue-js.com/api/v1/topics?tab=all',
			currentPage: 1
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