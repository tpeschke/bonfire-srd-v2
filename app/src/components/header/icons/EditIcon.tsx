import { useSelector } from 'react-redux'
import { isOwner } from '../../../redux/slices/userSlice'
import '../Header.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

interface Props {
    pathname: string
}

export default function EditIcon({ pathname }: Props) {
    const userIsOwner = useSelector(isOwner)

    const [pageIsEditable, setPageIsEditable] = useState(false)

    useEffect(() => {
        setPageIsEditable(pathname !== '/' && !pathname.includes('edit') && pathname.substring(0, 7) !== '/search')
    }, [pathname])

    return (
        <>
            {userIsOwner && pageIsEditable &&
                <Link className='header-spacer' to={`${pathname}/edit`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
            }
        </>
    )
}