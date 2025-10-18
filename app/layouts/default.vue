<script setup lang="ts">
    const uiStore = useUiStore();
    const breakpoint = useBreakpoint();
    const componentClass = computed(() => ({
        'diagram-showing': uiStore.isShowingMenuDiagramatico && breakpoint.up('sm'),
        'content-showing': !uiStore.isShowingMenuDiagramatico && breakpoint.up('sm'),
        'sidebar-closed': !uiStore.isSidebarShowing
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
