import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const body: UniqueItemTable = {
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
        ["1-2", "Apron", 0.02, "1-4 Leather\n5-10 Cloth", "M", 3, 1, ""],
        ["3-5", "Belt", 0.05, "1-8 Leather\n9-10 Cloth", "S", 2, 1, 1],
        ["6-8", "Braies", 0.02, "1 Leather\n2-10 Cloth", "S", 6, 3, ""],
        ["9-11", "Breeches", 0.05, "1 Leather\n2-10 Cloth", "M", 6, 3, ""],
        ["12-14", "Buckle", 0.1, "1-8 Metal\n9-10 Wood", "S", 4, 3, 1],
        ["15-17", "Cape", 1, "1 Leather\n2-10 Cloth", "M", 6, 2, ""],
        ["18-20", "Cassock", 25, "Cloth", "M", 4, 2, 1],
        ["21-23", "Chasbule", 0.3, "Cloth", "L", 6, 3, ""],
        ["24-26", "Chemise", 0.1, "Cloth", "M", 2, 2, ""],
        ["27-29", "Choker", 0.01, "1-7 Cloth\n8 Leather\n10 Fur", "S", 4, 3, 1],
        ["30-32", "Cloak", 3, "1-5 Cloth\n6-8 Leather\n9-10 Fur", "M", 6, 2, ""],
        ["33-35", "Coat", 10, "1-3 Cloth\n4-10 Leather", "M", 5, 3, ""],
        ["36-38", "Codpiece", 1, "1-6 Cloth\n7-9 Leather\n10 Metal", "T", 9, 6, 1],
        ["39-41", "Cote", 12, "1 Leather\n2-10 Cloth", "M", 5, 5, ""],
        ["42-44", "Cotehardie", 6, "1-3 Leather\n4-10 Cloth", "M", 7, 5, ""],
        ["45-47", "Cyclas", 3, "Cloth", "M", 6, 5, ""],
        ["48-50", "Doublet", 3, "1-3 Leather\n4-10 Cloth", "M", 7, 6, 1],
        ["51-53", "Drawers", 0.06, "Cloth", "S", 9, 1, ""],
        ["54-56", "Dress", 3, "1 Leather\n2-10 Cloth", "L", 9, 6, 1],
        ["57-59", "Fullclothe", 5, "1 Leather\n2-10 Cloth", "M", 3, 5, ""],
        ["60-62", "Gamash", 0.2, "1 Leather\n2-10 Cloth", "M", 3, 5, ""],
        ["63-65", "Gloves", 1, "1-3 Cloth\n4-8 Leather\n9-10 Fur", "S", 4, 1, ""],
        ["66-68", "Hosiery", 4, "Cloth", "S", 7, 4, ""],
        ["69-71", "Houpeland", 6, "Cloth", "M", 6, 4, ""],
        ["72-74", "Jerkin", 38, "1 Leather\n2-10 Cloth", "M", 6, 7, ""],
        ["75-77", "Kilt", 18, "1 Leather\n2-10 Cloth", "S", 9, 3, ""],
        ["78-80", "Liripipe", 0.5, "1 Leather\n2-10 Cloth", "T", 5, 4, ""],
        ["81-82", "Mittens", 0.3, "1-3 Cloth\n4-5 Leather\n6-10 Fur", "T", 6, 4, ""],
        ["83-84", "Robes", 1, "Cloth", "M", 7, 6, 1],
        ["85-86", "Sash", 5.5, "1 Leather\n2-10 Cloth", "S", 8, 3, 1],
        ["87-88", "Scarf", 5.5, "1-6 Cloth\n7-10 Fur", "S", 8, 4, ""],
        ["89-90", "Shirt", 1, "1 Leather\n2-10 Cloth", "S", 6, 4, ""],
        ["91-92", "Surcote", 2, "1-3 Leather\n4-10 Cloth", "M", 8, 7, ""],
        ["93-94", "Sweater", 12, "Wool", "M", 7, 9, ""],
        ["95-96", "Toga", 3, "Cloth", "M", 2, 1, ""],
        ["97-98", "Tunic", 1, "1 Leather\n2-10 Cloth", "S", 6, 3, ""],
        ["99-100", "Vest", 9, "1-4 Leather\n5-10 Cloth", "S", 6, 3, ""]
    ]
}

export default body