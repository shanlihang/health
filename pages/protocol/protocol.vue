<template>
	<view class="protocol">
		<!-- <wd-navbar title="用户协议" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar> -->
		<view class="content">
			<h1>用户协议</h1>
			<p><i>山东海科医疗科技服务有限公司</i>（以下简称“我们”）依据本协议为用户（以下简称“你”）提供<i>健康小助手</i>服务。本协议对你和我们均具有法律约束力。</p>
			<h4>一、本服务的功能</h4>
			<p>你可以使用本服务查询体检信息。</p>
			<h4>二、责任范围及限制</h4>
			<p>你使用本服务得到的结果仅供参考，实际情况以官方为准。</p>
			<h4>三、隐私保护</h4>
			<p>我们重视对你隐私的保护，你的个人隐私信息将根据《隐私政策》受到保护与规范，详情请参阅《隐私政策》。</p>
			<h4>四、其他条款</h4>
			<p>4.1 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</p>
			<p>4.2 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</p>
		</view>
		<view class="space"></view>
	</view>
</template>

<script setup lang="ts">
// const handleBack = () => {
// 	uni.navigateBack()
// }

// const handleBackHome = () => {
// 	uni.switchTab({
// 		url:'/pages/index/index'
// 	})
// }
</script>

<style scoped lang="less">
.protocol{
	.content{
		margin: 24rpx 24rpx;
	}
	.space{
		height: 50rpx;
	}
}
</style>
