<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' });
</script>

<template>
    <div id="sidebar">
        <div id="sidebar-menu">
            <NuxtLink to="detalle" class="text-black">{{ t('bienvenido') }}</NuxtLink>
        </div>
        <SidebarFooter />
    </div>
</template>

<i18n lang="json">
{
    "es": {
        "bienvenido": "Bienvenido"
    },
    "en": {
        "bienvenido": "Welcome Back"
    }
}
</i18n>
