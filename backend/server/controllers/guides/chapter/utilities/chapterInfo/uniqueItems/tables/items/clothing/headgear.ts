import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const headgear: UniqueItemTable = {
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
            "Engraving/Stitching"
        ]
    ],
    rows: [
        ["1", "Bandana", 0.05, "Cloth", "S", 6, 2],
        ["2", "Barbette & Fillet", 0.1, "Cloth", "S", 3, 3],
        ["3", "Beret", 5, "1-7 Cloth\n8-10 Leather", "S", 4, 2],
        ["4", "Cap", 0.1, "1-4 Cloth\n5-7 Leather\n8-9 Fur\n10 Metal", "S", 3, 1],
        ["5", "Caul", 0.05, "1-8 Cloth\n9-10 Leather", "S", 2, 1],
        ["6", "Chaperon", 15, "Cloth", "L", 4, 4],
        ["7", "Clogs", 3, "Cloth", "S", 9, 1],
        ["8", "Coif", 0.03, "1-8 Cloth\n9-10 Leather", "S", 1, 1],
        ["9", "Ferroniere", 50, "1-7 Cloth\n8-10 Leather", "S", 1, 1],
        ["10", "Fez", 0.3, "Cloth", "M", 1, 1],
        ["11-12", "Hat", 0.3, "1-3 Felt\n4-7 Straw\n8 Cloth\n9 Leather\n10 Fur", "S", 1, 1],
        ["13", "Headdress", 1, "Feathers (see Animal > Air)\nwith\n1-3 Cloth\n4-10 Leather", "L", 9, 9],
        ["14-15", "Hood", 0.5, "1-7 Cloth\n8-10 Leather", "S", 1, 1],
        ["16-17", "Skullcap", 0.05, "1-6 Cloth\n7-9 Leather\n10 Metal", "S", 2, 1],
        ["18", "Turban", 0.2, "Cloth", "L", 4, 2],
        ["19", "Veil", 0.3, "Cloth", "S", 1, 1],
        ["20", "Wimple", 0.5, "Cloth", "S", 1, 1]
    ]
}

export default headgear