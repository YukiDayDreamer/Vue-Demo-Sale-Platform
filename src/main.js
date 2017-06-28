import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import AnalysisPage from './pages/detail/analysis'
import CountPage from './pages/detail/count'
import ForecastPage from './pages/detail/forecast'
import PublishPage from './pages/detail/publish'

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: AnalysisPage
				},
				{
					path: 'count',
					component: CountPage
				},
				{
					path: 'forecast',
					component: ForecastPage
				},
				{
					path: 'publish',
					component: PublishPage
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
