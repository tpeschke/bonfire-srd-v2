import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const heavyArmor: UniqueItemTable = {
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
        ["1-2", "Full Plate", 2125, "Metal", "L", 2, 7, 2],
        ["3-4", "Plated Mail", 1140, "Metal", "L", 2, 6, 2],
        ["5-6", "Scale", 1075, "Metal", "L", 2, 6, 2]
    ]
}

export default heavyArmor