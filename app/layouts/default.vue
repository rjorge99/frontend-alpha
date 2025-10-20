<script setup lang="ts">
    const layoutStore = useLayoutStore();
    const router = useRoute();

    const componentClass = computed(() => ({
        'sidebar-closed': !layoutStore.isSidebarShowing,
        'outside-home': router.path !== '/'
    }));
</script>

<template>
    <div id="main-site" :class="componentClass">
        <Topbar />
        <div id="layout-lower-container">
            <Sidebar />
            <div id="lower-right-container">
                <MainContent><slot /></MainContent>
                <Footer />
            </div>
        </div>
    </div>
</template>
