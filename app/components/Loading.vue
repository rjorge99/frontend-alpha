<script setup>
const uiStore = useUiStore();
</script>

<template>
    <transition name="fade">
        <div v-if="uiStore.isLoading" class="loading-overlay">
            <div class="loader-container">
                <span class="loader"></span>
                <img src="assets/images/loader.png" alt="Loader">
            </div>
        </div>
    </transition>
</template>

<style scoped>
img {
    width: 100px;
}

.loading-overlay {
    position: fixed; /* mejor que absolute, para cubrir toda la pantalla */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

/* Contenedor centrado del loader + imagen */
.loader-container {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader {
    width: 120px;
    height: 120px;
    border: 5px solid;
    border-top-color: #59c6ea;
    border-bottom-color: #80c1aa;
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    animation: rotationLoading 2s ease-in-out infinite;
    position: absolute;
}

@keyframes rotationLoading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
