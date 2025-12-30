import { gameMasterChapters } from "@srd/common/utilities/chapters"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

interface Props {
    userCanViewGMG: boolean,
    preloadChapter: Function,
    currentRoute: string | null
}

export default function GMsChapters({ userCanViewGMG, preloadChapter, currentRoute }: Props) {
    return (
        <>
            <h1 className="lower-heading">GameMasters' Guide</h1>
            {gameMasterChapters.map((route, index) => {
                return formatSection(route, index, userCanViewGMG, preloadChapter, currentRoute)
            })}
        </>
    )
}

interface Section {
    section?: string,
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
            {formatSectionHeader(section, sectionNumber, userCanViewGMG)}
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

function formatSectionHeader(section: string | undefined, sectionNumber: number, userCanViewGMG: boolean) {
    if (userCanViewGMG && section) {
        return <h3>{sectionNumber} {section}</h3>
    } else if (section) {
        return (
            <a href='https://www.patreon.com/c/bonfirerpg/membership' target='_blank'>
                <h3 data-tooltip-id="my-tooltip" data-tooltip-content="This section of the GMG is only for $5 and Up Patrons.">
                    <i className="fa-solid fa-lock"></i>
                    {sectionNumber} {section}
                </h3>
            </a>
        )
    }

    return <></>
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