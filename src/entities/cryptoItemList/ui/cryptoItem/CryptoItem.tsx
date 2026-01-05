import type { ICryptoItemProps } from "../../model/types";
import style from "./cryptoItem.module.css"
import FavouritesIconOutline from "@shared/assets/icon/favourites.svg?react"
import FavouritesIconFill from "@shared/assets/icon/favouritesFill.svg?react"
import { useState } from "react";
import { useChartStore } from "../../model/storeChart";


export function CryptoItem({ favourites, cryptoId, image, name, price, priceChange, symbol, priceChangePercentage }: ICryptoItemProps) {

    const [favour, setFavour] = useState<boolean>(favourites)

    const setSymbol = useChartStore((s) => s.setSymbol)

    return (
        <li className={style.cryptoItem} id={cryptoId} onClick={() => setSymbol(symbol)}>
            <div className={style.favourites} onClick={() => setFavour(prev => !prev)}>
                {favour ? <FavouritesIconFill/> : <FavouritesIconOutline/> }
            </div>
            <div className={style.cryptoInfo}>
                    <img src={image} alt="" className={style.cryptoIcon} />
                <div className={style.cryptoNameInfo}>
                    <div className={style.symbol}>{symbol.toUpperCase()}</div>
                    <div className={style.nameOriginal}>{name}</div>
                </div>
            </div>
            <div className={style.priceChangeWrapper}>
                <div className={`${style.priceChangeInfo} ${priceChange >= 0 ? style.changeUp : style.changeDown}`}>
                    <div className={style.priceChange}>{priceChange && priceChange.toFixed(5)}</div>
                    <div className={style.priceChangePercent}>{priceChangePercentage}%</div>
                </div>
            </div>
            <div className={style.price}>${price}</div>
        </li>
    );
}
