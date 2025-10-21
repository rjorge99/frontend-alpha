export default defineNuxtRouteMiddleware((to, _) => {
    return true;

    const authStore = useAuthenticationStore();

    if (!authStore.authToken && to.path !== '/login')
        return navigateTo('/login');
    if (authStore.authToken && to.path === '/login') {
        return navigateTo('/');
    }
});
