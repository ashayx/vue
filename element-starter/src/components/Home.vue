<template>
	<div>
		<el-table :data="tableData" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
			
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="50">
			</el-table-column>
			<el-table-column prop="date" label="日期" sortable width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" sortable width="180">
			</el-table-column>
			<el-table-column prop="sex" label="性别" sortable width="180">
			</el-table-column>
			<el-table-column prop="birthday" label="生日" sortable width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址" :formatter="formatter">
			</el-table-column>
			<el-table-column label="操作">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="small" type="danger"  @click="dialogVisible = true">删除</el-button>
					
					<el-dialog title="提示" :visible.sync="dialogVisible" size="tiny"  >
						<span >确认删除吗？</span>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false" @click.native.prevent="deleteRow(scope.$index, tableData)">确 定</el-button>
						</span>
					</el-dialog>

				</template>
			</el-table-column>

		</el-table>
		
		<div style="margin-top: 20px">
			<el-button size="small" type="danger" >批量删除</el-button>
			<el-button size="small" type="danger" >取消全选</el-button>
		</div>

	</div>


</template>

<script>
export default {
	data() {
		return {
			dialogVisible: false,
			tableData: [{
				date: '2016-05-02',
				name: '王小',
				sex: '男',
				birthday: "1992-01-01",
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				sex: '男',
				birthday: "1993-01-01",
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王虎',
				sex: '女',
				birthday: "1994-01-01",
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '小虎',
				sex: '女',
				birthday: "1995-01-01",
				address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	},
	methods: {
		formatter(row, column) {
			return row.address;
		},
		handleEdit(index, row) {
			console.log(index, row);
		},
		deleteRow(index, rows) {
			console.log(index,rows)
			rows.splice(index, 1);
		}
	}
}
</script>