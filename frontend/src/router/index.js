import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
     name:"Dashboard",
     path: "/",
     component: () => import('@/views/Dashboard.vue'),
     children: [
      {
        name:"MyFiles",
        path: "/my-files",
        component: () => import('@/views/MyFiles.vue'),
       }
     ]
   },
   
  ]
})

export default router
