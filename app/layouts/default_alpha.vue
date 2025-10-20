<script setup lang="ts">
    const layoutStore = useLayoutStore();
    const router = useRoute();
    const { locale } = useI18n();

    const componentClass = computed(() => ({
        'sidebar-closed': !layoutStore.isSidebarShowing,
        'outside-home': router.path !== '/'
    }));
</script>

<template>
    <Transition name="i18n-fade" mode="out-in">
        <div :key="locale" id="main-site" :class="componentClass">
            <Topbar />
            <div id="layout-lower-container">
                <Sidebar />
                <div id="lower-right-container">
                    <MainContent><slot /></MainContent>
                    <Footer />
                </div>
            </div>
        </div>
    </Transition>
</template>
