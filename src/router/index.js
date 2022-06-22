import LayoutAuth from '@/layouts/LayoutAuth'
import LayoutDefault from '@/layouts/LayoutDefault'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [{
        path: '/login',
        component: LayoutAuth,
        children: [
            { path: '', name: 'login-view', component: LoginView }
        ]
    },
    {
        path: '/',
        component: LayoutDefault,
        children: [
            { path: '', name: 'home-view', component: HomeView }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router