import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const tableToDetermineWeapon: UniqueItemTable = {
    headers: [
        [
            "d8",
            "Weapon Type",
        ]
    ],
    rows: [
        [1, "Axes"],
        [2, "Polearms"],
        [3, "Sidearms"],
        [4, "Swords"],
        [5, "Trauma"],
        [6, "Thrown"],
        [7, "Mechanical Ranged"],
        [8, "Firearms"]
    ]
}

export default tableToDetermineWeapon