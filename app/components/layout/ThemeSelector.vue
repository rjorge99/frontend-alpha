<script setup lang="ts">
    const { currentTheme, setTheme } = useTheme();

    const themes = [
        { label: 'Alpha', value: 'alpha' },
        { label: 'Orange', value: 'orange' },
        { label: 'Red', value: 'red' }
    ];
    const selectedTheme = ref(currentTheme.value);

    const onThemeChange = () => {
        setTheme(selectedTheme.value);
    };
</script>

<template>
    <Select
        v-model="selectedTheme"
        :options="themes"
        optionLabel="label"
        optionValue="value"
        placeholder="Seleccionar tema"
        @change="onThemeChange" />
</template>
