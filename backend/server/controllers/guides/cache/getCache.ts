import { Books, ChapterContentsCache } from "@srd/common/interfaces/chapterInterfaces/ChapterInterfaces"
import { rulesChapters, playerChapters, gameMasterChapters } from "@srd/common/utilities/chapters"
import { getChapterFromDB, getGMChapterFromDB } from "../chapter/getChapter"
import populateChapterContents from "../utilities/parseChapterContents"

interface ChapterCache {
    rules: ChapterContentsCache[],
    players: ChapterContentsCache[],
    gms: ChapterContentsCache[][],
}

export let chapterCache: ChapterCache = {
    rules: [],
    players: [],
    gms: [
        [], [], [], [], []
    ]
}

export function populateChapterCacheWorkhorse() {
    rulesChapters.forEach(getChapterForCache('rules'))
    console.log("Rules Guide Collected")

    playerChapters.forEach(getChapterForCache('players'))
    console.log("Players Guide Collected")

    getGMChapterForCache()
    console.log("GameMasters Guide Collected")
}

function getChapterForCache(book: Books) {
    const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters

    return async (_: string, index: number) => {
        const [{ chaptercontents }] = await getChapterFromDB(book, index + 1)

        chapterCache[book][index] = populateChapterContents(book, guideChapterNameArray, undefined, index + 1, chaptercontents)
    }
}

function getGMChapterForCache() {
    gameMasterChapters.forEach(async ({chapters}, section) => {
        chapters.forEach(async (_, index) => {
            const [{ chaptercontents }] = await getGMChapterFromDB(section, index + 1)
            chapterCache.gms[section][index] = populateChapterContents('gms', chapters, section, index + 1, chaptercontents)
        })
    })
}