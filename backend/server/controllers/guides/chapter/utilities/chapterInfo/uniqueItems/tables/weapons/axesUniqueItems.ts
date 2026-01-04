import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const axesUniqueItems: UniqueItemTable = {
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
        ["1", "Bardiche", 120, "Wood & Metal", "L", 1, 5],
        ["2", "Battle Axe", 90, "Wood & Metal", "M", 1, 5],
        ["3 - 4", "Handaxe", 12, "Wood & Metal", "S", 1, 5],
        ["5", "Horsemans Pick", 105, "Wood & Metal", "M", 1, 5],
        ["6", "Lochaber Axe", 117, "Wood & Metal", "L", 1, 5]
    ]
}

export default axesUniqueItems