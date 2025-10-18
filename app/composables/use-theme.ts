export const useTheme = () => {
    const themeCookie = useCookie('alpha-theme', { default: () => 'alpha' });

    const setTheme = (themeName: string) => {
        const applyTheme = () => {
            const html = document.documentElement;
            const themeClassPrefix = 'app-';

            // Quitar clases anteriores que empiecen con 'app-'
            html.classList.forEach((cls) => {
                if (cls.startsWith(themeClassPrefix)) html.classList.remove(cls);
            });

            // Quitar link de html
            const linkToRemove = document.getElementById('theme-css');
            if (linkToRemove) linkToRemove.parentNode?.removeChild(linkToRemove);

            // Agregar clase correcta
            html.classList.add(`${themeClassPrefix}${themeName}`);

            if (themeName !== 'alpha') {
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
            }

            // Guardar en cookie para persistencia
            themeCookie.value = themeName;
        };

        if (!document.startViewTransition) applyTheme();
        else document.startViewTransition(applyTheme);
    };

    return {
        currentTheme: themeCookie,
        setTheme
    };
};
