import { authService } from '~/services/authentication-service';

export const useAuthenticationStore = defineStore(
    'authentication',
    () => {
        const authorizationStore = useAuthorizationStore();
        const uiStore = useUiStore();
        const authToken = ref('');

        const login = async (
            username: string,
            password: string,
            liberarSesion: boolean,
            empresaSeleccionada: object
        ) => {
            const data = await authService.login(
                username,
                password,
                liberarSesion,
                empresaSeleccionada
            );

            authToken.value = data.token;
            authorizationStore.setPermisosUsuario(data.permisos);
            uiStore.setNombreEmpresa(data.nombreEmpresa);
            await navigateTo('/');
        };

        const logout = async () => {
            await authService.logout();

            uiStore.reset();
            authToken.value = '';

            await navigateTo('/login');
        };

        return {
            authToken,
            login,
            logout
        };
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.cookies()
        }
    }
);
