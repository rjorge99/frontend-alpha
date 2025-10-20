import tailwindcss from '@tailwindcss/vite';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    alias: {},
    vite: {
        plugins: [tailwindcss()]
    },
    modules: [
        '@primevue/nuxt-module',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/i18n'
    ],
    css: ['assets/css/primevuelayout/layout.scss', 'assets/css/tailwind.css'],
    primevue: {
        importTheme: { from: '~/themes/alpha-theme.js' },
        autoImport: false,
        components: {
            include: [
                'Accordion',
                'AccordionContent',
                'AccordionHeader',
                'AccordionPanel',
                'Button',
                'Card',
                'Column',
                'ConfirmDialog',
                'DataTable',
                'InputText',
                'Password',
                'Select',
                'SelectButton',
                'Toast',
                'InputGroupAddon',
                'InputGroup'
            ]
        }
    },
    i18n: {
        defaultLocale: 'es',
        strategy: 'no_prefix',
        locales: [
            {
                code: 'es',
                name: 'Spanish',
                file: 'es.json'
            },
            {
                code: 'en',
                name: 'English',
                file: 'en.json'
            }
        ]
    },
    piniaPluginPersistedstate: {
        key: 'alpha-%id'
    }
});
