import { ChapterInfoBaseObject } from "./ChapterInterfaces"

export interface ImpulseInfo extends ChapterInfoBaseObject {
    type: 'impulses',
    info: Impulse[]
}

export interface Impulse {
    name: string,
    categories: SubImpulse[]
}

interface SubImpulse {
    name: string,
    rooms: string[]
}