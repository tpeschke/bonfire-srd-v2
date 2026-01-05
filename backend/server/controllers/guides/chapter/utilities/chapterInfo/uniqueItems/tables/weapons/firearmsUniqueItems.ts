import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const firearmsUniqueItems: UniqueItemTable = {
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
        ["1 - 2", "Fire Lance", 105, "Wood & Metal", "L", 4, 8, 4],
        ["3 - 4", "Hakenbuchse", 235, "Wood & Metal", "L", 5, 3, 6],
        ["5 - 6", "Handgonne", 110, "Wood & Metal", "M", 6, 5, 5]
    ]
}

export default firearmsUniqueItems