import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/items',
		name: 'Results',
		component: () => import('../views/Results.vue')
	},
	{
		path: '/items/:id',
		name: 'Product',
		component: () => import('../views/Product.vue')
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
