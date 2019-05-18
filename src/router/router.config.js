import Index from '@/views/provider/Index.vue'
import Layout from '@/components/Layout.vue'

export default [{
  path: '/provider',
  component: Layout,
  meta: {
    icon: 'bars',
    text: '服务商'
  },
  redirect: '/provider/index',
  children: [{
    path: '/provider/index',
    name: 'Index',
    meta: {
      text: '服务商列表'
    },
    component: Index
  }, {
    path: '/provider/p2',
    meta: {
      text: '服务商p2'
    },
    component: () =>
            import('@/views/provider/p2.vue')
  }, {
    path: '/provider/p3',
    meta: {
      text: '服务商p3'
    },
    component: () =>
            import('@/views/provider/p3.vue')
  }]
}, {
  path: '/custom',
  component: Layout,
  redirect: '/custom/c1',
  meta: {
    icon: 'credit-card',
    text: '会员中心'
  },
  children: [{
    path: '/custom/c1',
    meta: {
      text: '会员中心c1'
    },
    component: () =>
            import('@/views/custom/c1.vue')
  }, {
    path: '/custom/c2',
    meta: {
      text: '会员中心c2'
    },
    component: () =>
            import('@/views/custom/c2.vue')
  }]
}, {
  path: '/setting',
  component: Layout,
  meta: {
    text: '设置'
  }
}]
