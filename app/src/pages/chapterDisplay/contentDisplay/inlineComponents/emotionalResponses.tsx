
export default function EmotionalResponses() {
    return (
        <div className="responsive-table">
            <table className="no-float justify-left">
                <thead>
                    <tr>
                        <td></td>
                        <td>Confrontation</td>
                        <td>Combat</td>
                        <td>Challenge</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan={2}>Depression</th>
                        <td>Give up hope</td>
                        <td>Give up hope</td>
                        <td>Give up hope</td>
                    </tr>
                    <tr className="sub-row italic">
                        <td>Concede any remaining arguments</td>
                        <td>Surrender if possible, otherwise, start falling back</td>
                        <td>-1 Position on future Checks</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Disgust</th>
                        <td>Refuse to negotiate</td>
                        <td>Refuse to engage</td>
                        <td>Sickened</td>
                    </tr>
                    <tr className="sub-row italic">
                        <td>Can't initiate Confrontations / not on the fence about dealing with enemy</td>
                        <td>Cannot engage enemy willingly; can only be defensive against them</td>
                        <td>+1d4! Stress / 2 Ranks on each Check against Obstacle</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Fury</th>
                        <td>Misdirect anger</td>
                        <td>Full on attack</td>
                        <td>Lose focus and lash out</td>
                    </tr>
                    <tr className="sub-row italic">
                        <td>Give an ally a negative Relationship with you. Rank = 1/2 Rank</td>
                        <td>-2 Penalty to next Def Check; cannot disengaged from enemy</td>
                        <td>Equipment gains 1 Wear / 2 Ranks</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Joy</th>
                        <td>Really engage with your opponent</td>
                        <td>Revel in the joy of battle</td>
                        <td>Throw yourself into the problem</td>
                    </tr>
                    <tr className="sub-row italic">
                        <td>Give your opponent a positive Relationship with you. Rank = 1/2 Rank</td>
                        <td>+1 Position on future Checks</td>
                        <td>Remove 1d4! Stress / 2 Ranks</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Surprise</th>
                        <td>Get thrown off your game</td>
                        <td>Try to reassess the situation</td>
                        <td>Second guess yourself</td>
                    </tr>
                    <tr className="sub-row italic">
                        <td>-1 Position on future Checks</td>
                        <td>Delay your next action by 1 Second / Rank; fall back</td>
                        <td>+1d4! Stress / 2 Ranks on each Check against Obstacle</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Terror</th>
                        <td>Excuse yourself from the situation</td>
                        <td>Run for you life!</td>
                        <td>Give up; it's too much for you</td>
                    </tr>
                    <tr className="sub-row italic">
                        <td>Concede any remaining arguments</td>
                        <td>See Flee Rules</td>
                        <td>Can't retry that Obstacle</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}