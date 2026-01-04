import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const tradeTools: UniqueItemTable = {
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
            "Engravings",
        ]
    ],
    rows: [
        ["1-3", "Adze", 5, "Wood & Metal", "S", 1, 1, ""],
        ["4-6", "Auger", 15, "Wood & Metal", "L", 1, 1, ""],
        ["7-9", "Ax", 12, "Wood & Metal", "M", 1, 2, ""],
        ["10-12", "Bear Trap", 40, "Metal", "M", 1, 1, ""],
        ["13-15", "Bellows", 1, "Wood;\nwith 1-8 Leather,\n9-10 Cloth", "M", 2, 1, ""],
        ["16-18", "Bow Drill", 2, "Wood & Metal", "S", 1, 1, ""],
        ["19-21", "Branding Iron", 0.5, "Metal", "S", 1, 1, ""],
        ["22-24", "Brush, Cleaning", 0.5, "Wood", "S", 1, 1, ""],
        ["25-27", "Carding Comb", 3, "Wood & Metal", "S", 2, 3, ""],
        ["28-30", "Carpenter’s Square", 0.5, "1-8 Wood;\n9-10 Metal", "S", 2, 2, ""],
        ["31-33", "Chisel", 0.5, "Metal", "T", 1, 1, ""],
        ["34-36", "Cleaver", 12, "Wood & Metal", "S", 1, 1, ""],
        ["37-39", "Drill", 6, "Metal", "T", 1, 1, ""],
        ["40-42", "File", 7, "Metal", "T", 1, 1, ""],
        ["43-44", "Funnel", 3, "1-8 Waxed Leather;\n9-10 Waxed Cloth", "S", 1, 1, ""],
        ["45-46", "Glass Cutter", 15, "Wood & Metal", "T", 2, 2, ""],
        ["47-48", "Hammer", 10, "Wood & Metal", "T", 1, 2, ""],
        ["49-50", "Hatchet", 12, "Wood & Metal", "S", 1, 1, ""],
        ["51-52", "Hoe", 10, "Wood & Metal", "L", 1, 1, ""],
        ["53-54", "Horseshoe", 1, "Metal", "T", 1, 1, ""],
        ["55-56", "Mallet", 1, "Wood", "T", 1, 1, ""],
        ["57-58", "Nail 3”", 0.5, "Metal", "F", 1, 1, ""],
        ["59-60", "Oar", 15, "Wood", "M", 2, 1, ""],
        ["61-62", "Paddle", 15, "Wood", "L", 2, 1, ""],
        ["63-64", "Pick", 20, "Wood & Metal", "L", 1, 1, ""],
        ["65-66", "Pitch Fork", 7, "Wood & Metal", "L", 1, 1, ""],
        ["67-68", "Planer", 3, "Wood & Metal", "S", 1, 1, ""],
        ["69-70", "Pliers", 1, "Metal", "T", 1, 1, ""],
        ["71-72", "Powder, Chalk", 0.1, "Chalk", "D", 4, "", ""],
        ["73-74", "Pully (2:1)", 15, "Wood", "T", 1, 1, ""],
        ["75-76", "Rake", 7, "Wood & Metal", "L", 1, 1, ""],
        ["77-78", "Saw", 13, "Wood & Metal", "S", 1, 1, ""],
        ["79-80", "Scissors", 8, "Wood & Metal", "T", 1, 1, ""],
        ["81-82", "Shears", 9, "Metal", "T", 1, 1, ""],
        ["83-84", "Shepherd's Crook", 3, "Wood", "L", 1, 2, ""],
        ["85-86", "Shovel", 9, "Wood & Metal", "L", 1, 1, ""],
        ["87-88", "Sickle", 9, "Wood & Metal", "S", 1, 2, ""],
        ["89-90", "Sledge", 12, "Wood & Metal", "S", 1, 1, ""],
        ["91-92", "Tongs", 3, "Metal", "T", 1, 1, ""],
        ["93-94", "Trowel", 1, "Wood & Metal", "T", 1, 1, ""],
        ["95-96", "Wedge", 0.5, "1-5 Wood;\n6-10 Metal", "T", 1, 1, ""],
        ["97-98", "Windlass", 5, "Metal", "T", 1, 2, ""],
        ["99-100", "Wire, 1d10 × 10 ft", 1, "Metal", "D", 3, "", ""]
    ]
}

export default tradeTools