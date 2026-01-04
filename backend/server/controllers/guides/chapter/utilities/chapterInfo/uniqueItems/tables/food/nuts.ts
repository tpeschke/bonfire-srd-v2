import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const nuts: UniqueItemTable = {
    headers: [
        [
            {
                label: "",
                colSpan: 4
            },
            {
                label: "Details",
                colSpan: 1
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Size",
            "Colors"
        ]
    ],
    rows: [
        ["1", "Acorns", 0.3, "M", 1],
        ["2", "Almonds", 0.5, "M", 1],
        ["3", "Chestnuts", 0.3, "M", 1],
        ["4", "Hazelnuts", 0.3, "M", 1],
        ["5", "Pinenuts", 0.3, "M", 1],
        ["6", "Pistachios", 0.5, "M", 1],
        ["7", "Sesame Seeds", 0.5, "M", 1],
        ["8", "Walnuts", 0.5, "M", 1]
    ]
}

export default nuts