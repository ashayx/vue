<template>
	<div>
		<el-table :data="Users" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" ref="multipleTable" @selection-change="handleSelectionChange">

			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="100">
			</el-table-column>
			<el-table-column prop="name" label="姓名" sortable width="100">
			</el-table-column>
			<el-table-column prop="sex" label="性别" sortable width="100">
			</el-table-column>
			<el-table-column prop="age" label="年龄" sortable width="100">
			</el-table-column>
			<el-table-column prop="birth" label="生日" sortable width="180">
			</el-table-column>
			<el-table-column prop="addr" label="地址"  fit>
			</el-table-column>
			<el-table-column label="操作">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index, Users)">删除</el-button>

					<el-dialog title="编辑" :visible.sync="dialogVisible" size="small" :modal="true">

						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item label="姓名">
								<el-input v-model="form.name"></el-input>
							</el-form-item>
							<el-form-item label="性别">
								 <el-radio-group v-model="radio">
									<el-radio :label="1">男</el-radio>
									<el-radio :label="2">女</el-radio>
								</el-radio-group>
							</el-form-item>
							<el-form-item label="出生日期">
								<el-col :span="11">
									<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
								</el-col>
							</el-form-item>
							<el-form-item label="即时配送">
								<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
							</el-form-item>
							<el-form-item label="地址">
								<el-input type="textarea" v-model="form.desc"></el-input>
							</el-form-item>
						</el-form>

						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>

				</template>
			</el-table-column>

		</el-table>
		<div style="margin-top: 20px">
			<el-button size="small" type="danger" @click="toggleSelection()">显示数据</el-button>

			<el-pagination style="float:right;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[1, 2, 3, 4]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="8">
			</el-pagination>

		</div>

	</div>
</template>

<script>
import { Users } from "../mock/mock"

console.log(Users[0].addr)

export default {
	data() {
		return {
			dialogVisible: false,
			multipleSelection: [],
			currentPage: 1,
			tableData: null,
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: '',
				radio: 1
			},
			 radio: 1,
			 Users: null,
		}
	},
	created() {
		// 组件创建完后获取数据，
		// 此时 data 已经被 observed 了
		this.getData()
	},
	methods: {
		formatter(row, column) {
			return row.address
		},
		handleEdit(index, row) {
			console.log(index, row)
			this.dialogVisible = true
		},
		deleteRow(index, data) {
			console.log(index, data)
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				data.splice(index, 1)
			})
		},
		toggleSelection(rows) {
			this.$refs.multipleTable.clearSelection()
		},
		handleSelectionChange(val) {
			this.multipleSelection = val
			// console.log(this.multipleSelection,val.index)
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
		getData() {
			this.Users = Users
		}
	}
}
</script>