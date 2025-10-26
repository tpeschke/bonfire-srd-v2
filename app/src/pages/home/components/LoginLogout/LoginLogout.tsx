import { useSelector } from "react-redux"
import { getUserPatreon, isUserLoggedOn } from "../../../../redux/slices/userSlice"
import { signOutURL, signInURL, patreonLinkingAddress } from "../../../../frontend-config"

export default function LoginLogout() {
    const userIsLoggedIn = useSelector(isUserLoggedOn)
    const usersPatreon = useSelector(getUserPatreon)

    return (
        <div className="login-logout-shell">
            {userIsLoggedIn &&
                <>
                    {usersPatreon === 0 &&
                        <a href={patreonLinkingAddress}>
                            <button className="patreon-button"><i className="fa-brands fa-patreon"></i> Link Your Patreon</button>
                        </a>
                    }
                    <a href={signOutURL}>
                        <button><i className="fa-solid fa-person-from-portal"></i> Logout</button>
                    </a>
                </>
            }
            {!userIsLoggedIn &&
                <>
                    <a href="https://www.patreon.com/join/bonfireRPG">
                        <button className="patreon-button"><i className="fa-brands fa-patreon"></i> Become a Patron</button>
                    </a>
                    <a href={signInURL}>
                        <button><i className="fa-solid fa-person-to-portal"></i> Login</button>
                    </a>
                </>
            }
        </div >
    )
}