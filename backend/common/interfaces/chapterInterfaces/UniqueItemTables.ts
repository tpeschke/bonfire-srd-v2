import { ChapterInfoBaseObject } from "./ChapterInterfaces"

export interface UniqueItemsInfo extends ChapterInfoBaseObject {
    type: 'uniqueItems',
    info: [
        UniqueItemTable[],
        UniqueItemTable[]
    ]
}

export interface UniqueItemTable {
    headers: (string | HeaderWithLabel)[][],
    rows: (string | number)[][]
}

export interface HeaderWithLabel {
    label: string,
    colSpan: number
}