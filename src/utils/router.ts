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
        path: '/register',
        // @ts-ignore
        component: () => import('../views/RegisterPage.vue'),
    },
    {
        path: '/reset-password',
        // @ts-ignore
        component: () => import('../views/ResetPasswordPage.vue'),
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
