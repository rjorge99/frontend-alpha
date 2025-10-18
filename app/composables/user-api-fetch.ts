export const useApiFetch = <T>(request: string, opts?: any): Promise<T> => {
    const config = useRuntimeConfig();
    const headers = useRequestHeaders(['cookie']);

    return $fetch<T>(request, {
        baseURL: config.public.baseURL,
        credentials: 'include',
        headers,
        ...opts
    });
};
