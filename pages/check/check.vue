<template>
	<view class="check">
		<wd-input type="text" v-model="idNumber" placeholder="请输入身份证号" :maxlength="18" custom-class="input" />
		<wd-button block style="margin-top: 24rpx;" @click="checkStart">开始校验</wd-button>
	</view>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {checkPeople} from '../../api/record'
import {createToast,createModal} from '../../utils/feedback'

const idNumber = ref<string>('')

const checkStart = () => {
	if(idNumber.value=='' || idNumber.value.length != 18){
		createToast('身份号码有误 请核对')
		return
	}else{
		checkPeople(idNumber.value).then(res => {
			console.log(res);
			if(res.data.length != 0){
				uni.setStorageSync('userInfo',res.data[0])
				uni.switchTab({
					url:'/pages/index/index'
				})
			}else{
				createModal('校验失败','系统查找不到此居民，请联系医护人员确认已进行体检',() => {
					idNumber.value = ''
				})
			}
		})
	}
}
</script>

<style scoped lang="less">
.check{
	padding: 24rpx 12rpx;
	.input{
		background-color: #494949;
		color: #fff;
		text-indent: 1rem;
	}
}
</style>
