import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import Index from '@/components/Index'
import Found from '@/components/Found'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
	mode:"history"
  ,routes: [
    {
      path: '/'
      ,name:'index'
      ,component: Index           
    },{
      path: '/user'
      ,name:'user'
      ,component: User        
    },{
      path:'/found'
      ,name:'found'
      ,component:Frame
      ,children:[
        {
          path:''
          ,component:Found
        }
      ]
    }
  ]
})
