import { JSX, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { isOwner, infoHasBeenFetched } from "../redux/slices/userSlice";

interface Props {
    children: JSX.Element,
}

export default function OwnerAuth({ children }: Props) {
    const userIsOwner = useSelector(isOwner)
    const userInfoHasBeenFetched = useSelector(infoHasBeenFetched)
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfoHasBeenFetched && !userIsOwner) {
            navigate('/')
        }
    }, [children, userInfoHasBeenFetched])

    return (
        <Loading>
            {children}
        </Loading>
    )
}