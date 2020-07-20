import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import userinfo from '@/views/userinfo.vue'
import useredit from '@/views/useredit.vue'
import home from '@/views/home.vue'
import article from '@/views/article.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect:'/login'
	},
	{
		path: '/register',
		name: 'register',
		component: register
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/userinfo',
		name: 'userinfo',
		component: userinfo
	},
	{
		path: '/useredit',
		name: 'useredit',
		component: useredit
	},
	{
		path: '/home',
		name: 'home',
		component: home
	},
	{
		path: '/article/:id',
		name: 'article',
		component: article
	}

]

const router = new VueRouter({
	mode: 'history',
	routes
})


//导航守卫
router.beforeEach((to, from, next) => {
	if(to.name =='login' || to.name =='register'){
		next()
	}else{
		if(localStorage.getItem('token') && localStorage.getItem('id')){
			next()
		}else{
			router.push('/login')
		}
	}

})

export default router
