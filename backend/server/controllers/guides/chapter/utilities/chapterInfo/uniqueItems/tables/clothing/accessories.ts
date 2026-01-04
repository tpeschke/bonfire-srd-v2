import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const accessories: UniqueItemTable = {
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
        ["1", "Brush, Grooming", 1,
            "1-8 Wood\n9-10 Metal",
            "T",
            3,
            3,
            1
        ],
        ["2", "Button", 0.3,
            "1-2 Ivory\n3-10 Wood",
            "F",
            3,
            1,
            ""
        ],
        ["3", "Comb", 1,
            "1-8 Wood\n9-10 Metal",
            "T",
            1,
            2,
            1
        ],
        ["4", "Dog Collar", 0.8,
            "1-7 Cloth\n8-10 Leather",
            "T",
            2,
            2,
            1
        ],
        ["5", "Handkerchief", 0.7,
            "Cloth",
            "T",
            3,
            2,
            ""
        ],
        ["6", "Horse Shoe", 5,
            "Metal",
            "T",
            "",
            1,
            ""
        ],
        ["7", "Napkin", 0.7,
            "Cloth",
            "T",
            2,
            1,
            ""
        ],
        ["8", "Saddle", 75,
            "Leather",
            "L",
            1,
            3,
            1
        ],
        ["9", "Scarf", 5.5,
            "1-6 Wool\n7-9 Gauze\n10 Silk (see Cloth)",
            "S",
            8,
            3,
            ""
        ],
        ["10", "Staff, Walking", 2,
            "Wood",
            "S",
            1,
            1,
            1
        ]
    ]
}

export default accessories