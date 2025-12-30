import { ChapterContentsCache } from '@srd/common/interfaces/chapterInterfaces/ChapterInterfaces'
import query from '../../../db/database'
import chapterSQL from '../../../db/queries/chapter'
import { Request, Response, User } from '../../../interfaces/apiInterfaces'
import { checkForContentTypeBeforeSending } from '../../common/utilities/sendingFunctions'
import { isJustMainOwner } from '../../user/ownerFunctions'
import updateCache from '../cache/updateCache'
import populateChapterContents from '../utilities/parseChapterContents'
import { getUserAppropriateChapter } from './getChapter'
import { updateSearch } from '../../search/searchController'
import { rulesChapters, playerChapters, gameMasterChapters } from '@srd/common/utilities/chapters'

interface ChapterRequest extends Request {
    params: {
        code: string
    },
    body: {
        chapterContents: string
    }
}

export default async function updateChapter(request: ChapterRequest, response: Response) {
    const { user } = request

    if (checkIfOwner(user, response)) {
        const [book, chapter] = request.params.code.split('.')
        const { chapterContents } = request.body

        if (book === 'rules' || book === 'players') {
            await query(chapterSQL.updateChapter, [chapterContents, book, +chapter])

            const guideChapterNameArray = book === 'rules' ? rulesChapters : playerChapters
            const newChapter: ChapterContentsCache = populateChapterContents(book, guideChapterNameArray, undefined, +chapter, chapterContents)

            updateSearch(newChapter)
            updateCache(newChapter)

            checkForContentTypeBeforeSending(response, {
                ...newChapter,
                ...getUserAppropriateChapter(user, newChapter.chapterContents, newChapter.navigation, newChapter.info)
            })
        } else if (book === 'gms') {
            const [section, subsection] = chapter.split('-')
            await query(chapterSQL.updateChapterWithSection, [chapterContents, book, +section, +subsection])

            const newChapter: ChapterContentsCache = populateChapterContents(book, gameMasterChapters[+section].chapters, +section, +subsection, chapterContents)

            updateSearch(newChapter)
            updateCache(newChapter)

            checkForContentTypeBeforeSending(response, {
                ...newChapter,
                ...getUserAppropriateChapter(user, newChapter.chapterContents, newChapter.navigation, newChapter.info)
            })
        }

        checkForContentTypeBeforeSending(response, { message: "Book Doesn't Exist" })

    }
}

function checkIfOwner(user: User | null | undefined, response: Response) {
    if (!isJustMainOwner(user?.id)) {
        checkForContentTypeBeforeSending(response, { message: "You Don't Have the Correct Permissions" })
        return false
    }

    return true
}