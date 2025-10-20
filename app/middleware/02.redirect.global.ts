export default defineNuxtRouteMiddleware((to, _) => {
    const layoutStore = useLayoutStore();
    const breakpoint = useBreakpoint();

    // Cuando esta en modo movil, al dar click al menu lateral, se cierre automaticamente.
    if (to.path !== '/' && breakpoint.down('sm')) layoutStore.closeSidebar();
});
