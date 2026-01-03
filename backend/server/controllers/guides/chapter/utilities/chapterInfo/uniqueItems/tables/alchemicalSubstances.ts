import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const alchemicalSubstances: UniqueItemTable = {
    tableName: "Alchemical Substances",
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
            "Colors",
        ]
    ],
    rows: [
        ["1-5", "Acid, metal-eating (1 oz)", 13.74, "13.74 sc", "D", 3],
        ["6-10", "Alchemist’s Fire (pint)", 124, "124 sc", "S", 2],
        ["11-12", "Ambergris (1 oz)", 141, "141 sc", "D", 2],
        ["13-17", "Aniseed (1 oz)", 0.21, "0.21 sc", "D", 1],
        ["18-22", "Antitoxin (1 dose)", 10, "10 sc", "D", 6],
        ["23-28", "Blinding Powder (1 handful)", 16, "16 sc", "D", 5],
        ["29-34", "Coal (1 lb)", 0.02, "0.02 sc", "S", 1],
        ["35-39", "Disappearing Ink (1 oz)", 1, "1 sc", "T", 4],
        ["40-45", "Faceblack (1 pint)", 0.6, "0.6 sc", "S", 1],
        ["46-50", "Healing Salve", 1, "7 sc", "T", 7],
        ["51-55", "Holy Water",
            "",
            "1 sc",
            "T",
            1
        ],
        ["56-60", "Oil", 4,
            "1-3 Hemp\n4-8 Linseed\n9-10 Whale",
            "T",
            4
        ],
        ["61-65", "Pearlash (1 lb)",
            "",
            "4 sc",
            "S",
            3
        ],
        ["66-68", "Poison", 1,
            "1 Blacknessel\n2 Blue Glory\n3 Bondweed\n4 Griffin Hair\n5 Lylullin\n6 Maidenscap\n7 Palm of St Germain\n8 Tears of Sicyon\n(see SRD 2.6)\n9 Unknown\n10 Monster Poison",
            "D",
            9
        ],
        ["69-74", "Potash (1 lb)", 0.03, "1 sc", "S", 3],
        ["75-79", "Shell, Pearly", 0.05, "0.03 sc", "T", 3],
        ["80-85", "Soap (1 oz)", 1.3, "0.05 sc", "T", 4],
        ["86-90", "Talcum Powder", 5, "1.3 sc", "T", 4],
        ["91-95", "Wax", 1, "Wax", "T", 9],
        ["96-100", "Weaponblack",
            "",
            "1 sc",
            "T",
            1
        ]
    ]
}

export default alchemicalSubstances