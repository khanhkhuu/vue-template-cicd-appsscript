import { createRouter, createWebHashHistory } from "vue-router";
import IndexPage from '@/pages/IndexPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import Page1 from '@/pages/Page1.vue';
import Page2 from '@/pages/Page2.vue';
import Page3 from '@/pages/Page3.vue';

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: "/", component: IndexPage },
    { path: "/page1", component: Page1 },
    { path: "/page2", component: Page2 },
    { path: "/page3", component: Page3 },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from) => {
    console.log({
        to,
        from,
    })
});

google.script.history.setChangeHandler(function (e) {
    console.log(e.state);
    console.log(e.location.parameters);
    console.log(e.location.hash);
    
    // Adjust web app UI to match popped state here...
});

export { router };