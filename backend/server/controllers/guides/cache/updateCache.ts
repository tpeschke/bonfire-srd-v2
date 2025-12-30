import { ChapterContentsCache } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces";
import { chapterCache } from "./getCache";

export default function updateCache(newChapter: ChapterContentsCache) {
    const { book, section, chapter } = newChapter
    if (book === 'gms' && (section || section === 0)) {
        chapterCache[book][section][chapter - 1] = newChapter
    } else {
        chapterCache[book][chapter - 1] = newChapter
    }
}