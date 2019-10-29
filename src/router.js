import VueRouter from 'vue-router'


//导入对应的路由组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/Home' },
    { path: '/Home', component: HomeContainer },
    { path: '/Member', component: MemberContainer },
    { path: '/Shopcar', component: ShopcarContainer },
    { path: '/Search', component: SearchContainer },
  ],
  linkActiveClass: 'mui-active'// 覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

// 把路由对象暴露出去
export default router