
import axios from 'axios';

export default{
	name:"Base"
	,request(params){
		if (!params.type) {
			params.type = 'GET';
		}
		axios({
			baseURL:'https://fujs.xin/api/v1/'
			,method: params.type
			,url: params.url
			,responseType: 'json'
			,headers: {				
				'content-type':'json'
				,'token':this.getLocalStorage('token')
			}
			,withCredentials: false // 默认的  // `withCredentials` 表示跨域请求时是否需要使用凭证
			,data:params.data
		}).then(function(response) {
		    params.sCallback && params.sCallback(response);
		  }).catch(function(error) {
		    params.eCallback && params.eCallback(error);
		  });
	}

	,setLocalStorage(key, val){
		let exp=new Date().getTime()+7*24*60*60;  //令牌过期时间
        let obj={
            val:val,
            exp:exp
        };
        localStorage.setItem(key,JSON.stringify(obj));
	}

	,getLocalStorage(key){
        var info= localStorage.getItem(key);
        if(info) {
            info = JSON.parse(info);
            if (info.exp > new Date().getTime()) {
                return info.val;
            }
            else{
                this.deleteLocalStorage('token');
            }
        }
        return '';
    }
    ,deleteLocalStorage(key){
        return localStorage.removeItem(key);
    }   
}


