<template>
	<view class="index">
		<view class="message">
			<view class="title">今日推送</view>
			<view class="content">
				<scroll-view class="tips" :scroll-top="0" scroll-y="true">
					<view class="tip" v-for="item in tips" :key="item.id">
						<view class="label">{{item.title}}</view>
						<view class="time">{{item.time}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="data">
			<view class="year">
				<qiun-data-charts 
				  type="pie"
				  :opts="chatOne.opts"
				  :chartData="chatOne.chartData"
				/>
			</view>
			<view class="total">
				<qiun-data-charts
				  type="pie"
				  :opts="chatOne.opts"
				  :chartData="chatOne.chartData"
				/>
			</view>
		</view>
		<view class="line">
			<view class="title">折线图</view>
			<view class="content">
				<qiun-data-charts
				  type="mix"
				  :opts="chatThree.opts"
				  :chartData="chatThree.chartData"
				/>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {onLoad} from '@dcloudio/uni-app'

const tips = reactive([
	{id:1,title:'感冒药要凡是含有〈扑尔敏〉的成分都会犯困',time:'2024-05-18'},
	{id:2,title:'浸润型肺结核大咯血采取：患侧卧位',time:'2024-05-18'},
	{id:3,title:'呼吸困难最早出现于：左心衰竭',time:'2024-05-18'},
	{id:4,title:'慢性支气管炎急性发作期治疗最主要的措施是：控制感染',time:'2024-05-18'},
	{id:5,title:'小儿《12岁以下》发烧：美林',time:'2024-05-18'},
	{id:6,title:'哪一种疾病，最易发生呼吸衰竭：阻塞性肺气肿',time:'2024-05-18'},
	{id:7,title:'哮喘：布地奈德雾剂（普米克） 硫酸沙丁胺醇吸入气雾剂（万托林） 沙丁胺醇气雾剂（信宜）',time:'2024-05-18'},
	{id:8,title:'一般在服毒后几小时内洗胃最有效：4~6 小时内',time:'2024-05-18'},
	{id:9,title:'肠胃炎：胃肠安丸',time:'2024-05-18'},
	{id:10,title:'呼吸困难最常见于：左心功能不全',time:'2024-05-18'},
	{id:11,title:'感冒药要凡是含有〈扑尔敏〉的成分都会犯困',time:'2024-05-18'},
	{id:12,title:'对溺水所致呼吸心跳骤停者，其紧急处理措施是：人工呼吸和胸外心脏按压',time:'2024-05-18'},
])

const init = () => {
	let res1 = {
		series: [
			{
			  data: [{"name":"高血压","value":50},{"name":"低血压","value":30},{"name":"心脏病","value":20},{"name":"高血糖","value":18}]
			}
		]
	}
	let res2 = {
		series: [
			{
			  data: [{"name":"高血压","value":500},{"name":"低血压","value":300},{"name":"心脏病","value":250},{"name":"高血糖","value":108}]
			}
		]
	}
	let res3 = {
		categories: ["2018","2019","2020","2021","2022","2023"],
		series: [
		{
			name: "曲线",
			type: "line",
			style: "curve",
			color: "#1890ff",
			disableLegend: true,
			data: [70,50,85,130,64,88]
		},
		{
			name: "折线",
			type: "line",
			color: "#2fc25b",
			data: [120,140,105,170,95,160]
		},]
	}	      
	chatOne.chartData = JSON.parse(JSON.stringify(res1))
	chatTwo.chartData = JSON.parse(JSON.stringify(res2))
	chatThree.chartData = JSON.parse(JSON.stringify(res3));
}

const chatOne = reactive({
	chartData: {},
	opts: {
	  color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
	  padding: [5,5,5,5],
	  enableScroll: false,
	  extra: {
	    pie: {
	      activeOpacity: 0.5,
	      activeRadius: 10,
	      offsetAngle: 0,
	      labelWidth: 15,
	      border: true,
	      borderWidth: 3,
	      borderColor: "#FFFFFF",
	      linearType: "custom"
	    }
	  }
	}
})

const chatTwo = reactive({
	chartData: {},
	opts: {
	  color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
	  padding: [5,5,5,5],
	  enableScroll: false,
	  extra: {
	    pie: {
	      activeOpacity: 0.5,
	      activeRadius: 10,
	      offsetAngle: 0,
	      labelWidth: 15,
	      border: true,
	      borderWidth: 3,
	      borderColor: "#FFFFFF",
	      linearType: "custom"
	    }
	  }
	}
})

const chatThree = reactive({
	chartData: {},
	opts: {
		color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
		padding: [15,15,0,15],
		enableScroll: false,
		legend: {},
		xAxis: {
			disableGrid: true,
			title: "年"
		},
		yAxis: {
			disabled: false,
			disableGrid: false,
			splitNumber: 5,
			gridType: "dash",
			dashLength: 4,
			gridColor: "#CCCCCC",
			padding: 10,
			showTitle: true,
			data: [
			{
				position: "left",
				title: "折线"
			},
			{
				position: "right",
				min: 0,
				max: 200,
				title: "柱状图",
				textAlign: "left"
			},
			]
		},
		extra: {
			mix: {
				column: {
					width: 20
				}
			}
		}
	}
})

onLoad(() => {
	init()
})

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
		.content{
			height: 430rpx;
			.tips{
				height: 100%;
				.tip{
					padding: 0 10rpx;
					height: 60rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 2rpx solid #383838;
					.label{
						width: 80%;
						font-size: 24rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					.time{
						margin-left: 50rpx;
						text-align: right;
						width: 120rpx;
						font-size: 18rpx;
					}
				}
				.tip:last-child{
					border: 0;
				}
			}
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
		.content{
			width: 100%;
			height: 330rpx;
		}
	}
}
</style>
