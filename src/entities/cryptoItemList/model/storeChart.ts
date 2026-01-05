import { create } from 'zustand'

export type IntervalType =
    | '1m'
    | '5m'
    | '15m'
    | '1h'
    | '4h'
    | '1d'

type ChartStore = {
    symbol: string
    interval: IntervalType
    setSymbol: (symbol: string) => void
    setInterval: (interval: IntervalType) => void
}

export const useChartStore = create<ChartStore>((set) => ({
    symbol: 'btc',
    interval: '5m',
    setSymbol: (symbol) => set({ symbol }),
    setInterval: (interval) => set({ interval }),
}))