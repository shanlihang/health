import request from '../utils/request'

export const getPushList = function(data){
	return request({
		url:'/api/v1/medical/push/list',
		method:'get',
		data:data
	})
}

export const getPushById = function(id:number){
	return request({
		url:'/api/v1/medical/push/'+id,
		method:'get',
		data:null
	})
}