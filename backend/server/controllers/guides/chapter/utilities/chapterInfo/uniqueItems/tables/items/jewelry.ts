import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const jewelry: UniqueItemTable = {
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
            "Engravings/Stitching",
            "Gems"
        ]
    ],
    rows: [
        ["1-2", "Ring", 5, "Metal", "D", 2, 3],
        ["3", "Necklace", 1, "1-7 Metal;\n8-9 Cloth;\n10 both", "D", 2, 1, 3],
        ["4", "Fake Teeth", 1, "1-6 Ivory;\n7-9 Wood;\n10 Metal", "D", 3, 5, 1],
        ["5", "Earings", 0.5, "Metal", "F", 2, 2, 4],
        ["6", "Pendant", 1, "Metal", "F", 2, 2, 4],
        ["7", "Bangle", 1, "Metal", "F", 3, 2, 2],
        ["8", "Belly Chain", 1, "Metal", "F", 3, 1, 2],
        ["9", "Chatelaine", 10, "1-2 Metal;\n3-4 Cloth;\n5-8 Leather;\n9 Two;\n10 all three", "D", 4, 2, 2],
        ["10", "Pin", 1, "Metal", "F", 2, 2, 4],
        ["11", "Torc", 1, "1-7 Metal;\n8-9 Leather;\n10 both", "D", 2, 4, 3],
        ["12", "Bracelet", 1, "1-7 Metal;\n8-9 Leather;\n10 both", "F", 5, 4, 2],
        ["13", "Choker", 0.5, "1-5 Metal;\n6 Cloth;\n7-8 Leather;\n9 Two;\n10 all three", "F", 5, 2, 1],
        ["14", "Anklet", 0.5, "1-8 Metal;\n9 Cloth;\n10 both", "F", 3, 3, 2],
        ["15", "Armlet/Bracer", 1, "1-5 Metal;\n6 Cloth;\n7-8 Leather;\n9 Two;\n10 all three", "F", 4, 3, 3],
        ["16", "Slave Bracelet", 1, "Metal", "F", 4, 1, 2],
        ["17", "Prayer Beads", 0.5, "1-6 Cloth;\n7-9 Leather;\n10 both", "D", 1, 1, 1],
        ["18", "Brooch", 1, "Metal", "D", 2, 4, 4],
        ["19", "Locket", 1, "Metal", "D", 2, 2, 4],
        ["20", "Crown/Tiara", 20, "Metal", "S", 3, 4, 5]
    ]
}

export default jewelry