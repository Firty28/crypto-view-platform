import { useEffect, useRef } from "react";
import style from "./chartMain.module.css"
import { ColorType, createChart, BaselineSeries } from 'lightweight-charts';



export function ChartMain() {

    const chartElement = useRef<HTMLDivElement | null>(null)

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
        })
        console.log(chartElement);
        

        const baseLineSeries = chart.addSeries(BaselineSeries)

        baseLineSeries.setData([
            { time: '2018-12-22', value: 32.51 },
            { time: '2018-12-23', value: 31.11 },
            { time: '2018-12-24', value: 27.02 },
            { time: '2018-12-25', value: 27.32 },
            { time: '2018-12-26', value: 25.17 },
            { time: '2018-12-27', value: 28.89 },
            { time: '2018-12-28', value: 25.46 },
            { time: '2018-12-29', value: 23.92 },
            { time: '2018-12-30', value: 22.68 },
            { time: '2018-12-31', value: 22.67 },
        ]);
    },[])
    

    return (
        <div className={style.chartWrapper}>
            <div className={style.chart} ref={chartElement}>
                    
            </div>
        </div>
    );
}

