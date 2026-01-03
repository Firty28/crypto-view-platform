import style from "./coinsList.module.css"
import type { ICryptoItem } from "@/entities/crypto";
import { CryptoItem } from "@/entities/crypto";
import type { ICryptoApiResponse } from "@/shared/types/apiResponseTypes";
import FavouritesIcon from "@shared/assets/icon/favourites.svg?react"
import axios from "axios";
import { useEffect, useState } from "react";


export function CoinsList() {

    const [dataCoins, setDataCoins] = useState<ICryptoItem[]>([])

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY
        const tempCryptoListInfo: ICryptoItem[] =[]
        const getCoins = async () => {
            try {
                const response = await axios.get<ICryptoApiResponse[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
                    headers: {
                        'x-cg-demo-api-key': apiKey
                    }
                })

                response.data.forEach((item) => {
                    tempCryptoListInfo.push({ cryptoId: item.id, name: item.name, image: item.image, price: item.current_price, priceChange: item.price_change_24h, symbol: item.symbol, priceChangePercentage: item.price_change_percentage_24h })
                })

                setDataCoins(prev => [...prev, ...tempCryptoListInfo])
            } catch (error) {
                console.log(error);
            }

        }

        getCoins()
    }, [])


    return (
        <div className={style.coinsListWrapper}>
            <div className={style.legendCoins}>
                <div className={style.legendItemIcon}>
                    <FavouritesIcon />
                </div>
                <div className={style.legendItemCoins}>Coins</div>
                <div className={style.legendItemChange}>Change</div>
                <div className={style.legendItemPrice}>Price</div>
            </div>
            <ul className={style.coinsList}>
                {dataCoins.map((item) => (
                    <CryptoItem
                        favourites={false}
                        cryptoId={item.cryptoId}
                        name={item.name}
                        symbol={item.symbol}
                        image={item.image}
                        price={item.price}
                        priceChange={item.priceChange}
                        priceChangePercentage={item.priceChangePercentage}
                    />
                ))}
            </ul>
        </div>
    );
}

