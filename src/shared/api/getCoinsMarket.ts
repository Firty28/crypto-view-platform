import axios from "axios";
import type { ICryptoApiResponse } from "@/shared/types/apiResponseTypes";


const API_KEY_GEKO = import.meta.env.VITE_API_KEY_GEKO
const API_URL_GEKO = import.meta.env.VITE_API_URL_GEKO


export const getCoinsMarketDemo = async () => {
    try {
        const response = await axios.get<ICryptoApiResponse[]>(`${API_URL_GEKO}/coins/markets?vs_currency=usd`, {
            headers: {
                'x-cg-demo-api-key': API_KEY_GEKO
            }
        })
        return response.data

    } catch (error) {
        throw new Error(`Error! ${error}`)
    }

}




