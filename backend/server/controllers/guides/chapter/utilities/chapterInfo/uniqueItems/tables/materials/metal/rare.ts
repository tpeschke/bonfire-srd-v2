import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const rareMetal: UniqueItemTable = {
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
        ["1 - 2", "Silver", "4", "Always counted as Pure Metal", "+3"],
        ["3 - 4", "Gold", "6", "None", "+5"]
    ]
}

export default rareMetal