<script setup>
const uiStore = useUiStore();
</script>

<template>
    <ClientOnly>
        <Transition name="fade-slide">
            <ul v-if="uiStore.menuItems.length" class="layout-menu">
                <template v-for="(item, i) in uiStore.menuItems" :key="item">
                    <AppMenuItem v-if="!item.separator" :item="item" :index="i"></AppMenuItem>
                    <li v-if="item.separator" class="menu-separator"></li>
                </template>
            </ul>
        </Transition>
    </ClientOnly>
</template>

<style scoped></style>
