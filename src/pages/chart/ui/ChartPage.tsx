import style from "./chartPage.module.css"
import { Header } from "@/widgets/Header"
import { ChartMain } from "@/widgets/ChartMain";
import { CoinsList } from "@/widgets/CoinsList";

export function ChartPage() {
    return (
        <div className={style.layout}>
            <div className={style.headerWrapper}>
                <Header/>
            </div>
             <div className={style.mainBar}>
                <ChartMain/>
            </div>
            <div className={style.sideBar}>
                <CoinsList/>
            </div>
        </div>
    );
}

