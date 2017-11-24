<template>
	<div id="frame">
		 <mt-header fixed title="头部标题">
		 	  <router-link to="/" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
		 	 <router-link to="/user" slot="right">
		 	 	<mt-button><i class="glyphicon glyphicon-user"></i></mt-button>
		 	 </router-link>
		 </mt-header>
		 <div class="container">		 	
		 	<router-view/>
		 </div>	
	</div>
	
</template>

<script type="text/javascript">
	export default{
		name:"Frame"
		,created:function(){}
		,methods:{			
		}
	}
</script>

<style type="text/css" scoped>
	.mint-header{
		height: 40px;
	}
	.container{
		margin-top: 40px;
	}
	.mintui-success{
	  font-size: 48px;
	}
	.glyphicon-user{
		font-size: 18px;
	}
	.mint-header-button button:hover{
		text-decoration: none;
	}
	.mint-toast-text{
		z-index: 100;
	}
</style>