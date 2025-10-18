export const useUiStore = defineStore(
    'ui',
    () => {
        const route = useRoute();

        const isGlobalLoading = ref(false);
        const isShowingMenuDiagramatico = computed(() => route.path === '/');
        const menuItems = ref<any[]>([]);
        const nombreEmpresa = ref('');
        const isSidebarShowing = ref(true);

        const loadMenuItems = (items: any[]) => {
            menuItems.value = items;
        };

        const setLoading = (isLoading: boolean) => {
            isGlobalLoading.value = isLoading;
        };

        const setNombreEmpresa = (nombre: string) => {
            nombreEmpresa.value = nombre;
        };

        const reset = () => {
            isGlobalLoading.value = false;
            menuItems.value = [];
        };

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
            openSidebar,
            isShowingMenuDiagramatico,

            isGlobalLoading,
            menuItems,
            nombreEmpresa,
            setLoading,
            loadMenuItems,
            setNombreEmpresa,
            reset
        };
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.sessionStorage()
        }
    }
);
