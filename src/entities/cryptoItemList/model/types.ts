

export interface ICryptoItem {
    cryptoId: string
    name: string
    symbol: string
    image: string
    price: number
    priceChange: number
    priceChangePercentage: number
}


export interface ICryptoItemProps extends ICryptoItem {
    favourites: boolean
}