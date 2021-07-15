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
import ShowProduct from "./components/ShowProduct";

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
    },
    {
            path:'/show/:id',
            component: ShowProduct
    }
]

const router = new VueRouter({
    routes
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('view-product', require('./components/ViewProduct.vue').default);
Vue.component('view-category',require('./components/ViewCategory.vue').default);
Vue.component('show-product',require('./components/ShowProduct.vue').default);
new Vue({
    el: '#app',
    router
});
