import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const mediumArmor: UniqueItemTable = {
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
            "Engraving/Stitching",
            "Gems"
        ]
    ],
    rows: [
        ["1", "Brigandine", 650, "Leather & Metal", "M", 7, 4, 1],
        ["2", "Chainmail", 390, "Metal", "M", 4, 2, 1],
        ["3", "Coat of Plates", 190, "Leather & Metal", "M", 4, 4, 1],
        ["4", "Lamellar", 370, "Mental & Cloth", "M", 3, 4, 1],
        ["5", "Banded Mail", 335, "Metal & Leather", "M", 2, 4, 1],
        ["6", "Breastplate", 200, "Metal & Cloth", "M", 4, 2, 1],
        ["7", "Ringmail", 350, "Leather & Metal", "M", 3, 4, 1],
        ["8", "Splintmail", 275, "Leather & Metal", "M", 3, 4, 1]
    ]
}

export default mediumArmor