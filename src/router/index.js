import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import ViewMaterials from "@/views/materials/ViewMaterials.vue";
import ViewProjects from "@/views/projects/ViewProjects.vue";
import ViewStandards from "@/views/standards/ViewStandards.vue";
import ViewSubObjects from "@/views/subObjects/ViewSubObjects.vue";
import ViewWorks from "@/views/works/ViewWorks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'viewProjects',
      component: ViewProjects
    },
    {
      path: '/addProject',
      name: 'addProject',
      component: () => import('../views/projects/AddProject.vue')
    },
    {
      path: '/editProject/:id',
      name: 'editProject',
      component: () => import('../views/projects/UpdateProject.vue')
    },
    {
      path: '/materials',
      name: 'viewMaterials',
      component: ViewMaterials
    },
    {
      path: '/addMaterial',
      name: 'addMaterial',
      component: () => import('../views/materials/AddMaterial.vue')
    },
    {
      path: '/editMaterial/:id',
      name: 'editMaterial',
      component: () => import('../views/materials/UpdateMaterial.vue')
    },
    {
      path: '/standards',
      name: 'viewStandards',
      component: ViewStandards
    },
    {
      path: '/addStandard',
      name: 'addStandard',
      component: () => import('../views/standards/AddStandard.vue')
    },
    {
      path: '/editStandard/:id',
      name: 'editStandard',
      component: () => import('../views/standards/UpdateStandard.vue')
    },
    {
      path: '/subObjects',
      name: 'viewSubObjects',
      component: ViewSubObjects
    },
    {
      path: '/addSubObject',
      name: 'addSubObject',
      component: () => import('../views/subObjects/AddSubObject.vue')
    },
    {
      path: '/editSubObject/:id',
      name: 'editSubObject',
      component: () => import('../views/subObjects/UpdateSubObject.vue')
    },
    {
      path: '/works',
      name: 'viewWorks',
      component: ViewWorks
    },
    {
      path: '/addWork',
      name: 'addWork',
      component: () => import('../views/works/AddWork.vue')
    },
    {
      path: '/editWork/:id',
      name: 'editWork',
      component: () => import('../views/works/UpdateWork.vue')
    }
  ]
})

// router.addRoute({ path: '/materials', component: ViewMaterials })

export default router
