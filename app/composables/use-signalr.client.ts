import * as signalR from '@microsoft/signalr';

export const useSignalR = (hubUrl: string) => {
    const config = useRuntimeConfig();
    const connection = ref<signalR.HubConnection | null>(null);
    const isConnected = ref<boolean>(false);
    hubUrl = `${config.public.baseURL}${hubUrl}`;

    // Conectar
    const connect = async () => {
        if (connection.value) return;

        connection.value = new signalR.HubConnectionBuilder()
            .withUrl(hubUrl)
            .withAutomaticReconnect()
            .build();

        try {
            await connection.value.start();
            isConnected.value = true;
            console.log(`✅ Conectado a ${hubUrl}`);
        } catch (err) {
            console.error(`❌ Error al conectar a ${hubUrl}:`, err);
        }
    };

    // Desconectar
    const disconnect = async () => {
        if (connection.value) {
            await connection.value.stop();
            console.log(`🔌 Desconectado de ${hubUrl}`);
            connection.value = null;
            isConnected.value = false;
        }
    };

    // Suscribirse a eventos
    const on = (method: string, callback: (...args: any[]) => void) => {
        connection.value?.on(method, callback);
    };

    // Invocar métodos en el Hub
    const invoke = async (method: string, ...args: any[]) => {
        if (!connection.value) return;
        return connection.value.invoke(method, ...args);
    };

    onMounted(connect);
    onUnmounted(disconnect);

    return {
        on,
        invoke,
        isConnected
    };
};
