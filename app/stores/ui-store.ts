export const useUiStore = defineStore(
    'ui',
    () => {
        const isLoading = ref(false);

        const menuItems = ref<any[]>([]);
        const nombreEmpresa = ref('');

        const loadMenuItems = (items: any[]) => {
            menuItems.value = items;
        };

        const setLoading = (loadingStatus: boolean) => {
            isLoading.value = loadingStatus;
        };

        const setNombreEmpresa = (nombre: string) => {
            nombreEmpresa.value = nombre;
        };

        const reset = () => {
            isLoading.value = false;
            menuItems.value = [];
        };

        return {
            isLoading,
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
