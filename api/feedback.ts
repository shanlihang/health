import request from '../utils/request'

export const getfeedBackList = function(data){
	return request({
		url:'/api/v1/medical/feedback/list',
		method:'get',
		data:data
	})
}

export const createFeedback = function(data){
	return request({
		url:'/api/v1/medical/feedback/add',
		method:'post',
		data:data
	})
}

export const deleteFeedback = function(id:number){
	return request({
		url:'/api/v1/medical/feedback/'+id,
		method:'delete',
		data:null
	})
}