const adventuringGear = {
    tableName: "Adventuring Gear",
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
            "Engravings/Stitching",
        ]
    ],
    rows: [
        ["1-2", "Bedroll", 1, "1-4 Cloth; 5-8 Leather; 9-10 Fur", "M", 4, 3],
        ["3-4", "Blade Pole", 3, "Wood & Metal", "L", 1, 1],
        ["5-6", "Blanket", 4.5, "1-6 Cloth; 7 Leather; 8-10 Fur", "S", 4, 4],
        ["7-8", "Block & Tackle", 5, "Wood", "S", 1, 1],
        ["9-10", "Cage, Rabbit Trap", 16, "Metal", "M", 1, 1],
        ["11-12", "Caltrops", 0.3, "Metal", "S", 1, 1],
        ["13-14", "Camp Bed", 16, "1-5 Cloth; 6-9 Leather; 10 Fur", "L", 5, 1],
        ["15-16", "Chain, 1d10 ft", 3, "Metal", "S", 1, 1],
        ["17-18", "Chalk Stick", 0.05, "Chalk", "S", 7, 1],
        ["19-20", "Climbing Harness", 8, "1-3 Cloth; 4-10 Leather", "S", 2, 2],
        ["21", "Compass", 75, "Metal", "S", 1, 3],
        ["22-23", "Crampons, pair", 4, "Leather & Metal", "S", 1, 1],
        ["24-25", "Cross-Staff", 15, "1-3 Wood; 4-10 Metal", "L", 1, 1],
        ["26-27", "Crowbar", 1, "Metal", "M", 1, 1],
        ["28-29", "Darksuit", 25, "1-8 Cloth; 9-10 Leather", "S", 1, 2],
        ["30-31", "Dowsing Rod", 1, "1-8 Wood; 9-10 Metal", "S", 1, 1],
        ["32-33", "Firestarter", 1, "Wood & Metal", "T", 1, 1],
        ["34-35", "Fish Trap", 0.5, "1-9 Wicker; 10 Metal", "M", 1, 1],
        ["36-37", "Fishhook", 1, "1 Bone, Sentient; 2-7 Bone, Animal; 8 Bone, Monster; 9-10 Metal", "D", 1, 1],
        ["38-39", "Fishing Line", 0.5, "1-6 Thread; 7-10 Twine", "T", 1, 1],
        ["40-41", "Fishing Net (25 sq ft)", 3, "1-6 Thread; 7-10 Twine", "L", 1, 1],
        ["42-43", "Fishing Pole", 1.2, "1-9 Wood; 10 Metal", "M", 1, 3],
        ["44-45", "Footpads", 4, "1-8 Cloth; 9-10 Leather", "T", 1, 1],
        ["46-47", "Grapnel Hook", 16, "Metal", "M", 1, 1],
        ["48-49", "Hammock", 2, "1-9 Cloth; 10 Leather", "S", 4, 1],
        ["50-51", "Hooked Pole", 5, "1-3 Metal; 4-10 Wood", "L", 1, 1],
        ["52-53", "Horseshoe", 0.2, "Metal", "T", 1, 2],
        ["54-55", "Insect Netting", 3, "1-6 Thread; 7-10 Twine", "M", 1, 1],
        ["56-57", "Ladder, 10 ft", 1, "1-9 Wood; 10 Metal", "L", 1, 1],
        ["58", "Lard (pint)", 1, "1 sc", "S", 1, 1],
        ["59", "Listening Cone", 2, "1-4 Cloth; 5-6 Leather; 7-10 Metal", "S", 3, 1],
        ["60-61", "Lock", 100, "Metal", "T", 1, 2],
        ["62-63", "Lock Chisel", 2, "Metal", "T", 1, 1],
        ["64-65", "Lockpicks, Set", 12, "Metal", "T", 1, 2],
        ["66-67", "Manacles", 15, "Metal", "S", 1, 2],
        ["68", "Marbles", 15, "1-3 Metal; 4-10 Wood", "D", 9, 3],
        ["69-70", "Mini-blade", 0.5, "Metal", "T", 1, 1],
        ["71-72", "Mirror Pole", 22, "1 Glass; 2-3 Silver; 7-10 Brass", "L", 1, 1],
        ["73-74", "Pegleg", 8, "1-9 Wood; 10 Metal", "S", 3, 4],
        ["75", "Pell", 0.5, "1-7 Wood; 8-10 Metal", "T", 2, 1],
        ["76-77", "Pole, 10 ft", 2, "1-9 Wood; 10 Metal", "L", 1, 1],
        ["78-79", "Quintain", 1, "Wood", "H", 1, 1],
        ["80-81", "Reed, Hollow", 1, "Wood", "T", 1, 1],
        ["82", "Sewing Needle", 0.5, "1-4 Wood; 5-6 Metal; 7 Bone, Sentient; 8-9 Bone, Animal; 10 Bone, Monster", "D", 1, 1],
        ["83-84", "Sextant", 500, "Metal", "S", 1, 4],
        ["85-86", "Stake, Anti-Vampire", 0.25, "1-9 Wood; 10 Metal", "T", 1, 1],
        ["87-88", "Tack, 3/4”", 0.01, "Metal", "D", 1, 1],
        ["89-90", "Tar Paper", 1, "Paper Product", "F", 1, 1],
        ["91-92", "Tent (1-man)", 5, "1-7 Cloth; 8-9 Leather; 10 Fur", "M", 4, 1],
        ["93-94", "Tent (2-man)", 12, "1-7 Cloth; 8-9 Leather; 10 Fur", "L", 4, 1],
        ["95-96", "Tinderbox", 3, "Wood", "T", 1, 1],
        ["97-98", "Whetstone", 0.02, "Stone/Earthwork", "T", 1, 1],
        ["99-100", "Whistle", 2, "1-8 Wood; 9-10 Metal", "T", 2, 3]
    ]
}

export default adventuringGear