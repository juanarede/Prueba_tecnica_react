// import { Messages } from "../types/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const message = async (payload: any) => {
    try {
        const result = await fetch('https://backend-prueba-tecnica-ebxourbxu.vercel.app/mail/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            mode: 'no-cors'
        });
            const data = await result.json();
            console.log(data);
            return data.message;
    } catch (error) {
        console.error('Ocurrió un error al enviar la solicitud:', error);
        return 'error al enviar la solicitud'
    }
};
