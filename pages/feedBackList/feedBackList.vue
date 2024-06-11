<template>
	<view class="feedBackList">
		<!-- <wd-navbar title="意见反馈列表" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar> -->
		<view class="item" v-for="item in data" :key="item.ID" @longpress="handleDelete(item.ID)">
			<view class="up"> 
				<wd-tag :type="item.status==0?'warning':'success'" plain>{{item.status==0?'待处理':'已处理'}}</wd-tag>
				<text style="font-size: 24rpx;">反馈时间：{{item.CreatedAt}}</text>
			</view>
			<view class="down">{{item.content}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {createModal,createToast} from '../../utils/feedback'
import {getfeedBackList,deleteFeedback} from '../../api/feedback'
import {onLoad} from '@dcloudio/uni-app'

const data = reactive([])

const handleDelete = (id:number) => {
	console.log(id);
	createModal('确认删除','确认要删除此条反馈吗',(e) => {
		if(e.confirm){
			deleteFeedback(id).then(res => {
				if(res.rowAffect != 0){
					createToast('删除成功')
				}
			})
			initData()
		}
	})
}

const initData = () => {
	data.length = 0
	getfeedBackList({}).then((res => {
		res.data.forEach(item  => {
			data.push(item)
		})
	}))
}

onLoad(() => {
	initData()
})
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
