import style from "./coinsList.module.css"
import type { ICryptoItem } from "@/entities/crypto";
import { CryptoItem } from "@/entities/crypto";
import type { ICryptoApiResponse } from "@/shared/types/apiResponseTypes";
import FavouritesIcon from "@shared/assets/icon/favourites.svg?react"
import axios from "axios";
import { useEffect, useState } from "react";

const cryptoList: ICryptoItem[] = [
    {
        cryptoId: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        image: "/images/crypto/bitcoin.png",
        price: 67250.45,
        priceChangeDirection: "up",
        priceChange: 2.34,
        favourites: true,
    },
    {
        cryptoId: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        image: "/images/crypto/ethereum.png",
        price: 3521.12,
        priceChangeDirection: "down",
        priceChange: -1.18,
        favourites: false,
    },
    {
        cryptoId: "solana",
        name: "Solana",
        symbol: "SOL",
        image: "/images/crypto/solana.png",
        price: 148.76,
        priceChangeDirection: "up",
        priceChange: 5.92,
        favourites: false,
    },
    {
        cryptoId: "ripple",
        name: "XRP",
        symbol: "XRP",
        image: "/images/crypto/xrp.png",
        price: 0.62,
        priceChangeDirection: "same",
        priceChange: 0,
        favourites: true,
    },
    {
        cryptoId: "cardano",
        name: "Cardano",
        symbol: "ADA",
        image: "/images/crypto/cardano.png",
        price: 0.48,
        priceChangeDirection: "down",
        priceChange: -0.74,
        favourites: false,
    },

]

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
                    tempCryptoListInfo.push({ cryptoId: item.id, favourites: false, name: item.name, image: item.image, price: item.current_price, priceChange: item.price_change_24h, symbol: item.symbol, priceChangeDirection: "down" })
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
                        favourites={item.favourites}
                        cryptoId={item.cryptoId}
                        name={item.name}
                        symbol={item.symbol}
                        image={item.image}
                        price={item.price}
                        priceChange={item.priceChange}
                        priceChangeDirection={item.priceChangeDirection}
                    />
                ))}
            </ul>
        </div>
    );
}

