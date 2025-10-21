import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const AlphaPreset = definePreset(Aura, {
    primitive: {
        // alpha: {
        //     50: '#ffffff',
        //     100: '#fefefe',
        //     200: '#f8f8f8',
        //     300: '#f1f1f1',
        //     400: '#e5e5e5',
        //     500: '#cccccc',
        //     600: '#999999',
        //     700: '#666666',
        //     800: '#505050',
        //     900: '#404040',
        //     950: '#2a2a2a'
        // }
    },
    semantic: {
        // primary: {
        //     50: '{indigo.50}',
        //     100: '{indigo.100}',
        //     200: '{indigo.200}',
        //     300: '{indigo.300}',
        //     400: '{indigo.400}',
        //     500: '{indigo.500}',
        //     600: '{indigo.600}',
        //     700: '{indigo.700}',
        //     800: '{indigo.800}',
        //     900: '{indigo.900}',
        //     950: '{indigo.950}'
        // },
        colorScheme: {
            light: {
                // surface: {
                //     0: '#ffffff',
                //     50: '{slate.50}',
                //     100: '{slate.100}',
                //     200: '{slate.200}',
                //     300: '{slate.300}',
                //     400: '{slate.400}',
                //     500: '{slate.500}',
                //     600: '{slate.600}',
                //     700: '{slate.700}',
                //     800: '{slate.800}',
                //     900: '{slate.900}',
                //     950: '{slate.950}'
                // }
            },
            dark: {
                // surface: {
                //     0: '#ffffff',
                //     50: '{alpha.50}',
                //     100: '{alpha.100}',
                //     200: '{alpha.200}',
                //     300: '{alpha.300}',
                //     400: '{alpha.400}',
                //     500: '{alpha.500}',
                //     600: '{alpha.600}',
                //     700: '{alpha.700}',
                //     800: '{alpha.800}',
                //     900: '{alpha.900}',
                //     950: '{alpha.950}'
                // }
            },
        },
    },
    components: {
        button: {
            root: {
                borderRadius: 'calc(infinity * 1px)', // usar atributo rounded
            },
        },
    },
});

export default {
    preset: AlphaPreset,
    options: {
        prefix: 'p',
        darkModeSelector: '.app-dark',
        // cssLayer: {
        //     //todo: Genera flachazos al sobreescribir los estilos, aun al compilar genera el flachazo
        //     name: 'primevue',
        //     order: 'theme, base, primevue'
        // }
    },
};
