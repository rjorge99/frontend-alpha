<script setup lang="ts">
const { locales, locale } = useI18n();
const appearence = useAppearence();
</script>

<template>
    <template v-for="lang in locales" :key="lang.code">
        <button
            v-if="lang.code !== locale"
            v-bind="$attrs"
            class="w-6 h-6 cursor-pointer"
            @click="appearence.changeLanguage(lang.code)">
            <img :src="`/images/icons/flags/${lang.code}.svg`" :alt="lang.name">
        </button>
    </template>
</template>
