import Base from './Base'

export default{
	name:'Token'
	,verify(){
		let token = Base.getLocalStorage('token');
		if (!token) {
			this.getTokenFromService()
		}else{
			this._verifyFromService(token)
		}

	}
	,getTokenFromService(callback){
		let params = {
			url:'banner'
			,type:'get'
			,data:{}
			,sCallback:(res)=>{
				// console.log(res)
			}
			,eCallback:(res)=>{
				// console.log(res)
			}
		}

		Base.request(params);
	}
	,_verifyFromService(token){
		let params = {
			url:'app/verify'
			,type:'post'
			,data:{
				token:token
			}
			,sCallback:(res)=>{
				console.log(res)
			}
			,eCallback:(res)=>{
				console.log(res)
			}
		}
		Base.request(params);
	}

}