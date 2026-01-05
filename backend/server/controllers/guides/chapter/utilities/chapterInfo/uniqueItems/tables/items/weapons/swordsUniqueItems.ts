import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const swordsUniqueItems: UniqueItemTable = {
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
        ["1", "Arming Sword", 70, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["2", "Court Sword", 63, "Hilt:\nLeather & Wood\nBlade:\nMetal", "S", 3, 3, 2],
        ["3", "Estoc", 78, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["4", "Executioner's Sword", 250, "Hilt:\nLeather & Wood\nBlade:\nMetal", "H", 3, 3, 2],
        ["5", "Falchion", 80, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["6", "Koncerz", 83, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["7", "Longsword", 75, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["8", "Messer", 68, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["9", "Rapier", 80, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["10", "Sabre", 78, "Hilt:\nLeather & Wood\nBlade:\nMetal", "M", 3, 3, 2],
        ["11", "Schaivona", 60, "Hilt:\nLeather & Wood\nBlade:\nMetal", "S", 3, 3, 2],
        ["12", "Zweihander", 130, "Hilt:\nLeather & Wood\nBlade:\nMetal", "L", 3, 3, 2]
    ]
}

export default swordsUniqueItems