<script setup lang="ts">
    const { currentTheme } = useTheme();

    watchEffect(() => {
        useHead({
            htmlAttrs: {
                class: `app-${currentTheme.value}`
            },
            link:
                currentTheme.value !== 'alpha'
                    ? [
                          {
                              id: 'theme-css',
                              rel: 'stylesheet',
                              href: `/themes/${currentTheme.value}.css`
                          }
                      ]
                    : []
        });
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<!-- <script setup lang="ts">
    useHead({
        htmlAttrs: {
            class: 'app-dark'
        }
    });
</script> -->

<!-- <template>
    <Toast position="bottom-right" group="br" />
    <ConfirmDialog />
    <GlobalLoading />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template> -->
