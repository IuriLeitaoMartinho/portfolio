import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

// Hash history keeps the existing https://…/portfolio/#/… links working on GitHub Pages.
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Root', component: () => import('@/views/AboutView.vue') },
  { path: '/resume', name: 'Resume', component: () => import('@/views/ResumeView.vue') },
  { path: '/game-projects', name: 'Game Projects', component: () => import('@/views/GameProjectsView.vue') },
  { path: '/other-projects', name: 'Other Projects', component: () => import('@/views/OtherProjectsView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/ContactView.vue') },
  { path: '/404', name: 'NotFound', component: () => import('@/views/NotFoundView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
