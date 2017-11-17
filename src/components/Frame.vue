<template>
	<div id="frame">
		 <mt-header fixed title="头部标题">
		 	  <router-link to="/" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
		 	 <mt-button icon="user" slot="right"><i class="glyphicon glyphicon-user-circle-o"></i></mt-button>
		 </mt-header>
		 <div class="container">		 	
		 	<router-view/>
		 </div>		 		
	 	 <mt-button type="primary" @click="toast">primary</mt-button>
	</div>
	
</template>

<script type="text/javascript">
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	export default{
		name:"Frame"
		,created:function(){}
		,methods:{
			toast:function(){
				Toast({
				  message: '操作成功',
				  iconClass: 'mintui mintui-success'
				});

				 this.$axios.get('https://fujs.xin/api/v1/banner').then((res)=>{
				        console.log(res)
				      })
			}
		}
	}
</script>

<style type="text/css">
	.mint-header{
		height: 50px;
	}
	.container{
		margin-top: 50px;
	}
	.mintui-success{
	  font-size: 48px;
	}
	.glyphicon-user{
		font-size: 18px;
	}
</style>