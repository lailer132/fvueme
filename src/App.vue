<template>
    <div class="app-container">
        <!-- 顶部 Header 区域 -->
        <mt-header fixed title="Levine 商城"></mt-header>        <!-- 中间 路由 router-view 区域 -->

		<!-- 中间的路由 router-view 区域 -->
		<transition name="router-vi">
			<router-view></router-view>
		</transition>

        <!-- 底部 TabBar 区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">99+</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
</script>

<style scoped>
.app-container{
	padding-top: 40px;
	overflow-x: hidden
}
.router-vi-enter{
	opacity: 0;
	transform: translateX(100%);
}
.router-vi-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.router-vi-enter-active,
.router-vi-leave-active{
	transition:all 0.5s ease;
}
</style>