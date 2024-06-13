const baseUrl = "http://localhost:9090"
const request = ({url,method,data}) =>{
    return new Promise((resolve,reject) =>{
        uni.request({
            url: baseUrl + url,//拼接请求路径
            data: data,
            method: method,
            header: {
                'content-type': 'application/json',
                Authorization: '---000---'
			},
            success: (res) => {
				const result = res.data;
				resolve(result) 
            },
            fail: (error) => {
                reject(error)
            }
        })
    })
}


// uni.addInterceptor('request', {
// 	invoke(args) {
// 		// request 触发前拼接 url 
// 		const {
// 			data,
// 			method,
// 		} = args;
// 		if (method === "GET") {
// 			// 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
// 			const newData = qs.stringify(data, {
// 				arrayFormat: "repeat"
// 			})
// 			delete args.data;
// 			args.url = `${args.url}?${newData}`;
// 		}
// 	},
// 	success(args) {},
// 	fail(err) {},
// 	complete(res) {}
// })

export default request
