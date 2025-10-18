export const useLayoutStore = defineStore(
    'layout',
    () => {
        const isSidebarShowing = ref(true);

        const toggleSidebar = () => {
            isSidebarShowing.value = !isSidebarShowing.value;
        };

        const closeSidebar = () => {
            isSidebarShowing.value = false;
        };

        const openSidebar = () => {
            isSidebarShowing.value = true;
        };

        return {
            isSidebarShowing,
            toggleSidebar,
            closeSidebar,
            openSidebar
        };
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.cookies()
        }
    }
);
