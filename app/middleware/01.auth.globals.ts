export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthenticationStore();

    if (!authStore.authToken && to.path !== '/login') return navigateTo('/login');
    if (authStore.authToken && to.path === '/login') {
        return navigateTo('/');
    }
});
