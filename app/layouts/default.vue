<script setup lang="ts">
    const layoutStore = useLayoutStore();

    const componentClass = computed(() => ({
        'sidebar-closed': !layoutStore.isSidebarShowing
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
