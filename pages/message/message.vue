<template>
	<view class="message">
		<wd-navbar title="体检数据" left-arrow custom-style="background-color: #383838;color: #E0E0E0;">
		  <template #capsule>
		    <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
		  </template>
		</wd-navbar>
		<view class="list">
			<MessageCard v-for="item in data" :key="item.id" :item="item"/>
		</view>
	</view>
</template>

<script setup lang="ts">
import MessageCard from '../../components/MessageCard/MessageCard.vue'
import {reactive} from 'vue'

const data = reactive([
	{id:1,title:'是佛啊是佛啊是佛i啊是佛啊寺活佛啊似乎萨法时',content:'啊是佛啊是佛啊寺活佛啊似乎萨法时啊寺活佛啊似乎萨法佛啊是佛啊是佛i啊是佛啊寺活佛啊似乎萨法时族',created_at:'2001-02-04',created_by:'65161616'},
	{id:2,title:'是佛啊是佛啊是佛i啊是佛啊寺活佛啊似乎萨法时',content:'啊是佛啊寺活佛啊似乎萨法佛啊是佛啊是佛i啊是佛啊寺活佛啊似乎萨法时族',created_at:'2001-02-04',created_by:'65161616'},
	{id:3,title:'是佛啊是佛啊是佛i啊是佛啊寺活佛啊似乎萨法时',content:'啊是佛啊寺活佛啊似乎萨法佛啊是佛啊是佛i啊是佛啊寺活佛啊似乎萨法时族',created_at:'2001-02-04',created_by:'65161616'},
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

<style scoped lang="less">
.message{
	width: 100%;
	.list{
		width: 96%;
		margin: 0 auto;
	}
}
</style>
