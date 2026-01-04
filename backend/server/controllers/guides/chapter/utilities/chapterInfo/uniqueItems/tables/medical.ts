import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const medical: UniqueItemTable = {
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
        ["1-4", "Bandages", 0.01, "Cloth", "S", 2, 1],
        ["5", "Basin, Bleeding", 1, "Metal", "S", 2, 2],
        ["6-7", "Crutches", 0.3, "1 Metal;\n2-10 Wood", "S", 2, 3],
        ["8", "Eyeglasses", 100, "1-6 Metal;\n7-10 Wood", "T", 1, 3],
        ["9", "Probe", 0.4, "Metal", "T", 1, ""],
        ["10", "Scalpel", 15, "Metal", "T", 1, ""],
        ["11", "Lancet", 1, "Metal", "T", 1, ""],
        ["12", "Litter", 3, "Wood", "T", 1, ""],
        ["13", "Sutures", 1, "1-6 Thread;\n7-10 Animal > Land Guts", "T", 1, ""],
        ["14-15", "Pegleg", 8, "Wood", "S", 2, 3],
        ["16", "Saw, Amputation", 15, "Metal", "S", 1, ""],
        ["17", "Stretcher", 3, "Wood & Cloth", "T", 3, 1],
        ["18", "Tooth Wrench", 2, "Metal", "T", 1, ""],
        ["19", "Arrow Extractor", 4, "Metal", "S", 1, ""],
        ["20", "Arm Sling", 0.01, "Cloth", "T", 3, 1]
    ]
}

export default medical