import { MeleeWeaponObject, MeleeWeaponStatObject } from "@srd/common/interfaces/chapterInterfaces/EquipmentInterfaces"

interface Props {
    meleeWeaponStats: MeleeWeaponObject
}

export default function MeleeWeaponStats({ meleeWeaponStats }: Props) {
    const { axes, polearms, sidearms, swords, trauma } = meleeWeaponStats

    const headers = (
        <>
            <th>Size</th>
            <th>Damage</th>
            <th>Recovery</th>
            <th>Dam Type</th>
            <th>Parry</th>
            <th>Measure</th>
            <th>Bonus</th>
        </>
    )

    function populateBodyRows({ name, size, damage, recovery, damageType, parry, measure, bonus, oneHanding, brace }: MeleeWeaponStatObject, index: number, isPolearm?: boolean) {
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>{size}</td>
                <td>{damage}</td>
                <td>{recovery}</td>
                <td>{damageType}</td>
                <td>{parry}</td>
                <td>{measure}</td>
                <td>{bonus ? 'Yes' : ''}</td>
                {isPolearm && <>
                    <td>{oneHanding ? 'Yes' : ''}</td>
                    <td>{brace ? 'Yes' : ''}</td>
                </>}
            </tr>
        )
    }

    return (
        <div className="responsive-table">
            <table className='no-float justify-left center-not-first-column'>
                <thead>
                    <tr>
                        <th>Axes</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {axes.map((weapon, index) => populateBodyRows(weapon, index))}
                </tbody>
                <thead>
                    <tr>
                        <th>Polearms</th>
                        {headers}
                        <th>1-Handable?</th>
                        <th>Braceable?</th>
                    </tr>
                </thead>
                <tbody>
                    {polearms.map((weapon, index) => populateBodyRows(weapon, index, true))}
                </tbody>
                <thead>
                    <tr>
                        <th>Sidearms</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {sidearms.map((weapon, index) => populateBodyRows(weapon, index))}
                </tbody>
                <thead>
                    <tr>
                        <th>Swords</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {swords.map((weapon, index) => populateBodyRows(weapon, index))}
                </tbody>
                <thead>
                    <tr>
                        <th>Trauma</th>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {trauma.map((weapon, index) => populateBodyRows(weapon, index))}
                </tbody>
            </table>
        </div>
    )
}