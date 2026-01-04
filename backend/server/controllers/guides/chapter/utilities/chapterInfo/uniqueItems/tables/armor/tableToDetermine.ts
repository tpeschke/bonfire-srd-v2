import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const tableToDetermineArmor: UniqueItemTable = {
    tableName: "Alchemical Substances",
    headers: [
        [
            "d20",
            "Armor Type"
        ]
    ],
    rows: [
        ["1 - 14", "Light Armor"],
        ["15 - 19", "Medium Armor"],
        ["20", "Heavy Armor"]
    ]
}

export default tableToDetermineArmor