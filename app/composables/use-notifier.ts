export const useNotifier = () => {
    const confirm = useConfirm();
    const toast = useToast();

    const notifySuccess = (msg: string) =>
        toast.add({
            severity: 'success',
            summary: 'Mensaje',
            detail: msg,
            life: 3000,
            group: 'br'
        });

    const notifyError = (msg: string) =>
        toast.add({
            severity: 'error',
            summary: 'Mensaje',
            detail: msg,
            life: 3000,
            group: 'br'
        });

    const notifyInfo = (msg: string) =>
        toast.add({
            severity: 'info',
            summary: 'Mensaje',
            detail: msg,
            life: 3000,
            group: 'br'
        });

    const askConfirm = (props: {
        msg: string;
        onAccept: () => void;
        onReject?: () => void;
    }) => {
        confirm.require({
            message: props.msg,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            reject: props.onAccept,
            accept: props.onReject || (() => {}),
            acceptLabel: 'No',
            rejectLabel: 'Si'
        });
    };

    return {
        notifySuccess,
        notifyError,
        notifyInfo,
        askConfirm
    };
};
