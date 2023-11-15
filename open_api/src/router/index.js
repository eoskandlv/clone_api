import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/PageGuard.vue"),
        children: [
            {
                path: "index",
                name: "index",
                component: () => import("@/views/Index.vue"),
            },   
            {
                path: "guide",
                name: "guide",
                component: () => import("@/views/GuidePage.vue"),
            },   
        ]
    },
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;
