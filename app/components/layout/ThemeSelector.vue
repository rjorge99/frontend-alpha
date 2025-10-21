<script setup lang="ts">
const { currentTheme, setTheme } = useAppearence();

const themes = [
    { label: 'Alpha', value: 'alpha' },
    { label: 'Orange', value: 'orange' },
    { label: 'Blue', value: 'blue' },
];
const selectedTheme = ref(currentTheme.value);

function onThemeChange() {
    setTheme(selectedTheme.value);
}
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
