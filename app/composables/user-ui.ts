export const useUI = () => {
    const isDarkTheme = ref(true);

    const toggleDarkMode = () => {
        if (!document.startViewTransition) {
            executeDarkModeToggle();
            return;
        }

        // Parte de la api de google para realizar cambios visuales sin recargar la pagina (fadein/fadaout)
        document.startViewTransition(executeDarkModeToggle);
    };

    const executeDarkModeToggle = () => {
        isDarkTheme.value = !isDarkTheme.value;
        document.documentElement.classList.toggle('app-dark');
    };

    return {
        isDarkTheme,
        toggleDarkMode
    };
};
