<script setup lang="ts">
    const uiStore = useUiStore();
</script>

<template>
    <div id="sidebar">
        <div id="sidebar-menu">
            <NuxtLink to="detalle">Detalle</NuxtLink>
        </div>
        <SidebarFooter />
    </div>
</template>
