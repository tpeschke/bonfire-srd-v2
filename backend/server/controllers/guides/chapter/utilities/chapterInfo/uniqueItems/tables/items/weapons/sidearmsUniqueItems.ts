import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const sidearmsUniqueItems: UniqueItemTable = {
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
        ["1 - 12", "Brass Knuckles", 10, "Metal", "S", 3, 3, 1],
        ["13 - 25", "Cinquedea", 15, "Hilt: Leather & Wood;\nBlade: Metal", "S", 3, 3, 1],
        ["26 - 38", "Dagger", 12, "Hilt: Leather & Wood;\nBlade: Metal", "S", 3, 3, 1],
        ["39 - 51", "Knife", 10, "Hilt: Leather & Wood;\nBlade: Metal", "S", 3, 3, 1],
        ["52 - 63", "Stiletto", 17, "Hilt: Leather & Wood;\nBlade: Metal", "S", 3, 3, 2],
        ["64 - 76", "Dusack", 49, "Hilt: Leather & Wood;\nBlade: Metal", "S", 3, 3, 2],
        ["77 - 88", "Katzbalger", 55, "Hilt: Leather & Wood;\nBlade: Metal", "S", 3, 3, 2],
        ["89 - 100", "Scourge", 10, "Handle: Wood/Metal/Leather", "M", 3, 3, 1]
    ]
}

export default sidearmsUniqueItems