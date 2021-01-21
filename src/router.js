import { 
    createRouter, 
    createWebHashHistory 
} from 'vue-router'
import AuthRoute from './modules/auth/auth.router'
import ArticlesRoute from './modules/articles/articles.router'
import ArticleRoute from './modules/article/article.router'

const createRoutes = initRoute => ({
    use: routes => createRoutes(initRoute.concat(routes)),
    getValue: () => initRoute
})


const userRoutes = createRoutes([])
                    .use(AuthRoute)
                    .use(ArticlesRoute)
                    .use(ArticleRoute)
                    .getValue()

const defaulRoutes = [
    {   
        path: '/',
        redirect: '/articles',
        component: () => import('./layout/Default'),
        children: userRoutes
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: defaulRoutes
})

export default router