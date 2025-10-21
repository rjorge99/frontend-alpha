<template>
    <div class="h-full w-full hidden md:block">
        <div class="grid h-full w-full grid-cols-13 grid-rows-5">
            <MenuDiagramaticoItem v-for="(menuItem, index) in Array.from({ length: 65 })" :key="index" />
        </div>
    </div>
</template>
