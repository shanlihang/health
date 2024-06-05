<template>
	<view class="detail">
		<view class="box" v-if="flag">
			<view class="type">基础信息</view>
			<wd-cell-group border>
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="身高" :value="data.hw.height??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="体重" :value="data.hw.weight??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="BMI" :value="data.hw.bmi??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="体温" :value="data.tiwen??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="视力" :value="data.shili.left_eye+'/'+data.shili.right_eye" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="色盲结果" :value="data.semang??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="检测时间" :value="dataFormat(data.CreatedAt)??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="设备编号" :value="data.deviceID??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="体检编号" :value="data.examNo??'-'" />
			</wd-cell-group>
		</view>
		
		<view class="box" v-if="flag">
			<view class="type">重点数据</view>
			<wd-cell-group border>
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="血氧" :value="data.spo2.sp??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="心电结果" :value="data.ecg.result??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="血糖" :value="data.xt.value??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="尿酸" :value="data.ns??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="胆固醇" :value="data.dgc??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="中医体质" :value="data.zybs??'-'" />
			</wd-cell-group>
		</view>
		
		<view class="box" v-if="flag">
			<view class="type">血压</view>
			<wd-cell-group border>
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="左侧高压" :value="data.blood.high??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="左侧低压" :value="data.blood.low??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="心率" :value="data.blood.rate??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="右侧高压" :value="data.blood.rhigh??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="右侧低压" :value="data.blood.rlow??'-'" />
			</wd-cell-group>
		</view>
		
		<view class="box" v-if="flag">
			<view class="type">脂肪</view>
			<wd-cell-group border>
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="脂肪率" :value="data.fat.zflv??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="基础代谢" :value="data.fat.jcdx??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="体水分量" :value="data.fat.tsfl??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="体水分率" :value="data.fat.tsflv??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="脂肪量" :value="data.fat.zfl??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="肌肉量" :value="data.fat.jrl??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="肌肉率" :value="data.fat.jrlv??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="骨盐" :value="data.fat.gy??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="去脂体重" :value="data.fat.qztz??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="蛋白质率" :value="data.fat.dbzlv??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="细胞内液量" :value="data.fat.xbnyl??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="细胞外液量" :value="data.fat.xbwyl??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="细胞内液率" :value="data.fat.xbnylv??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="细胞外液率" :value="data.fat.xbwylv??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="蛋白质" :value="data.fat.dbz??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="内脏脂肪等级" :value="data.fat.nzzf??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="骨量" :value="data.fat.gl??'-'" />
			</wd-cell-group>
		</view>
		
		<view class="box" v-if="flag">
			<view class="type">心理测评</view>
			<wd-cell-group border>
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="UCLA孤独量表得分" :value="data.xlcp.ucla??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="老年抑郁量表得分" :value="data.xlcp.lnyy??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="自评抑郁量表得分" :value="data.xlcp.zpyy??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="汉密顿焦虑量表得分" :value="data.xlcp.hmdjl??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="情绪健康度测试得分" :value="data.xlcp.qxjkd??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="自测健康评定量表得分" :value="data.xlcp.zcjkpd??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="生活满意度量表得分" :value="data.xlcp.shmyd??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="人格障碍性格测试得分" :value="data.xlcp.rgza??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="PSTR成人心理压力测试得分" :value="data.xlcp.pstr??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="哈佛性向测试得分" :value="data.xlcp.hfxx??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="情商(EQ)测试得分" :value="data.xlcp.eq??'-'" />
				<wd-cell custom-class="cell" custom-value-class="cell-value" title="睡眠状况评估得分" :value="data.xlcp.smzkpg??'-'" />
			</wd-cell-group>
		</view>

	</view>
</template>

<script setup lang="ts">
import {onLoad} from '@dcloudio/uni-app'
import {getRecordById} from '../../api/record'
import {ref} from 'vue'
import {TableData} from '../record/model'
import {dayjs} from '@/uni_modules/iRainna-dayjs/js_sdk/dayjs.min.js'

const data = ref<TableData>()

const flag = ref<boolean>(false)

const dataFormat = (time:string) => {
	return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}


onLoad((option) => {
	getRecordById(option.id).then(res => {
		data.value = res.data
		flag.value = true
	})
	
})
</script>

<style scoped lang="less">
.detail{
	padding-bottom: 50rpx;
	.box{
		.type{
			height: 80rpx;
			line-height: 80rpx;
			text-indent: 0.4rem;
		}
	}
	.cell{
		background-color: #494949 !important;
		color: #fff;
	}
	.cell-value{
		color: #fff !important;
	}
}
</style>
