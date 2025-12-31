import './Image.css'

interface Props {
    src: string,
    isClass?: boolean,
    goran?: boolean,
    removeFloat?: boolean,
    unsetWidth?: boolean
}

export default function Image({ src, isClass = false, goran = true, removeFloat = false, unsetWidth = false }: Props) {
    const cssClass = `${isClass ? 'class-image' : ''} ${removeFloat ? 'remove-float' : ''} ${unsetWidth ? 'unset-width' : ''}`

    if (goran) {
        return (
            <a href='https://www.gorangligovic.com/' target='_blank'>
                <img className={cssClass} src={src} />
            </a>
        )
    }
    return (
        <img className={cssClass} src={src} />
    )
}