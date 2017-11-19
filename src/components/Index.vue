<template>
	<div id="index">
		<div class="header">
			<div @click="toRepair"><i class="fa fa-wrench"></i>智能保修</div>
			<div @click="toUser"><i class="fa fa-user"></i>个人中心</div>
		</div>

		<div class="gn">
			<router-link class="gn-item" v-for="item in gn" :to="item.url" :key="item.id">
					<div v-bind:class="item.className" class="gn-icon"></div>
					<div class="gn-name">{{item.name}}</div>				
			</router-link>
		</div>
		<footerComponents/>
	</div>
</template>

<script type="text/javascript">
	import footer from './footer.vue'	
	import router from '../router'
	export default{
		name:"Index"
		,data(){
			return{
				gn:[
					{className:'fa fa-key',name:'失物招领',url:'Found'}
					,{className:'fa fa-address-book-o',name:'电话本',url:''}
					,{className:'fa fa-car',name:'班车预定',url:''}
					,{className:'fa fa-tint',name:'微信订水',url:''}
					,{className:'fa fa-bullhorn',name:'食堂评价',url:''}
					,{className:'fa fa-random',name:'敬请期待',url:''}
				]
			}
		}		
		,components:{
			'footerComponents':footer
		}
		,methods:{
			toUser:function(){
				router.push("user")
			}
			,toRepair:function(){
				router.push("repair")
			}
		}
	}
</script>

<style type="text/css" scoped>
	#index .header{
		width: 100%;
		height: 30vw;
		background-color: #26a2ff;
		display: flex;
		flex-direction: row;
	}
	.header div{
		flex: 1;
		text-align: center;
		line-height: 30vw;
		color: #fff;
		font-weight: bold;
		font-size: 22px;
	}
	.header i{
		padding-right:  10px;
		font-size: 24px;
	}
	.gn{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.gn-item{
		width: 25vw;
		height: 20vw;
		text-align: center;
		padding-top:6vw;
		position: relative;	
	}
	.gn-item:before{
	    content: " ";
	    position: absolute;
	    right: 0;
	    top: 0;
	    width: 1px;
	    bottom: 0;
	    border-right: 1px solid #D9D9D9;
	    color: #D9D9D9;
	    -webkit-transform-origin: 100% 0;
	    transform-origin: 100% 0;
	    -webkit-transform: scaleX(0.5);
	    transform: scaleX(0.5);
	}
	.gn-item:after{	
		content: " ";
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    height: 1px;
	    border-bottom: 1px solid #D9D9D9;
	    color: #D9D9D9;
	    -webkit-transform-origin: 0 100%;
	    transform-origin: 0 100%;
	    -webkit-transform: scaleY(0.5);
	    transform: scaleY(0.5);
	}
	
	.fa-tint{
		color:#0FC9E7;
	}
	.fa-key{
		color:#F86254;
	}
	.fa-address-book-o{
		color: #2552AC;
	}
	.fa-car{
		color:#F76B8A;
	}
	.fa-bullhorn{
		color: #092A35;
	}
	.gn .gn-item:last-child{
		color:#e2e2e2;
	}
	.gn-icon{
		font-size: 30px;
		padding-bottom: 10px;
	}
</style>