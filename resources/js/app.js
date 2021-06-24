// import Vue from 'vue';
//
// require('./bootstrap');
//
// window.Vue = require('vue');
// import Form  from "vform";
// import VueRouter from 'vue-router'
// import ViewProduct from "./components/ViewProduct";
//
// window.Form = Form;
//
// Vue.use(VueRouter)
//
// let routes = [
//     { path: '/dashboard', component: require('./components/Dashboard.vue').default },
//     { path: '/users',component:require('./components/Users.vue').default},
//     { path: '/product',component:require('./components/Product.vue').default},
//     { path: '/category',component:require('./components/Category.vue').default},
//     { path: '/ShowProduct',component:ViewProduct},
//
// ]
//
// const router = new VueRouter({
//     routes
// })
//
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('view-product', require('./components/ViewProduct.vue').default);
//
// const app = new Vue({
//     el: '#app',
//     router
// });

import ViewCategory from "./components/ViewCategory";

require('./bootstrap');
import Vue from 'vue';
window.Vue = Vue;
import Form  from "vform";
import VueRouter from 'vue-router';
window.Form = Form;
Vue.use(VueRouter);

import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Product from './components/Product';
import Category from './components/Category';
import ViewProduct from './components/ViewProduct'
import ExampleComponent from "./components/ExampleComponent";

let routes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/category',
        component:Category
    },
    {
        path: '/show-products',
        component:ViewProduct
    },
    {
        path: '/show-category',
        component: ViewCategory
    },
    {
        path: '/',
        component: ExampleComponent
    }
]

const router = new VueRouter({
    routes
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('view-product', require('./components/ViewProduct.vue').default);
Vue.component('view-category',require('./components/ViewCategory.vue').default);

new Vue({
    el: '#app',
    router
});
