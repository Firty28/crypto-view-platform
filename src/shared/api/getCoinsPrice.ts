import axios from "axios";

const API_URL_BINANCE = import.meta.env.VITE_API_URL_BINANCE

export type intervalType = "1s" | "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1w" | "1M" 

export const getCoinsPrice = async (symbol: string = "BTCUSDT", interval: intervalType = "5m") => {
    try {
        const response = await axios.get(`${API_URL_BINANCE}/klines`, {
            params: {
                symbol: symbol,
                interval: interval
            },
        })
        return response.data

    } catch (error) {
        throw new Error(`Error! ${error}`)
    }

}




