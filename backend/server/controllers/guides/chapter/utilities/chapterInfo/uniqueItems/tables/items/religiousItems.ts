import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const religiousItems: UniqueItemTable = {
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
            "Gems",
        ]
    ],
    rows: [
        ["1-2", "Altar Cloth", 10, "1-9 Cloth;\n10 Leather", "S", 7, 9, ""],
        ["3", "Aspergillum", 5, "Metal & Wood", "S", 1, 3, 2],
        ["4-5", "Brazier", 5, "Metal", "S", 1, 7, 2],
        ["6-8", "Candle, Temple", 0.5, "Wax", "M", 8, 2, ""],
        ["9", "Censer", 3, "Metal", "S", 1, 6, 2],
        ["10", "Chalise", 5, "Metal", "T", 2, 6, 2],
        ["11-13", "Holy Symbol", 5, "1-7 Metal;\n8-10 Wood", "T", 3, 5, 2],
        ["14", "Incense", 10, "See Food > Spices & Seasonings", "D", 9, "", ""],
        ["15", "Pilgrimage Badge", 1, "1-6 Cloth;\n7-8 Leather;\n9 Wood;\n10 Metal", "D", 7, 9, ""],
        ["16", "Prayer Beads", 1, "1-6 Wood;\n7-10 Metal", "D", 9, 5, 1],
        ["17", "Sacred Texts", 50, "Cover: 1 Metal;\n2-7 Cloth;\n8-9 Leather;\n10 Wood;\nInterior: Paper Product", "S", 6, 7, ""],
        ["18", "Snuffing Bell", 2, "Metal", "T", 2, 4, 1],
        ["19", "Talisman", 1, "1-2 Metal;\n3-6 Wood;\n7 Leather;\n8-10 Cloth", "T", 5, 1, 2],
        ["20", "Totem", 0.5, "1-4 Metal;\n5-8 Wood;\n9 Leather;\n10 Cloth", "T", 4, 1, 1]
    ]
}

export default religiousItems