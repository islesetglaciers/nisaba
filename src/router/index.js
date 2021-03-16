import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import APropos from '../views/APropos.vue'
import AjouterOeuvre from '../views/AjouterOeuvre.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/a-propos',
    name: 'À Propos',
    component: APropos
  },
  {
    path: '/ajouter',
    name: 'Ajouter Oeuvre',
    component: AjouterOeuvre
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
