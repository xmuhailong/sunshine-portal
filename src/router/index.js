import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        name: '主页',
        iconCls: 'el-icon-menu'
    //     path: '/',
    //     component: Home,
    //     name: '主页',
    //     iconCls: 'el-icon-menu',
    //     // 子路由
    //     children: [
    //         {
    //             path: "phone",
    //             name: '手机',
    //             component: Phone
    //         },
    //         {
    //             path: "tablet",
    //             name: '平板',
    //             component: Tablet
    //         },
    //         {
    //             path: "computer",
    //             name: '电脑',
    //             component: Computer
    //         }
    //     ]
    // },
    // {
    //     path: '/',
    //     name: 'Slot测试',
    //     leaf: true,//只有一个节点
    //     iconCls: 'el-icon-menu',
    //     component: Home,
    //     children: [
    //         {
    //             path: "slot-test",
    //             name: 'Slot测试',
    //             component: SlotTest
    //         }
    //     ]
    // },
    // {
    //     path: '/',
    //     name: '测试笔记',
    //     iconCls: 'el-icon-menu',
    //     leaf: true,//只有一个节点
    //     component: Home,
    //     children: [
    //         {
    //             path: "my-test",
    //             name: '测试笔记',
    //             component: HelloWorld
    //         }
    //     ]
    // },
    // /*新增user路径，配置了动态的id*/
    // {
    //     path: "/",
    //     name: '用户动态绑定',
    //     iconCls: 'el-icon-menu',
    //     component: Home,
    //     leaf: true,//只有一个节点
    //     children: [
    //         {
    //             path: "user",
    //             name: '用户动态绑定',
    //             component: User
    //         }
    //     ]
    // },
    // {
    //     path: '/',
    //     name: 'Element测试',
    //     iconCls: 'el-icon-menu',
    //     component: Home,
    //     children: [
    //         {
    //             path: 'container',
    //             name: 'Container测试',
    //             component: Container
    //         },
    //         {
    //             path: 'container-demo',
    //             name: '具体案例',
    //             component: ContainerDemo
    //         }
    //     ]
    // },
    // {
    //     path: '/',
    //     name: '图片上传',
    //     iconCls: 'el-icon-menu',
    //     component: Home,
    //     leaf: true,
    //     children: [
    //         {
    //             path: 'photo-upload',
    //             name: '图片上传',
    //             component: PhotoUpload
    //         }
    //     ]
    }
]

const router = new VueRouter({
    routes // routes: routes 的简写
})

export default router;

