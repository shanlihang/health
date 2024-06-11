<template>
	<view class="message">
		<view class="list">
			<MessageCard v-for="item in data" :key="item.ID" :item="item" @click="showDetail(item.ID)" />
		</view>
	</view>
</template>

<script setup lang="ts">
import MessageCard from '../../components/MessageCard/MessageCard.vue'
import {reactive} from 'vue'
import {getPushList} from '../../api/push'
import {onLoad} from '@dcloudio/uni-app'

interface Push{
	ID?:number,
	title?:string,
	content?:string,
	CreatedAt?:string,
	UpdatedAt?:string,
	DeletedAt?:string
}

const data = reactive<Array<Push>>([])

const initData = () => {
	data.length = 0
	getPushList({}).then(res => {
		res.data.forEach(item => {
			data.push(item)
		})
	})
}
const showDetail = (id:number) => {
	uni.navigateTo({
		url:'/pages/pushDetail/pushDetail?id='+id
	})
}
onLoad(() => {
	initData()
})
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
