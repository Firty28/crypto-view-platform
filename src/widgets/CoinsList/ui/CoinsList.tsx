import style from "./coinsList.module.css"
import type { ICryptoItem } from "@/entities/cryptoItemList";
import { CryptoItem } from "@/entities/cryptoItemList";
import FavouritesIcon from "@shared/assets/icon/favourites.svg?react"
import { getCoinsMarketDemo } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export function CoinsList() {

    const { data: dataCoins = [], isLoading, error } = useQuery({
        queryKey: ['cryptoMarket'],
        queryFn: getCoinsMarketDemo,
        select: (data): ICryptoItem[] => (
            data.map((item) => ({
                cryptoId: item.id,
                image: item.image,
                name: item.name,
                price: item.current_price,
                priceChange: item.price_change_24h,
                symbol: item.symbol,
                priceChangePercentage: item.price_change_percentage_24h
            }))
        ),

    })

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
            {isLoading ? 
                <div>Loading...</div> 
                :
                <ul className={style.coinsList}>
                    {dataCoins.map((item) => (
                        <CryptoItem key={item.cryptoId} favourites={false} {...item} />
                    ))}
                </ul>
            }
        </div>
    );
}

