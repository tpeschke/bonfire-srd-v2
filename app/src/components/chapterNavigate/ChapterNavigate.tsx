import { useEffect, useState } from 'react';
import './ChapterNavigate.css'
import { useLocation } from 'react-router-dom'
import ChapterHook from '../../hooks/ChapterHooks';
import { useSelector } from 'react-redux';
import { getUserPatreon } from '../../redux/slices/userSlice';
import RulesChapters from './components/RulesChapters';
import PlayersChapters from './components/PlayersChapters';
import GMsChapters from './components/GMsChapters';

export default function ChapterNavigate() {
    const userPatreon = useSelector(getUserPatreon)

    const [currentRoute, setCurrentRoute] = useState<string | null>(null)
    const [showNav, setShowNav] = useState(false)

    const { preloadChapter } = ChapterHook()
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== currentRoute) {
            setShowNav(false)
            setCurrentRoute(location.pathname)
        }
    }, [location])

    return (
        <>
            <div className='chapter-hamburger-menu'>
                {!showNav && <i onClick={_ => setShowNav(!showNav)} className="fa-solid fa-bars"></i>}
                {showNav && <i onClick={_ => setShowNav(!showNav)} className="fa-solid fa-x"></i>}
            </div>
            <div className={showNav ? "chapter-navigate-shell" : "chapter-navigate-shell closed"}>
                <RulesChapters preloadChapter={preloadChapter} currentRoute={currentRoute} />
                <PlayersChapters userCanViewCharacterCreation={userPatreon >= 1} preloadChapter={preloadChapter} currentRoute={currentRoute} />
                <GMsChapters userCanViewGMG={userPatreon >= 5} preloadChapter={preloadChapter} currentRoute={currentRoute} />
            </div>
        </>
    )
}