import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const polearmsUniqueItems: UniqueItemTable = {
    headers: [
        [
            {
                label: "",
                colSpan: 3
            },
            {
                label: "Material",
                colSpan: 2
            },
            {
                label: "Details",
                colSpan: 2
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Base Material(s)",
            "Size",
            "Colors",
            "Engravings",
        ]
    ],
    rows: [
        ["1 - 7", "Ahlspiess", 17, "Wood & Metal", "L", 1, 3],
        ["8 - 14", "Bill", 17, "Wood & Metal", "L", 1, 3],
        ["15 - 21", "Glaive", 35, "Wood & Metal", "L", 1, 3],
        ["22 - 28", "Guisarme", 22, "Wood & Metal", "L", 1, 3],
        ["29 - 35", "Halberd", 42, "Wood & Metal", "L", 1, 3],
        ["36 - 40", "Lance", 45, "Wood & Metal", "L", 1, 3],
        ["41 - 47", "Lucerne", 37, "Wood & Metal", "L", 1, 3],
        ["48 - 54", "Military Fork", 19, "Wood & Metal", "L", 1, 3],
        ["55 - 61", "Pike", 10, "Wood & Metal", "H", 1, 3],
        ["62 - 66", "Planson", 20, "Wood & Metal", "S", 1, 3],
        ["67 - 73", "Ranseur", 33, "Wood & Metal", "L", 1, 3],
        ["74 - 80", "Short Spear", 16, "Wood & Metal", "M", 1, 3],
        ["81 - 87", "Sovnya", 32, "Wood & Metal", "L", 1, 3],
        ["88 - 94", "Voulge", 27, "Wood & Metal", "L", 1, 3],
        ["95 - 100", "War-scythe", 16, "Wood & Metal", "L", 1, 3]
    ]
}

export default polearmsUniqueItems