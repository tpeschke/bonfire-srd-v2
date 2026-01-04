import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const academicTools: UniqueItemTable = {
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
        ["1-7", "Armillary", 300, "Metal", "L", 2, 3, 4],
        ["8-14", "Astrolabe", 150, "Metal", "S", 2, 3, 3],
        ["15-22", "Balance & Weights", 1, "Metal", "M", 2, 1, 1],
        [
            "23-30",
            "Book, Hollow",
            20,
            "Cover:\nMetal(1),\nCloth(2-7),\nLeather(8-9),\nWood(10);\nInterior:\nPaper Product",
            "S",
            5,
            2,
            1
        ],
        ["31-37", "Hourglass", 20, "Metal", "S", 2, 3, 2],
        ["38-45", "Inkwell", 10, "Metal", "T", 6, 1, 2],
        ["46-52", "Magnifying Glass", 100, "Metal", "T", 2, 2, 2],
        ["53-60", "Paper (per 50 sheets)", 2, "Paper Product", "S", 4, "", ""],
        ["61-68", "Personal Seal", 10, "Metal", "D", 8, 9, 3],
        [
            "69-76",
            "Quill",
            1,
            "Porcupine Spine(1-3),\nGoose Feather(4-10)",
            "D",
            2,
            "",
            ""
        ],
        ["77-84", "Scale, Merchant’s", 20, "Metal", "M", 2, 1, 1],
        ["85-92", "Sealing Wax", 1, "Wax", "D", 9, "", ""],
        [
            "93-100",
            "Writing Tablet",
            1,
            "Clay(1-6),\nWax(7-9),\nSlate(10)",
            "S",
            4,
            1,
            ""
        ]
    ]
}

export default academicTools