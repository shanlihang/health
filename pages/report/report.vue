<template>
	<view class="report">
		<!-- <wd-navbar title="体检数据" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar> -->
		<view class="num">
			<view class="item">
				<view class="label">近一年体检次数</view>
				<view class="value">3</view>
			</view>
			<view class="item">
				<view class="label">总体检次数</view>
				<view class="value">3</view>
			</view>
		</view>
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
.report{
	.num{
		width: 94%;
		height: 200rpx;
		margin: 20rpx auto;
		border-radius: 6rpx;
		overflow: hidden;
		background-color: #494949;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
}
</style>
