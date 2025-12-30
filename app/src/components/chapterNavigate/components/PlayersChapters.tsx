import { playerChapters } from "@srd/common/utilities/chapters"
import { Link } from "react-router-dom"

interface Props {
    userCanViewCharacterCreation: boolean,
    preloadChapter: Function,
    currentRoute: string | null
}

export default function PlayersChapters({ userCanViewCharacterCreation, preloadChapter, currentRoute }: Props) {
    return (
        <>
            {userCanViewCharacterCreation ? (
                <h1 className="lower-heading">
                    Players' Guide
                </h1>
            ) : (
                <a href='https://www.patreon.com/c/bonfirerpg/membership' target='_blank'>
                    <h1 className="lower-heading" data-tooltip-id="my-tooltip" data-tooltip-content="Character Creation is only for $1 and Up Patrons.">
                        <i className="fa-solid fa-lock"></i>
                        Players' Guide
                    </h1>
                </a>
            )
            }
            {playerChapters.map((route, index) => {
                const routePath = `/players/${index + 1}`
                if (userCanViewCharacterCreation) {
                    return <Link onMouseEnter={_ => preloadChapter(routePath)} key={index} to={routePath} className={routePath === currentRoute ? 'active-route' : ''}><h2>{index + 1} {route}</h2></Link>
                }
                return <h2 key={index} className='disabled-route'>{index + 1} {route}</h2>
            })}
        </>
    )
}