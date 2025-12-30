export default {
    getByBookAndChapter: 'select * from srdChapters where book = $1 and chapter = $2',
    getByBookAndChapterAndSection: "select * from srdChapters where book = $1 and section = $2 and chapter = $3",
    updateChapter: 'update srdChapters set chapterContents = $1 where book = $2 and chapter = $3',
    updateChapterWithSection: 'update srdChapters set chapterContents = $1 where book = $2 and section = $3 and chapter = $4'
}