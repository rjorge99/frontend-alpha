export function useTheme() {
    const themeCookie = useCookie('alpha-theme', { default: () => 'alpha' });

    const setTheme = (themeName: string) => {
        const html = document.documentElement;
        const themeClassPrefix = 'app-';

        // Quitar clases anteriores que empiecen con 'app-'
        html.classList.forEach((cls) => {
            if (cls.startsWith(themeClassPrefix)) {
                html.classList.remove(cls);
            }
        });

        console.log('them');
        if (themeName !== 'alpha') {
            // Si tema NO es alpha, agregar clase y link CSS
            html.classList.add(`${themeClassPrefix}${themeName}`);

            const id = 'theme-css';
            let link = document.getElementById(id) as HTMLLinkElement | null;
            if (link) {
                link.href = `/themes/${themeName}.css`;
            } else {
                link = document.createElement('link');
                link.id = id;
                link.rel = 'stylesheet';
                link.href = `/themes/${themeName}.css`;
                document.head.appendChild(link);
            }
        } else {
            // Si tema es alpha, sólo quitar clases y eliminar link si existe
            // (No agregamos clase ni link porque es el tema base)
            const link = document.getElementById('theme-css');
            if (link) {
                link.parentNode?.removeChild(link);
            }
        }

        // Guardar en cookie para persistencia
        themeCookie.value = themeName;
    };

    // Al montar, establecer el tema si no está
    const initTheme = () => {
        if (import.meta.client) {
            setTheme(themeCookie.value);
        }
    };

    return {
        currentTheme: themeCookie,
        setTheme,
        initTheme
    };
}
