<template>
	<view class="record" @click="closeOutside">
		<view class="drop">
			<wd-drop-menu class="drop-menu">
			    <wd-drop-menu-item v-model="choose.value1" :options="optionOne" />
			    <wd-drop-menu-item v-model="choose.value2" :options="optionTwo" />
			</wd-drop-menu>
			<view class="other" @click="showFilter">筛选</view>
		</view>
		
	</view>
	
	<wd-popup v-model="filter" position="bottom" closable custom-style="height: 90%;backgroundColor:#494949;">
		<view class="popup">
			<view class="btn">
				
			</view>
		</view>
	</wd-popup>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import { useQueue } from '@/uni_modules/wot-design-uni'

const { closeOutside } = useQueue()

const filter = ref<boolean>(false)

const choose = reactive({
	value1:0,
	value2:0
})

const optionOne = reactive([
  { label: '全部', value: 0 },
  { label: '近一年', value: 1 },
  { label: '近三个月', value: 2 }
])
const optionTwo = reactive([
  { label: '时间降序', value: 0 },
  { label: '时间升序', value: 1 },
])

const showFilter = () => {
	filter.value = true
}
</script>

<style scoped lang="less">

.record{
	.drop{
		display: flex;
		align-items: center;
		.drop-menu{
			flex: 1 0 auto;
			margin-right: 10rpx;
		}
		.other{
			width: 100rpx;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			font-size: 24rpx;
			border-left: 2rpx solid #fff;
		}
	}
}
.popup{
	position: relative;
	.btn{
		position: absolute;
		top: 800rpx;
		width: 90%;
		height: 100rpx;
		display: flex;
		background-color: aqua;
	}
}
</style>
