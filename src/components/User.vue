<template>
	<div id="user">
		<div class="imgUserBox">
			<img :src="user.headimg" /><span>{{user.name}}</span>
		</div>

		<div class="gnUser">
			<div class="titleName">服务</div>
			<div class="gnUser-container">
				<div class="gnUser-item" v-for="item in gn" :key="item.id">
					<i :class="item.imgClass"></i>
					<p>{{item.name}}</p>
				</div>				
			</div>
		</div>

		<div class="me">
			<div class="me-item">
				<div></div>
				<div></div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
		</div>

		
	<footerComponents/>
	</div>

</template>

<script type="text/javascript">
	import footer from './footer.vue'

	export default{
		name:'User'
		,data(){
			return{
				user:{
					name:'王司徒'
					,headimg:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1681391545,4187928589&fm=85&s=0D803C72F2A477157583DA4D0300C0EE'
				}
				,gn:[
					{imgClass:'fa fa-android',name:'学习'}
					,{imgClass:'fa fa-telegram',name:'复习'}
					,{imgClass:'fa fa-windows',name:'工作'}
					,{imgClass:'fa fa-twitter',name:'生活'}
				]
			}
		}
		,components:{
			'footerComponents':footer
		}
	}
</script>

<style type="text/css" scoped>
	.imgUserBox{
		height: 100px;
		line-height: 100px;
		display: flex;
		flex-direction: row;
		background-color: #fff;
	}
	.imgUserBox img{
		display: block;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		padding:20px 10px;
	}
	.gnUser{
		margin-top: 10px;
		height: 150px;
		background-color: #fff;
	}
	.gnUser .titleName{
		line-height: 30px;
		height: 30px;
		padding:0 10px;
	}
	.gnUser-container{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.gnUser-item{
		flex: 1;
		text-align: center;
	}
	.gnUser-item>i{
		text-align: center;
		vertical-align: middle;
		margin-top: 10px;
		font-size: 24px;
		padding: 10px;
		background-color: #e2e2e2;
		border-radius: 3px;
	}
	.gnUser-item>p{
		margin-top: 5px;
		font-size: 16px;
	}
</style>