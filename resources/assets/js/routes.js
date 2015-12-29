import IndexPage from './components/IndexPage.vue'
import CreatePage from './components/CreatePage.vue'

export default {
    '/': {
        component: IndexPage
    },
    '/create': {
        component: CreatePage
    }
}