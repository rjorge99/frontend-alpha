import type { PermisosUsuario } from '~/types/login';

// const secret = 'M1s3creT@Clave123!'; // jalar de config

// const encryptedSerializer = {
//     serilize(value: any) {
//         const str = JSON.stringify(value);
//         return CryptoJS.AES.encrypt(str, secret).toString();
//     },
//     deserialize(value: string) {
//         // Desencripta y convierte de vuelta a objeto
//         const bytes = CryptoJS.AES.decrypt(value, secret);
//         const decrypted = bytes.toString(CryptoJS.enc.Utf8);
//         try {
//             return JSON.parse(decrypted);
//         } catch {
//             return null; //
//         }
//     }
// };

export const useAuthorizationStore = defineStore(
    'authorization',
    () => {
        const permisosUsuario = ref<PermisosUsuario | null>(null);

        const setPermisosUsuario = (permisos: PermisosUsuario) => {
            permisosUsuario.value = permisos;
        };

        return {
            permisosUsuario,
            setPermisosUsuario
        };
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.sessionStorage()
            // serializer:  encryptedSerializer // usado para serializar y deserializar los permisos
        }
    }
);
