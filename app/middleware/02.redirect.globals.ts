export default defineNuxtRouteMiddleware((to, from) => {
    const layoutStore = useLayoutStore();

    console.log(to.path);

    if (to.path !== '/') layoutStore.closeSidebar();
});
