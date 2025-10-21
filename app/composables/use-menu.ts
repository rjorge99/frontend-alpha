const menus = [
    {
        label: 'dashboard',
        icon: 'pi pi-home',
        to: '/',
    },
    { label: 'facturas', icon: 'pi pi-file', to: '/facturas' },
    { label: 'alpha', icon: 'pi pi-file', to: '/alpha' },
];

export function useMenu() {
    const { t } = useI18n();
    // const auth = useAuthorizationStore(); // para tener los permisos cargados al momento de login

    const menuItems = computed(() => {
        const items: any[] = [];

        // Manejo para en base a un ciclo y del menu que se tiene
        for (const menu of menus)
            items.push({ label: t(`menu.${menu.label}`), icon: menu.icon, to: menu.to });

        return [
            {
                label: t('menu.home'),
                items,
            },
        ];
    });

    return { menuItems };
}
