

export function timeStampToData(timeStamp: number): string {
    if (timeStamp > 0) {
        const fromTimestamp = new Date(timeStamp)
        const year = fromTimestamp.getFullYear()
        const month = (fromTimestamp.getMonth() + 1) <= 9 ? `0${fromTimestamp.getMonth() + 1}` : `${fromTimestamp.getMonth() + 1}`
        const day = (fromTimestamp.getDay()) <= 9 ? `0${fromTimestamp.getDay()}` : `${fromTimestamp.getDay()}`

        const date = `${year}-${month}-${day}`
        return date
    }
    return ''
    
}