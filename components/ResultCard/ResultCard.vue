<template>
	<view class="record-card">
		<view class="content">
			<text class="label">高压/低压：</text>
			<text class="value">{{item.blood.high}}/{{item.blood.low}}</text>
		</view>
		<view class="content">
			<text class="label">血糖：</text>
			<text class="value">{{item.xt.value}}/{{item.blood.low}}</text>
		</view>
		<view class="content">
			<text class="label">胆固醇：</text>
			<text class="value">{{item.dgc}}/{{item.blood.low}}</text>
		</view>
		<view class="content">
			<text class="label">心电结果：</text>
			<text class="value">{{item.ecg.result}}</text>
		</view>
		<view class="content">
			<text class="label">检测时间：</text>
			<text class="value">{{item.CreatedAt}}</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
const props = defineProps(['item'])

</script>

<style scoped lang="less">
.record-card{
	margin: 12rpx 12rpx 0;
	height: 220rpx;
	background-color: #494949;
	border-radius: 12rpx;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	.content{
		padding: 0 12rpx;
		display: flex;
		justify-content: space-between;
		.label{
			display: block;
			width: 30%;
		}
		.value{
			display: block;
			width: 60%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-align: right;
		}
	}
}
</style>