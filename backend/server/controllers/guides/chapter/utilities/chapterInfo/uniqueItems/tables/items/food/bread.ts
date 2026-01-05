import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const bread: UniqueItemTable = {
    headers: [
        [
            {
                label: "",
                colSpan: 4
            },
            {
                label: "Details",
                colSpan: 1
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Size",
            "Colors"
        ]
    ],
    rows: [
        ["1-2", "Corn Dodgers", 0.3, "T", 1],
        ["3-4", "Fry Bread", 0.4, "T", 1],
        ["5-6", "Horse Bread", 0.38, "T", 1],
        ["7", "Manchet Bread", 1.3, "T", 1],
        ["8", "Maslin Bread", 0.48, "T", 1],
        ["9", "Pan & Egg Bread", 1, "T", 1],
        ["10", "Sop Bread", 0.86, "T", 1],
        ["11-12", "Strongbread", 0.3, "T", 1],
        ["13", "Wastel Bread", 1, "T", 1],
        ["14-16", "Rations, Day", 2.5, "T", 1],
        ["17-18", "Biscuit, Hardtack", 0.2, "T", 1],
        ["19", "Bread, Rye", 0.44, "T", 1],
        ["20", "Bread, Wheat", 0.5, "T", 1]
    ]
}

export default bread