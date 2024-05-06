<template>
	<view class="standard">
		<wd-navbar title="标准指标" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar>
		<view class="block" v-for="item in data" :key="item.id">
			<view class="group">{{item.group}}</view>
			<view class="cell">
				<wd-cell-group border>
				  <wd-cell v-for="(e,i) in item.children" :key="i" :title="e.title" :value="e.value+' '+e.uint" />
				</wd-cell-group>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'	

const data = reactive([
	{id:1,group:'身高体重',children:[{title:'身高',value:'160-175',uint:'米'},{title:'体重',value:'160-175',uint:'千克'},{title:'bmi',value:'14.7',uint:''}]},
	{id:2,group:'血压心率',children:[{title:'左侧高压',value:'90-140',uint:'压强'},{title:'左侧低压',value:'60-90',uint:'压强'},{title:'右侧高压',value:'90-140',uint:'压强'},{title:'右侧低压',value:'60-90',uint:'压强'},{title:'心率',value:'90-140',uint:'分/次'}]},
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

<style lang="less" scoped>
.standard{
	.block{
		background-color: transparent;
		.group{
			height: 70rpx;
			line-height: 70rpx;
			font-size: 28rpx;
			text-indent: 1rem;
		}
	}
}
</style>
