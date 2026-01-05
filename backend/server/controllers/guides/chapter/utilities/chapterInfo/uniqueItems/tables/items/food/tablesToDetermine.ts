import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const tableToDetermineFood: UniqueItemTable = {
    headers: [
        [
            "d6",
            "Type"
        ]
    ],
    rows: [
        ["1", "Prepped Food"],
        ["2", "Bread"],
        ["3", "Fruit & Vegetables"],
        ["4", "Protein"],
        ["5", "Nuts"],
        ["6", "Spices & Seasonings"],
    ]
}

export default tableToDetermineFood