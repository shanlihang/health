<template>
	<view class="index">
		<view class="message">
			<view class="title">今日推送</view>
		</view>
		<view class="data">
			<view class="year"></view>
			<view class="total"></view>
		</view>
		<view class="line">
			<view class="title">折线图</view>
		</view>
	</view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.index{
	padding-top: 24rpx;
	.message{
		margin: 0 24rpx;
		height: 500rpx;
		border-radius: 6rpx;
		overflow: hidden;
		background-color: #494949;
		.title{
			height: 70rpx;
			line-height: 70rpx;
			font-weight: bold;
			text-indent: 1rem;
			border-bottom: 2rpx solid #383838;
		}
	}
	.data{
		margin: 24rpx 24rpx;
		display: flex;
		justify-content: space-between;
		.year,.total{
			width: 338rpx;
			height: 300rpx;
			border-radius:6rpx;
			background-color: #494949;
		}
		.total{}
	}
	.line{
		margin: 0 24rpx;
		height: 400rpx;
		background-color: #494949;
		.title{
			height: 70rpx;
			line-height: 70rpx;
			font-weight: bold;
			text-indent: 1rem;
			border-bottom: 2rpx solid #383838;
		}
	}
}
</style>
