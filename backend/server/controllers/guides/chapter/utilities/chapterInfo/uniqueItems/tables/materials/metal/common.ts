import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const commonMetal: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Material",
            "Price Multiplier",
            "Bonus",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Lead", "0.5", "+5 damage vs Outsiders / +3 DR vs Outsiders", ""],
        ["3 - 4", "Iron", "1", "None", ""],
        ["5 - 6", "Tin", "1.25", "Ignore the first Wear gained", ""]
    ]
}

export default commonMetal