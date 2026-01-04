import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const tableToDetermineArmor: UniqueItemTable = {
    headers: [
        [
            "d20",
            "Type"
        ]
    ],
    rows: [
        ["1 - 14", "Light Armor"],
        ["15 - 19", "Medium Armor"],
        ["20", "Heavy Armor"]
    ]
}

export default tableToDetermineArmor