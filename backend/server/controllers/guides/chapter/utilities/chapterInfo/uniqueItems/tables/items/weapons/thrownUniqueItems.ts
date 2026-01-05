import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const thrownUniqueItems: UniqueItemTable = {
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
        ["1 - 2", "Javelin", 8, "1 - 8 Wood\n9 - 10 Metal", "L", 7, 3],
        ["3 - 4", "Throwing Axe", 12, "Wood & Metal", "M", 3, 3],
        ["5 - 6", "Throwing Knife", 10, "Wood & Metal", "S", 2, 4]
    ]
}

export default thrownUniqueItems