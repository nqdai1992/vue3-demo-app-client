import { 
    createRouter, 
    createWebHashHistory 
} from 'vue-router'
import AuthRoute from './modules/auth/auth.router'

const createRoutes = initRoute => ({
    use: routes => createRoutes(initRoute.concat(routes)),
    getValue: () => initRoute
})

const routes = createRoutes([])
                .use(AuthRoute)
                .getValue()

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router