import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const householdItems: UniqueItemTable = {
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
            "Gems"
        ]
    ],
    rows: [
        ["1-3", "Sheets", 0.5, "Cloth", "L", 3, 2, ""],
        ["4-6", "Curtains", 5, "1-8 Cloth;\n9-10 Leather", "H", 4, 3, ""],
        ["7-9", "Sleeping Furs", 5, "Fur", "H", 2, 1, ""],
        ["10-12", "Bench, 1-person", 10, "1-9 Wood;\n10 Metal", "H", 1, 1, ""],
        ["13-15", "Carpet", 6, "1-3 Cloth;\n4-10 Wool", "G", 5, 2, ""],
        ["16-18", "Chair", 35, "1-9 Wood;\n10 Metal", "H", 1, 1, ""],
        ["19-21", "Chandelier", 20, "Metal", "G", 1, 4, 2],
        ["22-24", "Seat Cushion", 2, "1-8 Cloth;\n9-10 Leather", "M", 4, 3, ""],
        ["25-27", "Stool", 30, "1-9 Wood;\n10 Metal", "L", 1, 1, ""],
        ["28-30", "Tapestry", 20, "1-8 Wool;\n9 Leather;\n10 Cloth", "G", 9, 9, ""],
        ["31-33", "Bolter Cloth", 11, "Cloth", "L", 6, 1, ""],
        ["34-36", "Cauldron", 12, "Metal", "H", 1, 1, 1],
        ["37-38", "Coffin, Pastry", 0.5, "1-7 Wood;\n8-10 Metal", "S", 2, 2, 1],
        ["39-40", "Galley-pot", 1, "Metal", "S", 1, 1, ""],
        ["41-42", "Larding Needle", 0.05, "1-3 Metal;\n4-6 Wood;\n7 Bone (Sentient);\n8-9 Bone (Animal);\n10 Bone (Monster)", "S", 1, 1, ""],
        ["43-44", "Pipkin", 0.02, "Stone/Earthwork", "L", 2, 1, ""],
        ["45-46", "Porringers", 2, "1-8 Metal;\n9-10 Stone/Earthwork", "S", 2, 1, ""],
        ["47-48", "Querne", 16, "1-8 Stone/Earthwork;\n9-10 Wood", "M", 2, 1, ""],
        ["49-50", "Rowel", 0.4, "Metal", "S", 2, 1, ""],
        ["51-52", "Salamander Plate", 2, "Stone/Earthwork", "M", 2, 2, ""],
        ["53-54", "Trencher", 0.1, "Wood", "S", 2, 1, ""],
        ["55-56", "Tripod", 0.5, "Metal", "L", 1, 1, ""],
        ["57-58", "Bowl", 0.6, "1-6 Wood;\n7-10 Metal", "S", 4, 3, 1],
        ["59-60", "Drinking Horn", 1, "Horn", "S", 2, 2, 1],
        ["61-62", "Fork", 0.4, "Metal", "T", 1, 1, ""],
        ["63-64", "Goblet", 0.5, "1-3 Glass;\n4 Crystal;\n6-10 Metal", "T", 2, 3, 1],
        ["65-66", "Kettle", 3, "Metal", "S", 1, 2, ""],
        ["67-68", "Knife", 2.5, "Metal", "T", 1, 1, ""],
        ["69-70", "Ladle", 0.01, "1-7 Wood;\n8-10 Metal", "T", 1, 1, ""],
        ["71-72", "Mug", 0.1, "1-4 Wood;\n5-6 Metal;\n7-10 Stone/Earthwork", "T", 4, 3, 1],
        ["73-74", "Pan", 1, "Metal", "T", 1, 2, ""],
        ["75-76", "Pitcher", 0.5, "Metal", "T", 2, 2, 1],
        ["77-78", "Platter", 1.25, "1-7 Wood;\n8-10 Metal", "T", 4, 2, ""],
        ["79-80", "Pot hanger", 0.08, "Metal", "D", 1, 1, ""],
        ["81-82", "Salt Cellar", 0.3, "1-8 Metal;\n9-10 Wood", "D", 3, 2, 1],
        ["83-84", "Spit, Small", 0.3, "Metal", "S", 1, 1, ""],
        ["85-86", "Spoon", 0.3, "1-7 Metal;\n8-10 Wood", "T", 1, 1, ""],
        ["87-88", "Drinking Glass", "", "Glass", "D", 4, 2, ""],
        ["89-91", "Pillow", 4, "1-8 Cloth;\n9-10 Leather", "S", 4, 3, ""],
        ["92-94", "Rug, Woven", 10, "1-3 Cloth;\n4-5 Leather;\n6-10 Wool", "L", 8, 5, ""],
        ["95-97", "Rug, Fur", 20, "Fur", "L", 2, 1, ""],
        ["98-100", "Stein", 2, "Metal", "T", 1, 4, 1]
    ]
}

export default householdItems