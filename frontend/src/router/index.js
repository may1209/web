import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import DocumentPage from '../components/DocumentPage.vue'
import AnnouncementPage from '../components/AnnouncementPage.vue'
import FAQs from '../components/FAQsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: {
      name: 'DocumentPage'
    },
      children: [
        { alias: '', path: '/DocumentPage', name: 'DocumentPage', component: DocumentPage },
        { path: '/AnnouncementPage', name: 'AnnouncementPage', component: AnnouncementPage },
        { path: '/FAQsPage', name: 'FAQsPage', component: FAQs },
      ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: LogIn,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
