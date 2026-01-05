import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const traumaUniqueItems: UniqueItemTable = {
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
                colSpan: 3
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
            "Gems",
        ]
    ],
    rows: [
        ["1 - 9", "Bec De Corbin", 75, "Metal & Wood", "L", 2, 4, 1],
        ["10 - 18", "Bludgeon", 8, "1 - 6 Wood\n7 - 10 Metal", "S", 6, 2, ""],
        ["19 - 28", "Club", 5, "Wood", "M", 4, 2, ""],
        ["29 - 37", "Mace", 48, "Handle:\n1 - 7 Wood\n8 - 10 Metal\nHead:\nMetal", "M", 2, 5, 2],
        ["38 - 46", "Maul", 35, "Handle:\n1 - 7 Wood\n8 - 10 Metal\nHead:\n1 - 7 Wood\n8 - 10 Metal", "L", 2, 4, 1],
        ["47 - 55", "Goedendag", 24, "Wood & Metal", "L", 3, 3, ""],
        ["56 - 64", "Great Hammer", 200, "Wood & Metal", "H", 2, 6, 2],
        ["65 - 73", "Peasant's Flail", 20, "Handle:\n1 - 7 Wood\n8 - 10 Metal\nHead:\n1 - 7 Wood\n8 - 10 Metal", "L", 2, 2, ""],
        ["74 - 82", "Quarterstaff", 8, "1 - 8 Wood\n9 - 10 Metal", "L", 3, 7, 1],
        ["83 - 91", "War Flail", 50, "Wood & Metal", "M", 5, 2, 2],
        ["92 - 100", "War Hammer", 83, "Wood & Metal", "M", 2, 6, 2]
    ]
}

export default traumaUniqueItems