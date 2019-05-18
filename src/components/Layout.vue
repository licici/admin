<template>
  <a-layout class="full-screen">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <Menu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="aaa-header">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content class="aaa-body">
        <div style="padding: 20px">
            <a-breadcrumb>
                <a-breadcrumb-item>首页</a-breadcrumb-item>
                <a-breadcrumb-item>商户</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <div style="padding: 0 20px 20px">
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from './Menu.vue'
export default {
  components: {
    Menu
  },
  data () {
    return {
      collapsed: false,
    }
  },
}
</script>
<style lang="scss">
.logo {
  background: #fff;
  margin: 20px;
  height: 50px;
}
.full-screen {
    height: 100%;
    .aaa-header {
      background: #fff;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);       
    }
    .aaa-body {
      color: rgba(0,0,0,.65);
      font-size: 14px;
      background: #f0f2f5;
    }
}
</style>