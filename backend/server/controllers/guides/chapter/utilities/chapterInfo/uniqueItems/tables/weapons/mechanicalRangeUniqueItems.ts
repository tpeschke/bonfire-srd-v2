import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const mechanicalRangedUniqueItems: UniqueItemTable = {
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
        ["1 - 14", "Bellybow", 175, "Wood & Metal", "L", 3, 7, 1],
        ["15 - 29", "Composite Bow", 45, "1 - 3 Wood\n4 - 9 Horn\n10 Metal", "M", 7, 3, 1],
        ["30 - 43", "Crossbow", 75, "Wood & Metal", "L", 5, 3, 1],
        ["44 - 57", "Latchet Crossbow", 50, "Wood & Metal", "M", 6, 4, 1],
        ["58 - 71", "Longbow", 60, "1 - 9 Wood\n10 Metal", "L", 8, 2, 1],
        ["72 - 86", "Sling", 5, "1 - 3 Cloth\n4 - 6 Twine\n7 - 10 Thread", "S", 8, 5, ""],
        ["87 - 100", "Warbow", 255, "1 - 6 Wood\n7 - 10 Metal", "H", 9, 3, 2]
    ]
}

export default mechanicalRangedUniqueItems