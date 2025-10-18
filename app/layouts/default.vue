<script setup lang="ts">
    const route = useRoute();
    const isShowingMenuDiagramatico = computed(() => route.path === '/');

    const layoutStore = useLayoutStore();
    const componentClass = computed(() => ({
        'diagram-showing': isShowingMenuDiagramatico,
        'content-showing': !isShowingMenuDiagramatico,
        'sidebar-closed': !layoutStore.isSidebarShowing
    }));
</script>

<template>
    <div id="main-site" :class="componentClass">
        <Sidebar />
        <Topbar />
        <MainContent><slot /></MainContent>
        <Footer />
    </div>
</template>
