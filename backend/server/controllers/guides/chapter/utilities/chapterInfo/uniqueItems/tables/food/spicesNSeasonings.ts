import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const spicesNSeasonings: UniqueItemTable = {
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
        ["1-2", "Honey (8 oz)", 1, "D", 1],
        ["3", "Sugar (1 lb)", 1, "M", 1],
        ["4", "Cinnamon (1 lb)", 4, "M", 1],
        ["5", "Ginger (1 lb)", 1.5, "M", 1],
        ["6", "Mace (1 lb)", 5, "M", 1],
        ["7", "Molasses (1 lb)", 4, "M", 1],
        ["8", "Mustard (1 lb)", 1, "M", 1],
        ["9", "Nutmeg (1 lb)", 2.5, "M", 1],
        ["10", "Pectin (cup)", 0.2, "D", 1],
        ["11", "Salt (1 lb)", 0.45, "M", 1],
        ["12", "Saffron (1 lb)", 160, "M", 1]
    ]
}

export default spicesNSeasonings