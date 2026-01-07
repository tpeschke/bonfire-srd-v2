import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const gemSize: UniqueItemTable = {
    headers: [
        [
            "Roll",
            "Size (mm)",
            "Price Modifier",
        ]
    ],
    rows: [
        ["1-81", 0.2, 0.1],
        ["82-89", 0.5, 0.25],
        ["90-93", 1, 0.5],
        ["94-95", 1.5, 0.75],
        ["96", 2, 1],
        ["97", 2.5, 2],
        ["98", 3, 5],
        ["99", 4, 10],
        ["100", 5, 20]
    ]
}

export default gemSize