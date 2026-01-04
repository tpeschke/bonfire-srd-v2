import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const lightArmor: UniqueItemTable = {
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
        ["1-2", "Buff Coat", 130, "Leather", "S", 8, 2],
        ["3-4", "Gambeson", 90, "Cloth", "S", 8, 2],
        ["5-6", "Leather", 190, "Leather", "S", 4, 2, 1]
    ]
}

export default lightArmor