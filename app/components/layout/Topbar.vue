<script setup lang="ts">
    const layoutStore = useLayoutStore();
</script>

<template>
    <div id="topbar" class="flex items-center justify-between">
        <Button
            size="small"
            icon="pi pi-bars"
            aria-label="Toggle menu"
            @click="layoutStore.toggleSidebar" />
        <div class="flex justify-center items-center gap-2">
            <LanguageSelector />
            <button
                type="button"
                class="cursor-pointer flex justify-center items-center"
                @click="$router.push('/login')">
                <i class="text-lg! pi pi-sign-out" style="color: #f2f2f2"></i>
            </button>
        </div>
    </div>
</template>
