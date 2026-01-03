import type { ICryptoItem } from "../../model/types";
import style from "./cryptoItem.module.css"
import ChangeUpIcon from "@shared/assets/icon/changeUp.svg?react"
import ChangeDownIcon from "@shared/assets/icon/changeDown.svg?react"
import FavouritesIconOutline from "@shared/assets/icon/favourites.svg?react"
import FavouritesIconFill from "@shared/assets/icon/favouritesFill.svg?react"
import { useState } from "react";


export function CryptoItem({ favourites, cryptoId, image, name, price, priceChange, priceChangeDirection, symbol }: ICryptoItem) {

    const [favour, setFavour] = useState<boolean>(false)

    return (
        <li className={style.cryptoItem}>
            <div className={style.favourites} onClick={() => setFavour(prev => !prev)}>
                {favour ? <FavouritesIconFill/> : <FavouritesIconOutline/> }
            </div>
            <div className={style.cryptoInfo}>
                <div className={style.cryptoIcon}></div>
                <div className={style.cryptoNameInfo}>
                    <div className={style.symbol}>{symbol}</div>
                    <div className={style.nameOriginal}>{name}</div>
                </div>
            </div>
            <div className={style.priceChangeWrapper}>
                {priceChangeDirection === "up" ?
                    <ChangeUpIcon className={style.changeIcon} />
                    :
                    <ChangeDownIcon className={style.changeIcon} />
                }
                <div className={`${style.priceChangeInfo} ${priceChange >= 0 ? style.changeUp : style.changeDown}`}>
                    <div className={style.priceChange}>{priceChange}</div>
                    <div className={style.priceChangePercent}>10%</div>
                </div>
            </div>
            <div className={style.price}>${price}</div>
        </li>
    );
}
