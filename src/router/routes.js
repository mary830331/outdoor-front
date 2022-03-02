import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '戶外社群'
    },
    children: [
      { path: '', component: () => import('pages/Index') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout-01.vue'),
    meta: {
      title: '揪團 | 戶外社群'
    },
    children: [
      { path: '/Content', component: () => import('src/pages/Content.vue') },
      { path: '/Group', component: () => import('pages/Group.vue') },
      { path: '/Groupproduct/:id', component: () => import('../pages/GroupProduct.vue') },
      { path: '/Forum', component: () => import('pages/Forum.vue') },
      { path: '/Aboutme', component: () => import('pages/Aboutme.vue') }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('layouts/MainLayout-01.vue'),
    children: [
      {
        path: '/admin',
        name: 'AdminHome',
        component: () => import('../pages/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: '管理 | 購物網'
        }
      },
      {
        path: '/products',
        name: 'AdminProducts',
        component: () => import('../pages/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '活動管理 | 購物網'
        }
      },
      {
        path: '/addgroup',
        name: 'AdminAddGroup',
        component: () => import('../pages/AdminAddGroup.vue'),
        meta: {
          login: true,
          admin: true,
          title: '訂單管理 | 購物網'
        }
      },
      {
        path: '/article',
        name: 'AdminArticle',
        component: () => import('../pages/AdminArticle.vue'),
        meta: {
          login: true,
          admin: true,
          title: '文章管理 | 購物網'
        }
      },
      {
        path: '/friend',
        name: 'AdminFriend',
        component: () => import('../pages/AdminFriend.vue'),
        meta: {
          login: true,
          admin: true,
          title: '好友管理 | 購物網'
        }
      },
      {
        path: '/personalfile',
        name: 'AdminPersonalFile',
        component: () => import('../pages/AdminPersonalFile.vue'),
        meta: {
          login: true,
          admin: true,
          title: '好友管理 | 購物網'
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default routes
