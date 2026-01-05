import { UniqueItemTable } from "@srd/common/interfaces/chapterInterfaces/UniqueItemTables"

const footgear: UniqueItemTable = {
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
            "Engraving/Stitching",
        ]
    ],
    rows: [
        ["1", "Boots, Ankle", 3, "Leather", "S", 3, 2],
        ["2-3", "Boots, Calf", 2, "Leather", "S", 3, 2],
        ["4", "Boots, Climbing", 12, "Leather & Wax", "S", 1, 1],
        ["5", "Boots, Knee", 4, "Leather", "S", 3, 2],
        ["6", "Boots, Riding, Calf", 2, "Leather", "S", 4, 1],
        ["7", "Boots, Riding, Knee", 4, "Leather", "S", 4, 1],
        ["8", "Boots, Riding, Thigh", 6, "Leather", "M", 4, 2],
        ["9", "Boots, Thigh", 6, "Leather", "M", 4, 2],
        ["10", "Chopines", 1, "1-5 Leather\n6-10 Cloth\nwith Wood", "S", 3, 4],
        ["11", "Clogs", 1, "Wood", "S", 2, 1],
        ["12", "Moccasins", 0.05, "Leather", "S", 2, 7],
        ["13", "Pattens", 0.5, "Leather", "S", 1, 1],
        ["14", "Sandals", 0.4, "1-3 Leather\n4-10 Cloth", "S", 1, 1],
        ["15", "Sandshoes", 3, "1-4 Leather\n6-10 Cloth", "M", 1, 1],
        ["16", "Shoes, Dress", 10, "1-7 Leather\n8-10 Cloth", "S", 9, 9],
        ["17", "Shoes, Simple", 2, "1-5 Leather\n6-10 Cloth", "S", 3, 2],
        ["18", "Slippers", 0.2, "1-5 Cloth\n6-10 Fur", "S", 9, 4],
        ["19", "Snowshoes", 3, "1-4 Leather\n6-10 Cloth", "M", 1, 1],
        ["20", "Socks", 2, "1-8 Fur\n9-10 Cloth", "S", 9, 4]
    ]
}

export default footgear