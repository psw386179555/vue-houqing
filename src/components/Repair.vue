<template>
	<div id="repair">
		<mt-navbar v-model="selected" fixed>
		  <mt-tab-item id="1">维修广场</mt-tab-item>
		  <mt-tab-item id="2">我的记录</mt-tab-item>
		  <mt-tab-item id="3">我要维修</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <div v-for="item in allData" :key="item.id">
		    	<router-link to="repair" class="listsBox">
		    		<div class="imgBox"><img :src="item.headimg"></div>
		    		<div class="contentBox">
		    			<div class="listName">{{item.name}}<span>{{item.type}}</span></div>
		    			<div class="listContent">{{item.repairContent}}</div>
		    			<div class="listOther">
		    				<span class="time">{{item.create_time}}</span>
		    				<span class="dataStatus">{{item.repairStatus}}</span>
		    				<span class="orderOne">{{item.orderOne}}</span>
		    			</div>
		    		</div>
		    	</router-link>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		     <div v-for="item in myData" :key="item.id">
		    	<router-link to="repair" class="listsBox">
		    		<div class="imgBox"><img :src="item.headimg"></div>
		    		<div class="contentBox">
		    			<div class="listName">{{item.name}}<span>{{item.type}}</span></div>
		    			<div class="listContent">{{item.repairContent}}</div>
		    			<div class="listOther">
		    				<span class="time">{{item.create_time}}</span>
		    				<span class="dataStatus">{{item.repairStatus}}</span>
		    				<span class="orderOne">{{item.orderOne}}</span>
		    			</div>
		    		</div>
		    	</router-link>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">		  		
		  		<mt-popup
		  		  :slots="slots"
				  v-model="popupVisible1"
				  popup-transition="popup-fade"
				  position="bottom">
				  <mt-picker :slots="slots" value-key='name' :showToolbar='true' :visibleItemCount=5 @change="onValuesChange" :itemHeight=60><div class="toolBtn"><mt-button type="default" size="small" @click="closePop1">取消</mt-button><mt-button type="default" size="small" @click="confirmPop1">确定</mt-button></div></mt-picker>
				</mt-popup>

				<div @click="choose"><mt-field label="报修区域" type="none" placeholder="请选择" v-model="data.address" disabled></mt-field></div>   
		  		<mt-field label="用户名" placeholder="请输入用户名" type="text" v-model="data.username"></mt-field>
				<mt-field label="房间号" placeholder="请输入房间号" type="number" v-model="data.room"></mt-field>			
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script type="text/javascript">

	import myaddress from '../../static/address3.json'

	import { Toast } from 'mint-ui';

	import axios from 'axios';

	export default{
		name:'Repair'
		,data:function(){
			return{
				popupVisible1:false
				,slots: [
			        {
			          flex: 1,
			          values: Object.keys(myaddress),
			          className: 'slot1', 
			          defaultIndex:3,
			          textAlign: 'center'
			        }, {
			          divider: true,
			          content: '-',
			          className: 'slot2'
			        }, {
			          flex: 1,
			          values: [],
			          className: 'slot3',
			          defaultIndex:2,
			          textAlign: 'center'
			        }, {
			          divider: true,
			          content: '-',
			          className: 'slot4'
			        }, {
			          flex: 1,
			          values: [],
			          className: 'slot5',
			          defaultIndex:2,
			          textAlign: 'center'
			        }
			      ]
				,selected:'3'
				,myAddressProvince:''
        		,myAddressCity:''
        		,myAddresscounty:''
				,data:{
					username:''
					,address:''
					,room:''
				}			
				,allData:[
					{name:'老王',headimg:'http://h.hiphotos.baidu.com/image/h%3D300/sign=3fde983d963df8dcb93d8991fd1072bf/aec379310a55b319a4d514bf4aa98226cefc17cf.jpg',repairContent:'灯坏了，请速来秀',type:'学生公寓 C区 11栋',create_time:'08-23 15:20:20',repairStatus:'0',orderOne:'黄师傅'}
					,{name:'老周',headimg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3594734117,4183631716&fm=27&gp=0.jpg',repairContent:'厕所dsfdsfdsf 发个梵蒂冈各回各家韩国的风格大方规定发给漏水了，速来秀',type:'东山美食城 营业部',create_time:'05-06 12:20:30',repairStatus:'1',orderOne:'王师傅'}
					,{name:'老刘',headimg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2624173346,3069288889&fm=27&gp=0.jpg',repairContent:'门锁坏',type:'行政楼 二号楼',create_time:'09-05 13:20:40',repairStatus:'2',orderOne:'李师傅'}
				]
				,myData:[
					{name:'我',headimg:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=128308122,770382628&fm=27&gp=0.jpg',repairContent:'灯坏了，请速来秀',type:'学生公寓 C区 11栋',create_time:'08-23 15:20:20',repairStatus:'0',orderOne:'黄师傅'}
					,{name:'我',headimg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3594734117,4183631716&fm=27&gp=0.jpg',repairContent:'厕所漏水了，速来秀',type:'东山美食城 营业部',create_time:'05-06 12:20:30',repairStatus:'1',orderOne:'王师傅'}
					,{name:'我',headimg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2624173346,3069288889&fm=27&gp=0.jpg',repairContent:'门锁坏',type:'行政楼 二号楼',create_time:'09-05 13:20:40',repairStatus:'2',orderOne:'李师傅'}
				]
			}
		}
		,beforeCreate(){
		}
		,mounted(){			
		}
		,watch:{
			 
		}
		,methods:{
			onValuesChange(picker, values) {

	    		if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
		          picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
		          picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
		          this.myAddressProvince = values[0];
		          this.myAddressCity = values[1];
		          this.myAddresscounty = values[2];
		          this.data.address = values[0]+' '+values[1]+' '+values[2]
		        }

					

		    }
		    ,choose(){
		    	this.popupVisible1 = true
		    }
		    ,closePop1(){
		    	this.popupVisible1 = false
		    	this.data.address =""
		    }
		    ,confirmPop1(){
		    	console.log(this.myAddressCity);
		    	if (this.myAddressCity !='' && this.myAddresscounty!='') {
		    		this.popupVisible1 = false
		    	}else{
		    		Toast({
					  message: '请选择完整地址！',
					  position: 'top',
					  duration: 3000
					});
		    	}		    	

		    }
		}
	}
</script>

<style type="text/css" scoped>
	.mint-navbar{
		top: 40px!important;
	}
	.mint-tab-container{
		padding-top: 50px;
	}
	.mint-navbar .mint-tab-item.is-selected {
   		border-bottom: 3px solid #26a2ff;
   		color: #26a2ff;
	    margin-bottom: 0;
	}
	.listsBox{
		padding-top: 10px; 
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #e9e9e9;
		padding-bottom: 10px;
	}
	.imgBox{
		width: 50px;
		padding: 0 10px;

	}
	.contentBox{
		width: 100%;
	}
	.imgBox img{
		width: 50px;
		height: 50px;
	}
	.listName{
		padding-bottom: 5px;
		color: #4A708B;
		font-weight: bold;
		font-size: 16px;
	}
	.listName span{
		float: right;
		margin-right: 10px;
		color: #888;
		font-size: 12px;
		font-weight: normal;
	}
	.listContent{
		line-height: 26px;
		padding-right: 10px;
	}
	.listOther{
		width: 100%;
		margin-top: 5px;
		display: flex;
		flex-direction: row;
	}
	.listOther span.time{
		flex: 2;
		
	}
	.listOther span.dataStatus{
		flex: 2;
	}
	.listOther span.orderOne{
		flex: 1;
	}
	.listOther span{		
		color: #888;
		font-size: 12px;
		text-align: left;
	}
	.mint-popup{
		width: 100vw;
	}
	
	.toolBtn{
		padding:5px; 
	}
	.toolBtn button:first-child{
		float: left;
		margin-left: 10px;
	}
	.toolBtn button:last-child{
		float: right;
		margin-right: 10px;
	}
	.picker-item{
		font-size: 18px!important;	
	}
	.mint-toast{
		z-index: 5000!important;
	}
</style>