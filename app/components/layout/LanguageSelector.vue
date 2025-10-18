<script setup lang="ts">
    // defineOptions({ inheritAttrs: false });
    const { setLocale, locales, locale } = useI18n();
    const local = ref<'es' | 'en'>(locale.value);
</script>

<template>
    <template v-for="lang in locales" :key="lang.code">
        <button
            v-bind="$attrs"
            v-if="lang.code !== locale"
            @click="setLocale(lang.code)"
            class="w-6 h-6 cursor-pointer">
            <img :src="`/images/icons/flags/${lang.code}.svg`" :alt="lang.name" />
        </button>
    </template>
</template>
