// import { Messages } from "../types/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const message = async (payload: any) => {
    try {
        const result = await fetch('http://localhost:4000/mail/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
            const data = await result.json();
            console.log(data);
            return data.message;
    } catch (error) {
        console.error('Ocurrió un error al enviar la solicitud:', error);
    }
};
