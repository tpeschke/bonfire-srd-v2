import { useEffect, useState } from 'react'
import { SetLoadingFunction } from '../../components/loading/Loading'
import SearchResults from '@srd/common/interfaces/SearchInterfaces'
import './Search.css'
import axios from 'axios'
import { searchURL } from '../../frontend-config'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import ChapterHook from '../../hooks/ChapterHooks'
// @ts-ignore
import rehypeWrap from 'rehype-wrap-all'

interface Props {
    setLoading?: SetLoadingFunction,
    pathname: string
}

export default function Search({ setLoading, pathname }: Props) {
    const [searchResults, setSearchResults] = useState<SearchResults[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [timeoutID, setTimeoutID] = useState<any | null>(null)

    const { preloadChapter } = ChapterHook()

    const guideDictionary = {
        rules: "Rules Guide",
        players: "Players' Guide",
        gms: "GameMasters' Guide"
    }

    useEffect(() => {
        if (setLoading) {
            document.title = "Bonfire SRD"

            setLoading(false)

            if (timeoutID) { clearTimeout(timeoutID) }

            const newTimeoutID = setTimeout(() => {
                setSearchResults([])

                const [_, searchParam] = pathname.split('/search/')
                setSearchTerm(searchParam)

                axios.get(searchURL + searchParam).then(({ data }) => {
                    setSearchResults(data)
                    setLoading(true)
                })
            }, 1000)

            setTimeoutID(newTimeoutID)
        }
    }, [pathname])

    return (
        <div className="search-shell">
            <h1>{searchResults.length} Results</h1>
            {searchResults.map(({ book, section, chapter, excerpt }, index) => {
                const routePath = getRoute(book, section, chapter)

                const searchRegex = new RegExp(String.raw`(${decodeURI(searchTerm)})`, "gmi")
                excerpt = `...${excerpt}...`
                    .replaceAll(/(\[([^;]*)\]\(([^;]*)\))/gm, "$2")
                    .replaceAll(searchRegex, "<strong class='highlight'>$1</strong>")

                return (
                    <div className='search-result' key={index} onMouseEnter={_ => preloadChapter(routePath)}>
                        <Link to={routePath}>
                            {formatName(guideDictionary[book], section, chapter)}
                            <div className='search-quote'>
                                <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, [rehypeWrap, { selector: 'table', wrapper: 'div.responsive-table' }]]} >
                                    {excerpt}
                                </Markdown>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

function formatName(book: string, section: number | undefined, chapter: number) {
    if (section || section === 0) {
        return <h2>{book} - Section {section}, Chapter {chapter}</h2>
    }
    return <h2>{book} - Chapter {chapter}</h2>
}

function getRoute(book: string, section: number | undefined, chapter: number) {
    if (section || section === 0) {
        return `/${book}/${section}-${chapter}`
    }
    return `/${book}/${chapter}`
}