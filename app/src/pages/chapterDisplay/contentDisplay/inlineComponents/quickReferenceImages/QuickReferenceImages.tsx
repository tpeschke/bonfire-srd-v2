import './QuickReferenceImages.css'
import Image from '../../../../../components/image/Image';

interface Props {
    src: [string, string]
}

export default function QuickReferenceImages({ src }: Props) {
    const [front, back] = src
    return (
        <div className='flex quick-reference-images'>
            <div>
                <p><em>Front</em></p>
                <Image src={front} goran={false} removeFloat={true} />
            </div>
            <div>
                <p><em>Back</em></p>
                <Image src={back} goran={false} removeFloat={true} />
            </div>
        </div>
    )
}