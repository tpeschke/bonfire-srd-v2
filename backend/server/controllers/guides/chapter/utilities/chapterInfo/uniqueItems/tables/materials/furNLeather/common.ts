import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const commonFurOrLeather: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Material",
            "Type",
            "Price Multiplier",
            "Bonus",
            "Conf Bonus"
        ]
    ],
    rows: [
        ["1 - 2", "Cow", "Leather", "1", "", ""],
        ["3 - 4", "Chamois", "Leather", "1.5", "Ignore the first Wear gained", "+1"],
        ["5 - 6", "Other Animal", "Leather", "1.5", "Ignore the first Wear gained", "+1"],
        ["7 - 8", "Marten", "Fur", "1.5", "+3 vs Heat", "+1"]
    ]
}

export default commonFurOrLeather