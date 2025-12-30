import { Request, Response, User } from '../../../interfaces/apiInterfaces'
import query from "../../../db/database"
import chapterSQL from '../../../db/queries/chapter'
import { checkForContentTypeBeforeSending } from "../../common/utilities/sendingFunctions"
import { chapterCache } from "../cache/getCache"
import { Books, ChapterContents, ChapterContentsCache, ChapterNavigation, LockedChapterContents, LockedNavigation } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'
import { rulesChapters, playerChapters, gameMasterChapters } from '@srd/common/utilities/chapters'
import populateChapterContents from '../utilities/parseChapterContents'
import { isOwner } from '../../user/ownerFunctions'

interface ChapterRequest extends Request {
    params: {
        code: string
    }
}

export async function getChapterWorkhorse(request: ChapterRequest, response: Response) {
    const [book, chapter] = request.params.code.split('.')
    const { user } = request

    if (book === 'rules') {
        sendChapterContents(response, user, book, chapter, chapterCache[book][+chapter - 1])
    } else if (book === 'players') {
        if (user?.patreon && user?.patreon >= 1) {
            sendChapterContents(response, user, book, chapter, chapterCache[book][+chapter - 1])
        } else {
            checkForContentTypeBeforeSending(response, { message: "You Don't Have Permissions to View These Chapters" })
        }
    } else if (book === 'gms') {
        if (user?.patreon && user?.patreon >= 5) {
            const [section, subsection] = chapter.split('-')
            sendChapterContents(response, user, book, chapter, chapterCache[book][+section][+subsection - 1])
        } else {
            checkForContentTypeBeforeSending(response, { message: "You Don't Have Permissions to View These Chapters" })
        }
    } else {
        checkForContentTypeBeforeSending(response, { message: "Book Doesn't Exist" })
    }
}

export function getUserAppropriateChapter(
    user: User | null | undefined,
    chapterContents: ChapterContents | LockedChapterContents,
    navigation: ChapterNavigation[] | LockedNavigation,
    info: any
) {
    return {
        navigation: getChapterNavigation(user, navigation),
        chapterContents: getChapterContents(user, chapterContents),
        info: getInfo(user, info)
    }
}

async function sendChapterContents(response: Response, user: User | null | undefined, book: Books, chapter: string, cachedChapter: ChapterContentsCache) {
    if (cachedChapter) {
        checkForContentTypeBeforeSending(response, {
            ...cachedChapter,
            ...getUserAppropriateChapter(user, cachedChapter.chapterContents, cachedChapter.navigation, cachedChapter.info)
        })
    } else {
        let guideChapterNameArray: string[] = playerChapters;
        let chapterContents;

        if (book === 'gms') {
            const [section, subsection] = chapter.split('-')
            chapterContents = (await getGMChapterFromDB(+section, +subsection))[0].chaptercontents
            guideChapterNameArray = gameMasterChapters[+section].chapters

            const populatedChapter = populateChapterContents(book, guideChapterNameArray, +section, +subsection, chapterContents)
            checkForContentTypeBeforeSending(response, {
                ...populatedChapter,
                ...getUserAppropriateChapter(user, populatedChapter.chapterContents, populatedChapter.navigation, populatedChapter.info)
            })
        } else {
            book === 'rules' ? rulesChapters : playerChapters
            chapterContents = (await getChapterFromDB(book, chapter))[0].chaptercontents

            const populatedChapter = populateChapterContents(book, guideChapterNameArray, undefined, +chapter, chapterContents)
            checkForContentTypeBeforeSending(response, {
                ...populatedChapter,
                ...getUserAppropriateChapter(user, populatedChapter.chapterContents, populatedChapter.navigation, populatedChapter.info)
            })
        }
    }
}

function getChapterContents(user: User | null | undefined, chapterContents: ChapterContents | LockedChapterContents) {
    const isDeluxeUser = user?.patreon && user?.patreon >= 3

    if (isDeluxeUser && !Array.isArray(chapterContents)) {
        return chapterContents.deluxe
    } else if (!isDeluxeUser && !Array.isArray(chapterContents)) {
        return chapterContents.free
    }

    return chapterContents
}

function getChapterNavigation(user: User | null | undefined, navigation: ChapterNavigation[] | LockedNavigation) {
    const isDeluxeUser = user?.patreon && user?.patreon >= 3

    if (isDeluxeUser && !Array.isArray(navigation)) {
        return navigation.deluxe
    } else if (!isDeluxeUser && !Array.isArray(navigation)) {
        return navigation.free
    }
    return navigation
}

function getInfo(user: User | null | undefined, info: any) {
    if (info && info.type) {
        return info
    } else if (info && typeof info === 'function') {
        return info(user)
    }
}

export async function getChapterFromDB(book: Books, chapter: string | number) {
    return await query(chapterSQL.getByBookAndChapter, [book, chapter])
}

export async function getGMChapterFromDB(section: number, chapter: number) {
    return await query(chapterSQL.getByBookAndChapterAndSection, ['gms', section, chapter])
}

export async function getChapterForEdit(request: ChapterRequest, response: Response) {
    const { user } = request

    if (isOwner(user?.id)) {
        const [book, chapter] = request.params.code.split('.')

        if (book === 'rules' || book === 'players') {
            const [{ chaptercontents }] = await getChapterFromDB(book, chapter)
            const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters

            checkForContentTypeBeforeSending(response, {
                book,
                chapterContents: chaptercontents,
                chapterName: guideChapterNameArray[+chapter - 1],
                chapter: chapter
            })
        } else if (book === 'gms') {
            const [section, subsection] = chapter.split('-')
            const [{ chaptercontents }] = await getGMChapterFromDB(+section, +subsection)

            checkForContentTypeBeforeSending(response, {
                book,
                chapterContents: chaptercontents,
                chapterName: gameMasterChapters[+section].chapters[+subsection - 1],
                chapter: chapter
            })
        }
    } else {
        checkForContentTypeBeforeSending(response, { message: "You Don't Have Edit Permissions" })
    }
}
