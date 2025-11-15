<script setup lang="ts">
const layoutStore = useLayoutStore();
const appearence = useAppearence();
const router = useRoute();

const componentClass = computed(() => {
    return {
        'sidebar-closed': !layoutStore.isSidebarShowing,
        'outside-home': router.path !== '/',
        'lang-changing': appearence.isLanguageChanging.value,
    };
});
</script>

<template>
    <div id="main-site" :class="componentClass">
        <Topbar />
        <div id="layout-lower-container">
            <Sidebar />
            <div id="lower-right-container">
                <MainContent><slot></slot></MainContent>
                <Footer />
            </div>
        </div>
    </div>
</template>
