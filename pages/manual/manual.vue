<template>
	<view class="manual">
		<wd-navbar title="使用手册" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar>
		<wd-collapse v-model="open">
		  <wd-collapse-item title="用户认证" name="item1">
			  <wd-steps :active="actives.a" align-center>
			    <wd-step title="步骤1" description="登录账号" />
			    <wd-step title="步骤2" description="进入个人信息页" />
			    <wd-step title="步骤3" description="完善个人信息" />
			  </wd-steps>
			  <view style="text-align: center;">
				  <wd-button size="small" @click="nextStepA">{{actives.a>=2?'完成':'下一步'}}</wd-button>
			  </view>
		  </wd-collapse-item>
		  
		  <wd-collapse-item title="意见反馈" name="item2">
			  <wd-steps :active="actives.b" align-center>
			    <wd-step title="步骤1" description="登录账号" />
			    <wd-step title="步骤2" description="进入意见反馈页" />
			    <wd-step title="步骤3" description="填写反馈内容并提交" />
			  </wd-steps>
			  <view style="text-align: center;">
			  		<wd-button size="small" @click="nextStepB">{{actives.b>=2?'完成':'下一步'}}</wd-button>
			  </view>
		  </wd-collapse-item>
		  
		</wd-collapse>
	</view>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'

const open = ref<Array<string>>(['item1'])

const actives = reactive({
	a:0,
	b:0
})

const nextStepA = () => {
	actives.a++
}

const nextStepB = () => {
	actives.b++
}

const handleBack = () => {
	uni.navigateBack()
}

const handleBackHome = () => {
	uni.switchTab({
		url:'/pages/index/index'
	})
}
</script>

<style scoped lang="less">
.manual{}
</style>
