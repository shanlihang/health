<template>
	<view class="home">
		<!-- <view class="account">
			<view class="content">
				<view class="avatar">
					<image src="../../static/noAvatar.png" style="width: 200rpx;height: 200rpx;"></image>
				</view>
				<view class="name" @click="setInfo">
					<view>查看个人信息</view>
				</view>
			</view>
		</view> -->
		<view class="menu">
			<view class="item" v-for="item in baseMenu" :key="item.id" @click="navItem(item.router)">
				<view class="left">
					<wd-icon :name="item.icon" size="22px" style="display: flex;align-items: center;"></wd-icon>
					<text style="margin-left: 16rpx;">{{item.name}}</text>
				</view>
				<view class="right">
					<wd-icon name="arrow-right" size="22px" style="display: flex;align-items: center;"></wd-icon>
				</view>
				
			</view>
		</view>
		<view class="menu">
			<view class="item" v-for="item in otherMenu" :key="item.id" @click="navItem(item.router)">
				<view class="left">
					<wd-icon :name="item.icon" size="22px" style="display: flex;align-items: center;"></wd-icon>
					<text style="margin-left: 16rpx;">{{item.name}}</text>
				</view>
				<view class="right">
					<wd-icon name="arrow-right" size="22px" style="display: flex;align-items: center;"></wd-icon>
				</view>
				
			</view>
		</view>
		
		<view class="menu">
			<view class="item" v-for="item in contactMenu" :key="item.id" @click="navItem(item.router)">
				<view class="left">
					<wd-icon :name="item.icon" size="22px" style="display: flex;align-items: center;"></wd-icon>
					<text style="margin-left: 16rpx;">{{item.name}}</text>
				</view>
				<view class="right">
					<wd-icon name="arrow-right" size="22px" style="display: flex;align-items: center;"></wd-icon>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const baseMenu = reactive([
	{id:1,name:'个人信息',icon:'chart',router:'/pages/userInfo/userInfo'},
	// {id:1,name:'检测报表',icon:'chart',router:'/pages/report/report'},
	{id:2,name:'标准指标',icon:'keywords',router:'/pages/standard/standard'},
	{id:3,name:'健康推送',icon:'chart-bubble',router:'/pages/message/message'},
	{id:4,name:'意见反馈',icon:'mail',router:'/pages/feedBack/feedBack'}
])

const otherMenu = reactive([
	{id:1,name:'使用手册',icon:'books',router:'/pages/manual/manual'},
	{id:2,name:'隐私政策',icon:'evaluation',router:'/pages/policy/policy'},
	{id:3,name:'用户协议',icon:'spool',router:'/pages/protocol/protocol'},
])

const contactMenu = reactive([
	{id:1,name:'联系我们',icon:'chat',router:'/pages/contact/contact'},
])

const navItem = (path:string) => {
	uni.navigateTo({
		url:path
	})
}

// const setInfo = () => {
// 	uni.navigateTo({
// 		url:'/pages/userInfo/userInfo',
// 	})
// }
</script>

<style lang="less" scoped>
.home{
	padding-top: 24rpx;
	.menu{
		margin: 0 24rpx;
		border-radius: 12rpx;
		overflow: hidden;
		background-color: #494949;
		margin-bottom: 20rpx;
		.item{
			height: 80rpx;
			border-bottom: 2rpx solid #383838;
			padding: 0 16rpx;
			display: flex;
			align-items: center;
			.left{
				flex: 1 0 auto;
				display: flex;
				align-items: center;
			}
			
		}
		.item:last-child{
			border-bottom: none;
		}
	}
}
</style>
