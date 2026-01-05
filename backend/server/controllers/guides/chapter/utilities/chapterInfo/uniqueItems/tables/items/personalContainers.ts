import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const personalContainers: UniqueItemTable = {
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
            "Engravings/Stitching",
            "Gems",
        ]
    ],
    rows: [
        ["1-2", "Amphora", 0.5, "Stone/Earthwork", "L", 9, 7, 1],
        ["3-4", "Backpack, Large", 15, "1-7 Cloth;\n8-10 Leather", "S", 3, 1, ""],
        ["5-6", "Backpack, Medium", 10, "1-7 Cloth;\n8-10 Leather", "S", 3, 1, ""],
        ["7-8", "Backpack, Small", 9, "1-7 Cloth;\n8-10 Leather", "S", 3, 1, ""],
        ["9-10", "Bag, Medium", 6.5, "1-8 Cloth;\n9-10 Leather", "S", 3, 1, ""],
        ["11-12", "Bag, Small", 5, "1-8 Cloth;\n9-10 Leather", "S", 3, 1, ""],
        ["13-14", "Bandoleer", 5, "1-4 Cloth;\n5-10 Leather", "T", 1, 2, ""],
        ["15-16", "Barrel, 12 gal", 10, "Wood", "S", 1, 1, ""],
        ["17-18", "Basket, Medium", 10, "Wicker", "S", 1, "", ""],
        ["19-20", "Basket, Small", 5, "Wicker", "S", 1, "", ""],
        ["21-22", "Beaker", 50, "Glass", "D", 1, "", ""],
        ["23-24", "Bottle", 0.04, "1-5 Glass;\n6-10 Metal", "T", 2, 1, ""],
        ["25-26", "Box, Medium", 10, "1-9 Wood;\n10 Metal", "S", 3, 1, ""],
        ["27-28", "Box, Small", 5, "1-8 Wood;\n9-10 Metal", "S", 3, 1, ""],
        ["29-30", "Bucket, 1 gal", 3, "Wood", "S", 1, "", ""],
        ["31-32", "Bucket, 5 gal", 5, "Wood", "S", 1, "", ""],
        ["33-34", "Canteen", 2, "1-8 Metal;\n9-10 Leather", "S", 3, 3, 1],
        ["35-36", "Case, Map/Scroll", 6, "1-2 Wood;\n3-4 Metal;\n5-6 Leather;\n7-10 Waxed Cloth", "S", 3, 4, 1],
        ["37-38", "Cask, 2 gallon", 3, "Wood", "S", 1, 1, ""],
        ["39-40", "Chest, Medium", 6, "1-8 Wood;\n9-10 Metal", "L", 1, 2, ""],
        ["41-42", "Chest, Small", 3, "1-9 Wood;\n10 Metal", "M", 1, 2, ""],
        ["43-44", "Coin Purse", 0.4, "1-5 Cloth;\n6-10 Leather", "T", 4, 3, ""],
        ["45-46", "Cup", 0.7, "1-3 Metal;\n4-9 Stone/Earthwork;\n10 Porcelain", "T", 1, 1, 1],
        ["47-49", "Flask", 0.7, "Metal", "T", 1, 4, 1],
        ["50-52", "Jar", 0.7, "1-3 Glass;\n4-10 Stone/Earthwork", "T", 1, 1, ""],
        ["53-55", "Jug", 5, "1-3 Metal;\n4-10 Stone/Earthwork", "S", 1, 1, ""],
        ["56-58", "Mug", 0.02, "Stone/Earthwork", "T", 1, 2, ""],
        ["59-61", "Pitcher", 0.5, "Stone/Earthwork", "S", 1, 2, ""],
        ["62-64", "Pot, Small", 1.2, "1-7 Stone/Earthwork;\n8-10 Metal", "S", 1, 1, ""],
        ["65-67", "Pouch, Belt, Medium", 1.2, "1-5 Cloth;\n6-10 Leather", "S", 3, 1, ""],
        ["68-70", "Pouch, Belt, Small", 0.5, "1-5 Cloth;\n6-10 Leather", "S", 3, 1, ""],
        ["71-73", "Quiver", 2.5, "1-2 Cloth;\n3-6 Leather;\n7 Metal;\n8-10 Wood", "S", 4, 2, 1],
        ["74-76", "Ring, Poison Container", 15, "Metal", "D", 4, 4, 3],
        ["77-79", "Saddlebags, Large", 15, "1-2 Cloth;\n3-10 Leather", "H", 3, 2, 1],
        ["80-82", "Saddlebags, Medium", 10, "1-3 Cloth;\n4-10 Leather", "L", 3, 2, 1],
        ["83-85", "Saddlebags, Small", 5, "1-4 Cloth;\n5-10 Leather", "M", 3, 2, 1],
        ["86-88", "Scabbard", 2.5, "1-2 Cloth;\n3-6 Leather;\n7 Metal;\n8-10 Wood", "S", 4, 3, 2],
        ["89-91", "Sheathe, Small", 5, "1-2 Cloth;\n3-6 Leather;\n7 Metal;\n8-10 Wood", "S", 4, 2, 2],
        ["92-94", "Sheathe, Wrist", 10, "1-2 Cloth;\n3-6 Leather;\n7 Metal;\n8-10 Wood", "T", 2, 1, ""],
        ["95-97", "Vial Holder, Belt", 5, "1-4 Cloth;\n5-10 Leather", "T", 2, 2, ""],
        ["98-100", "Waterskin", 4.5, "Leather", "S", 1, 2, ""]
    ]
}

export default personalContainers