export default defineNuxtPlugin((_) => {
    const themeCookie = useCookie('alpha-theme', { default: () => 'alpha' });

    // Injectar clase en <html>
    useHead({
        htmlAttrs: {
            class: `app-${themeCookie.value}`,
        },
        link:
            themeCookie.value !== 'alpha'
                ? [
                        {
                            id: 'theme-css',
                            rel: 'stylesheet',
                            href: `/themes/${themeCookie.value}.css`,
                        },
                    ]
                : [],
    });
});
