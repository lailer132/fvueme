# Levine 商城

## 制作首页APP组件
1. 完成Header区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的Tabbar区域，使用的是 MUI 的 Tabbar.html
    + 在制作中 MUI 有些扩展图标需要额外插入
    + 先把扩展图标css样式拷贝到项目中，再拷贝扩展字体库tff到项目中
    + 样式继承基类格式 mui-icon mui-icon-extra mui-icon-extra-cart
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造Tabber 为 router-link

## 设置路由高亮

## 点击 tabber 中的路由链接，展示对应的路由组件

## 制作首页轮播图

## 加载首页轮播图数据
1. 获取数据，如何获取数据？ 使用 **vue-resource** (npm i vue-resource -S,装完包须导入)
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造mui九宫格