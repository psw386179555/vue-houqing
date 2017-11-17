import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Frame from '@/components/Frame'

Vue.use(Router)

export default new Router({
	mode:"history"
  ,routes: [
    {
      path: ''
      ,component: Frame
      ,children:[
      	{
      		path:'/'
      		,name:'frame'
      		,component:HelloWorld
      	}
      ]
    }
  ]
})
