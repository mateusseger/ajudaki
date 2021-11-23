import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import MyAccount from '@/pages/MyAccount'
import OfferHelp from '@/pages/OfferHelp'
import RequestHelp from '@/pages/RequestHelp'
import Search from '@/pages/Search'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/Login',
		name: 'Login',
		component: Login
	},
	{
		path: '/MyAccount',
		name: 'MyAccount',
		component: MyAccount
	},
	{
		path: '/OfferHelp',
		name: 'OfferHelp',
		component: OfferHelp
	},
	{
		path: '/RequestHelp',
		name: 'RequestHelp',
		component: RequestHelp
	},
	{
		path: '/Search',
		name: 'Search',
		component: Search
	}
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router