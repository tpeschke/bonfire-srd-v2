import "./ImpulseRoomList.css"
import { Impulse } from '@srd/common/interfaces/chapterInterfaces/ImpulseInterfaces'

interface Props {
    info: Impulse[]
}

export default function ImpulseRoomList({ info }: Props) {
    return (
        <div className="impulse-room-list">
            {info.map(impulse => {
                return (
                    <div key={impulse.name}>
                        <h3>{impulse.name}</h3>
                        {impulse.categories.map(category => {
                            return (
                                <div key={category.name}>
                                    <h4>{category.name}</h4>
                                    <ul>
                                        {category.rooms.map(room => {
                                            return <li key={room}>{room}</li>
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}