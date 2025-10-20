<script setup>
    const uiStore = useUiStore();
</script>

<template>
    <transition name="fade">
        <div v-if="uiStore.isLoading" class="loading-overlay absolute">
            <div class="spinner"></div>
        </div>
    </transition>
</template>

<style scoped>
    .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* fondo transparente oscuro */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    /* Spinner simple */
    .spinner {
        width: 50px;
        height: 50px;
        border: 6px solid #fff;
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    /* Spinner animation */
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
