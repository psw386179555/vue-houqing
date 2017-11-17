<template>
	<div id="frame">
		 <mt-header fixed title="头部标题"></mt-header>
	 	<router-view/>
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
				// Toast({
				//   message: '操作成功',
				//   iconClass: 'icon icon-success'
				// });
				Indicator.open('加载中...');
			}
		}
	}
</script>

<style type="text/css"></style>