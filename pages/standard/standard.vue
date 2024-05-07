<template>
	<view class="standard">
		<wd-navbar title="标准指标" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar>
		<view class="block">
			<view class="group">常用指标</view>
			<wd-table :data="BASE">
			  <wd-table-col prop="label" label="名称" width="30%" align="center"></wd-table-col>
			  <wd-table-col prop="value" label="参考范围" width="40%" align="center"></wd-table-col>
			  <wd-table-col prop="uint" label="单位" width="30%" align="center"></wd-table-col>
			</wd-table>
		</view>
		<view class="block">
			<view class="group">血糖指标</view>
			<wd-table :data="XUETANG">
			  <wd-table-col prop="label" label="状态" width="30%" align="center"></wd-table-col>
			  <wd-table-col prop="value" label="参考范围" width="40%" align="center"></wd-table-col>
			  <wd-table-col prop="uint" label="单位" width="30%" align="center"></wd-table-col>
			</wd-table>
		</view>
		<view class="block">
			<view class="group">体温指标</view>
			<wd-table :data="TIWEN">
			  <wd-table-col prop="label" label="状态" width="30%" align="center"></wd-table-col>
			  <wd-table-col prop="value" label="参考范围" width="40%" align="center"></wd-table-col>
			  <wd-table-col prop="uint" label="单位" width="30%" align="center"></wd-table-col>
			</wd-table>
		</view>
		<view class="block">
			<view class="group">BMI指标</view>
			<wd-table :data="BMI">
			  <wd-table-col prop="label" label="结果" width="50%" align="center"></wd-table-col>
			  <wd-table-col prop="value" label="参考范围" width="50%" align="center"></wd-table-col>
			</wd-table>
		</view>
		<view class="block">
			<view class="group">脂肪信息指标</view>
			<wd-table :data="FAT">
			  <wd-table-col prop="label" label="状态" width="20%" align="center"></wd-table-col>
			  <wd-table-col prop="man" label="男性" width="30%" align="center"></wd-table-col>
			  <wd-table-col prop="woman" label="女性" width="30%" align="center"></wd-table-col>
			  <wd-table-col prop="uint" label="单位" width="20%" align="center"></wd-table-col>
			</wd-table>
		</view>
		<view class="safe"></view>
	</view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const BASE = reactive([
	{label:'高压',value:'90-140',uint:'mmHg'},
	{label:'低压',value:'60-90',uint:'mmHg'},
	{label:'心率',value:'60-100',uint:'次/分'},
	{label:'血氧',value:'95~100',uint:'%'},
	{label:'胆固醇',value:'2.9~6.0',uint:'mmol/L'},
	{label:'尿酸',value:'0.149~0.416(男)\n0.089~0.357(女)',uint:'mmol/L'}
])

const XUETANG = reactive([
	{label:'空腹',value:'3.9~6.1',uint:'mmol/L'},
	{label:'餐后一小时',value:'6.7~9.4',uint:'mmol/L'},
	{label:'餐后两小时',value:'3.9~7.8',uint:'mmol/L'}
])

const BMI = reactive([
	{label:'偏低',value:'小于18.5'},
	{label:'正常',value:'18.5~23.9'},
	{label:'偏胖',value:'23.9~28'},
	{label:'肥胖',value:'大于28'},
])

const TIWEN = reactive([
	{label:'低烧',value:'小于36',uint:'℃'},
	{label:'正常',value:'36~37',uint:'℃'},
	{label:'发烧',value:'37~38.5',uint:'℃'},
	{label:'高烧',value:'大于38.5',uint:'℃'},
])

const FAT = reactive([
	{label:'脂肪率',man:'10%~21%',woman:'20%~34%',uint:'%'},
	{label:'基础代谢',man:'1395~1705',woman:'1053~1287',uint:'kcal'},
	{label:'体水分量',man:'0.5*标准体重低<=体水分量<=0.65*标准体重高',woman:'0.45*标准体重低<=体水分量<=0.6*标准体重高',uint:'kg'},
	{label:'体水分率',man:'50%~65%',woman:'45%~60%',uint:'%'},
	{label:'脂肪量',man:'0.1*标准体重低<=脂肪量<=0.21*标准体重高',woman:'0.2*标准体重低<=脂肪量<=0.34*标准体重高',uint:'kg'},
	{label:'脂肪量',man:'0.66*标准体重低<=脂肪量<=0.85*标准体重高',woman:'0.61*标准体重低<=脂肪量<=0.8*标准体重高',uint:'kg'},
	{label:'肌肉率',man:'66%~85%',woman:'61%~80%',uint:'%'},
	{label:'骨盐',man:'2.7~3.7',woman:'2.1~2.9',uint:'kg'},
	{label:'去脂体重',man:'标准体重低-蛋白质<去脂体重<标准体重高-蛋白质',woman:'标准体重低-蛋白质<去脂体重<标准体重高-蛋白质',uint:'kg'},
	{label:'蛋白质率',man:'16%~20%',woman:'16%~20%',uint:'%'},
	{label:'细胞内液量',man:'0.33*标准体重低<=细胞内液量<=0.43*标准体重高',woman:'0.3*标准体重低<=细胞内液量<=0.4*标准体重高',uint:'kg'},
	{label:'细胞外液量',man:'0.17*标准体重低<=细胞外液量<=0.22*标准体重高',woman:'0.15*标准体重低<=细胞外液量<=0.2*标准体重高',uint:'kg'},
	{label:'细胞内液率',man:'33%~43%',woman:'30%~40%',uint:'%'},
	{label:'细胞外液率',man:'17%~22%',woman:'15%~20%',uint:'%'},
	{label:'蛋白质',man:'0.16*标准体重低<=蛋白质<=0.2*标准体重高',woman:'0.16*标准体重低<=蛋白质<=0.2*标准体重高',uint:'kg'},
	{label:'内脏脂肪等级',man:'',woman:'',uint:'级'},
	{label:'骨量',man:'',woman:'',uint:'kg'},
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
	.safe{
		height: 100rpx;
	}
}
</style>
