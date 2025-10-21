<script setup>
const { menuItems } = useMenu();
</script>

<template>
    <ClientOnly>
        <ul v-if="menuItems.length" class="layout-menu">
            <template v-for="(item, i) in menuItems" :key="item">
                <AppMenuItem
                    v-if="!item.separator"
                    :item="item"
                    :index="i" />
                <li v-if="item.separator" class="menu-separator"></li>
            </template>
        </ul>
    </ClientOnly>
</template>
