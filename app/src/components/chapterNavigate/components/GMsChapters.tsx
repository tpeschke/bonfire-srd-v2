import { gameMasterChapters } from "@srd/common/utilities/chapters"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

interface Props {
    userCanViewGMG: boolean,
    preloadChapter: Function,
    currentRoute: string | null
}

export default function GMsChapters({ userCanViewGMG, preloadChapter, currentRoute }: Props) {
    const routePath = `/gms/0-1`

    return (
        <>
            <h1 className="lower-heading">GameMasters' Guide</h1>
            <Link onMouseEnter={_ => preloadChapter(routePath)} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>0 GM Principles & Types</h2></Link>
            {gameMasterChapters.map((route, index) => {
                return formatSection(route, index + 1, userCanViewGMG, preloadChapter, currentRoute)
            })}
        </>
    )
}

interface Section {
    section: string,
    chapters: string[]
}

function formatSection(
    { section, chapters }: Section,
    sectionNumber: number,
    userCanViewGMG: boolean,
    preloadChapter: Function,
    currentRoute: string | null,
) {
    return (
        <Fragment key={sectionNumber}>
            {userCanViewGMG ? (
                <h3>{sectionNumber} {section}</h3>
            ) : (
                <a href='https://www.patreon.com/c/bonfirerpg/membership' target='_blank'>
                    <h3 data-tooltip-id="my-tooltip" data-tooltip-content="This section of the GMG is only for $5 and Up Patrons.">
                        <i className="fa-solid fa-lock"></i>
                        {sectionNumber} {section}
                    </h3>
                </a>
            )}
            {chapters.map((chapter, index) => {
                return formatChapter(
                    userCanViewGMG,
                    sectionNumber,
                    index + 1,
                    preloadChapter,
                    currentRoute,
                    chapter
                )
            })}
        </Fragment>
    )
}

function formatChapter(
    userCanViewGMG: boolean,
    sectionNumber: number,
    chapterNumber: number,
    preloadChapter: Function,
    currentRoute: string | null,
    route: string
) {
    const sectionNNumber = `${sectionNumber}-${chapterNumber}`
    const routePath = `/gms/${sectionNNumber}`
    if (userCanViewGMG) {
        return <Link onMouseEnter={_ => preloadChapter(routePath)} key={sectionNNumber} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{chapterNumber} {route}</h2></Link>
    }
    return <h2 key={sectionNNumber} className='disabled-route'>{chapterNumber} {route}</h2>
}