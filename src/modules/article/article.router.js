const routes = [
    {
        path: '/article/:id',
        component: () => import('./pages/ArticlePage'),
    }
]
export default routes