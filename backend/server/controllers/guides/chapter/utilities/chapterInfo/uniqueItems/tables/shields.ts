import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const shieldsUniqueItems: UniqueItemTable = {
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
        ["1-11", "Buckler", 40, "1-5 Wood;\n6-10 Metal", "S", 4, 4, 1],
        ["12-22", "Clothe", 0.5, "Cloth", "S", 9, 1, ""],
        ["23-33", "Figure Eight", 60, "Wood & Leather", "M", 9, 3, 1],
        ["34-44", "Heater", 70, "1-8 Wood;\n9-10 Metal", "M", 6, 4, 1],
        ["45-56", "Hoplon", 45, "1-8 Wood;\n9-10 Metal", "M", 5, 3, 1],
        ["57-67", "Kite", 110, "Wood & Metal", "L", 7, 4, 1],
        ["68-78", "Pavise", 135, "Wood", "L", 9, 7, 1],
        ["79-89", "Round", 95, "Wood & Metal", "M", 6, 5, 1],
        ["90-100", "Tower", 100, "Wood", "L", 7, 6, 1]
    ]
}

export default shieldsUniqueItems