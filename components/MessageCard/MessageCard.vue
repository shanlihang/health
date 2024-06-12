<template>
	<view class="msgCard">
		<view class="title">
			<text>{{item.title}}</text>
			<text>{{dataFormat(item.CreatedAt)}}</text>
		</view>
		<view class="content">
			{{item.content}}
		</view>
	</view>
</template>

<script lang="ts" setup>
import {dayjs} from '@/uni_modules/iRainna-dayjs/js_sdk/dayjs.min.js'

const dataFormat = (time:string) => {
	return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}
	
const props = defineProps(['item'])

</script>

<style scoped lang="less">
.msgCard{
	width: 100%;
	border-radius: 6rpx;
	overflow: hidden;
	background-color: #494949;
	margin-top: 24rpx;
	.title{
		padding: 0 10rpx;
		height: 50rpx;
		display: flex;
		font-size: 24rpx;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #282829;
	}
	.content{
		width: 100%;
		min-height: 100rpx;
		padding: 0 10rpx;
		line-height: 40rpx;
		font-size: 18rpx;
		// white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>