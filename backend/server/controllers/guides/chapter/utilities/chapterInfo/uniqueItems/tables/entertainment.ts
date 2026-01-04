import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const entertainment: UniqueItemTable = {
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
            "Gems"
        ]
    ],
    rows: [
        ["1-5", "Ankle Bells", 3, "Metal", "S", 4, 3, 2],
        ["6-10", "Bean Bags", 3, "1-3 Leather\n4-10 Cloth", "D", 8, 2, ""],
        ["11-15", "Cane, Collapsing", 4, "1-7 Wood\n8-10 Metal", "S", 7, 1, 6],
        ["16-20", "Cards", 0.5, "Paper Product", "T", 8, "", ""],
        ["21-25", "Cards, Marked", 1, "Paper Product", "T", 8, "", ""],
        ["26-30", "Cards, Tarot", 1, "Paper Product", "T", 9, "", ""],
        ["31-35", "Chest Set", 5, "1-9 Wood\n10 Metal", "M", 3, 2, 3],
        ["36-40", "Dice", 0.2, "1-5 Wood\n6 Ivory\n7 Bone, Sentient\n8-9 Bone, Animal\n10 Bone, Monster", "D", 4, "", 1],
        ["41-45", "Dice, Loaded", 5, "1-5 Wood\n6 Ivory\n7 Bone, Sentient\n8-9 Bone, Animal\n10 Bone, Monster", "D", 4, "", 1],
        ["46-50", "Fan, Handheld", 3, "1-4 Cloth\n5-7 Wood\n8-10 Paper Product", "S", 9, 6, ""],
        ["51-55", "Finger Cymbals", 2, "Metal", "T", 3, 3, ""],
        ["56-60", "Hair Dye", 0.1, "5 sc", "T", 9, "", ""],
        ["61-64", "Hair Extensions", 0.1, "1 sc", "S", 7, "", ""],
        ["65-68", "Horn, Speaking", 4, "1-4 Cloth\n5-7 Leather\n8-9 Wood\n10 Metal", "S", 4, 2, ""],
        ["69-72", "Knife, Juggling", 14, "Metal", "S", 5, 1, 1],
        ["73-76", "Knife, Retractable", 12, "Metal", "S", 5, 2, 3],
        ["77-80", "Marionette", 7, "Wood", "S", 9, 5, 1],
        ["81-85", "Perfumes", 15, "3 sc", "T", 7, 3, 4],
        ["86-90", "Puppet", 10, "1-5 Cloth\n6-10 Leather", "T", 9, 3, ""],
        ["91-95", "Tobacco", 1, "1-5 Chewing\n6-10 Smoking", "T", 1, "", ""],
        ["96-100", "Toy Sword", 2, "Wood", "T", 3, 2, 1]
    ]
}

export default entertainment