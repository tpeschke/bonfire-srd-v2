import { Books } from "./chapterInterfaces/ChapterInterfaces";

export default interface SearchResults {
    book: Books,
    section?: number,
    chapter: number,
    excerpt: string 
}