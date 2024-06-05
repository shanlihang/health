<template>
	<view class="contact">
		<wd-toast />
		<!-- <wd-navbar title="联系我们" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar> -->
		<view class="notice">
			<wd-notice-bar text="点击右侧联系方式即可进行复制操作" prefix="warn-bold" :scrollable="false" />
		</view>
		
		<view class="methods">
			<wd-cell-group border>
				<wd-cell custom-class="cell" custom-value-class="cell-value" v-for="item in data" :key="item.id" :title="item.label" :value="item.value" clickable @click="copy(item.value)" />
			</wd-cell-group>
		</view>
	</view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import { useToast } from '@/uni_modules/wot-design-uni'

const toast = useToast()

const data  = reactive([
	{id:1,label:'QQ',value:'67490009'},
	{id:2,label:'微信',value:'slh09091025'},
	{id:3,label:'电话',value:'18348563173'},
	{id:4,label:'邮箱',value:'slh67490009@gmail.com'},
])

const copy = (value:string) => {
	uni.setClipboardData({
		data: value,
		success() {
			toast.success("已复制")
		}
	})
}

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
.contact{
	.notice{
		margin: 10rpx 24rpx;
	}
	.methods{
		.cell{
			background-color: #494949 !important;
			color: #fff;
		}
		.cell-value{
			color: #fff !important;
		}
	}
}
</style>
