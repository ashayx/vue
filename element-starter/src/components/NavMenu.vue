<template>
	
	<div class="container">

		<el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>
							<span slot="title">导航一</span>
						</template>
						<el-menu-item-group>
							
							<el-menu-item index="login">
								HOME
							</el-menu-item>
							<el-menu-item index="login">
								SETING
							</el-menu-item>
						</el-menu-item-group>

					</el-submenu>
					<el-menu-item index="/home">
						<i class="el-icon-edit"></i>
						<span slot="title">home</span>
					</el-menu-item>
					<el-menu-item index="/seting">
						<i class="el-icon-setting"></i>
						<span slot="title">seting</span>
					</el-menu-item>
					<el-menu-item index="/forum">
						<i class="el-icon-setting"></i>
						<span slot="title">item</span>
					</el-menu-item>
				</el-menu>

		<section class="right-content">
			<header>
				<el-button type="primary" icon="menu" @click="collapseCtrl" class="menu-btn"></el-button>

				<span class="title">VUEDEMO</span>

				<el-dropdown @command="handleCommand" class="person-center" style="color: #FFF;">
					<span class="el-dropdown-link">
						个人中心
						<i class="el-icon-caret-bottom el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="a">我的消息</el-dropdown-item>
						<el-dropdown-item command="b">设置</el-dropdown-item>
						<el-dropdown-item command="c">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</header>

			<div style="padding: 20px;">
				<router-view></router-view>
			</div>
		</section>

	</div>

</template>

<script>
export default {
	data() {
		return {
			isCollapse: true
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log('open')
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		collapseCtrl() {
			this.isCollapse = !this.isCollapse
		},
		handleCommand(command) {
			this.$message('click on item ' + command);
		}
	}
}
</script>

<style>
html,
body,
#app {
	margin: 0;
	width: 100%;
	height: 100%;
}

.container {
	display: flex;
	width: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	overflow: hidden;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
}

.el-menu-vertical-demo {
	width: 60px;
}

.right-content {
	flex: 1;
	width: auto;
	overflow: scroll;
}

header {
	height: 60px;
	line-height: 60px;
	background-color: #20a0ff;
	color: #FFF;
}

.menu-btn {
	font-size: 22px;
}

.title {
	margin: auto;
}

.person-center {
	float: right;
	margin-right: 30px;
}
</style>
