import { useEffect, useRef, useState } from "react";
import style from "./chartMain.module.css"
import { ColorType, createChart, CandlestickSeries, type IChartApi, type ISeriesApi } from 'lightweight-charts';
import { getCoinsPrice, type intervalType } from "@/shared/api";
import { timeStampToData } from "@/shared/lib";
import { useQuery } from "@tanstack/react-query";
import { useChartStore } from "@/entities/cryptoItemList/model/storeChart";


export function ChartMain() {
    
    const chartRef = useRef<IChartApi | null>(null)
    const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)
    const chartElement = useRef<HTMLDivElement | null>(null)
    let symbol = useChartStore((s) => s.symbol)

    

    const { data, isLoading, error } = useQuery({
        queryKey: ["dataChartKlines", `${symbol.toUpperCase()}USDT`, "5m"] as const,
        queryFn: ({ queryKey }) => {
            const [_, symbol, interval] = queryKey
            return getCoinsPrice(symbol, interval)
        },
    })


    useEffect(() => {

        if (!chartElement.current) return

        const chart = createChart(chartElement.current, {
            layout: {
                attributionLogo: false,
                background: {
                    color: '#191921',
                    type: ColorType.Solid
                },
                textColor: "#a8a8a8ff"
            },
            grid: {
                horzLines: {
                    color: "#2a2a36ff"
                },
                vertLines: {
                    color: "#2a2a36ff"
                }
            },
            width: chartElement.current.clientWidth - 10,
            height: chartElement.current.clientHeight - 10,
            // autoSize: true
        })

        chartRef.current = chart
        seriesRef.current = chart.addSeries(CandlestickSeries)

        
        return () => {
            chart.remove()
            chartRef.current = null
            seriesRef.current = null
        }
    }, [])
    { /* TODO: переделать с использованием update */ }
    useEffect(() => {
        const coinPrice = data?.map(item => (
            { time: item[0] / 1000, open: +item[1], high: +item[2], low: +item[3], close: +item[4]}
        ))
        console.log(coinPrice);
        if (coinPrice) {
            seriesRef.current?.setData([...coinPrice])
        }
        chartRef.current?.timeScale().fitContent();
    }, [data])


    return (
        <div className={style.chartWrapper}>
            {isLoading && <div style={{ color: "white" }}>ЗАГРУЗКА</div>}
            <div className={style.chart} ref={chartElement}>

            </div>
        </div>
    );
}

