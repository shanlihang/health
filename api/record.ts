import request from '../utils/request'

export const getRecordList = function(data){
	return request({
		url:'/api/v1/medical/result/list',
		method:'get',
		data:data
	})
}

export const getRecordById = function(id:number){
	return request({
		url:'/api/v1/medical/result/'+id,
		method:'get',
		data:null
	})
}

export const checkPeople = function(idnumber:string){
	return request({
		url:'/api/v1/medical/people/list',
		method:'get',
		data:{
			idnumber:idnumber
		}
	})
}