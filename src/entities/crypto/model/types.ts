

export interface ICryptoItem {
    cryptoId: string
    name: string
    symbol: string
    image: string
    price: number
    priceChangeDirection: "up" | "down" | "same"
    priceChange: number
    favourites: boolean

}
