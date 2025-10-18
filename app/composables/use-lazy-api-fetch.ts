export const useApiLazyFetch: typeof useFetch = (request: string, opts?: any) => {
    const config = useRuntimeConfig();
    const headers = useRequestHeaders(['cookie']);

    return useLazyFetch(request, {
        baseURL: config.public.baseURL,
        credentials: 'include',
        headers,
        ...opts
    });
};
