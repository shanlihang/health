<template>
	<view class="feedBackList">
		<wd-navbar title="意见反馈列表" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar>
		<view class="item" v-for="item in data" :key="item.id">
			<view class="up"> 
				<wd-tag :type="item.isFinish==0?'warning':'success'" plain>{{item.isFinish==0?'待处理':'已处理'}}</wd-tag>
				<text style="font-size: 24rpx;">反馈时间：{{item.time}}</text>
			</view>
			<view class="down">{{item.content}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const data = reactive([
	{id:1,content:'fasfasfasf',time:'2024-05-10',isFinish:0},
	{id:2,content:'fasfasfasf',time:'2024-05-10',isFinish:0},
	{id:3,content:'fasfasfasf',time:'2024-05-10',isFinish:0},
	{id:4,content:'fasfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasf',time:'2024-05-10',isFinish:1},
])
const handleBack = () => {
	uni.navigateBack()
}

const handleBackHome = () => {
	uni.switchTab({
		url:'/pages/index/index'
	})
}
</script>

<style scoped lang="less">
.feedBackList{
	.item{
		background-color: #494949;
		margin: 24rpx 24rpx 0;
		border-radius: 6rpx;
		overflow: hidden;
		.up{
			width: 90%;
			height: 60rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 2rpx solid #383838;
		}
		.down{
			width: 90%;
			margin: 0 auto;
			padding: 12rpx 0;
			overflow-wrap: break-word;
			min-height: 80rpx;
		}
	}
}
</style>
