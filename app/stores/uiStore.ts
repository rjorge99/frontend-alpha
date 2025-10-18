export const useUiStore = defineStore(
    'ui',
    () => {
        const isGlobalLoading = ref(false);
        const menuItems = ref<any[]>([]);
        const nombreEmpresa = ref('');

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

        return {
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
