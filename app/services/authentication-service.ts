import type { LoginResponse } from '~/types/login';

export const authService = {
    async login(
        username: string,
        password: string,
        liberarSesion: boolean,
        empresaSeleccioada: object,
    ): Promise<LoginResponse> {
        const uiStore = useUiStore();
        const config = useRuntimeConfig();

        try {
            uiStore.setLoading(true); // todo: Posibilidad de hacer un wraper sobre $fetch con Loading
            const data = await useApiFetch<LoginResponse>(
                `${config.public.baseURL}api/authentication/login`,
                {
                    method: 'POST',
                    body: {
                        username,
                        password,
                        liberarSesion,
                        empresaSeleccionada: JSON.stringify([empresaSeleccioada]),
                    },
                },
            );

            uiStore.setLoading(false);

            return data;
        }
        catch (err: unknown) {
            uiStore.setLoading(false);
            throw err;
        }
    },
    logout() {
        const config = useRuntimeConfig();
        useApiFetch(`${config.public.baseURL}api/authentication/logout`);
    },
};
