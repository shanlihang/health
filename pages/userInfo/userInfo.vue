<template>
	<view class="info">
		<wd-message-box />
		<view class="box">
			<view class="content">
				<view class="item">
					<text class="label">姓名</text>
					<view class="value">
						<view>{{data.name}}</view>
					</view>
				</view>
				<view class="item">
					<text class="label">性别</text>
					<view class="value">
						<view>{{data.sex}}</view>
					</view>
				</view>
				<view class="item">
					<text class="label">出生日期</text>
					<view class="value">
						<view>{{data.birthday}}</view>
					</view>
				</view>
				<view class="item">
					<text class="label">民族</text>
					<view class="value">
						<view>{{data.nation}}</view>
					</view>
				</view>
				<view class="item">
					<text class="label">电话</text>
					<view class="value">
						<view>{{data.phone}}</view>
					</view>
				</view>
				<view class="item">
					<text class="label">邮箱</text>
					<view class="value">
						<view>{{data.email}}</view>
					</view>
				</view>
				<view class="item">
					<text class="label">身份证号</text>
					<view class="value">
						<view>{{data.idnumber}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="btns">
			<wd-button :round="false" style="background-color: #31AE37;margin-bottom: 24rpx;" block size="large" @click="editInfo">修改资料</wd-button>
			<wd-button :round="false" style="background-color: #F56C6C;" block size="large" @click="quitSys">退出登录</wd-button>
		</view> -->
		
		<wd-popup v-model="flag" closable position="bottom" :safe-area-inset-bottom="true" custom-style="width:98%;height: 200px;margin:10rpx auto;border-radius:24rpx" @close="handleClose"></wd-popup>
	</view>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useMessage } from '@/uni_modules/wot-design-uni'
import {onLoad} from '@dcloudio/uni-app'

const message = useMessage()
const flag = ref<boolean>(false)

const data = ref()

const editInfo = () => {
	flag.value = true
}

const quitSys = () => {
	message.confirm({
	    msg: '确认要退出登录吗？',
	    title: '退出登录'
	}).then(() => {
	    console.log('点击了确定按钮')
	}).catch(() => {
	    console.log('点击了取消按钮')
	})
}

const handleClose = () => {
	console.log('关闭');
}

onLoad(() => {
	data.value = uni.getStorageSync('userInfo')
})
</script>

<style scoped lang="less">
.info{
	padding: 24rpx 20rpx;
	.box{
		width: 100%;
		background-color: #494949;
		.content{
			padding: 0 20rpx;
			.item{
				padding: 0 20rpx;
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2rpx #383838 solid;
				.label{
					width: 150rpx;
				}
				.value{
					flex: 1 0 auto;
					display: flex;
					justify-content: right;
					align-items: center;
				}
			}
			.large{
				height: 200rpx;
			}
			.item:last-child{
				border-bottom: none;
			}
			
		}
	}
	.btns{
		height: 220rpx;
		width: 80%;
		margin: 20rpx auto;
	}
}
</style>
