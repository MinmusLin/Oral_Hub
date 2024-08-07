import {createRouter, RouteRecordRaw, Router, createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/404',
        // @ts-ignore
        component: () => import('../views/NotFoundPage.vue'),
    },
    {
        path: '/login',
        // @ts-ignore
        component: () => import('../views/LoginPage.vue'),
    },
    {
        path: '/home',
        // @ts-ignore
        component: () => import('../views/HomePage.vue'),
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
