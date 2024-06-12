<template>
	<view class="pushDetail">
		<view class="title">{{data.title}}</view>
		<view class="content">{{data.content}}</view>
		<view class="time">发布时间：{{data.CreatedAt}}</view>
	</view>
</template>

<script setup lang="ts">
import {onLoad} from '@dcloudio/uni-app'
import {getPushById} from '../../api/push'
import {ref} from 'vue'

interface Push{
	ID?:number,
	title?:string,
	content?:string,
	CreatedAt?:string,
	UpdatedAt?:string,
	DeletedAt?:string
}

const data = ref<Push>({})

const initData = (id:number) => {
	getPushById(id).then(res => {
		data.value = res.data
	})
}

onLoad((option) => {
	initData(parseInt(option.id))
})
</script>

<style scoped lang="less">
.pushDetail{
	padding: 0 24rpx;
	.title{
		height: 70rpx;
		line-height: 70rpx;
		font-weight: bold;
		text-align: center;
	}
	.content{
		min-height: 500rpx;
		text-indent: 2rem;
	}
	.time{
		height: 60rpx;
		line-height: 60rpx;
		font-size: 18rpx;
		text-align: center;
	}
}
</style>
