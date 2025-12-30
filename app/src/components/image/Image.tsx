import './Image.css'

interface Props {
    src: string,
    isClass?: boolean,
    goran?: boolean,
    removeFloat?: boolean
}

export default function Image({ src, isClass = false, goran = true, removeFloat = false }: Props) {
    const cssClass = `${isClass ? 'class-image' : ''} ${removeFloat ? 'remove-float' : ''}`

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