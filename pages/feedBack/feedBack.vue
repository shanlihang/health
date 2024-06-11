<template>
	<view class="feedBack">
		<wd-toast />
		<!-- <wd-navbar title="意见反馈" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar> -->
		<wd-textarea custom-class="area" v-model="content" clearable show-word-limit :maxlength="240" label="反馈内容" label-width="120rpx" placeholder="请填写评价" />
		<view class="btns">
			<wd-button style="background-color: #31AE37;" block type="success" size="large" @click="submit">提交反馈</wd-button>
			<wd-button style="background-color: #A0A0A0;color: #E0E0E0;" block type="info" size="large" @click="selectList">反馈列表</wd-button>
		</view>
		
	</view>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useToast } from '@/uni_modules/wot-design-uni'
import {createFeedback} from '../../api/feedback'


const toast = useToast()

const content = ref<string>('')

const submit = () => {
	if(content.value == ''){
		toast.warning('反馈信息不能为空')
	}else{
		createFeedback({
			content:content.value,
			status:0
		}).then(res => {
			if(res.rowAffect != 0){
				content.value = ''
				toast.show('反馈成功')
			}
		})
		
	}
}

const selectList = () => {
	uni.navigateTo({
		url:'/pages/feedBackList/feedBackList'
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
.feedBack{
	padding-top: 24rpx;
	.area{
		background-color: #383838 !important;
	}
	.btns{
		margin: 24rpx 24rpx 0;
		.wd-button{
			margin-top: 24rpx;
		}
	}
}
</style>
