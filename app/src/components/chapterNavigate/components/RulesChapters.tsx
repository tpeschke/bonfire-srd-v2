import { rulesChapters } from "@srd/common/utilities/chapters"
import { Link } from "react-router-dom"

interface Props {
    preloadChapter: Function,
    currentRoute: string | null
}

export default function RulesChapters({ preloadChapter, currentRoute }: Props) {
    return (
        <>
            <h1>Rules Guide</h1>
            {
                rulesChapters.map((route, index) => {
                    const routePath = `/rules/${index + 1}`
                    return <Link onMouseEnter={_ => preloadChapter(routePath)} key={index} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{index + 1} {route}</h2></Link>
                })
            }
        </>
    )
}