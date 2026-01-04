import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const protein: UniqueItemTable = {
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
                colSpan: 1
            }
        ],
        [
            "Roll",
            "Type",
            "Base Price",
            "Base Material(s)",
            "Size",
            "Colors"
        ]
    ],
    rows: [
        ["1-2", "Meat (1 lb)", 20, "Animal > Land", "T", 1],
        ["3-4", "Fish (1 lb)", 10, "Animal > Water", "T", 1],
        ["5-6", "Fowl (1 lb)", 30, "Animal > Air", "T", 1]
    ]
}

export default protein