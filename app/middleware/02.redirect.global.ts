export default defineNuxtRouteMiddleware((to, _) => {
    const layoutStore = useLayoutStore();
    const breakpoint = useBreakpoint();

    if (to.path !== '/' && breakpoint.down('sm')) layoutStore.closeSidebar();
});
