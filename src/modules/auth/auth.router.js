const routes = [
    {
        path: '/auth',
        redirect: { name: 'AuthLogin' },
        component: () => import('./pages/AuthPage.vue'),
        children: [
            { 
                path: 'login',
                name: 'AuthLogin',
                component: () => import('./pages/AuthLoginPage.vue')
            },
            { 
                path: 'register',
                name: 'AuthRegister',
                component: () => import('./pages/AuthRegisterPage.vue')
            }
        ]
    }
]
export default routes