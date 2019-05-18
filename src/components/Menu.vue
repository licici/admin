<template>
    <div>
        <a-menu
            :openKeys="openKeys"	
            :defaultSelectedKeys="defaultSelectedKeys"
            mode="inline"
            theme="dark"
            @openChange="onOpenChange"
            >
            <template v-for="(item, index) in routerMap">
                <a-sub-menu v-if="item.children && item.children.length > 0" :key="item.path">
                    <span slot="title">
                        <a-icon :type="item.meta.icon || 'inbox'" />
                        <span>{{item.meta.text}}</span>
                    </span>
                    <a-menu-item
                        v-for="(firstChildren, childrenIndex) in item.children"
                         @click="ssssss(firstChildren.path)"
                        :key="firstChildren.path">
                        {{firstChildren.meta.text}}
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item v-else :key="item.path" @click="ssssss(item.path)">
                    <a-icon :type="item.meta.icon || 'inbox'" />
                    <span>{{item.meta.text}}</span>
                </a-menu-item>
            </template>
        </a-menu>
    </div>
</template>

<script>
import routerMap from '../router/router.config.js'
function getKeyArr () {
    var keyArr = []
    for (let i = 0; i < routerMap.length; i++) {
        keyArr.push(routerMap[i].path)
    }
    return keyArr
}
export default {
    data () {
        return {
            routerMap,
            rootSubmenuKeys: getKeyArr(),
            openKeys: null,
            defaultSelectedKeys: null
        }
    },
    created () {
        var path = this.$route.path
        this.openKeys = [`/${path.split('/')[1]}`]
        this.defaultSelectedKeys = [path]
    },
    methods: {
        onOpenChange (openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : []
            }
        },
        ssssss (str) {
            this.$router.push(str)
        }
    }
}
</script>

<style lang="scss">
ul{
    background: #555;
    li{
        color: #fff;
    }
}
</style>
