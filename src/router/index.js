import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import Index from '@/components/Index'
import Found from '@/components/Found'
import User from '@/components/User'
import Repair from '@/components/Repair'

Vue.use(Router)

export default new Router({
	mode:"history"
  ,routes: [
  {
    path: '/'
    ,name:'index'
    ,component: Index           
  },{
    path:''
    ,component:Frame
    ,children:[
      {
        path:'/found'
        ,name:'found'
        ,component:Found
      },{
        path:'/user'
        ,name:'user'
        ,component:User
      }
    ]
  },{
    path:''     
    ,component:Frame
    ,children:[
    {
      path:'/repair'
      ,name:'repair'
      ,component:Repair
    }
    ]
  }
  ]
})
